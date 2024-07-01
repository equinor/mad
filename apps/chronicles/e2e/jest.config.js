/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
    preset: "ts-jest",
    rootDir: "..",
    testMatch: ["<rootDir>/e2e/**/*.test.js"],
    testTimeout: 120000,
    maxWorkers: 1,
    setupFiles: ["<rootDir>/e2e/helpers.js"],
    globalSetup: "detox/runners/jest/globalSetup",
     globalTeardown: "detox/runners/jest/globalTeardown",
     reporters: ["detox/runners/jest/reporter"],
     testEnvironment: "detox/runners/jest/testEnvironment",
    verbose: true,
};
