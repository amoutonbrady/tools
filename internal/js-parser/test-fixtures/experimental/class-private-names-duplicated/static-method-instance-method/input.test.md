# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > class-private-names-duplicated > static-method-instance-method`

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
	loc: SourceLocation experimental/class-private-names-duplicated/static-method-instance-method/input.js 1:0-4:1
	path: UIDPath<experimental/class-private-names-duplicated/static-method-instance-method/input.js>
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: SourceLocation experimental/class-private-names-duplicated/static-method-instance-method/input.js 1:6-1:7 (A)
			}
			loc: SourceLocation experimental/class-private-names-duplicated/static-method-instance-method/input.js 1:0-4:1
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation experimental/class-private-names-duplicated/static-method-instance-method/input.js 1:0-4:1
				body: Array [
					JSClassPrivateMethod {
						kind: "method"
						key: JSPrivateName {
							id: JSIdentifier {
								name: "x"
								loc: SourceLocation experimental/class-private-names-duplicated/static-method-instance-method/input.js 2:10-2:11 (x)
							}
							loc: SourceLocation experimental/class-private-names-duplicated/static-method-instance-method/input.js 2:9-2:11
						}
						loc: SourceLocation experimental/class-private-names-duplicated/static-method-instance-method/input.js 2:2-2:16
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: SourceLocation experimental/class-private-names-duplicated/static-method-instance-method/input.js 2:14-2:16
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: true
							typeAnnotation: undefined
							loc: SourceLocation experimental/class-private-names-duplicated/static-method-instance-method/input.js 2:2-2:11
							start: Position 2:2
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: SourceLocation experimental/class-private-names-duplicated/static-method-instance-method/input.js 2:11-2:13
						}
					}
					JSClassPrivateMethod {
						kind: "method"
						key: JSPrivateName {
							id: JSIdentifier {
								name: "x"
								loc: SourceLocation experimental/class-private-names-duplicated/static-method-instance-method/input.js 3:3-3:4 (x)
							}
							loc: SourceLocation experimental/class-private-names-duplicated/static-method-instance-method/input.js 3:2-3:4
						}
						loc: SourceLocation experimental/class-private-names-duplicated/static-method-instance-method/input.js 3:2-3:9
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: SourceLocation experimental/class-private-names-duplicated/static-method-instance-method/input.js 3:7-3:9
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							loc: SourceLocation experimental/class-private-names-duplicated/static-method-instance-method/input.js 3:2-3:4
							start: Position 3:2
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: SourceLocation experimental/class-private-names-duplicated/static-method-instance-method/input.js 3:4-3:6
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
✔ No known problems!

```
