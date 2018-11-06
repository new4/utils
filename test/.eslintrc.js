module.exports = {
  'env': {
    "mocha": true,
  },
  'extends': ['new4-eslintrc'],
  'rules': {
    'func-names': 'off',
    'prefer-arrow-callback': 'off',
  },
  'parserOptions': {
    'parser': 'babel-eslint'
  },
};
