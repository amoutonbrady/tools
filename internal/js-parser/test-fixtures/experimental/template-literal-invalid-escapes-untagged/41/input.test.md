# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > template-literal-invalid-escapes-untagged > 41`

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
	syntax: Array []
	loc: SourceLocation experimental/template-literal-invalid-escapes-untagged/41/input.js 1:0-1:7
	path: UIDPath<experimental/template-literal-invalid-escapes-untagged/41/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation experimental/template-literal-invalid-escapes-untagged/41/input.js 1:0-1:7
			expression: JSTemplateLiteral {
				expressions: Array []
				loc: SourceLocation experimental/template-literal-invalid-escapes-untagged/41/input.js 1:0-1:7
				quasis: Array [
					JSTemplateElement {
						cooked: "\\u{g}"
						raw: "\\u{g}"
						tail: true
						loc: SourceLocation experimental/template-literal-invalid-escapes-untagged/41/input.js 1:1-1:6
					}
				]
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "Invalid escape sequence in template"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:2
				path: UIDPath<experimental/template-literal-invalid-escapes-untagged/41/input.js>
				start: Position 1:2
			}
		}
	]
}
```

### `diagnostics`

```

 experimental/template-literal-invalid-escapes-untagged/41/input.js:1:2 parse(js) ━━━━━━━━━━━━━━━━━━

  ✖ Invalid escape sequence in template

    `\u{g}`
      ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
