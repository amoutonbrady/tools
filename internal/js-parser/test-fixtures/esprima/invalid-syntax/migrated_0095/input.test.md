# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0095`

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
	loc: SourceLocation esprima/invalid-syntax/migrated_0095/input.js 1:0-2:0
	path: UIDPath<esprima/invalid-syntax/migrated_0095/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/invalid-syntax/migrated_0095/input.js 1:0-1:8
			expression: JSBinaryExpression {
				operator: "<="
				loc: SourceLocation esprima/invalid-syntax/migrated_0095/input.js 1:0-1:8
				left: JSReferenceIdentifier {
					name: "INVALID_PLACEHOLDER"
					loc: SourceLocation esprima/invalid-syntax/migrated_0095/input.js 1:1-1:1
				}
				right: JSNumericLiteral {
					value: 42
					format: undefined
					loc: SourceLocation esprima/invalid-syntax/migrated_0095/input.js 1:6-1:8
				}
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
				message: RAW_MARKUP {value: "Parenthesized expression didnt contain anything"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:1
				path: UIDPath<esprima/invalid-syntax/migrated_0095/input.js>
				start: Position 1:1
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0095/input.js:1:1 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Parenthesized expression didnt contain anything

    () <= 42
     ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
