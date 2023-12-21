import { getPremadeSettings } from "../../utils/getPremadeSettings";
import { useMadConfig } from "./mad-config";
import { getRedirectUriFromAuthConfig } from "../../utils/getRedirectUriFromAuthConfig";
import { useDictionary } from "../../language/useDictionary";

export type AuthConfig = {
    clientId: string;
    scopes: string[];
    /**
     * resolved redirectUri. This can either be `redirectUri` or `redirectUriWeb` from the mad config, depending on which platform
     * you're running on.
     */
    redirectUri: string;
};
export const useAuthConfig = (): AuthConfig => {
    const config = useMadConfig();
    const {
        clientId,
        redirectUri: redirectUriConfig,
        redirectUriWeb,
        scopes,
    } = config.authentication;
    const redirectUri = getRedirectUriFromAuthConfig(clientId, redirectUriConfig, redirectUriWeb);
    return {
        clientId,
        scopes,
        redirectUri,
    };
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
    return config.currentEnvironment;
};

export const useServicePortalName = () => {
    const config = useMadConfig();
    return config.servicePortalName;
};

export const useAbout = () => {
    const config = useMadConfig();
    return config.about;
};

export const useServiceNowConfigurationItem = () => {
    const config = useMadConfig();
    return config.serviceNowConfigurationItem;
}

export const useSettingsScreenPremadeConfig = () => {
    const config = useMadConfig();
    const dictionary = useDictionary();
    return getPremadeSettings(config, dictionary);
};
