module.exports = {
    root: true,
    extends: ["@equinor/mad"],
    ignorePatterns: ["*.spec.ts", "*.cjs", "tsup.config.ts"],
    parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
    },
};
