# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 417`

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
	loc: SourceLocation core/uncategorised/417/input.js 1:0-1:18
	path: UIDPath<core/uncategorised/417/input.js>
	body: Array [
		JSForInStatement {
			body: JSEmptyStatement {loc: SourceLocation core/uncategorised/417/input.js 1:17-1:18}
			loc: SourceLocation core/uncategorised/417/input.js 1:0-1:18
			left: JSAssignmentIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation core/uncategorised/417/input.js 1:11-1:10
			}
			right: JSObjectExpression {
				properties: Array []
				loc: SourceLocation core/uncategorised/417/input.js 1:14-1:16
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
				end: Position 1:10
				path: UIDPath<core/uncategorised/417/input.js>
				start: Position 1:5
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "Invalid left-hand side in "}
					"for-in statement"
				]
			}
		}
	]
}
```

### `diagnostics`

```

 core/uncategorised/417/input.js:1:5 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Invalid left-hand side in for-in statement

    for (i + 1 in {});
         ^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
