# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > regression > 2`

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
	loc: SourceLocation jsx/regression/2/input.jsx 1:0-1:30
	path: UIDPath<jsx/regression/2/input.jsx>
	syntax: Array ["jsx"]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation jsx/regression/2/input.jsx 1:0-1:30
			expression: JSXElement {
				name: JSXIdentifier {
					name: "div"
					loc: SourceLocation jsx/regression/2/input.jsx 1:1-1:4
				}
				attributes: Array []
				selfClosing: false
				typeArguments: undefined
				loc: SourceLocation jsx/regression/2/input.jsx 1:0-1:30
				children: Array [
					JSXExpressionContainer {
						loc: SourceLocation jsx/regression/2/input.jsx 1:5-1:24
						expression: JSXElement {
							name: JSXIdentifier {
								name: "div"
								loc: SourceLocation jsx/regression/2/input.jsx 1:7-1:10
							}
							children: Array []
							selfClosing: true
							typeArguments: undefined
							loc: SourceLocation jsx/regression/2/input.jsx 1:6-1:23
							attributes: Array [
								JSXSpreadAttribute {
									loc: SourceLocation jsx/regression/2/input.jsx 1:11-1:20
									argument: JSReferenceIdentifier {
										name: "test"
										loc: SourceLocation jsx/regression/2/input.jsx 1:15-1:19 (test)
									}
								}
							]
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
