module.exports = {
    extends: [
        "turbo",
        "prettier",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/jsx-runtime",
    ],
    rules: {
        "no-console": 2,
    },
    parser: "@typescript-eslint/parser",
    settings: {
        react: {
            version: "detect",
        },
    },
    ignorePatterns: ["*Legacy*"],
};
