# Lodash assign

Assigning lodash is pointless when you've got [babel-plugin-lodash-magic-import](https://github.com/bitsnap/babel-plugin-lodash-magic-import).

Error:

```js
import _forEach from 'lodash/fp/forEach';
const _ = { forEach: _forEach };
```

-------

Ok:

```js
import _ from 'lodash';
_.forEach(v => console.log(v))([1,2,3]);
```
