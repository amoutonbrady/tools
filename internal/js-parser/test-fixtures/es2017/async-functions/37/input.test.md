# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > 37`

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
	loc: SourceLocation es2017/async-functions/37/input.js 1:0-2:0
	path: UIDPath<es2017/async-functions/37/input.js>
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation es2017/async-functions/37/input.js 1:0-1:29
			declaration: JSVariableDeclaration {
				kind: "const"
				loc: SourceLocation es2017/async-functions/37/input.js 1:0-1:29
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingObjectPattern {
							rest: undefined
							loc: SourceLocation es2017/async-functions/37/input.js 1:6-1:22
							properties: Array [
								JSBindingObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "async"
											loc: SourceLocation es2017/async-functions/37/input.js 1:8-1:13 (async)
										}
										loc: SourceLocation es2017/async-functions/37/input.js 1:8-1:13
									}
									value: JSBindingAssignmentPattern {
										loc: SourceLocation es2017/async-functions/37/input.js 1:8-1:20
										left: JSBindingIdentifier {
											name: "async"
											loc: SourceLocation es2017/async-functions/37/input.js 1:8-1:13 (async)
										}
										right: JSBooleanLiteral {
											value: true
											loc: SourceLocation es2017/async-functions/37/input.js 1:16-1:20
										}
									}
									loc: SourceLocation es2017/async-functions/37/input.js 1:8-1:20
								}
							]
						}
						loc: SourceLocation es2017/async-functions/37/input.js 1:6-1:28
						init: JSReferenceIdentifier {
							name: "foo"
							loc: SourceLocation es2017/async-functions/37/input.js 1:25-1:28 (foo)
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
