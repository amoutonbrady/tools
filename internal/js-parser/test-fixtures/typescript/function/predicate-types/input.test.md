# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > function > predicate-types`

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
	loc: SourceLocation typescript/function/predicate-types/input.ts 1:0-3:0
	path: UIDPath<typescript/function/predicate-types/input.ts>
	syntax: Array ["ts"]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "f"
				loc: SourceLocation typescript/function/predicate-types/input.ts 1:9-1:10 (f)
			}
			loc: SourceLocation typescript/function/predicate-types/input.ts 1:0-1:35
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation typescript/function/predicate-types/input.ts 1:33-1:35
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation typescript/function/predicate-types/input.ts 1:10-1:32
				returnType: TSTypePredicate {
					asserts: false
					loc: SourceLocation typescript/function/predicate-types/input.ts 1:20-1:32
					typeAnnotation: TSBooleanKeywordTypeAnnotation {loc: SourceLocation typescript/function/predicate-types/input.ts 1:25-1:32}
					parameterName: JSIdentifier {
						name: "x"
						loc: SourceLocation typescript/function/predicate-types/input.ts 1:20-1:21 (x)
					}
				}
				params: Array [
					JSBindingIdentifier {
						name: "x"
						loc: SourceLocation typescript/function/predicate-types/input.ts 1:11-1:12 (x)
						meta: JSPatternMeta {
							optional: undefined
							loc: SourceLocation typescript/function/predicate-types/input.ts 1:11-1:17
							typeAnnotation: TSAnyKeywordTypeAnnotation {loc: SourceLocation typescript/function/predicate-types/input.ts 1:14-1:17}
						}
					}
				]
			}
		}
		JSExpressionStatement {
			loc: SourceLocation typescript/function/predicate-types/input.ts 2:0-2:35
			expression: JSFunctionExpression {
				id: undefined
				loc: SourceLocation typescript/function/predicate-types/input.ts 2:1-2:34
				body: JSBlockStatement {
					body: Array []
					directives: Array []
					loc: SourceLocation typescript/function/predicate-types/input.ts 2:32-2:34
				}
				head: JSFunctionHead {
					async: false
					generator: false
					hasHoistedVars: false
					rest: undefined
					thisType: undefined
					typeParameters: undefined
					loc: SourceLocation typescript/function/predicate-types/input.ts 2:9-2:31
					returnType: TSTypePredicate {
						asserts: false
						loc: SourceLocation typescript/function/predicate-types/input.ts 2:19-2:31
						typeAnnotation: TSBooleanKeywordTypeAnnotation {loc: SourceLocation typescript/function/predicate-types/input.ts 2:24-2:31}
						parameterName: JSIdentifier {
							name: "x"
							loc: SourceLocation typescript/function/predicate-types/input.ts 2:19-2:20 (x)
						}
					}
					params: Array [
						JSBindingIdentifier {
							name: "x"
							loc: SourceLocation typescript/function/predicate-types/input.ts 2:10-2:11 (x)
							meta: JSPatternMeta {
								optional: undefined
								loc: SourceLocation typescript/function/predicate-types/input.ts 2:10-2:16
								typeAnnotation: TSAnyKeywordTypeAnnotation {loc: SourceLocation typescript/function/predicate-types/input.ts 2:13-2:16}
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
✔ No known problems!

```
