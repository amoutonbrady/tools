# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 220`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	hasHoistedVars: true
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/220/input.js 1:0-1:27
	path: UIDPath<core/uncategorised/220/input.js>
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation core/uncategorised/220/input.js 1:0-1:27
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: SourceLocation core/uncategorised/220/input.js 1:0-1:27
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "x"
							loc: SourceLocation core/uncategorised/220/input.js 1:4-1:5 (x)
						}
						loc: SourceLocation core/uncategorised/220/input.js 1:4-1:10
						init: JSNumericLiteral {
							value: 14
							format: undefined
							loc: SourceLocation core/uncategorised/220/input.js 1:8-1:10
						}
					}
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "y"
							loc: SourceLocation core/uncategorised/220/input.js 1:12-1:13 (y)
						}
						loc: SourceLocation core/uncategorised/220/input.js 1:12-1:17
						init: JSNumericLiteral {
							value: 3
							format: undefined
							loc: SourceLocation core/uncategorised/220/input.js 1:16-1:17
						}
					}
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "z"
							loc: SourceLocation core/uncategorised/220/input.js 1:19-1:20 (z)
						}
						loc: SourceLocation core/uncategorised/220/input.js 1:19-1:27
						init: JSNumericLiteral {
							value: 1_977
							format: undefined
							loc: SourceLocation core/uncategorised/220/input.js 1:23-1:27
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
