# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 221`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/uncategorised/221/input.js 1:0-1:8
	path: UIDPath<es2015/uncategorised/221/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:2
				path: UIDPath<es2015/uncategorised/221/input.js>
				start: Position 1:1
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "Invalid left-hand side in "}
					"assignment expression"
				]
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/221/input.js 1:0-1:8
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation es2015/uncategorised/221/input.js 1:0-1:8
				right: JSNumericLiteral {
					value: 42
					format: undefined
					loc: SourceLocation es2015/uncategorised/221/input.js 1:6-1:8
				}
				left: JSAssignmentArrayPattern {
					rest: undefined
					loc: SourceLocation es2015/uncategorised/221/input.js 1:0-1:3
					elements: Array [
						JSAssignmentIdentifier {
							name: "INVALID_PLACEHOLDER"
							loc: SourceLocation es2015/uncategorised/221/input.js 1:4-1:3
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```

 es2015/uncategorised/221/input.js:1:1 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Invalid left-hand side in assignment expression

    [2] = 42
     ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
