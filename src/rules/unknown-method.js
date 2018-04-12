import _ from 'lodash/fp';

import functions from 'lodash-functions';

import { docUrl } from 'util';

export default {
  create: ctx => ({
    MemberExpression(node) {
      if (_.get('object.name')(node) === '_') {
        const fnName = _.get('property.name')(node);
        if (!_.includes(fnName)(functions)) {
          ctx.report({
            node,
            message: `${fnName} is unknown lodash method`,
          });
        }
      }
    },
  }),
  meta: {
    docs: {
      description: 'disallow usage of unknown lodash methods',
      recommended: true,
      url: docUrl(__filename),
    },
  },
};
