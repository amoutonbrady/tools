# `parse.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/markup/parse.test.ts --update-snapshots` to update.

## `should not parse string escapes`

### `0`

```javascript
Array [
	Tag {
		name: "filelink"
		children: Array []
		attributes: ___R$project$rome$$internal$consume$Consumer_ts$default {
			value: Object {target: "C:\\Users\\sebmck\\file.ts"}
			declared: false
			forceDiagnosticTarget: undefined
			forkCache: Map [
				target => ___R$project$rome$$internal$consume$Consumer_ts$default {
					value: "C:\\Users\\sebmck\\file.ts"
					declared: false
					forceDiagnosticTarget: undefined
					forkCache: Map []
					handleUnexpected: undefined
					hasHandledUnexpected: false
					onDefinition: undefined
					usedNames: Set ["target"]
					keyPath: Array ["target"]
					parent: Circular ___R$project$rome$$internal$consume$Consumer_ts$default 2
					path: UIDPath<unknown>
					propertyMetadata: Object {getDiagnosticLocation: Function getDiagnosticLocation}
					context: Object {
						category: "parse"
						categoryValue: "romemarkup"
						getDiagnosticLocation: Function getDiagnosticLocation
					}
				}
			]
			handleUnexpected: undefined
			hasHandledUnexpected: false
			keyPath: Array []
			onDefinition: undefined
			parent: undefined
			propertyMetadata: undefined
			usedNames: Set ["target"]
			path: UIDPath<unknown>
			context: Object {
				category: "parse"
				categoryValue: "romemarkup"
				getDiagnosticLocation: Function getDiagnosticLocation
			}
		}
	}
]
```

### `1`

```javascript
Array [
	Tag {
		name: "info"
		children: Array [
			Text {
				value: "[MemoryFileSystem] Adding new project directory C:\\Users\\sebmck\\rome"
				source: true
			}
		]
		attributes: ___R$project$rome$$internal$consume$Consumer_ts$default {
			value: Object {}
			declared: false
			forceDiagnosticTarget: undefined
			forkCache: Map []
			handleUnexpected: undefined
			hasHandledUnexpected: false
			keyPath: Array []
			onDefinition: undefined
			parent: undefined
			propertyMetadata: undefined
			usedNames: Set []
			path: UIDPath<unknown>
			context: Object {
				category: "parse"
				categoryValue: "romemarkup"
				getDiagnosticLocation: Function getDiagnosticLocation
			}
		}
	}
]
```

### `2`

```javascript
Array [
	Text {
		value: "  <info>[MemoryFileSystem] Adding new project directory C:\\Users\\Sebastian\\rome\\</info>\n        "
		source: true
	}
	Tag {
		name: "error"
		attributes: ___R$project$rome$$internal$consume$Consumer_ts$default {
			value: Object {}
			declared: false
			forceDiagnosticTarget: undefined
			forkCache: Map []
			handleUnexpected: undefined
			hasHandledUnexpected: false
			keyPath: Array []
			onDefinition: undefined
			parent: undefined
			propertyMetadata: undefined
			usedNames: Set []
			path: UIDPath<unknown>
			context: Object {
				category: "parse"
				categoryValue: "romemarkup"
				getDiagnosticLocation: Function getDiagnosticLocation
			}
		}
		children: Array [
			Tag {
				name: "emphasis"
				children: Array [
					Text {
						value: "^"
						source: true
					}
				]
				attributes: ___R$project$rome$$internal$consume$Consumer_ts$default {
					value: Object {}
					declared: false
					forceDiagnosticTarget: undefined
					forkCache: Map []
					handleUnexpected: undefined
					hasHandledUnexpected: false
					keyPath: Array []
					onDefinition: undefined
					parent: undefined
					propertyMetadata: undefined
					usedNames: Set []
					path: UIDPath<unknown>
					context: Object {
						category: "parse"
						categoryValue: "romemarkup"
						getDiagnosticLocation: Function getDiagnosticLocation
					}
				}
			}
		]
	}
	Text {
		value: " "
		source: true
	}
]
```
