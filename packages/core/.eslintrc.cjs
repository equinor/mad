module.exports = {
    root: true,
    extends: ["@equinor/mad"],
    ignorePatterns: ["*.spec.ts", "*.cjs", "tsup.config.ts", "jest-setup.ts", "__mocks__/**"],
    parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
    },
};
