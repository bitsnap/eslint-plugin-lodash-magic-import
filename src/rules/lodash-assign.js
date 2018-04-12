import _ from 'lodash/fp';

import { docUrl } from 'util';

export default {
  create: ctx => ({
    VariableDeclaration(node) {
      const lodashDeclarations = _.filter(d => d.id.name === '_')(node.declarations);

      if (!_.isEmpty(lodashDeclarations)) {
        ctx.report({
          node,
          message: '_ is reserved for lodash',
        });
      }
    },
  }),
  meta: {
    docs: {
      description: 'disallow lodash variable declaration',
      recommended: true,
      url: docUrl(__filename),
    },
  },
};
