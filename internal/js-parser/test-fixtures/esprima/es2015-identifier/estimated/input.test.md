# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-identifier > estimated`

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
	loc: SourceLocation esprima/es2015-identifier/estimated/input.js 1:0-2:0
	path: UIDPath<esprima/es2015-identifier/estimated/input.js>
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation esprima/es2015-identifier/estimated/input.js 1:0-1:5
			declaration: JSVariableDeclaration {
				kind: "let"
				loc: SourceLocation esprima/es2015-identifier/estimated/input.js 1:0-1:5
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "\u212e"
							loc: SourceLocation esprima/es2015-identifier/estimated/input.js 1:4-1:5 (\u212e)
						}
						init: undefined
						loc: SourceLocation esprima/es2015-identifier/estimated/input.js 1:4-1:5
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
