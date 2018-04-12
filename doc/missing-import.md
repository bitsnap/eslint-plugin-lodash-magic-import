# Missing lodash import

Without a [lodash](https://lodash.com) or a [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) import [babel-plugin-lodash-magic-import](https://github.com/bitsnap/babel-plugin-lodash-magic-import)
is unable to detect which one to use.

Error:

```js
_.map(v => `${v}`)([1,2,3]);
```

-------

Ok:

```js
import _ from 'lodash';
_.map(v => `${v}`)([1,2,3]);
```
