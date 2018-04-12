import test from 'tape';

import Tester from 'tester';

import noMagiCache from 'rules/no-magicache';

test('Should fail on no-magicache', (t) => {
  const invalidCodeTable = [
    'const _magicache = {};',
  ];

  const validCodeTable = [
    'const whatever = {};',
  ];

  t.plan(invalidCodeTable.length + validCodeTable.length);

  let tester = new Tester(t, noMagiCache, 'no-magicache');
  tester.invalid(invalidCodeTable);

  tester = new Tester(t, noMagiCache, 'no-magicache');
  tester.valid(validCodeTable);
});
