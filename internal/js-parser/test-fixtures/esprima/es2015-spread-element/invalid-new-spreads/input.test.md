# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-spread-element > invalid-new-spreads`

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
	loc: SourceLocation esprima/es2015-spread-element/invalid-new-spreads/input.js 1:0-2:0
	path: UIDPath<esprima/es2015-spread-element/invalid-new-spreads/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:9
				path: UIDPath<esprima/es2015-spread-element/invalid-new-spreads/input.js>
				start: Position 1:10
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "Unknown start to an "}
					"spread argument"
				]
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/es2015-spread-element/invalid-new-spreads/input.js 1:0-1:17
			expression: JSNewExpression {
				optional: undefined
				typeArguments: undefined
				loc: SourceLocation esprima/es2015-spread-element/invalid-new-spreads/input.js 1:0-1:16
				callee: JSReferenceIdentifier {
					name: "f"
					loc: SourceLocation esprima/es2015-spread-element/invalid-new-spreads/input.js 1:4-1:5 (f)
				}
				arguments: Array [
					JSSpreadElement {
						loc: SourceLocation esprima/es2015-spread-element/invalid-new-spreads/input.js 1:6-1:13
						argument: JSReferenceIdentifier {
							name: "INVALID_PLACEHOLDER"
							loc: SourceLocation esprima/es2015-spread-element/invalid-new-spreads/input.js 1:10-1:13
						}
					}
					JSReferenceIdentifier {
						name: "g"
						loc: SourceLocation esprima/es2015-spread-element/invalid-new-spreads/input.js 1:14-1:15 (g)
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/es2015-spread-element/invalid-new-spreads/input.js:1:10 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown start to an spread argument

    new f(... ... g);
              ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
