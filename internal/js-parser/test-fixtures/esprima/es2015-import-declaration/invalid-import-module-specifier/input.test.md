# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-import-declaration > invalid-import-module-specifier`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	syntax: Array []
	loc: SourceLocation esprima/es2015-import-declaration/invalid-import-module-specifier/input.js 1:0-2:0
	path: UIDPath<esprima/es2015-import-declaration/invalid-import-module-specifier/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "Export from only allows strings"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:21
				path: UIDPath<esprima/es2015-import-declaration/invalid-import-module-specifier/input.js>
				start: Position 1:18
			}
		}
	]
	body: Array [
		JSExportExternalDeclaration {
			defaultSpecifier: undefined
			exportKind: undefined
			namespaceSpecifier: undefined
			loc: SourceLocation esprima/es2015-import-declaration/invalid-import-module-specifier/input.js 1:0-1:21
			source: JSStringLiteral {
				value: ""
				loc: SourceLocation esprima/es2015-import-declaration/invalid-import-module-specifier/input.js 1:18-1:21 (bar)
			}
			namedSpecifiers: Array [
				JSExportExternalSpecifier {
					loc: SourceLocation esprima/es2015-import-declaration/invalid-import-module-specifier/input.js 1:8-1:11
					exported: JSIdentifier {
						name: "foo"
						loc: SourceLocation esprima/es2015-import-declaration/invalid-import-module-specifier/input.js 1:8-1:11 (foo)
					}
					local: JSIdentifier {
						name: "foo"
						loc: SourceLocation esprima/es2015-import-declaration/invalid-import-module-specifier/input.js 1:8-1:11 (foo)
					}
				}
			]
		}
	]
}
```

### `diagnostics`

```

 esprima/es2015-import-declaration/invalid-import-module-specifier/input.js:1:18 parse(js) ━━━━━━━━━

  ✖ Export from only allows strings

    export {foo} from bar
                      ^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
