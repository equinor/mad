/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "jest-expo",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
    setupFilesAfterEnv: ["./jest-setup.ts"],
};
