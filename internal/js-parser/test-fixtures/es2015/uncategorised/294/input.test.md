# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 294`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/uncategorised/294/input.js 1:0-1:9
	path: UIDPath<es2015/uncategorised/294/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/294/input.js 1:0-1:9
			expression: JSSequenceExpression {
				loc: SourceLocation es2015/uncategorised/294/input.js 1:1-1:8
				expressions: Array [
					JSReferenceIdentifier {
						name: "b"
						loc: SourceLocation es2015/uncategorised/294/input.js 1:1-1:2 (b)
					}
					JSReferenceIdentifier {
						name: "INVALID_PLACEHOLDER"
						loc: SourceLocation es2015/uncategorised/294/input.js 1:9-1:9
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
				message: RAW_MARKUP {value: "Unexpected token"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:4
				path: UIDPath<es2015/uncategorised/294/input.js>
				start: Position 1:4
			}
		}
	]
}
```

### `diagnostics`

```

 es2015/uncategorised/294/input.js:1:4 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected token

    (b, ...a)
        ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
