# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 537`

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
	loc: SourceLocation core/uncategorised/537/input.js 1:0-1:19
	path: UIDPath<core/uncategorised/537/input.js>
	body: Array [
		JSForStatement {
			test: undefined
			update: undefined
			body: JSEmptyStatement {loc: SourceLocation core/uncategorised/537/input.js 1:18-1:19}
			loc: SourceLocation core/uncategorised/537/input.js 1:0-1:19
			init: JSVariableDeclaration {
				kind: "const"
				loc: SourceLocation core/uncategorised/537/input.js 1:4-1:15
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "x"
							loc: SourceLocation core/uncategorised/537/input.js 1:10-1:11 (x)
						}
						loc: SourceLocation core/uncategorised/537/input.js 1:10-1:15
						init: JSNumericLiteral {
							value: 0
							format: undefined
							loc: SourceLocation core/uncategorised/537/input.js 1:14-1:15
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
✔ No known problems!

```
