# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/formatter/index.test.ts --update-snapshots` to update.

## `css > function`

### `Diagnostics`

```
✔ No known problems!

```

### `Input`

```css

.func {
	padding-left: calc();
	padding-right: calc( 1px );
	padding-bottom: calc(1px  - 2px);
	padding-top: calc(1px, 2px);
	padding: calc(calc(1px, 2px), 3px);
	height: calc(1px, 2px, 3px);
	background-color: rgb(0 128 255);
	border: var(--foo,red, blue, calc( 10px   +1rem));
}

```

### `Output`

```css
.func {
	padding-left: calc();
	padding-right: calc(1px);
	padding-bottom: calc(1px - 2px);
	padding-top: calc(1px, 2px);
	padding: calc(calc(1px, 2px), 3px);
	height: calc(1px, 2px, 3px);
	background-color: rgb(0 128 255);
	border: var(--foo, red, blue, calc(10px 1rem));
}

```
