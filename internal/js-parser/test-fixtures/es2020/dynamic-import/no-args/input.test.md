# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2020 > dynamic-import > no-args`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2020/dynamic-import/no-args/input.js 1:0-2:0
	path: UIDPath<es2020/dynamic-import/no-args/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2020/dynamic-import/no-args/input.js 1:0-1:9
			expression: JSImportCall {
				loc: SourceLocation es2020/dynamic-import/no-args/input.js 1:6-1:8
				argument: JSReferenceIdentifier {
					name: "INVALID_PLACEHOLDER"
					loc: SourceLocation es2020/dynamic-import/no-args/input.js 1:7-1:7
				}
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "import() requires exactly one argument"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:7
				path: UIDPath<es2020/dynamic-import/no-args/input.js>
				start: Position 1:7
			}
		}
	]
}
```

### `diagnostics`

```

 es2020/dynamic-import/no-args/input.js:1:7 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ import() requires exactly one argument

    import();
           ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
