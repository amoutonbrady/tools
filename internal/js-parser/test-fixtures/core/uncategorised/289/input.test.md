# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 289`

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
	loc: SourceLocation core/uncategorised/289/input.js 1:0-1:53
	path: UIDPath<core/uncategorised/289/input.js>
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "eval"
				loc: SourceLocation core/uncategorised/289/input.js 1:9-1:13 (eval)
			}
			loc: SourceLocation core/uncategorised/289/input.js 1:0-1:53
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation core/uncategorised/289/input.js 1:13-1:15
			}
			body: JSBlockStatement {
				directives: Array []
				loc: SourceLocation core/uncategorised/289/input.js 1:16-1:53
				body: Array [
					JSFunctionDeclaration {
						id: JSBindingIdentifier {
							name: "inner"
							loc: SourceLocation core/uncategorised/289/input.js 1:27-1:32 (inner)
						}
						loc: SourceLocation core/uncategorised/289/input.js 1:18-1:51
						body: JSBlockStatement {
							body: Array []
							loc: SourceLocation core/uncategorised/289/input.js 1:35-1:51
							directives: Array [
								JSDirective {
									value: "use strict"
									loc: SourceLocation core/uncategorised/289/input.js 1:37-1:49
								}
							]
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
							loc: SourceLocation core/uncategorised/289/input.js 1:32-1:34
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
