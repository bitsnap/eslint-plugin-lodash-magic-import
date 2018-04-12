import test from 'tape';

import Tester from 'tester';

import lodashAssign from 'rules/lodash-assign';

test('Should fail on lodash-assign', (t) => {
  const invalidCodeTable = [
    'const _ = {};',
    'const _ = {}, a = {};',
  ];

  const validCodeTable = [
    'const a = {};',
  ];

  t.plan(invalidCodeTable.length + validCodeTable.length);

  let tester = new Tester(t, lodashAssign, 'lodash-assign');
  tester.invalid(invalidCodeTable);

  tester = new Tester(t, lodashAssign, 'lodash-assign');
  tester.valid(validCodeTable);
});
