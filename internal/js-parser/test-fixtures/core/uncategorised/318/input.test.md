# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 318`

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
	loc: SourceLocation core/uncategorised/318/input.js 1:0-4:4
	path: UIDPath<core/uncategorised/318/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/318/input.js 1:0-4:4
			expression: JSCallExpression {
				arguments: Array []
				loc: SourceLocation core/uncategorised/318/input.js 1:1-4:3
				callee: JSFunctionExpression {
					id: undefined
					loc: SourceLocation core/uncategorised/318/input.js 1:1-4:1
					head: JSFunctionHead {
						async: false
						generator: false
						hasHoistedVars: false
						params: Array []
						rest: undefined
						returnType: undefined
						thisType: undefined
						typeParameters: undefined
						loc: SourceLocation core/uncategorised/318/input.js 1:10-1:12
					}
					body: JSBlockStatement {
						body: Array []
						loc: SourceLocation core/uncategorised/318/input.js 1:13-4:1
						directives: Array [
							JSDirective {
								value: "use strict"
								loc: SourceLocation core/uncategorised/318/input.js 2:1-2:14
							}
							JSDirective {
								value: "\0"
								loc: SourceLocation core/uncategorised/318/input.js 3:1-3:5
							}
						]
					}
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
