import {getPremadeSettings} from "../../utils/getPremadeSettings";
import {useMadConfig} from "./mad-config";
import {getRedirectUriFromAuthConfig} from "../../utils/getRedirectUriFromAuthConfig";
import {MadConfig} from "../../types";
import {useDictionary} from "../../language/useDictionary";

export type AuthConfig = {
    clientId: MadConfig["authentication"]["clientId"];
    scopes: string[];
    /**
     * resolved redirectUri. This can either be `redirectUri` or `redirectUriWeb` from the mad config, depending on which platform
     * you're running on.
     */
    redirectUri: string;
};
export const useAuthConfig = (): AuthConfig => {
    const config = useMadConfig();
    const authentication = config.authentication;
    const { clientId, redirectUri: redirectUriConfig, redirectUriWeb, scopes } = authentication;
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
    return config.environments;
};

export const useServicePortalName = () => {
    const config = useMadConfig();
    return config.servicePortalName;
};

export const useAbout = () => {
    const config = useMadConfig();
    return config.about;
};

export const useSettingsScreenPremadeConfig = () => {
    const config = useMadConfig();
    const dictionary = useDictionary();
    return getPremadeSettings(config, dictionary);
};
