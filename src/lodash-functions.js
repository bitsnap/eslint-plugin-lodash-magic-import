import _ from 'lodash/fp';

// Lodash 4.17.5 functions list

const arrayFunctions = [
  'chunk',
  'compact',
  'concat',
  'difference',
  'differenceBy',
  'differenceWith',
  'drop',
  'dropRight',
  'dropRightWhile',
  'dropWhile',
  'fill',
  'findIndex',
  'findLastIndex',
  'first',
  'flatten',
  'flattenDeep',
  'flattenDepth',
  'fromPairs',
  'head',
  'indexOf',
  'initial',
  'intersection',
  'intersectionBy',
  'intersectionWith',
  'join',
  'last',
  'lastIndexOf',
  'nth',
  'pull',
  'pullAll',
  'pullAllBy',
  'pullAllWith',
  'pullAt',
  'remove',
  'reverse',
  'slice',
  'sortedIndex',
  'sortedIndexBy',
  'sortedIndexOf',
  'sortedLastIndex',
  'sortedLastIndexBy',
  'sortedLastIndexOf',
  'sortedUniq',
  'sortedUniqBy',
  'tail',
  'take',
  'takeRight',
  'takeRightWhile',
  'takeWhile',
  'union',
  'unionBy',
  'unionWith',
  'uniq',
  'uniqBy',
  'uniqWith',
  'unzip',
  'unzipWith',
  'without',
  'xor',
  'xorBy',
  'xorWith',
  'zip',
  'zipObject',
  'zipObjectDeep',
  'zipWith',
];

const collectionFunctions = [
  'countBy',
  'each',
  'eachRight',
  'every',
  'filter',
  'find',
  'findLast',
  'flatMap',
  'flatMapDeep',
  'flatMapDepth',
  'forEach',
  'forEachRight',
  'groupBy',
  'includes',
  'invokeMap',
  'keyBy',
  'map',
  'orderBy',
  'partition',
  'reduce',
  'reduceRight',
  'reject',
  'sample',
  'sampleSize',
  'shuffle',
  'size',
  'some',
  'sortBy',
];

const dateFunctions = [
  'now',
];


const fpFunctions = [ // functionsFunctions :D
  'after',
  'ary',
  'before',
  'bind',
  'bindKey',
  'curry',
  'curryRight',
  'debounce',
  'defer',
  'delay',
  'flip',
  'memoize',
  'negate',
  'once',
  'overArgs',
  'partial',
  'partialRight',
  'rearg',
  'rest',
  'spread',
  'throttle',
  'unary',
  'wrap',
];

const languageFunctions = [
  'castArray',
  'clone',
  'cloneDeep',
  'cloneDeepWith',
  'cloneWith',
  'conformsTo',
  'eq',
  'gt',
  'gte',
  'isArguments',
  'isArray',
  'isArrayBuffer',
  'isArrayLike',
  'isArrayLikeObject',
  'isBoolean',
  'isBuffer',
  'isDate',
  'isElement',
  'isEmpty',
  'isEqual',
  'isEqualWith',
  'isError',
  'isFinite',
  'isFunction',
  'isInteger',
  'isLength',
  'isMap',
  'isMatch',
  'isMatchWith',
  'isNaN',
  'isNative',
  'isNil',
  'isNull',
  'isNumber',
  'isObject',
  'isObjectLike',
  'isPlainObject',
  'isRegExp',
  'isSafeInteger',
  'isSet',
  'isString',
  'isSymbol',
  'isTypedArray',
  'isUndefined',
  'isWeakMap',
  'isWeakSet',
  'lt',
  'lte',
  'toArray',
  'toFinite',
  'toInteger',
  'toLength',
  'toNumber',
  'toPlainObject',
  'toSafeInteger',
  'toString',
];

const mathFunctions = [
  'add',
  'ceil',
  'divide',
  'floor',
  'max',
  'maxBy',
  'mean',
  'meanBy',
  'min',
  'minBy',
  'multiply',
  'round',
  'subtract',
  'sum',
  'sumBy',
];

const numberFunctions = [
  'clamp',
  'inRange',
  'random',
];

const objectFunctions = [
  'assign',
  'assignIn',
  'assignInWith',
  'assignWith',
  'at',
  'create',
  'defaults',
  'defaultsDeep',
  'entries',
  'entriesIn',
  'extend',
  'extendWith',
  'findKey',
  'findLastKey',
  'forIn',
  'forInRight',
  'forOwn',
  'forOwnRight',
  'functions',
  'functionsIn',
  'get',
  'has',
  'hasIn',
  'invert',
  'invertBy',
  'invoke',
  'keys',
  'keysIn',
  'mapKeys',
  'mapValues',
  'merge',
  'mergeWith',
  'omit',
  'omitBy',
  'pick',
  'pickBy',
  'result',
  'set',
  'setWith',
  'toPairs',
  'toPairsIn',
  'transform',
  'unset',
  'update',
  'updateWith',
  'values',
  'valuesIn',
];

const seqFunctions = [
  'chain',
  'tap',
  'thru',
];

const stringFunctions = [
  'camelCase',
  'capitalize',
  'deburr',
  'endsWith',
  'escape',
  'escapeRegExp',
  'kebabCase',
  'lowerCase',
  'lowerFirst',
  'pad',
  'padEnd',
  'padStart',
  'parseInt',
  'repeat',
  'replace',
  'snakeCase',
  'split',
  'startCase',
  'startsWith',
  'template',
  'toLower',
  'toUpper',
  'trim',
  'trimEnd',
  'trimStart',
  'truncate',
  'unescape',
  'upperCase',
  'upperFirst',
  'words',
];

const utilFunctions = [
  'attempt',
  'bindAll',
  'cond',
  'conforms',
  'constant',
  'defaultTo',
  'flow',
  'flowRight',
  'identity',
  'iteratee',
  'matches',
  'matchesProperty',
  'method',
  'methodOf',
  'mixin',
  'noConflict',
  'noop',
  'nthArg',
  'over',
  'overEvery',
  'overSome',
  'property',
  'propertyOf',
  'range',
  'rangeRight',
  'runInContext',
  'stubArray',
  'stubFalse',
  'stubObject',
  'stubString',
  'stubTrue',
  'times',
  'toPath',
  'uniqueId',
];

const propertiesFunctions = [
  'VERSION',
  'templateSettings',
];

const shortHands = [
  'assignAll',
  'assignInAll',
  'defaultsAll',
  'defaultsDeepAll',
  'mergeAll',
  'zipAll',
  'assignAllWith',
  'assignInAllWith',
  'curryN',
  'curryRightN',
  'mergeAllWith',
  'restFrom',
  'spreadFrom',
  'trimChars',
  'trimCharsEnd',
  'trimCharsStart',
  'findFrom',
  'findIndexFrom',
  'findLastFrom',
  'findLastIndexFrom',
  'getOr',
  'includesFrom',
  'indexOfFrom',
  'invokeArgs',
  'invokeArgsMap',
  'lastIndexOfFrom',
  'padChars',
  'padCharsEnd',
  'padCharsStart',
  'rangeStep',
  'rangeStepRight',
  'convert',
  'placeholder',
  'nAry',
  'paths',
  'props',
  'always',
  'dropLast',
  'dropLastWhile',
  'unnest',
  'pipe',
  'compose',
  'init',
  'invertObj',
  'indexBy',
  'pluck',
  'pathEq',
  'propEq',
  'complement',
  'omitAll',
  'juxt',
  'useWith',
  'allPass',
  'anyPass',
  'pickAll',
  'unapply',
  'assoc',
  'assocPath',
  'apply',
  'takeLast',
  'takeLastWhile',
  'dissoc',
  'dissocPath',
  'symmetricDifference',
  'symmetricDifferenceBy',
  'symmetricDifferenceWith',
  'zipObj',
  'where',
  'identical',
  'all',
  'path',
  'prop',
  'contains',
  'equals',
  'whereEq',
  'F',
  'T',
  'any',
  'extendAll',
  'extendAllWith',
  'pathOr',
  'propOr',
  '__',
];

const functions = _.flatMap(_.identity)([
  arrayFunctions,
  collectionFunctions,
  dateFunctions,
  fpFunctions,
  languageFunctions,
  mathFunctions,
  numberFunctions,
  objectFunctions,
  seqFunctions,
  stringFunctions,
  utilFunctions,
  propertiesFunctions,
  shortHands,
]);

export default functions;
