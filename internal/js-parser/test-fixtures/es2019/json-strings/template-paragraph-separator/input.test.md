# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2019 > json-strings > template-paragraph-separator`

### `ast`

```javascript
JSRoot {
	corrupt: false
	diagnostics: Array []
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2019/json-strings/template-paragraph-separator/input.js 1:0-4:0
	path: UIDPath<es2019/json-strings/template-paragraph-separator/input.js>
	comments: Array [
		CommentLine {
			id: "0"
			value: "      ^ That's a U+2029 PARAGRAPH SEPARATOR UTF-16 char (between 'before' and 'after')"
			loc: SourceLocation es2019/json-strings/template-paragraph-separator/input.js 3:0-3:88
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2019/json-strings/template-paragraph-separator/input.js 1:0-2:8
			trailingComments: Array ["0"]
			expression: JSTemplateLiteral {
				expressions: Array []
				loc: SourceLocation es2019/json-strings/template-paragraph-separator/input.js 1:1-2:6
				quasis: Array [
					JSTemplateElement {
						cooked: "before\u2029after"
						raw: "before\u2029after"
						tail: true
						loc: SourceLocation es2019/json-strings/template-paragraph-separator/input.js 1:2-2:5
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
