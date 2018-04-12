import test from 'tape';

import _ from 'lodash/fp';

import Tester from 'tester';

import unknownMethod from 'rules/unknown-method';

import functions from 'lodash-functions';

test('Should fail on unknown-method', (t) => {
  const invalidCodeTable = [
    'import _ from "lodash"; _.blablablar();',
  ];

  const validCodeTable =
    _.map(s => `_.${s}()`)(_.times(() => functions[_.random(0, functions.length - 1)])(5));

  t.plan(invalidCodeTable.length + validCodeTable.length);

  let tester = new Tester(t, unknownMethod, 'unknown-method');
  tester.invalid(invalidCodeTable);

  tester = new Tester(t, unknownMethod, 'unknown-method');
  tester.valid(validCodeTable);
});
