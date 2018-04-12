# _() Seq object wrap

lodash `_()` Seq object wrapping used for the [chain methods](chain-methods.md),
thus should be replaced with canonical `_.flow`/`_.pipe` methods.

Error:

```js
_([1, 2, 3])
 .tap((array) => {
   array.pop();
 }).reverse()
   .value();
```

-------

Ok:

```js
_.reverse([1,2,3]);
```
