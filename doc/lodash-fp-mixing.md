# Mixing lodash and lodash/fp

Mixing [lodash](https://lodash.com) and [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) is bad for [babel-plugin-lodash-magic-import](https://github.com/bitsnap/babel-plugin-lodash-magic-import),
because it's unable to detect the right method version for you.

Error:

```js
import _ from 'lodash/fp';
import map from 'lodash/map';
```

-------

Ok:

```js
import _ from 'lodash';
_.map(v => `${v}`)([1,2,3]);
```
