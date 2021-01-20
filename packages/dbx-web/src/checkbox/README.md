# Checkbox

```js
import { Checkbox } from '@bahn-x/dbx-web';
```

```jsx
<Checkbox>Checkbox</Checkbox>
```

## States

### Checked

```jsx
<Checkbox>Checkbox unchecked</Checkbox>
```

```jsx
<Checkbox checked>Checkbox checked</Checkbox>
```

### Indeterminate

The indeterminate state does not show if the Checkbox is checked or not. When you click the Checkbox, it will change its [state](#states). The first example will change to checked, the second example will change to unchecked when clicking the Checkbox.

```jsx
<Checkbox indeterminate>Checkbox indeterminate unchecked</Checkbox>
```

```jsx
<Checkbox indeterminate checked>
  Checkbox indeterminate checked
</Checkbox>
```

The indeterminate state can’t be restored by the user. It must be reset via JavaScript:

```jsx
import { useState } from 'react';
import { Button } from '@bahn-x/dbx-web';
import { spacing } from '@bahn-x/dbx-tokens/src/deutsche-bahn';
const [isIndeterminate, setIndeterminate] = useState(true);

const handleButtonClick = () => {
  setIndeterminate(true);
};

const handleCheckboxClick = () => {
  setIndeterminate(false);
};
<>
  <Checkbox
    indeterminate={isIndeterminate}
    checked
    onClick={handleCheckboxClick}
  >
    Checkbox indeterminate checked
  </Checkbox>
  <Button
    onClick={handleButtonClick}
    disabled={isIndeterminate}
    size={Button.sizes.M}
    style={{ marginLeft: `${spacing.m}px` }}
  >
    Reset
  </Button>
</>;
```

### Disabled

```jsx
<Checkbox disabled>Disabled Checkbox</Checkbox>
```

```jsx
<Checkbox disabled checked>
  Disabled Checkbox
</Checkbox>
```

## Checkbox and links

The label of the Checkbox is an interactive element to toggle its state. If you add a link within the label,
it’s difficult to cope with an interactive element within an already interactive element. This is an [accessibility issue
for people who use screen readers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#Accessibility_concerns).

Therefor we recommend to place links associated with the Checkbox right below it, outside the label.

```jsx
<Checkbox footer={<a href="#terms">Read our Terms and Conditions</a>}>
  I accept the <b>Terms and Conditions</b>.
</Checkbox>
```

However, links can be used within the label. Clicking the link won’t change the [state](#states) of the Checkbox. Make sure to style the link properly or use a link component.

```jsx
// Avoid this design pattern
<Checkbox>
  I accept the <a href="#terms">Terms and Conditions</a>.
</Checkbox>
```

It’s possible to use more than one link in the footer:

```jsx
<Checkbox
  footer={
    <>
      <a href="#terms-db">Read the Terms and Conditions of Deutsche Bahn AG</a>{' '}
      <a href="#terms-xyz">Read the Terms and Conditions of XYZ AG</a>
    </>
  }
>
  I accept the <b>Terms and Conditions of Deutsche Bahn AG</b> and the{' '}
  <b>Terms and Conditions of XYZ AG</b>.
</Checkbox>
```

## Long labels

```jsx
<Checkbox>
  The label of the Checkbox can get a very long text which is sometimes needed
  for accepting terms of use or privacy terms. In this case the label wraps
  nicely and the checkbox stays aligned with the first line of the label.
</Checkbox>
```