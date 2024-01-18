/* eslint-disable no-undef -- configuration files need cjs format */
module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "babel-plugin-inline-import",
                {
                    extensions: [".svg"],
                },
            ],
            // Reanimated has to be listed last!
            "react-native-reanimated/plugin",
        ],
    };
};
