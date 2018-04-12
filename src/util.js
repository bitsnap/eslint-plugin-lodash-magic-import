import path from 'path';

const githubRepo = 'https://github.com/bitsnap/eslint-plugin-lodash-magic-import/blob/master/doc';

export const dummy = {};

export const docUrl = filename => `${githubRepo}/${path.basename(filename, '.js')}.md`;
