# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > cast > destructure-and-assign`

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
	loc: SourceLocation typescript/cast/destructure-and-assign/input.ts 1:0-3:0
	path: UIDPath<typescript/cast/destructure-and-assign/input.ts>
	syntax: Array ["ts"]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "Unexpected type cast in parameter position"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:12
				path: UIDPath<typescript/cast/destructure-and-assign/input.ts>
				start: Position 1:1
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation typescript/cast/destructure-and-assign/input.ts 1:0-1:21
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation typescript/cast/destructure-and-assign/input.ts 1:0-1:20
				right: JSArrayExpression {
					loc: SourceLocation typescript/cast/destructure-and-assign/input.ts 1:16-1:20
					elements: Array [
						JSNumericLiteral {
							value: 42
							format: undefined
							loc: SourceLocation typescript/cast/destructure-and-assign/input.ts 1:17-1:19
						}
					]
				}
				left: JSAssignmentArrayPattern {
					rest: undefined
					loc: SourceLocation typescript/cast/destructure-and-assign/input.ts 1:0-1:13
					elements: Array [
						TSAssignmentAsExpression {
							loc: SourceLocation typescript/cast/destructure-and-assign/input.ts 1:1-1:12
							typeAnnotation: TSNumberKeywordTypeAnnotation {loc: SourceLocation typescript/cast/destructure-and-assign/input.ts 1:6-1:12}
							expression: JSAssignmentIdentifier {
								name: "a"
								loc: SourceLocation typescript/cast/destructure-and-assign/input.ts 1:1-1:2 (a)
							}
						}
					]
				}
			}
		}
		JSExpressionStatement {
			loc: SourceLocation typescript/cast/destructure-and-assign/input.ts 2:0-2:19
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation typescript/cast/destructure-and-assign/input.ts 2:0-2:18
				right: JSArrayExpression {
					loc: SourceLocation typescript/cast/destructure-and-assign/input.ts 2:14-2:18
					elements: Array [
						JSNumericLiteral {
							value: 42
							format: undefined
							loc: SourceLocation typescript/cast/destructure-and-assign/input.ts 2:15-2:17
						}
					]
				}
				left: JSAssignmentArrayPattern {
					rest: undefined
					loc: SourceLocation typescript/cast/destructure-and-assign/input.ts 2:0-2:11
					elements: Array [
						TSAssignmentTypeAssertion {
							loc: SourceLocation typescript/cast/destructure-and-assign/input.ts 2:1-2:10
							typeAnnotation: TSNumberKeywordTypeAnnotation {loc: SourceLocation typescript/cast/destructure-and-assign/input.ts 2:2-2:8}
							expression: JSAssignmentIdentifier {
								name: "a"
								loc: SourceLocation typescript/cast/destructure-and-assign/input.ts 2:9-2:10 (a)
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

 typescript/cast/destructure-and-assign/input.ts:1:1 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected type cast in parameter position

  > 1 │ [a as number] = [42];
      │  ^^^^^^^^^^^
    2 │ [<number>a] = [42];

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
