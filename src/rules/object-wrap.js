import _ from 'lodash/fp';

import { docUrl } from 'util';

export default {
  create: ctx => ({
    CallExpression(node) {
      if (_.get('callee.name')(node) === '_') {
        ctx.report({
          node,
          message: 'Seq wrapping is forbidden',
        });
      }
    },
  }),
  meta: {
    docs: {
      description: 'disallow Seq wrapping',
      recommended: true,
      url: docUrl(__filename),
    },
  },
};
