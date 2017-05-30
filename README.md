# PostCSS Single Line

A [PostCSS](https://github.com/postcss/postcss) plugin that formats single-property
rules on oneline.

## Example
```js
postcss([
    require('postcss-single-line')
])
```

```css
/* Input example */
.foo {
  opacity: .5;
}

.bar {
  opacity: .5;
  outline: 1px solid red;
}
```

```css
/* Output example */
.foo { opacity: .5; }

.bar {
  opacity: .5;
  outline: 1px solid red;
}
```
