module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    "@typescript-eslint",
    "import"
  ],
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ]
}