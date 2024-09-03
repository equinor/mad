import { getPremadeSettings } from "../../utils/getPremadeSettings";
import { useMadConfig } from "./mad-config";
import { getRedirectUriFromAuthConfig } from "../../utils/getRedirectUriFromAuthConfig";
import { useDictionary } from "../../language/useDictionary";
import { useNavigation } from "@react-navigation/native";

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
    const redirectUri = getRedirectUriFromAuthConfig(redirectUriConfig, redirectUriWeb);
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

export const useExperimentalFeatures = () => {
    const config = useMadConfig();
    return config.experimental;
};

export const useServiceNow = () => {
    const config = useMadConfig();
    return config.serviceNow;
};

export const useNavigateToMainRoute = () => {
    const config = useMadConfig();
    const navigation = useNavigation();
    // @ts-expect-error gotta fix this one
    return () => config.navigateToMainRouteFn(navigation);
};

export const useSettingsScreenPremadeConfig = () => {
    const config = useMadConfig();
    const dictionary = useDictionary();
    return getPremadeSettings(config, dictionary);
};
