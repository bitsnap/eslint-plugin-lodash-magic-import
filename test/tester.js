import _ from 'lodash/fp';

import { Linter } from 'eslint';

// WARNING: ESLint Linter has side effects.
// So, it's advisable to use separate instances for valid/invalid testing

export default class Tester {
  constructor(t, rule, ruleName) {
    this.t = t;
    this.ruleName = ruleName;

    this.config = {
      parser: 'babel-eslint',
      rules: _.fromPairs([[this.ruleName, 'error']]),
    };

    this.linter = new Linter();
    // eslint-disable-next-line no-underscore-dangle
    this.linter.rules._rules = Object.create(null);

    this.linter.defineRules(_.fromPairs([
      [ruleName, rule],
    ]));
  }

  verify(code) {
    return _.isArray(code) ?
      _.map(c => this.linter.verify(c, this.config, { filename: this.ruleName }))(code)
      : [this.linter.verify(code, this.config, { filename: this.ruleName })];
  }

  valid(code) {
    _.forEach(r =>
      this.t.deepEqual(r, []))(this.verify(code));
  }

  invalid(code) {
    _.forEach(r =>
      this.t.deepEqual(this.ruleName, r.ruleId))(_.flattenDeep(this.verify(code)));
  }
}
