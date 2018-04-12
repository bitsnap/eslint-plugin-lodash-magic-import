import test from 'tape';

import Tester from 'tester';

import objectWrap from 'rules/object-wrap';

test('Should fail on object-wrap', (t) => {
  const invalidCodeTable = [
    'import _ from "lodash"; _({});',
  ];

  const validCodeTable = [
    'import _ from "lodash/fp"; _.keys({});',
  ];

  t.plan(invalidCodeTable.length + validCodeTable.length);

  let tester = new Tester(t, objectWrap, 'object-wrap');
  tester.invalid(invalidCodeTable);

  tester = new Tester(t, objectWrap, 'object-wrap');
  tester.valid(validCodeTable);
});
