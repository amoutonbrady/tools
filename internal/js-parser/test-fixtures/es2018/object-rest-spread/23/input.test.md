# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2018 > object-rest-spread > 23`

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
	loc: SourceLocation es2018/object-rest-spread/23/input.js 1:0-2:0
	path: UIDPath<es2018/object-rest-spread/23/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:21
				path: UIDPath<es2018/object-rest-spread/23/input.js>
				start: Position 1:20
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "Unexpected token, expected "}
					","
				]
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "test"
				loc: SourceLocation es2018/object-rest-spread/23/input.js 1:9-1:13 (test)
			}
			loc: SourceLocation es2018/object-rest-spread/23/input.js 1:0-1:28
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation es2018/object-rest-spread/23/input.js 1:26-1:28
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation es2018/object-rest-spread/23/input.js 1:13-1:25
				params: Array [
					JSBindingObjectPattern {
						loc: SourceLocation es2018/object-rest-spread/23/input.js 1:14-1:24
						rest: JSBindingIdentifier {
							name: "x"
							loc: SourceLocation es2018/object-rest-spread/23/input.js 1:18-1:19 (x)
						}
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation es2018/object-rest-spread/23/input.js 1:14-1:24
						}
						properties: Array [
							JSBindingObjectPatternProperty {
								key: JSStaticPropertyKey {
									value: JSIdentifier {
										name: ""
										loc: SourceLocation es2018/object-rest-spread/23/input.js 1:20-1:21 ()
									}
									loc: SourceLocation es2018/object-rest-spread/23/input.js 1:20-1:21
								}
								value: JSBindingIdentifier {
									name: ""
									loc: SourceLocation es2018/object-rest-spread/23/input.js 1:20-1:21 ()
								}
								loc: SourceLocation es2018/object-rest-spread/23/input.js 1:20-1:21
							}
						]
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 es2018/object-rest-spread/23/input.js:1:20 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected token, expected ,

    function test({...x = 1}) {}
                        ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
