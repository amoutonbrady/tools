# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > expression-primary-literal-regular-expression > u-flag-valid-range`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	hasHoistedVars: true
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:0-2:0
	path: UIDPath<esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js>
	diagnostics: Array [
		Object {
			origins: Array [
				Object {category: "parse"}
				Object {category: "parse"}
			]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "regex"
				message: RAW_MARKUP {value: "Range values reversed. Start char code is greater than end char code"}
			}
			location: Object {
				integrity: undefined
				language: "regex"
				sourceText: undefined
				end: Position 1:18
				path: UIDPath<esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js>
				start: Position 1:15
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:0-1:61
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:0-1:61
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "x"
							loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:4-1:5 (x)
						}
						loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:4-1:60
						init: JSRegExpLiteral {
							global: false
							insensitive: false
							multiline: false
							noDotNewline: false
							sticky: false
							unicode: true
							loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:8-1:60
							expression: JSRegExpSubExpression {
								loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:9-1:58
								body: Array [
									JSRegExpCharSet {
										invert: false
										loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:9-1:19
										body: Array [
											JSRegExpCharacter {
												value: "u"
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:10-1:12
											}
											JSRegExpCharacter {
												value: "{"
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:12-1:13
											}
											JSRegExpCharacter {
												value: "6"
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:13-1:14
											}
											JSRegExpCharacter {
												value: "1"
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:14-1:15
											}
											JSRegExpCharSetRange {
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:15-1:18
												end: JSRegExpCharacter {
													value: "}"
													loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:15-1:16
												}
												start: JSRegExpCharacter {
													value: "b"
													loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:17-1:18
												}
											}
										]
									}
									JSRegExpCharSet {
										invert: false
										loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:19-1:29
										body: Array [
											JSRegExpCharSetRange {
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:20-1:28
												end: JSRegExpCharacter {
													value: "b"
													loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:27-1:28
												}
												start: JSRegExpCharacter {
													value: "a"
													loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:20-1:26
												}
											}
										]
									}
									JSRegExpCharSet {
										invert: false
										loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:29-1:39
										body: Array [
											JSRegExpCharSetRange {
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:30-1:34
												end: JSRegExpCharacter {
													value: "u"
													loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:32-1:34
												}
												start: JSRegExpCharacter {
													value: "a"
													loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:30-1:31
												}
											}
											JSRegExpCharacter {
												value: "{"
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:34-1:35
											}
											JSRegExpCharacter {
												value: "6"
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:35-1:36
											}
											JSRegExpCharacter {
												value: "2"
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:36-1:37
											}
											JSRegExpCharacter {
												value: "}"
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:37-1:38
											}
										]
									}
									JSRegExpCharSet {
										invert: false
										loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:39-1:49
										body: Array [
											JSRegExpCharSetRange {
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:40-1:48
												end: JSRegExpCharacter {
													value: "b"
													loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:42-1:48
												}
												start: JSRegExpCharacter {
													value: "a"
													loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:40-1:41
												}
											}
										]
									}
									JSRegExpCharacter {
										value: "u"
										loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:49-1:51
									}
									JSRegExpCharacter {
										value: "{"
										loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:51-1:52
									}
									JSRegExpCharacter {
										value: "1"
										loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:52-1:53
									}
									JSRegExpCharacter {
										value: "f"
										loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:53-1:54
									}
									JSRegExpCharacter {
										value: "f"
										loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:54-1:55
									}
									JSRegExpCharacter {
										value: "f"
										loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:55-1:56
									}
									JSRegExpCharacter {
										value: "f"
										loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:56-1:57
									}
									JSRegExpCharacter {
										value: "}"
										loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js 1:57-1:58
									}
								]
							}
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

 esprima/expression-primary-literal-regular-expression/u-flag-valid-range/input.js:1:15 parse(regex)
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Range values reversed. Start char code is greater than end char code

    var x = /[\u{61}-b][\u0061-b][a-\u{62}][a-\u0062]\u{1ffff}/u;
                   ^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
