import _ from 'lodash/fp';

import { docUrl } from 'util';

export default {
  create: ctx => ({
    CallExpression(node) {
      if (_.get('callee.object.name')(node) === '_') {
        const fnName = _.get('callee.property.name')(node);
        if (_.includes(fnName)(['chain', 'tap', 'thru'])) {
          ctx.report({
            node,
            message: `${fnName} method is forbidden`,
          });
        }
      }
    },
  }),
  meta: {
    docs: {
      description: 'disallow chain methods',
      recommended: true,
      url: docUrl(__filename),
    },
  },
};
