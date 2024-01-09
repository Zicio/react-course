module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "i18next"],
  rules: {
    "react/jsx-indent": [2, 2],
    indent: [2, 2],
    "semi": ['error', 'always'],
    "@typescript-eslint/semi": ['error', 'always'],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/naming-convention": "warn",
    "i18next/no-literal-string": ['error', {markupOnly: true, ignoreAttribute: ['data-testid', 'to']}],
    "max-len": ["error", {code: 100, ignoreComments: true}]
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
