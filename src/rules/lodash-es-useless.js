import _ from 'lodash/fp';

import { docUrl } from 'util';

export default {
  create: ctx => ({
    ImportDeclaration(node) {
      const moduleName = _.get('source.value')(node);
      if (_.startsWith('lodash-es')(moduleName)) {
        ctx.report({
          node,
          message: 'lodash-magic-import plugin is completely useless with lodash-es',
        });
      }
    },
  }),
  meta: {
    docs: {
      description: 'disallow lodash-es usage',
      recommended: true,
      url: docUrl(__filename),
    },
  },
};
