/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    preset: "ts-jest",
    rootDir: "..",
    testMatch: ["<rootDir>/e2e/**/*.test.js"],
    testTimeout: 120000,
    maxWorkers: 1,
    setupFiles: ["<rootDir>/e2e/helpers.js"],
    verbose: true,
};
