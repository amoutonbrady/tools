# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 121`

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
	loc: SourceLocation es2015/uncategorised/121/input.js 1:0-1:30
	path: UIDPath<es2015/uncategorised/121/input.js>
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: SourceLocation es2015/uncategorised/121/input.js 1:6-1:7 (A)
			}
			loc: SourceLocation es2015/uncategorised/121/input.js 1:0-1:30
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation es2015/uncategorised/121/input.js 1:0-1:30
				body: Array [
					JSClassMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "gen"
								loc: SourceLocation es2015/uncategorised/121/input.js 1:10-1:13 (gen)
							}
							loc: SourceLocation es2015/uncategorised/121/input.js 1:10-1:13
						}
						loc: SourceLocation es2015/uncategorised/121/input.js 1:9-1:29
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							loc: SourceLocation es2015/uncategorised/121/input.js 1:9-1:13
							start: Position 1:9
						}
						body: JSBlockStatement {
							directives: Array []
							loc: SourceLocation es2015/uncategorised/121/input.js 1:17-1:29
							body: Array [
								JSExpressionStatement {
									loc: SourceLocation es2015/uncategorised/121/input.js 1:19-1:27
									expression: JSYieldExpression {
										delegate: false
										loc: SourceLocation es2015/uncategorised/121/input.js 1:19-1:26
										argument: JSReferenceIdentifier {
											name: "v"
											loc: SourceLocation es2015/uncategorised/121/input.js 1:25-1:26 (v)
										}
									}
								}
							]
						}
						head: JSFunctionHead {
							async: false
							generator: true
							hasHoistedVars: false
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: SourceLocation es2015/uncategorised/121/input.js 1:13-1:16
							params: Array [
								JSBindingIdentifier {
									name: "v"
									loc: SourceLocation es2015/uncategorised/121/input.js 1:14-1:15 (v)
									meta: JSPatternMeta {
										optional: undefined
										typeAnnotation: undefined
										loc: SourceLocation es2015/uncategorised/121/input.js 1:14-1:15
									}
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
