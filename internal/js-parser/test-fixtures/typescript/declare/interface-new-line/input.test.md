# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > declare > interface-new-line`

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
	sourceType: "module"
	loc: SourceLocation typescript/declare/interface-new-line/input.ts 1:0-3:0
	path: UIDPath<typescript/declare/interface-new-line/input.ts>
	syntax: Array ["ts"]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation typescript/declare/interface-new-line/input.ts 1:0-1:7
			expression: JSReferenceIdentifier {
				name: "declare"
				loc: SourceLocation typescript/declare/interface-new-line/input.ts 1:0-1:7 (declare)
			}
		}
		TSInterfaceDeclaration {
			id: JSBindingIdentifier {
				name: "I"
				loc: SourceLocation typescript/declare/interface-new-line/input.ts 2:10-2:11 (I)
			}
			extends: undefined
			typeParameters: undefined
			loc: SourceLocation typescript/declare/interface-new-line/input.ts 2:0-2:14
			body: TSInterfaceBody {
				body: Array []
				loc: SourceLocation typescript/declare/interface-new-line/input.ts 2:12-2:14
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
