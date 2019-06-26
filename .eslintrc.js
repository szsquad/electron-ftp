module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "react-hooks",
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: '../sz/webpack.config/webpack.base.js',
      },
    },
  },
  rules: {
    "no-unused-vars": 'off',
    "@typescript-eslint/no-unused-vars": ["error", {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": false
    }], // eslint的no unsed vars 不能识别interface
    "max-len": ["error", { "code": 120 }],
    "react/jsx-filename-extension": 'off', // .jsx
    "react/no-array-index-key": 'off',
    "jsx-a11y/click-events-have-key-events": 'off',
    "react/prop-types": 'off',
    "jsx-a11y/no-noninteractive-element-interactions": 'off',
    "react/button-has-type": 'off',
    "@typescript-eslint/indent": 'off',
    "react/sort-comp": 'off',
    "@typescript-eslint/explicit-function-return-type": 'off',
    "@typescript-eslint/no-explicit-any": 'off',
    "jsx-a11y/no-static-element-interactions": 'off',
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn"
  }
};
