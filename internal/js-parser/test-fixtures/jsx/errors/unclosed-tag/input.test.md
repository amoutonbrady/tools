# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > errors > unclosed-tag`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	loc: SourceLocation jsx/errors/unclosed-tag/input.jsx 1:0-2:0
	path: UIDPath<jsx/errors/unclosed-tag/input.jsx>
	syntax: Array ["jsx"]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation jsx/errors/unclosed-tag/input.jsx 1:0-1:5
			expression: JSXElement {
				name: JSXIdentifier {
					name: "foo"
					loc: SourceLocation jsx/errors/unclosed-tag/input.jsx 1:1-1:4
				}
				attributes: Array []
				children: Array []
				selfClosing: false
				typeArguments: undefined
				loc: SourceLocation jsx/errors/unclosed-tag/input.jsx 1:0-1:5
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:5
				path: UIDPath<jsx/errors/unclosed-tag/input.jsx>
				start: Position 1:5
			}
			description: Object {
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "Unclosed JSX element"}
				advice: Array [
					log {
						category: "info"
						text: Array [
							RAW_MARKUP {value: "Originated from opening tag of <emphasis>"}
							"foo"
							RAW_MARKUP {value: "</emphasis>"}
						]
					}
					frame {location: SourceLocation jsx/errors/unclosed-tag/input.jsx 1:1-1:4}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 jsx/errors/unclosed-tag/input.jsx:1:5 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unclosed JSX element

  ℹ Originated from opening tag of foo

    <foo>yes
     ^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
