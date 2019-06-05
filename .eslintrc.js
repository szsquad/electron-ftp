module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
  },
  // extends: 'airbnb',
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    "@typescript-eslint",
  ],
  rules: {
    "max-len": ["error", { "code": 120 }],
    "react/jsx-filename-extension": 'off', // .jsx
    "react/no-array-index-key": 'off',
    "jsx-a11y/click-events-have-key-events": 'off',
    "react/prop-types": 'off',
    "jsx-a11y/no-noninteractive-element-interactions": 'off',
    "react/button-has-type": 'off',
    "@typescript-eslint/indent": 'off'
  },
};
