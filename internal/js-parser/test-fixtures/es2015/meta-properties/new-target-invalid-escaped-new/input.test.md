# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > meta-properties > new-target-invalid-escaped-new`

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
	loc: SourceLocation es2015/meta-properties/new-target-invalid-escaped-new/input.js 1:0-2:0
	path: UIDPath<es2015/meta-properties/new-target-invalid-escaped-new/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:16
				path: UIDPath<es2015/meta-properties/new-target-invalid-escaped-new/input.js>
				start: Position 1:16
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "Escape sequence in keyword "}
					"new"
				]
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "f"
				loc: SourceLocation es2015/meta-properties/new-target-invalid-escaped-new/input.js 1:9-1:10 (f)
			}
			loc: SourceLocation es2015/meta-properties/new-target-invalid-escaped-new/input.js 1:0-1:33
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation es2015/meta-properties/new-target-invalid-escaped-new/input.js 1:10-1:12
			}
			body: JSBlockStatement {
				directives: Array []
				loc: SourceLocation es2015/meta-properties/new-target-invalid-escaped-new/input.js 1:13-1:33
				body: Array [
					JSExpressionStatement {
						loc: SourceLocation es2015/meta-properties/new-target-invalid-escaped-new/input.js 1:15-1:31
						expression: JSMetaProperty {
							loc: SourceLocation es2015/meta-properties/new-target-invalid-escaped-new/input.js 1:15-1:30
							meta: JSIdentifier {
								name: "new"
								loc: SourceLocation es2015/meta-properties/new-target-invalid-escaped-new/input.js 1:15-1:23 (new)
							}
							property: JSIdentifier {
								name: "target"
								loc: SourceLocation es2015/meta-properties/new-target-invalid-escaped-new/input.js 1:24-1:30 (target)
							}
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

 es2015/meta-properties/new-target-invalid-escaped-new/input.js:1:16 parse(js) ━━━━━━━━━━━━━━━━━━━━━

  ✖ Escape sequence in keyword new

    function f() { n\u0065w.target; }
                    ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
