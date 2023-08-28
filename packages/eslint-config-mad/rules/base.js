module.exports = {
    extends: [
        "prettier",
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:eslint-comments/recommended",
    ],
    plugins: ["simple-import-sort"],
    rules: {
        "eslint-comments/disable-enable-pair": "off",
        "eslint-comments/require-description": "warn",
    },
};
