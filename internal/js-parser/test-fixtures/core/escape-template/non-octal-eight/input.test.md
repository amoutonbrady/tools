# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > escape-template > non-octal-eight`

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
	loc: SourceLocation core/escape-template/non-octal-eight/input.js 1:0-2:0
	path: UIDPath<core/escape-template/non-octal-eight/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/escape-template/non-octal-eight/input.js 1:0-1:5
			expression: JSTemplateLiteral {
				expressions: Array []
				loc: SourceLocation core/escape-template/non-octal-eight/input.js 1:0-1:4
				quasis: Array [
					JSTemplateElement {
						cooked: "8"
						raw: "\\8"
						tail: true
						loc: SourceLocation core/escape-template/non-octal-eight/input.js 1:1-1:3
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
