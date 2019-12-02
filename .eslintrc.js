module.exports = {
  'env': {
    'es6': true,
    'node': true,
  },
  'plugins': [
    'prettier'
  ],
  'extends': [
    'google',
    'prettier'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
  },
};
