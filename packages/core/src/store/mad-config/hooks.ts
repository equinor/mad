import { useMadConfig } from "./mad-config";

export const useAuthConfig = () => {
    const config = useMadConfig();
    return config.authentication;
};

export const useLoginScreenConfig = () => {
    const config = useMadConfig();
    return config.login;
};

export const useAppVersion = () => {
    const config = useMadConfig();
    return config.appVersion;
};

export const useEnvironment = () => {
    const config = useMadConfig();
    return config.environment;
};

export const useServicePortalName = () => {
    const config = useMadConfig();
    return config.servicePortalName;
};
