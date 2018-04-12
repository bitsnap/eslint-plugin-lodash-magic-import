import _ from 'lodash/fp';

import { docUrl } from 'util';

export default {
  create: ctx => ({
    Identifier(node) {
      if (node.name === '_magicache') {
        ctx.report({
          node,
          message: '_magicache identifier is reserved',
        });
      }
    },
  }),
  meta: {
    docs: {
      description: 'disallow usage of reserved _magicache identifier',
      recommended: true,
      url: docUrl(__filename),
    },
  },
};
