# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 164`

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
	loc: SourceLocation core/uncategorised/164/input.js 1:0-1:14
	path: UIDPath<core/uncategorised/164/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/164/input.js 1:0-1:14
			expression: JSBinaryExpression {
				operator: "instanceof"
				loc: SourceLocation core/uncategorised/164/input.js 1:0-1:14
				left: JSReferenceIdentifier {
					name: "x"
					loc: SourceLocation core/uncategorised/164/input.js 1:0-1:1 (x)
				}
				right: JSReferenceIdentifier {
					name: "y"
					loc: SourceLocation core/uncategorised/164/input.js 1:13-1:14 (y)
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
