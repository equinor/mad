module.exports = {
    root: true,
    extends: ["@equinor/mad"],
    parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      }
};
