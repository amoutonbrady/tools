# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > expression-primary-object > migrated_0037`

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
	loc: SourceLocation esprima/expression-primary-object/migrated_0037/input.js 1:0-1:11
	path: UIDPath<esprima/expression-primary-object/migrated_0037/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/expression-primary-object/migrated_0037/input.js 1:0-1:11
			expression: JSObjectExpression {
				loc: SourceLocation esprima/expression-primary-object/migrated_0037/input.js 1:1-1:10
				properties: Array [
					JSObjectProperty {
						key: JSStaticPropertyKey {
							value: JSStringLiteral {
								value: "["
								loc: SourceLocation esprima/expression-primary-object/migrated_0037/input.js 1:2-1:5
							}
							loc: SourceLocation esprima/expression-primary-object/migrated_0037/input.js 1:2-1:5
						}
						value: JSNumericLiteral {
							value: 42
							format: undefined
							loc: SourceLocation esprima/expression-primary-object/migrated_0037/input.js 1:7-1:9
						}
						loc: SourceLocation esprima/expression-primary-object/migrated_0037/input.js 1:2-1:9
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
