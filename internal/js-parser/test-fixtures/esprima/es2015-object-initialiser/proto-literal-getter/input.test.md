# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-object-initialiser > proto-literal-getter`

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
	loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-getter/input.js 1:0-2:0
	path: UIDPath<esprima/es2015-object-initialiser/proto-literal-getter/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-getter/input.js 1:0-1:42
			expression: JSObjectExpression {
				loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-getter/input.js 1:1-1:41
				properties: Array [
					JSObjectProperty {
						key: JSStaticPropertyKey {
							value: JSStringLiteral {
								value: "__proto__"
								loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-getter/input.js 1:3-1:14
							}
							loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-getter/input.js 1:3-1:14
						}
						value: JSNullLiteral {loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-getter/input.js 1:16-1:20}
						loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-getter/input.js 1:3-1:20
					}
					JSObjectMethod {
						kind: "get"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "__proto__"
								loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-getter/input.js 1:26-1:35 (__proto__)
							}
							loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-getter/input.js 1:26-1:35
						}
						loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-getter/input.js 1:22-1:39
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-getter/input.js 1:37-1:39
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: SourceLocation esprima/es2015-object-initialiser/proto-literal-getter/input.js 1:35-1:37
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
