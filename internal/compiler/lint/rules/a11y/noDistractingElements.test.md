# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `a11y/noDistractingElements`

### `0`

```

 lint/a11y/noDistractingElements/reject/1/file.tsx:1 lint/a11y/noDistractingElements ━━━━━━━━━━━━━━━

  ✖ Avoid using deprecated blink elements.

    <blink />
    ^^^^^^^^^

  ℹ Deprecated blink are difficult to read and distract attention away from page content,
    especially for users with visual impairments.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```tsx
<blink />;

```

### `1`

```

 lint/a11y/noDistractingElements/reject/2/file.tsx:1 lint/a11y/noDistractingElements ━━━━━━━━━━━━━━━

  ✖ Avoid using deprecated marquee elements.

    <marquee />
    ^^^^^^^^^^^

  ℹ Deprecated marquee are difficult to read and distract attention away from page content,
    especially for users with visual impairments.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```tsx
<marquee />;

```

### `2`

```
✔ No known problems!

```

### `2: formatted`

```tsx
<div />;

```

### `3`

```
✔ No known problems!

```

### `3: formatted`

```tsx
<Marquee />;

```

### `4`

```

 lint/a11y/noDistractingElements/reject/1/file.html:1 lint/a11y/noDistractingElements ━━━━━━━━━━━━━━

  ✖ Avoid using deprecated blink elements.

    <blink />
    ^^^^^^

  ℹ Deprecated blink are difficult to read and distract attention away from page content,
    especially for users with visual impairments.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `4: formatted`

```html
<blink>
</blink>

```

### `5`

```

 lint/a11y/noDistractingElements/reject/2/file.html:1 lint/a11y/noDistractingElements ━━━━━━━━━━━━━━

  ✖ Avoid using deprecated marquee elements.

    <marquee />
    ^^^^^^^^

  ℹ Deprecated marquee are difficult to read and distract attention away from page content,
    especially for users with visual impairments.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `5: formatted`

```html
<marquee>
</marquee>

```

### `6`

```
✔ No known problems!

```

### `6: formatted`

```html
<div>
</div>

```

### `7`

```
✔ No known problems!

```

### `7: formatted`

```html
<Marquee>
</Marquee>

```
