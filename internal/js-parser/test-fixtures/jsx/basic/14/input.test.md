# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > basic > 14`

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
	loc: SourceLocation jsx/basic/14/input.jsx 1:0-1:11
	path: UIDPath<jsx/basic/14/input.jsx>
	syntax: Array ["jsx"]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation jsx/basic/14/input.jsx 1:0-1:11
			expression: JSXElement {
				name: JSXMemberExpression {
					loc: SourceLocation jsx/basic/14/input.jsx 1:1-1:4
					object: JSXIdentifier {
						name: "a"
						loc: SourceLocation jsx/basic/14/input.jsx 1:1-1:2
					}
					property: JSXIdentifier {
						name: "b"
						loc: SourceLocation jsx/basic/14/input.jsx 1:3-1:4
					}
				}
				attributes: Array []
				children: Array []
				selfClosing: false
				typeArguments: undefined
				loc: SourceLocation jsx/basic/14/input.jsx 1:0-1:11
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
