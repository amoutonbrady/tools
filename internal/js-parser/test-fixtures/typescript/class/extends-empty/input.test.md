# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > class > extends-empty`

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
	loc: SourceLocation typescript/class/extends-empty/input.ts 1:0-3:0
	path: UIDPath<typescript/class/extends-empty/input.ts>
	syntax: Array ["ts"]
	body: Array [
		TSInterfaceDeclaration {
			id: JSBindingIdentifier {
				name: "foo"
				loc: SourceLocation typescript/class/extends-empty/input.ts 1:10-1:13 (foo)
			}
			extends: Array []
			typeParameters: undefined
			loc: SourceLocation typescript/class/extends-empty/input.ts 1:0-2:1
			body: TSInterfaceBody {
				body: Array []
				loc: SourceLocation typescript/class/extends-empty/input.ts 1:22-2:1
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
				end: Position 1:22
				path: UIDPath<typescript/class/extends-empty/input.ts>
				start: Position 1:22
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					"extends"
					RAW_MARKUP {value: " list cannot be empty"}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 typescript/class/extends-empty/input.ts:1:22 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ extends list cannot be empty

  > 1 │ interface foo extends {
      │                       ^
    2 │ }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
