/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "@testing-library/react-native",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
    setupFilesAfterEnv: ["./jest-setup.ts"],
    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|react-native-reanimated|react-native-worklets)/",
    ],
};
