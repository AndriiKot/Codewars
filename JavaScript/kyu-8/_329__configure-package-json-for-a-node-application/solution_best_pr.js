const configuration = {
  name: 'packagecfg-kata',
  version: '1.0.0-alpha',
  description: 'Configuring package.json for this kata',
  main: 'index.js',
  scripts: {
    start: 'node index.js',
    dev: 'nodemon index.js',
    test: 'mocha test.js',
  },
  keywords: ['codewars', 'kata'],
  bugs: {
    url: 'http://codingwise.com/',
    email: 'brunolm7@gmail.com',
  },
  license: 'MIT',
  author: 'BrunoLM <brunolm7@gmail.com> (http://codingwise.com/)',
  contributors: [{ name: 'Saitama' }],
  repository: {
    type: 'git',
    url: 'http://codewars.com/kata/configure-package-json',
  },
  private: false,
  preferGlobal: false,
  engines: {
    node: '^5.0.0',
    babel: '^6.0.0',
  },
  os: ['windows'],
  cpu: ['x64'],
  dependencies: {
    express: '^4.13.3',
    'babel-core': '^6.0.0',
    'babel-polyfill': '^6.0.0',
    'babel-preset-es2015': '^6.0.0',
    'babel-preset-stage-0': '^6.0.0',
  },
  devDependencies: {
    assertsharp: '^1.0.1',
    mocha: '^2.3.4',
  },
};
