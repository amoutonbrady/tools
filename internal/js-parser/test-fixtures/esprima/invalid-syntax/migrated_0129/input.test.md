# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0129`

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
	loc: SourceLocation esprima/invalid-syntax/migrated_0129/input.js 1:0-2:0
	path: UIDPath<esprima/invalid-syntax/migrated_0129/input.js>
	body: Array [
		JSDoWhileStatement {
			loc: SourceLocation esprima/invalid-syntax/migrated_0129/input.js 1:0-2:0
			test: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation esprima/invalid-syntax/migrated_0129/input.js 2:0-2:0
			}
			body: JSExpressionStatement {
				loc: SourceLocation esprima/invalid-syntax/migrated_0129/input.js 2:0-2:0
				expression: JSReferenceIdentifier {
					name: "INVALID_PLACEHOLDER"
					loc: SourceLocation esprima/invalid-syntax/migrated_0129/input.js 2:0-2:0
				}
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
				end: Position 1:2
				path: UIDPath<esprima/invalid-syntax/migrated_0129/input.js>
				start: Position 2:0
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "Unknown start to an "}
					"statement expression"
				]
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0129/input.js:2 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown start to an statement expression

    do

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
