# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2020 > optional-chaining > optional-constructor`

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
	loc: SourceLocation es2020/optional-chaining/optional-constructor/input.js 1:0-1:10
	path: UIDPath<es2020/optional-chaining/optional-constructor/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2020/optional-chaining/optional-constructor/input.js 1:0-1:10
			expression: JSNewExpression {
				arguments: Array []
				optional: undefined
				typeArguments: undefined
				loc: SourceLocation es2020/optional-chaining/optional-constructor/input.js 1:0-1:9
				callee: JSReferenceIdentifier {
					name: "a"
					loc: SourceLocation es2020/optional-chaining/optional-constructor/input.js 1:4-1:5 (a)
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
				message: RAW_MARKUP {value: "constructors in/after an Optional Chain are not allowed"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:7
				path: UIDPath<es2020/optional-chaining/optional-constructor/input.js>
				start: Position 1:7
			}
		}
	]
}
```

### `diagnostics`

```

 es2020/optional-chaining/optional-constructor/input.js:1:7 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ constructors in/after an Optional Chain are not allowed

    new a?.();
           ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
