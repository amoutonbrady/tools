# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `test262 > rest-parameter > object-pattern-multi-element-with-leading`

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
	loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:0-2:0
	path: UIDPath<test262/rest-parameter/object-pattern-multi-element-with-leading/input.js>
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "multiElementWithLeading"
				loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:9-1:32 (multiElementWithLeading)
			}
			loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:0-1:64
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:62-1:64
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:32-1:61
				params: Array [
					JSBindingIdentifier {
						name: "x"
						loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:33-1:34 (x)
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:33-1:34
						}
					}
					JSBindingIdentifier {
						name: "y"
						loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:36-1:37 (y)
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:36-1:37
						}
					}
				]
				rest: JSBindingObjectPattern {
					rest: undefined
					loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:42-1:60
					meta: JSPatternMeta {
						optional: undefined
						typeAnnotation: undefined
						loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:42-1:60
					}
					properties: Array [
						JSBindingObjectPatternProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "a"
									loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:43-1:44 (a)
								}
								loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:43-1:44
							}
							value: JSBindingIdentifier {
								name: "r"
								loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:46-1:47 (r)
							}
							loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:43-1:47
						}
						JSBindingObjectPatternProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "b"
									loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:49-1:50 (b)
								}
								loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:49-1:50
							}
							value: JSBindingIdentifier {
								name: "s"
								loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:52-1:53 (s)
							}
							loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:49-1:53
						}
						JSBindingObjectPatternProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "c"
									loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:55-1:56 (c)
								}
								loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:55-1:56
							}
							value: JSBindingIdentifier {
								name: "t"
								loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:58-1:59 (t)
							}
							loc: SourceLocation test262/rest-parameter/object-pattern-multi-element-with-leading/input.js 1:55-1:59
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
