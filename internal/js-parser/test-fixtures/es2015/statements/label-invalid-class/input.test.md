# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > statements > label-invalid-class`

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
	loc: SourceLocation es2015/statements/label-invalid-class/input.js 1:0-2:0
	path: UIDPath<es2015/statements/label-invalid-class/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "Unexpected token"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:10
				path: UIDPath<es2015/statements/label-invalid-class/input.js>
				start: Position 1:5
			}
		}
	]
	body: Array [
		JSLabeledStatement {
			loc: SourceLocation es2015/statements/label-invalid-class/input.js 1:0-1:15
			label: JSIdentifier {
				name: "foo"
				loc: SourceLocation es2015/statements/label-invalid-class/input.js 1:0-1:3 (foo)
			}
			body: JSClassDeclaration {
				id: JSBindingIdentifier {
					name: "X"
					loc: SourceLocation es2015/statements/label-invalid-class/input.js 1:11-1:12 (X)
				}
				loc: SourceLocation es2015/statements/label-invalid-class/input.js 1:5-1:15
				meta: JSClassHead {
					body: Array []
					implements: undefined
					superClass: undefined
					superTypeParameters: undefined
					typeParameters: undefined
					loc: SourceLocation es2015/statements/label-invalid-class/input.js 1:5-1:15
				}
			}
		}
	]
}
```

### `diagnostics`

```

 es2015/statements/label-invalid-class/input.js:1:5 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected token

    foo: class X {}
         ^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
