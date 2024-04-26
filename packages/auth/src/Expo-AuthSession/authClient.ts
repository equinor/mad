import {
    AuthRequest,
    AuthRequestConfig,
    DiscoveryDocument,
    exchangeCodeAsync,
    TokenResponse,
    fetchDiscoveryAsync,
    fetchUserInfoAsync,
} from "expo-auth-session";
import { getToken, getUserData, setToken, setUserData } from "./store";
import { tokenRefresh } from "./utils/tokenRefresh";
import { decodeToken } from "./utils/decodeToken";
import { MadAccount, MadAuthenticationResult } from "../types";
import * as WebBrowser from "expo-web-browser";
import "core-js/stable/atob";

export function authClient(config: AuthRequestConfig) {
    WebBrowser.maybeCompleteAuthSession();

    const authRequest = new AuthRequest(config);
    const authenticateInteractively = async (): Promise<MadAuthenticationResult | null> => {
        const discovery = await fetchDiscoveryAsync(
            "https://login.microsoftonline.com/statoilsrm.onmicrosoft.com/",
        );
        const codeResponse = await authRequest.promptAsync(discovery);
        if (codeResponse?.type === "success") {
            const accesTokenConfig = {
                clientId: config.clientId,
                code: codeResponse.params["code"],
                extraParams: authRequest.codeVerifier
                    ? { code_verifier: authRequest.codeVerifier }
                    : undefined,
                redirectUri: config.redirectUri,
            };
            const tokenResponse = await exchangeCodeAsync(accesTokenConfig, discovery);
            const idData = await fetchUserInfoAsync(tokenResponse, discovery);
            const userData: MadAccount = {
                name: idData["name"] as string,
                username: idData["unique_name"] as string,
                identifier: idData["onprem_sid"] as string,
            };
            if (!userData) return null;
            setUserData(userData);
            setToken(tokenResponse);
            return { account: userData, accessToken: tokenResponse.accessToken };
        }
        return null;
    };

    const authenticateSilently = async (): Promise<MadAuthenticationResult | null> => {
        const userData = getUserData();
        const token = await getToken();
        if (!userData) return null;
        if (TokenResponse.isTokenFresh(token)) {
            console.log("silent success!");
            return { account: userData, accessToken: token.accessToken };
        }
        const newToken = await tokenRefresh(token);
        if (newToken) {
            console.log("silent success!");
            setToken(newToken);
            return { account: userData, accessToken: newToken?.accessToken };
        }
        return null;
    };

    return { authenticateInteractively, authenticateSilently };
}
