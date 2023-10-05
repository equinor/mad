import React, { PropsWithChildren, createContext, useContext } from "react";
import { MadConfig } from "../types";

const MadConfigContext = createContext<MadConfig | undefined>(undefined);

export type MadConfigProviderProps = PropsWithChildren<{ config: MadConfig }>;
export const MadConfigProvider = ({ config, children }: MadConfigProviderProps) => (
    <MadConfigContext.Provider value={config}>{children}</MadConfigContext.Provider>
);

export const useMadCoreConfig = () => {
    const config = useContext(MadConfigContext);
    if (!config) throw new Error("Mad config has not been provided!");
    return config;
};

export const useAuthConfig = () => {
    const config = useMadCoreConfig();
    return config.authentication;
};

export const useLoginScreenConfig = () => {
    const config = useMadCoreConfig();
    return config.login;
};

export const useAppVersion = () => {
    const config = useMadCoreConfig();
    return config.appVersion;
};

export const useEnvironment = () => {
    const config = useMadCoreConfig();
    return config.environment;
};

export const useServicePortalName = () => {
    const config = useMadCoreConfig();
    return config.servicePortalName;
};
