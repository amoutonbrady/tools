# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > regression > octal-float-fail`

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
	loc: SourceLocation core/regression/octal-float-fail/input.js 1:0-2:0
	path: UIDPath<core/regression/octal-float-fail/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/regression/octal-float-fail/input.js 1:0-1:2
			expression: JSNumericLiteral {
				value: 7
				format: "octal"
				loc: SourceLocation core/regression/octal-float-fail/input.js 1:0-1:2
			}
		}
		JSExpressionStatement {
			loc: SourceLocation core/regression/octal-float-fail/input.js 1:2-1:4
			expression: JSNumericLiteral {
				value: 0.5
				format: undefined
				loc: SourceLocation core/regression/octal-float-fail/input.js 1:2-1:4
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
				message: RAW_MARKUP {value: "Expected a semicolon or a line terminator"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:2
				path: UIDPath<core/regression/octal-float-fail/input.js>
				start: Position 1:2
			}
		}
	]
}
```

### `diagnostics`

```

 core/regression/octal-float-fail/input.js:1:2 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected a semicolon or a line terminator

    07.5
      ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
