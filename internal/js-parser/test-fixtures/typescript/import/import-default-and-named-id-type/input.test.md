# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > import > import-default-and-named-id-type`

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
	loc: SourceLocation typescript/import/import-default-and-named-id-type/input.ts 1:0-2:0
	path: UIDPath<typescript/import/import-default-and-named-id-type/input.ts>
	syntax: Array ["ts"]
	body: Array [
		JSImportDeclaration {
			importKind: "type"
			namespaceSpecifier: undefined
			loc: SourceLocation typescript/import/import-default-and-named-id-type/input.ts 1:0-1:32
			source: JSStringLiteral {
				value: "foo"
				loc: SourceLocation typescript/import/import-default-and-named-id-type/input.ts 1:26-1:31
			}
			defaultSpecifier: JSImportDefaultSpecifier {
				loc: SourceLocation typescript/import/import-default-and-named-id-type/input.ts 1:0-1:11
				local: JSImportSpecifierLocal {
					name: JSBindingIdentifier {
						name: "type"
						loc: SourceLocation typescript/import/import-default-and-named-id-type/input.ts 1:7-1:11 (type)
					}
					importKind: "type"
					loc: SourceLocation typescript/import/import-default-and-named-id-type/input.ts 1:7-1:11
				}
			}
			namedSpecifiers: Array [
				JSImportSpecifier {
					loc: SourceLocation typescript/import/import-default-and-named-id-type/input.ts 1:15-1:18
					imported: JSIdentifier {
						name: "bar"
						loc: SourceLocation typescript/import/import-default-and-named-id-type/input.ts 1:15-1:18 (bar)
					}
					local: JSImportSpecifierLocal {
						name: JSBindingIdentifier {
							name: "bar"
							loc: SourceLocation typescript/import/import-default-and-named-id-type/input.ts 1:15-1:18 (bar)
						}
						importKind: undefined
						loc: SourceLocation typescript/import/import-default-and-named-id-type/input.ts 1:15-1:18
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
