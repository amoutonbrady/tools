# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0277`

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
	loc: SourceLocation esprima/invalid-syntax/migrated_0277/input.js 1:0-2:0
	path: UIDPath<esprima/invalid-syntax/migrated_0277/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:15
				path: UIDPath<esprima/invalid-syntax/migrated_0277/input.js>
				start: Position 1:11
			}
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					"enum"
					RAW_MARKUP {value: " is a reserved word"}
				]
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: SourceLocation esprima/invalid-syntax/migrated_0277/input.js 1:6-1:7 (A)
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0277/input.js 1:0-1:19
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation esprima/invalid-syntax/migrated_0277/input.js 1:0-1:19
				body: Array [
					JSClassMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "a"
								loc: SourceLocation esprima/invalid-syntax/migrated_0277/input.js 1:9-1:10 (a)
							}
							loc: SourceLocation esprima/invalid-syntax/migrated_0277/input.js 1:9-1:10
						}
						loc: SourceLocation esprima/invalid-syntax/migrated_0277/input.js 1:9-1:18
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: SourceLocation esprima/invalid-syntax/migrated_0277/input.js 1:16-1:18
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							loc: SourceLocation esprima/invalid-syntax/migrated_0277/input.js 1:9-1:10
							start: Position 1:9
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: SourceLocation esprima/invalid-syntax/migrated_0277/input.js 1:10-1:16
							params: Array [
								JSBindingIdentifier {
									name: "enum"
									loc: SourceLocation esprima/invalid-syntax/migrated_0277/input.js 1:11-1:15 (enum)
									meta: JSPatternMeta {
										optional: undefined
										typeAnnotation: undefined
										loc: SourceLocation esprima/invalid-syntax/migrated_0277/input.js 1:11-1:15
									}
								}
							]
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

 esprima/invalid-syntax/migrated_0277/input.js:1:11 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ enum is a reserved word

    class A {a(enum){}}
               ^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
