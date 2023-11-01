import { SettingsScreenConfiguration } from "../../components/screens/settings/types";
import { getPremadeSettings } from "../../utils/getPremadeSettings";
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

export const useSettingsScreenConfig = (): SettingsScreenConfiguration => {
    const config = useMadConfig();
    const premadeSettings = getPremadeSettings(config);
    return [premadeSettings, ...config.settings];
};
