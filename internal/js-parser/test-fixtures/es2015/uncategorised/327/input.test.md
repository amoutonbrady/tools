# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 327`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	hasHoistedVars: true
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/uncategorised/327/input.js 1:0-1:13
	path: UIDPath<es2015/uncategorised/327/input.js>
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation es2015/uncategorised/327/input.js 1:0-1:13
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: SourceLocation es2015/uncategorised/327/input.js 1:0-1:13
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "_"
							loc: SourceLocation es2015/uncategorised/327/input.js 1:6-1:7 (_)
						}
						loc: SourceLocation es2015/uncategorised/327/input.js 1:6-1:12
						init: JSNumericLiteral {
							value: 12
							format: undefined
							loc: SourceLocation es2015/uncategorised/327/input.js 1:10-1:12
						}
					}
				]
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:3
				path: UIDPath<es2015/uncategorised/327/input.js>
				start: Position 1:4
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "Unexpected character <emphasis>"}
					"\u{2b81e}"
					RAW_MARKUP {value: "</emphasis>"}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 es2015/uncategorised/327/input.js:1:4 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected character 𫠞

    var 𫠞_ = 12;
        ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
