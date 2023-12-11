import { getPremadeSettings } from "../../utils/getPremadeSettings";
import { useMadConfig } from "./mad-config";
import { getRedirectUriFromAuthConfig } from "../../utils/getRedirectUriFromAuthConfig";
import { MadConfig } from "../../types";
import { useDictionary } from "../../language/useDictionary";

export type AuthConfig = {
    clientId: MadConfig["authentication"]["clientId"]
    scopes: MadConfig["authentication"]["scopes"]
    /**
     * resolved redirectUri. This can either be `redirectUri` or `redirectUriWeb` from the mad config, depending on which platform
     * you're running on.
     */
    redirectUri: string
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
    const dictionary = useDictionary()
    const premadeSettings = getPremadeSettings(config, dictionary);
    return premadeSettings;
};
