# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > trailing-function-commas > 1`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2017/trailing-function-commas/1/input.js 1:0-1:16
	path: UIDPath<es2017/trailing-function-commas/1/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2017/trailing-function-commas/1/input.js 1:0-1:16
			expression: JSCallExpression {
				loc: SourceLocation es2017/trailing-function-commas/1/input.js 1:0-1:15
				callee: JSReferenceIdentifier {
					name: "log"
					loc: SourceLocation es2017/trailing-function-commas/1/input.js 1:0-1:3 (log)
				}
				arguments: Array [
					JSReferenceIdentifier {
						name: "n"
						loc: SourceLocation es2017/trailing-function-commas/1/input.js 1:4-1:5 (n)
					}
					JSStringLiteral {
						value: "="
						loc: SourceLocation es2017/trailing-function-commas/1/input.js 1:7-1:10
					}
					JSNumericLiteral {
						value: 2
						format: undefined
						loc: SourceLocation es2017/trailing-function-commas/1/input.js 1:12-1:13
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
