/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "@testing-library/react-native",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
    setupFilesAfterEnv: ["./jest-setup.ts"],
};
