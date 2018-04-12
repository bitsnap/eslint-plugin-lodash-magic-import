import _ from 'lodash/fp';

import { docUrl } from 'util';

export default {
  create: (ctx) => {
    let useLodash = false;
    let useLodashFp = false;
    let usingLodash = false;

    return {
      CallExpression(node) {
        if (_.get('callee.object.name')(node) === '_') {
          usingLodash = true;
        }
      },

      ImportDeclaration(node) {
        const from = _.get('source.value')(node);
        const match = s => _.overSome([_.startsWith(s), _.isEqual(s)]);
        const fp = match('lodash/fp')(from);
        const l = match('lodash')(from) && !fp;

        useLodash = useLodash || l;
        useLodashFp = useLodashFp || fp;
      },

      'Program:exit': (node) => {
        if (!useLodash && !useLodashFp && usingLodash) {
          ctx.report({
            node,
            message: 'missing a lodash or lodash/fp import',
          });
        }

        useLodash = false;
        useLodashFp = false;
        usingLodash = false;
      },
    };
  },

  meta: {
    docs: {
      description: 'disallow lodash usage without an import',
      recommended: true,
      url: docUrl(__filename),
    },
  },
};
