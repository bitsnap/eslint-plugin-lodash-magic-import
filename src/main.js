
import chainMethods from 'rules/chain-methods';
import lodashAssign from 'rules/lodash-assign';
import lodashEsUseless from 'rules/lodash-es-useless';
import lodashFpMixing from 'rules/lodash-fp-mixing';
import missingImport from 'rules/missing-import';
import objectWrap from 'rules/object-wrap';
import unknownMethod from 'rules/unknown-method';

export default {
  rules: {
    'chain-methods': chainMethods,
    'lodash-assign': lodashAssign,
    'lodash-es-useless': lodashEsUseless,
    'lodash-fp-mixing': lodashFpMixing,
    'missing-import': missingImport,
    'object-wrap': objectWrap,
    'unknown-method': unknownMethod,
  },
  configs: {
    recommended: {
      env: {
        es6: true,
      },
      rules: {
        'lodash-magic-import/chain-methods': 'error',
        'lodash-magic-import/lodash-assign': 'warn',
        'lodash-magic-import/lodash-es-useless': 'warn',
        'lodash-magic-import/lodash-fp-mixing': 'error',
        'lodash-magic-import/missing-import': 'warn',
        'lodash-magic-import/object-wrap': 'error',
        'lodash-magic-import/unknown-method': 'warn',
      },
    },
  },
};
