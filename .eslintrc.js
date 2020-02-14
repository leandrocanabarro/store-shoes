module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: [
          '.jsx',
          '.js'
        ]
      }
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'react/prefer-stateless-function': 'off',
    'no-param-reassign': 'off',
    "no-console": ["error", { allow: ["tron"] }],
    'react/prop-types': 'off',
  },
};
