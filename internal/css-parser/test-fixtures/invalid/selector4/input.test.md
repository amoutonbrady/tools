# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/css-parser/index.test.ts --update-snapshots` to update.

## `invalid > selector4`

```javascript
CSSRoot {
	comments: Array []
	corrupt: false
	integrity: undefined
	loc: SourceLocation invalid/selector4/input.css 1:0-3:1
	path: RelativeFilePath<invalid/selector4/input.css>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "css"
				message: RAW_MARKUP {value: "Expected to close attribute selector with a right square bracket <emphasis>]</emphasis>."}
			}
			location: Object {
				integrity: undefined
				language: "css"
				sourceText: undefined
				end: Position 1:14
				path: RelativeFilePath<invalid/selector4/input.css>
				start: Position 1:13
			}
		}
	]
	body: Array [
		CSSRule {
			loc: SourceLocation invalid/selector4/input.css 1:0-3:1
			block: CSSBlock {
				value: Array []
				startingTokenValue: "{"
				loc: SourceLocation invalid/selector4/input.css 1:13-3:1
			}
			prelude: Array [
				CSSSelector {
					loc: SourceLocation invalid/selector4/input.css 1:0-1:13
					patterns: Array [
						CSSClassSelector {
							value: "class"
							loc: SourceLocation invalid/selector4/input.css 1:0-1:6
						}
					]
				}
			]
		}
	]
}
```
