# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 19`

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
	loc: SourceLocation es2015/uncategorised/19/input.js 1:0-1:7
	path: UIDPath<es2015/uncategorised/19/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/19/input.js 1:0-1:7
			expression: JSTaggedTemplateExpression {
				typeArguments: undefined
				loc: SourceLocation es2015/uncategorised/19/input.js 1:0-1:7
				tag: JSReferenceIdentifier {
					name: "raw"
					loc: SourceLocation es2015/uncategorised/19/input.js 1:0-1:3 (raw)
				}
				quasi: JSTemplateLiteral {
					expressions: Array []
					loc: SourceLocation es2015/uncategorised/19/input.js 1:3-1:7
					quasis: Array [
						JSTemplateElement {
							cooked: "42"
							raw: "42"
							tail: true
							loc: SourceLocation es2015/uncategorised/19/input.js 1:4-1:6
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
