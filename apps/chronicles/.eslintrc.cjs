module.exports = {
    root: true,
    extends: ["@equinor/mad"],
    ignorePatterns: [".eslintrc.cjs", "babel.config.js", "e2e/**"],
    parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
    },
};
