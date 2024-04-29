import {
    AuthRequest,
    AuthRequestConfig,
    DiscoveryDocument,
    exchangeCodeAsync,
    TokenResponse,
} from "expo-auth-session";
import {
    getConfig,
    getDiscovery,
    getToken,
    getUserData,
    setConfig,
    setDiscovery,
    setToken,
    setUserData,
} from "./store/authStore";
import { tokenRefresh } from "./utils/tokenRefresh";
import { MadAuthenticationResult } from "../types";
import * as WebBrowser from "expo-web-browser";
import "core-js/stable/atob";
import { decodeToken } from "./utils/decodeToken";

export function initiateAuthenticationClient(
    config: AuthRequestConfig,
    discovery: DiscoveryDocument,
) {
    setConfig(config);
    setDiscovery(discovery);
}

export function authenticationClientExists(): boolean {
    return !!getConfig() && !!getDiscovery();
}

export const authenticateInteractively = async (): Promise<MadAuthenticationResult | null> => {
    WebBrowser.maybeCompleteAuthSession();
    const discovery = getDiscovery();
    const config = getConfig();
    if (!discovery || !config) return null;

    const authRequest = new AuthRequest(config);

    const codeResponse = await authRequest.promptAsync(discovery);
    if (codeResponse?.type === "success") {
        const accessTokenConfig = {
            clientId: config.clientId,
            code: codeResponse.params["code"],
            extraParams: authRequest.codeVerifier
                ? { code_verifier: authRequest.codeVerifier }
                : undefined,
            redirectUri: config.redirectUri,
        };
        const tokenResponse = await exchangeCodeAsync(accessTokenConfig, discovery);
        const userData = decodeToken(tokenResponse.accessToken);
        if (!userData) return null;
        setUserData(userData);
        setToken(tokenResponse);
        return { account: userData, accessToken: tokenResponse.accessToken };
    }
    return null;
};

export const authenticateSilently = async (): Promise<MadAuthenticationResult | null> => {
    const userData = getUserData();
    const token = getToken();
    if (!userData || !token) return null;

    if (TokenResponse.isTokenFresh(token)) {
        return { account: userData, accessToken: token.accessToken };
    }

    const newToken = await tokenRefresh(token);
    if (newToken) {
        setToken(newToken);
        return { account: userData, accessToken: newToken.accessToken };
    }
    return null;
};
