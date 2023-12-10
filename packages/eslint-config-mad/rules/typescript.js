module.exports = {
    extends: [
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked"
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    settings: {
        "import/resolver": {
            typescript: true,
            node: true,
        },
    },
};
