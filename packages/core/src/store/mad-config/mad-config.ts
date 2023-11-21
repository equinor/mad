import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { MadConfig } from "../../types";

type MadConfigState = {
    config: MadConfig | null;
    setConfig: (config: MadConfig) => void;
};

const useMadConfigStore = create<MadConfigState>()(
    devtools(
        set => ({
            config: null,
            setConfig: config => set(() => ({ config: config })),
        }),
        { name: "core/config" },
    ),
);

const MAD_CONFIG_NOT_FOUND_ERROR =
    "Mad config has not been provided! Make sure you use 'createCoreStackNavigator' to provide your config";

export const useMadConfig = (): MadConfig => {
    const config = useMadConfigStore().config;
    if (!config) throw new Error(MAD_CONFIG_NOT_FOUND_ERROR);
    return config;
};

export const getConfig = (): MadConfig => {
    const config = useMadConfigStore.getState().config;
    if (!config) throw new Error(MAD_CONFIG_NOT_FOUND_ERROR);
    return config;
};

export const setConfig = (config: MadConfig) => {
    useMadConfigStore.getState().setConfig(config);
};
