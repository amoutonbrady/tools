# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 356`

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
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/uncategorised/356/input.js 1:0-2:0
	path: UIDPath<es2015/uncategorised/356/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/356/input.js 1:0-1:14
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation es2015/uncategorised/356/input.js 1:0-1:13
				left: JSAssignmentIdentifier {
					name: "await"
					loc: SourceLocation es2015/uncategorised/356/input.js 1:0-1:5 (await)
				}
				right: JSCallExpression {
					arguments: Array []
					loc: SourceLocation es2015/uncategorised/356/input.js 1:8-1:13
					callee: JSReferenceIdentifier {
						name: "foo"
						loc: SourceLocation es2015/uncategorised/356/input.js 1:8-1:11 (foo)
					}
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
