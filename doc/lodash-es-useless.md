# Lodash-es assign

[lodash-es](https://www.npmjs.com/package/lodash-es) is pointless with [babel-plugin-lodash-magic-import](https://github.com/bitsnap/babel-plugin-lodash-magic-import).

Error:

```js
import { forEach, map } from 'lodash-es';
```

-------

Ok:

```js
import _ from 'lodash';
_.map(v => `${v}`)([1,2,3]);
```
