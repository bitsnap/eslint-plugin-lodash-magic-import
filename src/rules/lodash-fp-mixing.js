import _ from 'lodash/fp';

import { docUrl } from 'util';

export default {
  create: (ctx) => {
    let useLodash = false;
    let useLodashFp = false;

    return {
      ImportDeclaration(node) {
        const from = _.get('source.value')(node);
        const match = s => _.overSome([_.startsWith(s), _.isEqual(s)]);

        const fp = match('lodash/fp')(from);
        const l = match('lodash')(from) && !fp;

        useLodash = useLodash || l;
        useLodashFp = useLodashFp || fp;

        if (useLodash && useLodashFp) {
          ctx.report({
            node,
            message: 'mixing lodash and lodash/fp imports is forbidden',
          });
        }
      },

      'Program:exit': () => {
        useLodash = false;
        useLodashFp = false;
      },
    };
  },

  meta: {
    docs: {
      description: 'disallow mixing lodash and lodash/fp imports',
      recommended: true,
      url: docUrl(__filename),
    },
  },
};
