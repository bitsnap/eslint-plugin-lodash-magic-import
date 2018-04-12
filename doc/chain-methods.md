# Chain Methods

Chain, tap, thru methods are considered a bad practice, and are unusable with for lodash/fp.

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
