# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `a11y/useAriaProptypes`

### `0`

```

 lint/a11y/useAriaProptypes/reject/1/file.tsx:1:22 lint/a11y/useAriaProptypes ━━━━━━━━━━━━━━━━━━━━━━

  ✖ The value of the ARIA attribute aria-checked is not correct.

    <span role="checkbox" aria-checked="test" ></span>
                          ^^^^^^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```tsx
<span role="checkbox" aria-checked="test" />;

```

### `1`

```

 lint/a11y/useAriaProptypes/reject/2/file.tsx:1:6 lint/a11y/useAriaProptypes ━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The value of the ARIA attribute aria-autocomplete is not correct.

    <span aria-autocomplete="test" ></span>
          ^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ The supported values for the aria-autocomplete attribute are: "inline", "list", "both", "none"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```tsx
<span aria-autocomplete="test" />;

```

### `2`

```

 lint/a11y/useAriaProptypes/reject/3/file.tsx:1:6 lint/a11y/useAriaProptypes ━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The value of the ARIA attribute aria-invalid is not correct.

    <span aria-invalid="foo"></span>
          ^^^^^^^^^^^^^^^^^^

  ℹ The supported values for the aria-invalid attribute are: "grammar", false, "spelling", true

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```tsx
<span aria-invalid="foo" />;

```

### `3`

```

 lint/a11y/useAriaProptypes/reject/4/file.tsx:1:6 lint/a11y/useAriaProptypes ━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The value of the ARIA attribute aria-errormessage is not correct.

    <span aria-errormessage="" ></span>
          ^^^^^^^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `3: formatted`

```tsx
<span aria-errormessage="" />;

```

### `4`

```

 lint/a11y/useAriaProptypes/reject/5/file.tsx:1:6 lint/a11y/useAriaProptypes ━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The value of the ARIA attribute aria-relevant is not correct.

    <span aria-relevant="fancy" ></span>
          ^^^^^^^^^^^^^^^^^^^^^

  ℹ The supported values for the aria-relevant attribute are: "additions", "all", "removals",
    "text"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `4: formatted`

```tsx
<span aria-relevant="fancy" />;

```

### `5`

```

 lint/a11y/useAriaProptypes/reject/6/file.tsx:1:6 lint/a11y/useAriaProptypes ━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The value of the ARIA attribute aria-labelledby is not correct.

    <span aria-labelledby="" ></span>
          ^^^^^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `5: formatted`

```tsx
<span aria-labelledby="" />;

```

### `6`

```

 lint/a11y/useAriaProptypes/reject/7/file.tsx:1:6 lint/a11y/useAriaProptypes ━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The value of the ARIA attribute aria-labelledby is not correct.

    <span aria-labelledby={``} ></span>
          ^^^^^^^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `6: formatted`

```tsx
<span aria-labelledby={""} />;

```

### `7`

```

 lint/a11y/useAriaProptypes/reject/8/file.tsx:1:6 lint/a11y/useAriaProptypes ━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The value of the ARIA attribute aria-details is not correct.

    <span aria-details="" ></span>
          ^^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `7: formatted`

```tsx
<span aria-details="" />;

```

### `8`

```
✔ No known problems!

```

### `8: formatted`

```tsx
<span role="checkbox" aria-checked={checked} />;

```

### `9`

```
✔ No known problems!

```

### `9: formatted`

```tsx
<span role="checkbox" aria-checked="true" />;

```

### `10`

```
✔ No known problems!

```

### `10: formatted`

```tsx
<span role="checkbox" aria-checked={true} />;

```

### `11`

```
✔ No known problems!

```

### `11: formatted`

```tsx
<span role="checkbox" aria-checked="false" />;

```

### `12`

```
✔ No known problems!

```

### `12: formatted`

```tsx
<span role="checkbox" aria-checked="mixed" />;

```

### `13`

```
✔ No known problems!

```

### `13: formatted`

```tsx
<span role="checkbox" aria-autocomplete="both" />;

```

### `14`

```
✔ No known problems!

```

### `14: formatted`

```tsx
<span role="checkbox" aria-autocomplete="inline" />;

```

### `15`

```
✔ No known problems!

```

### `15: formatted`

```tsx
<span role="checkbox" aria-autocomplete="list" />;

```

### `16`

```
✔ No known problems!

```

### `16: formatted`

```tsx
<span role="checkbox" aria-autocomplete="none" />;

```

### `17`

```
✔ No known problems!

```

### `17: formatted`

```tsx
<span aria-invalid="true" />;

```

### `18`

```
✔ No known problems!

```

### `18: formatted`

```tsx
<span aria-invalid="grammar" />;

```

### `19`

```
✔ No known problems!

```

### `19: formatted`

```tsx
<span aria-invalid="false" />;

```

### `20`

```
✔ No known problems!

```

### `20: formatted`

```tsx
<span aria-invalid={false} />;

```

### `21`

```
✔ No known problems!

```

### `21: formatted`

```tsx
<span role="checkbox" aria-errormessage="someid" />;

```

### `22`

```
✔ No known problems!

```

### `22: formatted`

```tsx
<span role="checkbox" aria-relevant="additions" />;

```

### `23`

```
✔ No known problems!

```

### `23: formatted`

```tsx
<span role="checkbox" aria-relevant="additions all" />;

```

### `24`

```
✔ No known problems!

```

### `24: formatted`

```tsx
<span aria-labelledby="id" />;

```

### `25`

```
✔ No known problems!

```

### `25: formatted`

```tsx
<span aria-labelledby="fooId barId" />;

```

### `26`

```
✔ No known problems!

```

### `26: formatted`

```tsx
<span aria-details="someid" />;

```

### `27`

```

 lint/a11y/useAriaProptypes/reject/1/file.html:1:22 lint/a11y/useAriaProptypes ━━━━━━━━━━━━━━━━━━━━━

  ✖ The value of the ARIA attribute aria-checked is not correct.

    <span role="checkbox" aria-checked="test" ></span>
                          ^^^^^^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `27: formatted`

```html
<span role="checkbox" aria-checked="test">
</span>

```

### `28`

```

 lint/a11y/useAriaProptypes/reject/2/file.html:1:6 lint/a11y/useAriaProptypes ━━━━━━━━━━━━━━━━━━━━━━

  ✖ The value of the ARIA attribute aria-autocomplete is not correct.

    <span aria-autocomplete="test" ></span>
          ^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ The supported values for the aria-autocomplete attribute are: "inline", "list", "both", "none"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `28: formatted`

```html
<span aria-autocomplete="test">
</span>

```

### `29`

```

 lint/a11y/useAriaProptypes/reject/3/file.html:1:6 lint/a11y/useAriaProptypes ━━━━━━━━━━━━━━━━━━━━━━

  ✖ The value of the ARIA attribute aria-invalid is not correct.

    <span aria-invalid="foo"></span>
          ^^^^^^^^^^^^^^^^^^

  ℹ The supported values for the aria-invalid attribute are: "grammar", false, "spelling", true

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `29: formatted`

```html
<span aria-invalid="foo">
</span>

```

### `30`

```

 lint/a11y/useAriaProptypes/reject/4/file.html:1:6 lint/a11y/useAriaProptypes ━━━━━━━━━━━━━━━━━━━━━━

  ✖ The value of the ARIA attribute aria-errormessage is not correct.

    <span aria-errormessage="" ></span>
          ^^^^^^^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `30: formatted`

```html
<span aria-errormessage="">
</span>

```

### `31`

```

 lint/a11y/useAriaProptypes/reject/5/file.html:1:6 lint/a11y/useAriaProptypes ━━━━━━━━━━━━━━━━━━━━━━

  ✖ The value of the ARIA attribute aria-relevant is not correct.

    <span aria-relevant="fancy" ></span>
          ^^^^^^^^^^^^^^^^^^^^^

  ℹ The supported values for the aria-relevant attribute are: "additions", "all", "removals",
    "text"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `31: formatted`

```html
<span aria-relevant="fancy">
</span>

```

### `32`

```

 lint/a11y/useAriaProptypes/reject/6/file.html:1:6 lint/a11y/useAriaProptypes ━━━━━━━━━━━━━━━━━━━━━━

  ✖ The value of the ARIA attribute aria-labelledby is not correct.

    <span aria-labelledby="" ></span>
          ^^^^^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `32: formatted`

```html
<span aria-labelledby="">
</span>

```

### `33`

```

 lint/a11y/useAriaProptypes/reject/7/file.html:1:6 lint/a11y/useAriaProptypes ━━━━━━━━━━━━━━━━━━━━━━

  ✖ The value of the ARIA attribute aria-details is not correct.

    <span aria-details="" ></span>
          ^^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `33: formatted`

```html
<span aria-details="">
</span>

```

### `34`

```
✔ No known problems!

```

### `34: formatted`

```html
<span role="checkbox" aria-checked="true">
</span>

```

### `35`

```
✔ No known problems!

```

### `35: formatted`

```html
<span role="checkbox" aria-checked="false">
</span>

```

### `36`

```
✔ No known problems!

```

### `36: formatted`

```html
<span role="checkbox" aria-checked="mixed">
</span>

```

### `37`

```
✔ No known problems!

```

### `37: formatted`

```html
<span role="checkbox" aria-autocomplete="both">
</span>

```

### `38`

```
✔ No known problems!

```

### `38: formatted`

```html
<span role="checkbox" aria-autocomplete="inline">
</span>

```

### `39`

```
✔ No known problems!

```

### `39: formatted`

```html
<span role="checkbox" aria-autocomplete="list">
</span>

```

### `40`

```
✔ No known problems!

```

### `40: formatted`

```html
<span role="checkbox" aria-autocomplete="none">
</span>

```

### `41`

```
✔ No known problems!

```

### `41: formatted`

```html
<span aria-invalid="true">
</span>

```

### `42`

```
✔ No known problems!

```

### `42: formatted`

```html
<span aria-invalid="grammar">
</span>

```

### `43`

```
✔ No known problems!

```

### `43: formatted`

```html
<span aria-invalid="false">
</span>

```

### `44`

```
✔ No known problems!

```

### `44: formatted`

```html
<span role="checkbox" aria-errormessage="someid">
</span>

```

### `45`

```
✔ No known problems!

```

### `45: formatted`

```html
<span role="checkbox" aria-relevant="additions">
</span>

```

### `46`

```
✔ No known problems!

```

### `46: formatted`

```html
<span role="checkbox" aria-relevant="additions all">
</span>

```

### `47`

```
✔ No known problems!

```

### `47: formatted`

```html
<span aria-labelledby="id">
</span>

```

### `48`

```
✔ No known problems!

```

### `48: formatted`

```html
<span aria-labelledby="fooId barId">
</span>

```

### `49`

```
✔ No known problems!

```

### `49: formatted`

```html
<span aria-details="someid">
</span>

```
