import test from 'tape';

import Tester from 'tester';

import lodashEsUseless from 'rules/lodash-es-useless';

test('Should fail on lodash-es-useless', (t) => {
  const invalidCodeTable = [
    'import _ from "lodash-es"',
  ];

  const validCodeTable = [
    'import _ from "lodash/fp"',
  ];

  t.plan(invalidCodeTable.length + validCodeTable.length);

  let tester = new Tester(t, lodashEsUseless, 'lodash-es-useless');
  tester.invalid(invalidCodeTable);

  tester = new Tester(t, lodashEsUseless, 'lodash-es-useless');
  tester.valid(validCodeTable);
});
