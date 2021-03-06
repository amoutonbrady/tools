# `ParserCore.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/parser-core/ParserCore.test.ts --update-snapshots` to update.

## `test parsing`

### `0`

```javascript
Object {
	corrupt: false
	diagnostics: Array []
	path: RelativeFilePath<0.test>
	comments: Array [
		CommentLine {
			id: "0"
			value: " Comment"
			loc: SourceLocation 0.test 5:0-5:10
		}
	]
	parsed: Array [
		Object {
			loc: SourceLocation 0.test 1:0-1:13
			snapshot: Object {
				nextTokenIndex: 13
				prevToken: SOF {
					end: 0
					start: 0
				}
				currentToken: String {
					value: "im a string"
					end: 13
					start: 0
				}
			}
		}
		Object {
			loc: SourceLocation 0.test 3:0-3:1
			snapshot: Object {
				nextTokenIndex: 16
				currentToken: Number {
					value: 4
					end: 16
					start: 15
				}
				prevToken: String {
					value: "im a string"
					end: 13
					start: 0
				}
			}
		}
		Object {
			loc: SourceLocation 0.test 5:0-5:10
			snapshot: Object {
				nextTokenIndex: 28
				currentToken: Comment {
					value: " Comment"
					end: 28
					start: 18
				}
				prevToken: Number {
					value: 4
					end: 16
					start: 15
				}
			}
		}
	]
}
```

### `1`

```javascript
Object {
	comments: Array []
	corrupt: false
	path: RelativeFilePath<1.test>
	parsed: Array [
		Object {
			loc: SourceLocation 1.test 1:0-1:1
			snapshot: Object {
				nextTokenIndex: 1
				prevToken: SOF {
					end: 0
					start: 0
				}
				currentToken: Invalid {
					value: "a"
					end: 1
					start: 0
				}
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "unknown"
				message: RAW_MARKUP {value: "Invalid token"}
			}
			location: Object {
				integrity: undefined
				language: "unknown"
				sourceText: undefined
				end: Position 1:0
				path: RelativeFilePath<1.test>
				start: Position 1:0
			}
		}
	]
}
```

### `2`

```javascript
Object {
	comments: Array []
	corrupt: false
	path: RelativeFilePath<2.test>
	parsed: Array [
		Object {
			loc: SourceLocation 2.test 1:0-1:28
			snapshot: Object {
				nextTokenIndex: 28
				prevToken: SOF {
					end: 0
					start: 0
				}
				currentToken: String {
					value: "i'm an unterminated string"
					end: 28
					start: 0
				}
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "unknown"
				message: RAW_MARKUP {value: "Unterminated string"}
			}
			location: Object {
				integrity: undefined
				language: "unknown"
				sourceText: undefined
				end: Position 1:0
				path: RelativeFilePath<2.test>
				start: Position 1:0
			}
		}
	]
}
```
