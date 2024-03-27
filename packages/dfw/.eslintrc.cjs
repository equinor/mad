module.exports = {
    root: true,
    extends: ["@equinor/mad"],
    ignorePatterns: ["*.spec.ts", "*.cjs", "tsup.config.ts"],
    parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: ["packages/*/tsconfig.json", "./tsconfig.json"],
            },
        },
    },
};
