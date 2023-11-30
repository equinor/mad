import { getPremadeSettings } from "../../utils/getPremadeSettings";
import { useMadConfig } from "./mad-config";
import { getRedirectUriFromAuthConfig } from "../../utils/getRedirectUriFromAuthConfig";

export type AuthConfig = {
    clientId: string
    redirectUri: string
    scopes?: string[] | undefined
}
export const useAuthConfig = (): AuthConfig => {
    const {authentication} = useMadConfig();
    const {clientId, scopes} = authentication;
    const redirectUri = getRedirectUriFromAuthConfig(authentication);
    return {
        clientId,
        scopes,
        redirectUri
    }
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

export const useSettingsScreenPremadeConfig = () => {
    const config = useMadConfig();
    const premadeSettings = getPremadeSettings(config);
    return premadeSettings;
};
