import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { EnvironmentContext, MadConfig } from "../../types";
import { createEnvironmentProxy } from "../../utils/createEnvironmentProxy";
import { useMemo } from "react";
import { EnvironmentName } from "@equinor/mad-components/dist/components/Environment/types";

type MadConfigState = {
    config: MadConfig | null;
    setConfig: (config: MadConfig) => void;
    setEnvironment: (env: EnvironmentName) => void;
};

const useMadConfigStore = create<MadConfigState>()(
    devtools(
        set => ({
            config: null,
            environment: "prod",
            setConfig: config => set(() => ({ config: config })),
            setEnvironment: env => {
                const newConfig = getPureConfig();
                newConfig.currentEnvironment = env;
                set(() => ({ config: newConfig }))
            },
        }),
        { name: "core/config" },
    ),
);

const MAD_CONFIG_NOT_FOUND_ERROR =
    "Mad config has not been provided! Make sure you use 'createCoreStackNavigator' to provide your config";

export const useMadConfig = (): EnvironmentContext => {
    const config = useMadConfigStore().config;
    if (!config) throw new Error(MAD_CONFIG_NOT_FOUND_ERROR);
    return useMemo(() => {
        return createEnvironmentProxy(config.currentEnvironment);
    }, [config]);
};

export const getConfig = (): EnvironmentContext => {
    const config = useMadConfigStore.getState().config;
    if (!config) throw new Error(MAD_CONFIG_NOT_FOUND_ERROR);
    return createEnvironmentProxy(config.currentEnvironment);
};

export const getPureConfig = (): MadConfig => {
    const config = useMadConfigStore.getState().config;
    if (!config) throw new Error(MAD_CONFIG_NOT_FOUND_ERROR);
    return config;
};

export const setConfig = (config: MadConfig) => {
    useMadConfigStore.getState().setConfig(config);
};

export const setEnvironment = (env: EnvironmentName) => {
    useMadConfigStore.getState().setEnvironment(env);
};
