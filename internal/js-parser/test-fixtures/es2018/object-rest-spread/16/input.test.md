# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2018 > object-rest-spread > 16`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	hasHoistedVars: true
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2018/object-rest-spread/16/input.js 1:0-2:0
	path: UIDPath<es2018/object-rest-spread/16/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "Expected an identifier"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:8
				path: UIDPath<es2018/object-rest-spread/16/input.js>
				start: Position 1:8
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation es2018/object-rest-spread/16/input.js 1:0-1:11
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: SourceLocation es2018/object-rest-spread/16/input.js 1:0-1:11
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingObjectPattern {
							loc: SourceLocation es2018/object-rest-spread/16/input.js 1:4-1:11
							rest: JSBindingIdentifier {
								name: ""
								loc: SourceLocation es2018/object-rest-spread/16/input.js 1:8-1:9 ()
							}
							properties: Array [
								JSBindingObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "z"
											loc: SourceLocation es2018/object-rest-spread/16/input.js 1:9-1:10 (z)
										}
										loc: SourceLocation es2018/object-rest-spread/16/input.js 1:9-1:10
									}
									value: JSBindingIdentifier {
										name: "z"
										loc: SourceLocation es2018/object-rest-spread/16/input.js 1:9-1:10 (z)
									}
									loc: SourceLocation es2018/object-rest-spread/16/input.js 1:9-1:10
								}
							]
						}
						init: undefined
						loc: SourceLocation es2018/object-rest-spread/16/input.js 1:4-1:11
					}
				]
			}
		}
		JSExpressionStatement {
			loc: SourceLocation es2018/object-rest-spread/16/input.js 1:11-1:23
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation es2018/object-rest-spread/16/input.js 1:11-1:22
				left: JSAssignmentIdentifier {
					name: "INVALID_PLACEHOLDER"
					loc: SourceLocation es2018/object-rest-spread/16/input.js 1:11-1:12
				}
				right: JSObjectExpression {
					loc: SourceLocation es2018/object-rest-spread/16/input.js 1:15-1:22
					properties: Array [
						JSObjectProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "z"
									loc: SourceLocation es2018/object-rest-spread/16/input.js 1:17-1:18 (z)
								}
								loc: SourceLocation es2018/object-rest-spread/16/input.js 1:17-1:18
							}
							value: JSNumericLiteral {
								value: 1
								format: undefined
								loc: SourceLocation es2018/object-rest-spread/16/input.js 1:20-1:21
							}
							loc: SourceLocation es2018/object-rest-spread/16/input.js 1:17-1:21
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

 es2018/object-rest-spread/16/input.js:1:8 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected an identifier

    var {...{z}} = { z: 1};
            ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
