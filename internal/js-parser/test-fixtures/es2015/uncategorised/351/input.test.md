# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 351`

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
	loc: SourceLocation es2015/uncategorised/351/input.js 1:0-1:44
	path: UIDPath<es2015/uncategorised/351/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/351/input.js 1:0-1:44
			expression: JSObjectExpression {
				loc: SourceLocation es2015/uncategorised/351/input.js 1:1-1:43
				properties: Array [
					JSObjectMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "__proto__"
								loc: SourceLocation es2015/uncategorised/351/input.js 1:3-1:12 (__proto__)
							}
							loc: SourceLocation es2015/uncategorised/351/input.js 1:3-1:12
						}
						loc: SourceLocation es2015/uncategorised/351/input.js 1:3-1:27
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: SourceLocation es2015/uncategorised/351/input.js 1:12-1:14
						}
						body: JSBlockStatement {
							directives: Array []
							loc: SourceLocation es2015/uncategorised/351/input.js 1:15-1:27
							body: Array [
								JSReturnStatement {
									loc: SourceLocation es2015/uncategorised/351/input.js 1:17-1:25
									argument: JSNumericLiteral {
										value: 1
										format: undefined
										loc: SourceLocation es2015/uncategorised/351/input.js 1:24-1:25
									}
								}
							]
						}
					}
					JSObjectProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "__proto__"
								loc: SourceLocation es2015/uncategorised/351/input.js 1:29-1:38 (__proto__)
							}
							loc: SourceLocation es2015/uncategorised/351/input.js 1:29-1:38
						}
						value: JSNumericLiteral {
							value: 2
							format: undefined
							loc: SourceLocation es2015/uncategorised/351/input.js 1:40-1:41
						}
						loc: SourceLocation es2015/uncategorised/351/input.js 1:29-1:41
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
