# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > statement-return > migrated_0003`

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
	loc: SourceLocation esprima/statement-return/migrated_0003/input.js 1:0-2:0
	path: UIDPath<esprima/statement-return/migrated_0003/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/statement-return/migrated_0003/input.js 1:0-1:28
			expression: JSFunctionExpression {
				id: undefined
				loc: SourceLocation esprima/statement-return/migrated_0003/input.js 1:1-1:27
				head: JSFunctionHead {
					async: false
					generator: false
					hasHoistedVars: false
					params: Array []
					rest: undefined
					returnType: undefined
					thisType: undefined
					typeParameters: undefined
					loc: SourceLocation esprima/statement-return/migrated_0003/input.js 1:9-1:11
				}
				body: JSBlockStatement {
					directives: Array []
					loc: SourceLocation esprima/statement-return/migrated_0003/input.js 1:11-1:27
					body: Array [
						JSReturnStatement {
							loc: SourceLocation esprima/statement-return/migrated_0003/input.js 1:13-1:25
							argument: JSBinaryExpression {
								operator: "*"
								loc: SourceLocation esprima/statement-return/migrated_0003/input.js 1:20-1:25
								left: JSReferenceIdentifier {
									name: "x"
									loc: SourceLocation esprima/statement-return/migrated_0003/input.js 1:20-1:21 (x)
								}
								right: JSReferenceIdentifier {
									name: "y"
									loc: SourceLocation esprima/statement-return/migrated_0003/input.js 1:24-1:25 (y)
								}
							}
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
✔ No known problems!

```
