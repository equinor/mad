module.exports = {
    extends: [
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "airbnb-typescript",
        "airbnb/whitespace",
        "airbnb/hooks",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["simple-import-sort"],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            { overrides: { constructors: "no-public" } },
        ],
        "@typescript-eslint/lines-between-class-members": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "class-methods-use-this": "off",
        curly: ["error", "all"],
        "func-names": ["warn", "as-needed"],
        "import/no-default-export": "warn",
        "import/prefer-default-export": "off",
        "max-classes-per-file": "off",
        "no-await-in-loop": "off",
        "no-continue": "off",
        "no-plusplus": "off",
        "no-restricted-globals": "off",
        "no-restricted-syntax": [
            "error",
            {
                selector: "ForInStatement",
                message:
                    "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
            },
            {
                selector: "LabeledStatement",
                message:
                    "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
            },
            {
                selector: "WithStatement",
                message:
                    "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
            },
        ],
        "no-use-before-define": "off",
        "prettier/prettier": [
            "error",
            {
                arrowParens: "avoid",
                printWidth: 100,
                singleQuote: true,
                trailingComma: "all",
            },
        ],
        radix: "off",
        "react/function-component-definition": "off",
        "react/jsx-props-no-spreading": "off",
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "simple-import-sort/imports": "warn",
    },
};
