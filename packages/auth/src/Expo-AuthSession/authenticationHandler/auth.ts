import {
    AuthRequest,
    AuthRequestConfig,
    DiscoveryDocument,
    exchangeCodeAsync,
    refreshAsync,
    TokenResponse,
} from "expo-auth-session";
import {
    getConfig,
    getDiscovery,
    getRefreshToken,
    getToken,
    getUserData,
    resetConfig,
    resetDiscovery,
    resetToken,
    resetUserData,
    setConfig,
    setDiscovery,
    setRefreshToken,
    setToken,
    setUserData,
} from "../store/authStore";
import { tokenRefresh } from "../utils/tokenRefresh";
import { MadAccount, MadAuthenticationResult } from "../../types";
import "core-js/stable/atob";
import { decodeToken } from "../utils/decodeToken";

/**
 * Initiates the auth client by setting the needed properties in the zustand store
 * @param config -- contains app specific configurations for authentication such as clientId, redirectUri etc.
 * @param discovery -- equivalent to authority from msal but with some more properties
 */
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

/**
 * Authenticate interactively. This will open an in-app browser, or the Microsoft Authenticator app if the
 * user has it installed
 * @returns {MadAuthenticationResult | null} an object containing the access token and the account, or null
 */
export const authenticateInteractively = async (
    scopes?: string[],
): Promise<MadAuthenticationResult | null> => {
    const discovery = getDiscovery();
    const config = getConfig();
    if (!discovery || !config) return null;
    if (scopes) {
        config.scopes = scopes;
    }
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
        const userData = decodeToken(tokenResponse.idToken);
        if (!userData) return null;
        setUserData(userData);
        setToken(tokenResponse);
        if (tokenResponse.refreshToken) setRefreshToken(tokenResponse.refreshToken);
        return { account: userData, accessToken: tokenResponse.accessToken };
    }
    return null;
};

/**
 * Authenticate silently.
 * @returns {MadAuthenticationResult | null} an object containing the access token and the account, or null
 */
export const authenticateSilently = async (
    scopes?: string[],
): Promise<MadAuthenticationResult | null> => {
    const userData = getUserData();
    const token = getToken(scopes);
    if (!userData) return null;
    if (token) {
        if (TokenResponse.isTokenFresh(token)) {
            return {
                account: userData,
                accessToken: token.accessToken,
            };
        }
        const newToken = await tokenRefresh(token, scopes);
        if (newToken) {
            setToken(newToken);
            if (newToken.refreshToken) setRefreshToken(newToken.refreshToken);
            return {
                account: userData,
                accessToken: newToken.accessToken,
            };
        }
        const interactiveToken = await authenticateInteractively();
        return interactiveToken;
    } else {
        const refreshToken = getRefreshToken();
        const config = getConfig();
        const discovery = getDiscovery();
        if (!config || !discovery) return null;
        if (refreshToken) {
            try {
                const refreshed = await refreshAsync(
                    {
                        clientId: config.clientId,
                        refreshToken,
                        scopes,
                    },
                    discovery,
                );
                setToken(refreshed);
                if (refreshed.refreshToken) setRefreshToken(refreshed.refreshToken);
                return {
                    account: userData,
                    accessToken: refreshed.accessToken,
                };
            } catch (e) {
                return null;
            }
        }
        return null;
    }
};

export function getAccount(): MadAccount | null {
    return getUserData() ?? null;
}

/**
 * Sign out the account.
 * @returns {boolean} whether we successfully signed out.
 * Only needed as backwards compatibility for the react-native-msal implementation.
 */
export function signOut() {
    if (!authenticationClientExists()) {
        throw new Error("Unable to authenticate, authentication client does not exist");
    }
    resetUserData();
    resetToken();
    return true;
}

/**
 * resets the config properties of the auth client
 */
export function reset() {
    resetDiscovery();
    resetConfig();
}
