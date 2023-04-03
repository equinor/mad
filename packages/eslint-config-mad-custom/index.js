module.exports = {
  extends: [
    "turbo", "prettier", "plugin:react/recommended", 'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'no-console': 2
  },
  parser: '@typescript-eslint/parser'
};
