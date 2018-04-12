import test from 'tape';

import Tester from 'tester';

import lodashFpMixing from 'rules/lodash-fp-mixing';

test('Should fail on lodash-fp-mixing', (t) => {
  const invalidCodeTable = [
    'import _ from "lodash"; import _ from "lodash/fp";',
  ];

  const validCodeTable = [
    'import _ from "lodash/fp"; _.keys();',
  ];

  t.plan(invalidCodeTable.length + validCodeTable.length);

  let tester = new Tester(t, lodashFpMixing, 'lodash-fp-mixing');
  tester.invalid(invalidCodeTable);

  tester = new Tester(t, lodashFpMixing, 'lodash-fp-mixing');
  tester.valid(validCodeTable);
});
