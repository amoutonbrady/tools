# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > module-namespace > head-declare`

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
	loc: SourceLocation typescript/module-namespace/head-declare/input.ts 1:0-5:0
	path: UIDPath<typescript/module-namespace/head-declare/input.ts>
	syntax: Array ["ts"]
	body: Array [
		TSModuleDeclaration {
			id: JSBindingIdentifier {
				name: "N"
				loc: SourceLocation typescript/module-namespace/head-declare/input.ts 1:18-1:19 (N)
			}
			declare: true
			loc: SourceLocation typescript/module-namespace/head-declare/input.ts 1:0-1:24
			body: TSModuleDeclaration {
				id: JSBindingIdentifier {
					name: "M"
					loc: SourceLocation typescript/module-namespace/head-declare/input.ts 1:20-1:21 (M)
				}
				loc: SourceLocation typescript/module-namespace/head-declare/input.ts 1:20-1:24
				body: TSModuleBlock {
					body: Array []
					loc: SourceLocation typescript/module-namespace/head-declare/input.ts 1:22-1:24
				}
			}
		}
		TSModuleDeclaration {
			id: JSBindingIdentifier {
				name: "M"
				loc: SourceLocation typescript/module-namespace/head-declare/input.ts 2:15-2:16 (M)
			}
			declare: true
			loc: SourceLocation typescript/module-namespace/head-declare/input.ts 2:0-2:19
			body: TSModuleBlock {
				body: Array []
				loc: SourceLocation typescript/module-namespace/head-declare/input.ts 2:17-2:19
			}
		}
		TSModuleDeclaration {
			id: JSStringLiteral {
				value: "m"
				loc: SourceLocation typescript/module-namespace/head-declare/input.ts 3:15-3:18
			}
			declare: true
			global: undefined
			loc: SourceLocation typescript/module-namespace/head-declare/input.ts 3:0-3:21
			body: TSModuleBlock {
				body: Array []
				loc: SourceLocation typescript/module-namespace/head-declare/input.ts 3:19-3:21
			}
		}
		TSModuleDeclaration {
			id: JSBindingIdentifier {
				name: "global"
				loc: SourceLocation typescript/module-namespace/head-declare/input.ts 4:8-4:14 (global)
			}
			declare: true
			global: true
			loc: SourceLocation typescript/module-namespace/head-declare/input.ts 4:0-4:17
			body: TSModuleBlock {
				body: Array []
				loc: SourceLocation typescript/module-namespace/head-declare/input.ts 4:15-4:17
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
