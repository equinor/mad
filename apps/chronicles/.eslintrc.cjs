module.exports = {
    root: true,
    extends: ["@equinor/mad"],
    ignorePatterns: [".eslintrc.cjs", "babel.config.js"],
    parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
    },
};
