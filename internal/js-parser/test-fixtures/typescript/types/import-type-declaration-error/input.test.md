# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > types > import-type-declaration-error`

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
	loc: SourceLocation typescript/types/import-type-declaration-error/input.ts 1:0-1:51
	path: UIDPath<typescript/types/import-type-declaration-error/input.ts>
	syntax: Array ["ts"]
	body: Array [
		JSImportDeclaration {
			importKind: "type"
			namespaceSpecifier: undefined
			loc: SourceLocation typescript/types/import-type-declaration-error/input.ts 1:0-1:51
			source: JSStringLiteral {
				value: "module"
				loc: SourceLocation typescript/types/import-type-declaration-error/input.ts 1:42-1:50
			}
			defaultSpecifier: JSImportDefaultSpecifier {
				loc: SourceLocation typescript/types/import-type-declaration-error/input.ts 1:0-1:22
				local: JSImportSpecifierLocal {
					name: JSBindingIdentifier {
						name: "FooDefault"
						loc: SourceLocation typescript/types/import-type-declaration-error/input.ts 1:12-1:22 (FooDefault)
					}
					importKind: "type"
					loc: SourceLocation typescript/types/import-type-declaration-error/input.ts 1:12-1:22
				}
			}
			namedSpecifiers: Array [
				JSImportSpecifier {
					loc: SourceLocation typescript/types/import-type-declaration-error/input.ts 1:26-1:29
					imported: JSIdentifier {
						name: "Bar"
						loc: SourceLocation typescript/types/import-type-declaration-error/input.ts 1:26-1:29 (Bar)
					}
					local: JSImportSpecifierLocal {
						name: JSBindingIdentifier {
							name: "Bar"
							loc: SourceLocation typescript/types/import-type-declaration-error/input.ts 1:26-1:29 (Bar)
						}
						importKind: undefined
						loc: SourceLocation typescript/types/import-type-declaration-error/input.ts 1:26-1:29
					}
				}
				JSImportSpecifier {
					loc: SourceLocation typescript/types/import-type-declaration-error/input.ts 1:31-1:34
					imported: JSIdentifier {
						name: "Baz"
						loc: SourceLocation typescript/types/import-type-declaration-error/input.ts 1:31-1:34 (Baz)
					}
					local: JSImportSpecifierLocal {
						name: JSBindingIdentifier {
							name: "Baz"
							loc: SourceLocation typescript/types/import-type-declaration-error/input.ts 1:31-1:34 (Baz)
						}
						importKind: undefined
						loc: SourceLocation typescript/types/import-type-declaration-error/input.ts 1:31-1:34
					}
				}
			]
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
