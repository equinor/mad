import {
    AuthRequest,
    AuthRequestConfig,
    exchangeCodeAsync,
    TokenResponse,
    useAuthRequest,
    useAutoDiscovery,
} from "expo-auth-session";
import { decodeToken } from "../utils/decodeToken";
import { MadAccount, MadAuthenticationResult } from "../../types";
import { AuthenticationType } from "../../hooks";
import { useEffect, useState } from "react";
import { appInsightsHasBeenInitialized } from "@equinor/mad-insights";
import { useAuth } from "../store";
import { tokenRefresh } from "../utils/tokenRefresh";

type useExpoAuthenticateProps = {
    config: AuthRequestConfig;
    onAuthenticationSuccessful: (res: MadAuthenticationResult, type: AuthenticationType) => void;
    onAuthenticationFailed: (error: unknown) => void;
    enableAutomaticAuthentication?: boolean;
};
export const useAuthenticate = ({
    config,
    onAuthenticationSuccessful,
    onAuthenticationFailed,
    enableAutomaticAuthentication,
}: useExpoAuthenticateProps) => {
    const authState = useAuth();
    const discovery = useAutoDiscovery(
        "https://login.microsoftonline.com/statoilsrm.onmicrosoft.com/v2.0",
    );
    const [authenticationInProgress, setAuthenticationInProgress] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [request, , promptAsync] = useAuthRequest(config, discovery);
    const hasAppInsightsBeenInitialized = appInsightsHasBeenInitialized();

    useEffect(() => {
        if (!authState.config) authState.setConfig(config);
        if (!authState.discovery) authState.setDiscovery(discovery);
    }, [discovery]);

    const authenticateInteractively = async () => {
        try {
            setAuthenticationInProgress(true);
            const result = await authenticate();
            const user = decodeToken(result?.accessToken);
            if (!result || !user) throw new Error("Unable to authenticate");
            authState.setUserData(user);
            authState.setToken(result);
            setAuthenticationInProgress(false);
            setLoginSuccess(result, user);
        } catch (error) {
            console.error(error);
            setAuthenticationInProgress(false);
            onAuthenticationFailed(error);
        }
    };

    const authenticate = async () => {
        const codeResponse = await promptAsync();
        if (
            request &&
            codeResponse?.type === "success" &&
            authState.discovery &&
            authState.config
        ) {
            return await exchangeCodeAsync(
                {
                    clientId: authState.config?.clientId,
                    code: codeResponse.params["code"],
                    extraParams: request.codeVerifier
                        ? { code_verifier: request.codeVerifier }
                        : undefined,
                    redirectUri: authState.config?.redirectUri,
                },
                authState.discovery,
            );
        }
        throw new Error("Unable to authenticate");
    };

    const refreshTokenAndAuthenticate = async (token: TokenResponse, userData: MadAccount) => {
        if (!authState.discovery || !authState.config) return;
        const newToken = await tokenRefresh(token);
        if (newToken) {
            authState.setToken(newToken);
            setLoginSuccess(newToken, userData);
        }
    };

    const setLoginSuccess = (newToken: TokenResponse, userData: MadAccount) => {
        setIsLoggedIn(true);
        onAuthenticationSuccessful(
            {
                accessToken: newToken.accessToken,
                account: userData,
            },
            "AUTOMATIC",
        );
    };

    useEffect(() => {
        const maybeAuthenticateSilently = () => {
            if (
                !isLoggedIn &&
                hasAppInsightsBeenInitialized &&
                enableAutomaticAuthentication &&
                authState.token &&
                authState.userData
            ) {
                if (TokenResponse.isTokenFresh(authState.token)) {
                    setLoginSuccess(authState.token, authState.userData);
                } else {
                    void refreshTokenAndAuthenticate(authState.token, authState.userData);
                }
            }
        };
        maybeAuthenticateSilently();
    }, [
        authState.token,
        authState.userData,
        authState.config,
        authState.discovery,
        hasAppInsightsBeenInitialized,
    ]);

    return {
        authenticate: () => void authenticateInteractively(),
        authenticationInProgress,
    };
};
