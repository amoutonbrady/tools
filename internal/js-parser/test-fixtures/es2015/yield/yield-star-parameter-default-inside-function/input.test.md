# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > yield > yield-star-parameter-default-inside-function`

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
	loc: SourceLocation es2015/yield/yield-star-parameter-default-inside-function/input.js 1:0-1:32
	path: UIDPath<es2015/yield/yield-star-parameter-default-inside-function/input.js>
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "fn"
				loc: SourceLocation es2015/yield/yield-star-parameter-default-inside-function/input.js 1:9-1:11 (fn)
			}
			loc: SourceLocation es2015/yield/yield-star-parameter-default-inside-function/input.js 1:0-1:32
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation es2015/yield/yield-star-parameter-default-inside-function/input.js 1:30-1:32
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation es2015/yield/yield-star-parameter-default-inside-function/input.js 1:11-1:29
				params: Array [
					JSBindingAssignmentPattern {
						loc: SourceLocation es2015/yield/yield-star-parameter-default-inside-function/input.js 1:12-1:28
						left: JSBindingIdentifier {
							name: "x"
							loc: SourceLocation es2015/yield/yield-star-parameter-default-inside-function/input.js 1:12-1:13 (x)
							meta: JSPatternMeta {
								optional: undefined
								typeAnnotation: undefined
								loc: SourceLocation es2015/yield/yield-star-parameter-default-inside-function/input.js 1:12-1:13
							}
						}
						right: JSBinaryExpression {
							operator: "*"
							loc: SourceLocation es2015/yield/yield-star-parameter-default-inside-function/input.js 1:16-1:28
							left: JSReferenceIdentifier {
								name: "yield"
								loc: SourceLocation es2015/yield/yield-star-parameter-default-inside-function/input.js 1:16-1:21 (yield)
							}
							right: JSReferenceIdentifier {
								name: "yield"
								loc: SourceLocation es2015/yield/yield-star-parameter-default-inside-function/input.js 1:23-1:28 (yield)
							}
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
