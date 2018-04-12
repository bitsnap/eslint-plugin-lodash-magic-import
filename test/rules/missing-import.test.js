import test from 'tape';

import Tester from 'tester';

import missingImport from 'rules/missing-import';

test('Should fail on missing-import', (t) => {
  const invalidCodeTable = [
    '_.get();',
  ];

  const validCodeTable = [
    'import _ from "lodash/fp"; _.get();',
  ];

  t.plan(invalidCodeTable.length + validCodeTable.length);

  let tester = new Tester(t, missingImport, 'missing-import');
  tester.invalid(invalidCodeTable);

  tester = new Tester(t, missingImport, 'missing-import');
  tester.valid(validCodeTable);
});
