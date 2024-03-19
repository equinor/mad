const initialConfig = {
    accountShouldContainName: false,
    shouldFail: false,
};

let config = initialConfig;

export const getConfig = () => config;
export const setConfig = (newConfig: Partial<typeof config>) => {
    config = { ...config, ...newConfig };
};
export const resetConfig = () => setConfig(initialConfig);
