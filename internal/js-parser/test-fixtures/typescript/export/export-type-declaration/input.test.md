# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > export > export-type-declaration`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	loc: SourceLocation typescript/export/export-type-declaration/input.ts 1:0-5:0
	path: UIDPath<typescript/export/export-type-declaration/input.ts>
	syntax: Array ["ts"]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 3:25
				path: UIDPath<typescript/export/export-type-declaration/input.ts>
				start: Position 3:24
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "Unexpected token, expected "}
					"("
				]
			}
		}
	]
	body: Array [
		JSExportLocalDeclaration {
			exportKind: "type"
			specifiers: undefined
			loc: SourceLocation typescript/export/export-type-declaration/input.ts 1:0-1:18
			declaration: TSTypeAlias {
				id: JSBindingIdentifier {
					name: "A"
					loc: SourceLocation typescript/export/export-type-declaration/input.ts 1:12-1:13 (A)
				}
				typeParameters: undefined
				loc: SourceLocation typescript/export/export-type-declaration/input.ts 1:7-1:18
				right: TSNumericLiteralTypeAnnotation {
					value: 2
					format: undefined
					loc: SourceLocation typescript/export/export-type-declaration/input.ts 1:16-1:17
				}
			}
		}
		JSExportLocalDeclaration {
			exportKind: "type"
			specifiers: undefined
			loc: SourceLocation typescript/export/export-type-declaration/input.ts 2:0-2:21
			declaration: TSInterfaceDeclaration {
				id: JSBindingIdentifier {
					name: "B"
					loc: SourceLocation typescript/export/export-type-declaration/input.ts 2:17-2:18 (B)
				}
				extends: undefined
				typeParameters: undefined
				loc: SourceLocation typescript/export/export-type-declaration/input.ts 2:7-2:21
				body: TSInterfaceBody {
					body: Array []
					loc: SourceLocation typescript/export/export-type-declaration/input.ts 2:19-2:21
				}
			}
		}
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: SourceLocation typescript/export/export-type-declaration/input.ts 3:0-4:29
			declaration: JSFunctionDeclaration {
				id: JSBindingIdentifier {
					name: "function"
					loc: SourceLocation typescript/export/export-type-declaration/input.ts 3:15-3:23 (function)
				}
				declare: true
				loc: SourceLocation typescript/export/export-type-declaration/input.ts 3:7-4:29
				head: JSFunctionHead {
					async: false
					generator: false
					hasHoistedVars: true
					rest: undefined
					returnType: undefined
					thisType: undefined
					typeParameters: undefined
					loc: SourceLocation typescript/export/export-type-declaration/input.ts 3:24-3:25
					params: Array [
						JSBindingIdentifier {
							name: "a"
							loc: SourceLocation typescript/export/export-type-declaration/input.ts 3:24-3:25 (a)
							meta: JSPatternMeta {
								optional: undefined
								typeAnnotation: undefined
								loc: SourceLocation typescript/export/export-type-declaration/input.ts 3:24-3:25
							}
						}
					]
				}
				body: JSBlockStatement {
					directives: Array []
					loc: SourceLocation typescript/export/export-type-declaration/input.ts 3:25-4:29
					body: Array [
						JSExpressionStatement {
							loc: SourceLocation typescript/export/export-type-declaration/input.ts 3:25-3:27
							expression: JSReferenceIdentifier {
								name: "INVALID_PLACEHOLDER"
								loc: SourceLocation typescript/export/export-type-declaration/input.ts 3:26-3:26
							}
						}
						JSExpressionStatement {
							loc: SourceLocation typescript/export/export-type-declaration/input.ts 3:27-3:28
							expression: JSReferenceIdentifier {
								name: "INVALID_PLACEHOLDER"
								loc: SourceLocation typescript/export/export-type-declaration/input.ts 3:27-3:28
							}
						}
						JSExpressionStatement {
							loc: SourceLocation typescript/export/export-type-declaration/input.ts 3:29-3:36
							expression: JSReferenceIdentifier {
								name: "string"
								loc: SourceLocation typescript/export/export-type-declaration/input.ts 3:29-3:35 (string)
							}
						}
						JSExportLocalDeclaration {
							exportKind: "value"
							specifiers: undefined
							loc: SourceLocation typescript/export/export-type-declaration/input.ts 4:0-4:29
							declaration: JSVariableDeclarationStatement {
								declare: true
								loc: SourceLocation typescript/export/export-type-declaration/input.ts 4:7-4:29
								declaration: JSVariableDeclaration {
									kind: "var"
									loc: SourceLocation typescript/export/export-type-declaration/input.ts 4:7-4:29
									declarations: Array [
										JSVariableDeclarator {
											id: JSBindingIdentifier {
												name: "b"
												loc: SourceLocation typescript/export/export-type-declaration/input.ts 4:19-4:28
												meta: JSPatternMeta {
													definite: undefined
													loc: SourceLocation typescript/export/export-type-declaration/input.ts 4:19-4:28
													typeAnnotation: TSStringKeywordTypeAnnotation {loc: SourceLocation typescript/export/export-type-declaration/input.ts 4:22-4:28}
												}
											}
											init: undefined
											loc: SourceLocation typescript/export/export-type-declaration/input.ts 4:19-4:28
										}
									]
								}
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```

 typescript/export/export-type-declaration/input.ts:3:24 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected token, expected (

    1 │ export type A = 2;
    2 │ export interface B {}
  > 3 │ export declare function a(): string;
      │                         ^
    4 │ export declare var b: string;

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
