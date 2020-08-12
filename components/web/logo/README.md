# Logo and Pulse

```js
import { Logo, Pulse } from '@bahn-x/dbx-web';
```

```jsx +jsxpreview +highlight="Logo","Pulse"
<Logo />
<Pulse />
```

## Size

The sizes are optimized for pixel-perfect rendering of the logo (based on its
10 : 7 aspect ratio). For each size of the Logo there’s a matching Pulse.

```jsx +jsxpreview +highlight="size={Logo.sizes.XS}" .columns
<Logo size={Logo.sizes.XS} />
<Pulse size={Logo.sizes.XS} />
```

```jsx +jsxpreview +highlight="size={Logo.sizes.S}" .columns
<Logo size={Logo.sizes.S} />
<Pulse size={Logo.sizes.S} />
```

```jsx +jsxpreview +highlight="size={Logo.sizes.M}" .columns
<Logo size={Logo.sizes.M} />
<Pulse size={Logo.sizes.M} />
```

```jsx +jsxpreview +highlight="size={Logo.sizes.L}" .columns
<Logo size={Logo.sizes.L} />
<Pulse size={Logo.sizes.L} />
```

```jsx +jsxpreview +highlight="size={Logo.sizes.XL}" .columns
<Logo size={Logo.sizes.XL} />
<Pulse size={Logo.sizes.XL} />
```

```jsx +jsxpreview +highlight="size={Logo.sizes.XXL}" .columns
<Logo size={Logo.sizes.XXL} />
<Pulse size={Logo.sizes.XXL} />
```

Never use different sizes for the Logo and the Pulse.

```jsx +jsxpreview .columns .bad
<Logo size={Logo.sizes.S} />
<Pulse size={Logo.sizes.XXL} />
```

Check the [Pulse guidelines][marke:pulse] for details.

## Alt text

By default “Deutsche Bahn” is used as a text alternative for screen readers by the Logo component.

```jsx +jsxpreview
<Logo />
```

In case you need another string, just add it as a children:

```jsx +jsxpreview +highlight="DB Regio"
<Logo>DB Regio</Logo>
```

## Variants

By default the logo has a transparent background.

```jsx +jsxpreview +highlight=/variant=[^ ]+/,/backgroundColor: '.+?'/ .columns +showmore=1,3
<div style={{ background: 'url(https://marketingportal.extranet.deutschebahn.com/sites/default/files/190902_DB_Bildwelt_Assets_sf3_3.png) 0 0/cover', padding: '16px', height: '200px', display: 'flex', alignItems: 'center' }}>
  <Logo />
</div>
```

```jsx +jsxpreview +highlight=/variant=[^ ]+/,/background: '.+?'/ .columns +showmore=1,3
<div style={{ background: 'url(https://marketingportal.extranet.deutschebahn.com/sites/default/files/190902_DB_Bildwelt_Assets_sf4_2.png) 0 0/cover', padding: '16px', height: '200px', display: 'flex', alignItems: 'center' }}>
  <Logo variant={Logo.variants.FILLED} />
</div>
```

The `DEFAULT` and `WHITE` variants do have transparent background. Light background is allowed to be visible. Noisy and dark backgrounds should use the `FILLED` variant. Red backgrounds require the `OUTLINED` variant. Please read the [official logo guidelines][marke:logo] for further details when to use which colors and backgrounds.

### Default

Red logo with transparent background.

```jsx +jsxpreview +highlight=/variant=[^ ]+/,/backgroundColor: '.+?'/ .right +showmore=1,3
<div style={{ backgroundColor: '#f0f3f5', padding: '16px' }}>
  <Logo />
  <Pulse />
</div>
```

### Filled

Red logo with white background.

```jsx +jsxpreview +highlight=/variant=[^ ]+/,/backgroundColor: '.+?'/ .right +showmore=1,3
<div style={{ backgroundColor: '#3c414b', padding: '16px' }}>
  <Logo variant={Logo.variants.FILLED} />
  <Pulse variant={Logo.variants.FILLED} />
</div>
```

The variant `FILLED` has no visual effect on the Pulse.

### Outlined

Red logo with white background and a white outline around the logo (which adds to the logo size; be aware when using `overflow: hidden`).

```jsx +jsxpreview +highlight=/variant=[^ ]+/,/backgroundColor: '.+?'/ .right +showmore=1,3
<div style={{ backgroundColor: '#ec0016', padding: '16px' }}>
  <Logo variant={Logo.variants.OUTLINED} />
</div>
```

Don’t use the Pulse with the variant `OUTLINED`.

### White

White logo with transparent background.

```jsx +jsxpreview +highlight=/variant=[^ ]+/,/backgroundColor: '.+?'/ .right +showmore=1,3
<div style={{ backgroundColor: '#641e32', padding: '16px' }}>
  <Logo variant={Logo.variants.WHITE} />
  <Pulse variant={Logo.variants.WHITE} />
</div>
```

## Linking the logo

The Logo can be linked. It automatically will show a DB-styled focus ring. You must reset the browser’s focus ring on the anchor element manually though.

```jsx +jsxpreview .good .columns +highlight="outline: 0"
<a href="#" style={{ outline: 0 }}>
  <Logo />
</a>
```

```jsx +jsxpreview .bad .columns
<a href="#">
  <Logo />
</a>
```

[marke:logo]: https://marketingportal.extranet.deutschebahn.com/en/logo-2
[marke:pulse]: marketingportal.extranet.deutschebahn.com/en/pulse