# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > arrow-functions > create-parenthesized-expressions`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/arrow-functions/create-parenthesized-expressions/input.js 1:0-2:0
	path: UIDPath<es2015/arrow-functions/create-parenthesized-expressions/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/arrow-functions/create-parenthesized-expressions/input.js 1:0-1:11
			expression: JSArrowFunctionExpression {
				loc: SourceLocation es2015/arrow-functions/create-parenthesized-expressions/input.js 1:0-1:11
				body: JSBlockStatement {
					body: Array []
					directives: Array []
					loc: SourceLocation es2015/arrow-functions/create-parenthesized-expressions/input.js 1:9-1:11
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					rest: undefined
					returnType: undefined
					thisType: undefined
					loc: SourceLocation es2015/arrow-functions/create-parenthesized-expressions/input.js 1:0-1:8
					params: Array [
						JSBindingIdentifier {
							name: "foo"
							loc: SourceLocation es2015/arrow-functions/create-parenthesized-expressions/input.js 1:1-1:4 (foo)
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
