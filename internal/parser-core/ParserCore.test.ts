import {test} from "rome";
import {
	BaseTokens,
	ParserCore,
	ParserOptions,
	SimpleToken,
	TokenValues,
	ValueToken,
	createParser,
	isDigit,
} from "@internal/parser-core/index";
import {Number0, ob1Add, ob1Inc} from "@internal/ob1";
import {dedent} from "@internal/string-utils";
import {markup} from "@internal/markup";
import {isNewline} from "@internal/css-parser/utils";
import {createRelativeFilePath} from "@internal/path";

type TestTokens = BaseTokens & {
	Comment: ValueToken<"Comment", string>;
	String: ValueToken<"String", string>;
	Number: ValueToken<"Number", number>;
	NewLine: SimpleToken<"NewLine">;
};

type TestParserTypes = {
	tokens: TestTokens;
	state: {};
	options: Omit<ParserOptions, "ignoreWhitespaceTokens">;
	meta: void;
};

test(
	"test parsing",
	(t) => {
		// Simple testing parser
		const testParser = createParser<TestParserTypes>({
			diagnosticLanguage: "unknown",
			ignoreWhitespaceTokens: true,

			tokenize(
				parser: ParserCore<TestParserTypes>,
				index: Number0,
			): TokenValues<TestParserTypes["tokens"]> | undefined {
				const char = parser.getInputCharOnly(index);

				if (char === "/" && parser.getInputCharOnly(index, 1) === "/") {
					index = ob1Add(index, 2);
					let value = "";

					while (
						!(isNewline(parser.getInputCharOnly(index)) || parser.isEOF(index))
					) {
						value += parser.getInputCharOnly(index);
						index = ob1Add(index, 1);
					}

					return parser.finishValueToken("Comment", value, index);
				}

				if (char === '"') {
					index = ob1Add(index, 1);
					let value = "";

					while (parser.getInputCharOnly(index) !== '"') {
						if (parser.isEOF(index)) {
							parser.unexpectedDiagnostic({
								description: {message: markup`Unterminated string`},
							});
							break;
						}

						value += parser.getInputCharOnly(index);
						index = ob1Add(index, 1);
					}

					return parser.finishValueToken("String", value, ob1Inc(index));
				}

				if (isDigit(char)) {
					let value = "";

					while (
						isDigit(parser.getInputCharOnly(index)) &&
						!isNewline(parser.getInputCharOnly(index)) &&
						!parser.isEOF(index)
					) {
						value += parser.getInputCharOnly(index);
						index = ob1Add(index, 1);
					}

					return parser.finishValueToken("Number", parseInt(value), index);
				}

				return parser.finishValueToken("Invalid", char);
			},
		});

		// Testing helper
		function runParserTests(parser: ParserCore<TestParserTypes>): object {
			const parsed: object[] = [];

			while (!parser.matchToken("EOF")) {
				const loc = parser.finishLocFromToken(parser.getToken());

				parsed.push({
					loc,
					snapshot: {
						nextTokenIndex: parser.save().nextTokenIndex,
						currentToken: parser.save().currentToken,
						prevToken: parser.save().prevToken,
					},
				});

				switch (parser.getToken().type) {
					case "Comment": {
						parser.registerComment(
							parser.comments.createComment({
								type: "CommentLine",
								loc,
								value: (parser.getToken() as TestTokens["Comment"]).value,
							}),
						);
						break;
					}
					case "Invalid": {
						parser.unexpectedDiagnostic({
							description: {message: markup`Invalid token`},
						});
						break;
					}
				}
				parser.nextToken();
			}

			return {
				parsed,
				corrupt: parser.state.corrupt,
				diagnostics: parser.getDiagnostics(),
				path: parser.path,
				comments: parser.state.comments,
			};
		}

		const parser = testParser.create({
			input: dedent`
				"im a string"

				4

				// Comment
			`,
			path: createRelativeFilePath("0.test"),
		});

		const parser1 = testParser.create({
			path: createRelativeFilePath("1.test"),
			input: "a", // Invalid
		});

		const parser2 = testParser.create({
			path: createRelativeFilePath("2.test"),
			input: `"i'm an unterminated string`,
		});

		t.snapshot(runParserTests(parser));
		t.snapshot(runParserTests(parser1));
		t.snapshot(runParserTests(parser2));
	},
);
