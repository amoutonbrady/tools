# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0234`

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
	loc: SourceLocation esprima/invalid-syntax/migrated_0234/input.js 1:0-2:0
	path: UIDPath<esprima/invalid-syntax/migrated_0234/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:15
				path: UIDPath<esprima/invalid-syntax/migrated_0234/input.js>
				start: Position 1:9
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					"static"
					RAW_MARKUP {value: " is a reserved word"}
				]
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "static"
				loc: SourceLocation esprima/invalid-syntax/migrated_0234/input.js 1:9-1:15 (static)
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0234/input.js 1:0-1:35
			body: JSBlockStatement {
				body: Array []
				loc: SourceLocation esprima/invalid-syntax/migrated_0234/input.js 1:18-1:35
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: SourceLocation esprima/invalid-syntax/migrated_0234/input.js 1:20-1:33
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
				loc: SourceLocation esprima/invalid-syntax/migrated_0234/input.js 1:15-1:17
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0234/input.js:1:9 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ static is a reserved word

    function static() { "use strict"; }
             ^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
