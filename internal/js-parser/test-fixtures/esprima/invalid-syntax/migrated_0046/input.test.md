# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0046`

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
	loc: SourceLocation esprima/invalid-syntax/migrated_0046/input.js 1:0-2:0
	path: UIDPath<esprima/invalid-syntax/migrated_0046/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/invalid-syntax/migrated_0046/input.js 1:0-1:10
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation esprima/invalid-syntax/migrated_0046/input.js 1:0-1:10
				left: JSAssignmentIdentifier {
					name: "INVALID_PLACEHOLDER"
					loc: SourceLocation esprima/invalid-syntax/migrated_0046/input.js 1:7-1:6
				}
				right: JSNumericLiteral {
					value: 4
					format: undefined
					loc: SourceLocation esprima/invalid-syntax/migrated_0046/input.js 1:9-1:10
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
				end: Position 1:6
				path: UIDPath<esprima/invalid-syntax/migrated_0046/input.js>
				start: Position 1:0
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "Invalid left-hand side in "}
					"assignment expression"
				]
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0046/input.js:1 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Invalid left-hand side in assignment expression

    func() = 4
    ^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
