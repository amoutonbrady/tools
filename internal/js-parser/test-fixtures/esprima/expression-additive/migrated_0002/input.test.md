# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > expression-additive > migrated_0002`

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
	loc: SourceLocation esprima/expression-additive/migrated_0002/input.js 1:0-2:0
	path: UIDPath<esprima/expression-additive/migrated_0002/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/expression-additive/migrated_0002/input.js 1:0-1:17
			expression: JSBinaryExpression {
				operator: "+"
				loc: SourceLocation esprima/expression-additive/migrated_0002/input.js 1:0-1:17
				left: JSStringLiteral {
					value: "use strict"
					loc: SourceLocation esprima/expression-additive/migrated_0002/input.js 1:0-1:12
				}
				right: JSNumericLiteral {
					value: 42
					format: undefined
					loc: SourceLocation esprima/expression-additive/migrated_0002/input.js 1:15-1:17
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
