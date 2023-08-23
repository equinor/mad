module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            // Reanimated has to be listed last!
            "react-native-reanimated/plugin",
        ],
    };
};
