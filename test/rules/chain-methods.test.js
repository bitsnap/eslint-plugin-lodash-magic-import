import test from 'tape';

import _ from 'lodash/fp';

import Tester from 'tester';

import chainMethods from 'rules/chain-methods';

import functions from 'lodash-functions';

test('Should fail on chain-methods', (t) => {
  const invalidCodeTable = [
    '_.chain()',
    '_.thru()',
    '_.tap()',
  ];

  const validCodeTable =
    _.map(s => `_.${s}()`)(_.times(() => functions[_.random(0, functions.length - 1)])(5));

  t.plan(invalidCodeTable.length + validCodeTable.length);

  let tester = new Tester(t, chainMethods, 'chain-methods');
  tester.invalid(invalidCodeTable);

  tester = new Tester(t, chainMethods, 'chain-methods');
  tester.valid(validCodeTable);
});
