# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-arrow-function > migrated_0019`

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
	loc: SourceLocation esprima/es2015-arrow-function/migrated_0019/input.js 1:0-2:0
	path: UIDPath<esprima/es2015-arrow-function/migrated_0019/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/es2015-arrow-function/migrated_0019/input.js 1:0-1:17
			expression: JSCallExpression {
				loc: SourceLocation esprima/es2015-arrow-function/migrated_0019/input.js 1:0-1:17
				callee: JSReferenceIdentifier {
					name: "foo"
					loc: SourceLocation esprima/es2015-arrow-function/migrated_0019/input.js 1:0-1:3 (foo)
				}
				arguments: Array [
					JSArrowFunctionExpression {
						loc: SourceLocation esprima/es2015-arrow-function/migrated_0019/input.js 1:4-1:16
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: SourceLocation esprima/es2015-arrow-function/migrated_0019/input.js 1:14-1:16
						}
						head: JSFunctionHead {
							async: false
							hasHoistedVars: false
							rest: undefined
							returnType: undefined
							thisType: undefined
							loc: SourceLocation esprima/es2015-arrow-function/migrated_0019/input.js 1:4-1:13
							params: Array [
								JSBindingIdentifier {
									name: "x"
									loc: SourceLocation esprima/es2015-arrow-function/migrated_0019/input.js 1:5-1:6 (x)
								}
								JSBindingIdentifier {
									name: "y"
									loc: SourceLocation esprima/es2015-arrow-function/migrated_0019/input.js 1:8-1:9 (y)
								}
							]
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
