# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > function > pattern-parameters`

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
	loc: SourceLocation typescript/function/pattern-parameters/input.ts 1:0-2:0
	path: UIDPath<typescript/function/pattern-parameters/input.ts>
	syntax: Array ["ts"]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "A binding pattern parameter cannot be optional in an implementation signature."}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:13
				path: UIDPath<typescript/function/pattern-parameters/input.ts>
				start: Position 1:11
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "f"
				loc: SourceLocation typescript/function/pattern-parameters/input.ts 1:9-1:10 (f)
			}
			loc: SourceLocation typescript/function/pattern-parameters/input.ts 1:0-1:22
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation typescript/function/pattern-parameters/input.ts 1:20-1:22
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation typescript/function/pattern-parameters/input.ts 1:10-1:19
				params: Array [
					JSBindingArrayPattern {
						elements: Array []
						rest: undefined
						loc: SourceLocation typescript/function/pattern-parameters/input.ts 1:11-1:13
						meta: JSPatternMeta {
							optional: true
							typeAnnotation: undefined
							loc: SourceLocation typescript/function/pattern-parameters/input.ts 1:11-1:14
						}
					}
					JSBindingObjectPattern {
						properties: Array []
						rest: undefined
						loc: SourceLocation typescript/function/pattern-parameters/input.ts 1:16-1:18
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation typescript/function/pattern-parameters/input.ts 1:16-1:18
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

 typescript/function/pattern-parameters/input.ts:1:11 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ A binding pattern parameter cannot be optional in an implementation signature.

    function f([]?, {}) {}
               ^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
