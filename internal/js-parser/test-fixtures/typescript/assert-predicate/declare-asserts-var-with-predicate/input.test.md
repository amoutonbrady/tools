# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > assert-predicate > declare-asserts-var-with-predicate`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:0-2:0
	path: UIDPath<typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts>
	syntax: Array ["ts"]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:31
				path: UIDPath<typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts>
				start: Position 1:17
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "Unexpected token, expected "}
					"("
				]
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "function"
				loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:8-1:16 (function)
			}
			declare: true
			loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:0-1:73
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:17-1:31
				params: Array [
					JSBindingIdentifier {
						name: "assertIsString"
						loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:17-1:31 (assertIsString)
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:17-1:31
						}
					}
				]
			}
			body: JSBlockStatement {
				directives: Array []
				loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:31-1:73
				body: Array [
					JSExpressionStatement {
						loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:31-1:47
						expression: JSReferenceIdentifier {
							name: "value"
							loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:32-1:37 (value)
						}
					}
					JSExpressionStatement {
						loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:47-1:48
						expression: JSReferenceIdentifier {
							name: "INVALID_PLACEHOLDER"
							loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:47-1:48
						}
					}
					JSExpressionStatement {
						loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:49-1:56
						expression: JSReferenceIdentifier {
							name: "asserts"
							loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:49-1:56 (asserts)
						}
					}
					JSExpressionStatement {
						loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:57-1:62
						expression: JSReferenceIdentifier {
							name: "value"
							loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:57-1:62 (value)
						}
					}
					JSExpressionStatement {
						loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:63-1:65
						expression: JSReferenceIdentifier {
							name: "is"
							loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:63-1:65 (is)
						}
					}
					JSExpressionStatement {
						loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:66-1:73
						expression: JSReferenceIdentifier {
							name: "string"
							loc: SourceLocation typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts 1:66-1:72 (string)
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 typescript/assert-predicate/declare-asserts-var-with-predicate/input.ts:1:17 parse(js) ━━━━━━━━━━━━

  ✖ Unexpected token, expected (

    declare function assertIsString(value: unknown): asserts value is string;
                     ^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
