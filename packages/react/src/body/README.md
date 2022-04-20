# Body (typography)

```js
import { Body } from '@db-design/react';
```

```jsx
<Body>Great content</Body>
```

<!-- Auto-generated content following, DO NOT update by hand! -->
<!-- START props-table -->

## Props

<details>
  <summary class="db-props-toggle">Show/hide component props</summary>
  <table class="db-props-table">
    <thead>
      <tr>
        <th>Prop name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>size</strong></td>
        <td><code>ResponsiveType&lt;&quot;xs&quot; | &quot;s&quot; | &quot;m&quot; | &quot;l&quot;&gt;</code></td>
        <td>false</td>
        <td>m</td>
        <td></td>
      </tr>
      <tr>
        <td><strong>bold</strong></td>
        <td><code>boolean</code></td>
        <td>false</td>
        <td>false</td>
        <td></td>
      </tr>
      <tr>
        <td><strong>className</strong></td>
        <td><code>string</code></td>
        <td>false</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td><strong>variant</strong></td>
        <td><code>&quot;primary&quot; | &quot;secondary&quot;</code></td>
        <td>false</td>
        <td>primary</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- END props-table -->

## Size

```jsx
<Body size="l">
  Body in size L. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
  Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
  Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
  denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
  tragen.
</Body>
```

```jsx
<Body size="m">
  Body in size M. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
  Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
  Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr.
</Body>
```

```jsx
<Body size="s">
  Body in size S. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
  Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
  Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
  denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
  tragen.
</Body>
```

```jsx
<Body size="xs">
  Body in size XS. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
  Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
  Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
  denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
  tragen.
</Body>
```

## Weight

```jsx
<Body bold>Bold copy</Body>
```

```jsx
<Body>
  Partially <b>bold</b> copy
</Body>
```

```jsx
<Body>
  Partially <strong>bold</strong> copy
</Body>
```

## Italic

```jsx
<Body>
  Partially <i>italic</i> copy
</Body>
```

```jsx
<Body>
  Partially <em>italic</em> copy
</Body>
```

## Secondary

```jsx
<Body variant="secondary">Secondary Body</Body>
```

## Usage

The `<Body>` component adds the text style only. It is recommended to wrap it in a `<p>` or other HTML element depending on your needs.

```jsx
<p>
  <Body>
    Body in a p. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer. Wir
    haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
    Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
    denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
    tragen.
  </Body>
</p>
```

```jsx
<h1>
  <Body>
    Body in an h1. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
    Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
    Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
    denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
    tragen.
  </Body>
</h1>
```

```jsx
<label>
  <Body size="s">Body S in a label.</Body>
</label>
```

If you expect more than one line, take care the wrapping element is a block element:

```jsx
<label>
  <Body size="s">
    Body in a label. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
    Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
    Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
    denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
    tragen.
  </Body>
</label>
```

By applying `display: block`, the line-height works as expected:

```jsx
<label style={{ display: 'block' }}>
  <Body size="s">
    Body in a label. Hier finden Sie Ausflugsziele für Tagesausflüge in alle Bundesländer.
    Wir haben die Ziele sorgfältig geprüft und mit ausführlichen Anreisetipps versehen.
    Außerdem finden Sie spezielle Ticket-Tipps für Ihre Anreise im Nahverkehr. Und bitte
    denken Sie daran, in unseren Zügen und in den Bahnhöfen Ihren Mund-Nase-Schutz zu
    tragen.
  </Body>
</label>
```