# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > class > parameter-properties-binding-patterns`

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
	loc: SourceLocation typescript/class/parameter-properties-binding-patterns/input.ts 1:0-4:0
	path: UIDPath<typescript/class/parameter-properties-binding-patterns/input.ts>
	syntax: Array ["ts"]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "A parameter property may not be declared using a binding pattern."}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 2:16
				path: UIDPath<typescript/class/parameter-properties-binding-patterns/input.ts>
				start: Position 2:16
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "C"
				loc: SourceLocation typescript/class/parameter-properties-binding-patterns/input.ts 1:6-1:7 (C)
			}
			loc: SourceLocation typescript/class/parameter-properties-binding-patterns/input.ts 1:0-3:1
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation typescript/class/parameter-properties-binding-patterns/input.ts 1:0-3:1
				body: Array [
					JSClassMethod {
						kind: "constructor"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "constructor"
								loc: SourceLocation typescript/class/parameter-properties-binding-patterns/input.ts 2:4-2:15 (constructor)
							}
							loc: SourceLocation typescript/class/parameter-properties-binding-patterns/input.ts 2:4-2:15
						}
						loc: SourceLocation typescript/class/parameter-properties-binding-patterns/input.ts 2:4-2:29
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: SourceLocation typescript/class/parameter-properties-binding-patterns/input.ts 2:27-2:29
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							loc: SourceLocation typescript/class/parameter-properties-binding-patterns/input.ts 2:4-2:15
							start: Position 2:4
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: SourceLocation typescript/class/parameter-properties-binding-patterns/input.ts 2:15-2:26
							params: Array [
								JSBindingArrayPattern {
									elements: Array []
									rest: undefined
									loc: SourceLocation typescript/class/parameter-properties-binding-patterns/input.ts 2:16-2:25
									meta: JSPatternMeta {
										accessibility: "public"
										readonly: false
										typeAnnotation: undefined
										loc: SourceLocation typescript/class/parameter-properties-binding-patterns/input.ts 2:16-2:25
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

 typescript/class/parameter-properties-binding-patterns/input.ts:2:16 parse(js) ━━━━━━━━━━━━━━━━━━━━

  ✖ A parameter property may not be declared using a binding pattern.

    1 │ class C {
  > 2 │     constructor(public []) {}
      │                 ^
    3 │ }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
