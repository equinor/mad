import {
    AuthRequestConfig,
    DiscoveryDocument,
    exchangeCodeAsync,
    TokenResponse,
    useAuthRequest,
    useAutoDiscovery,
} from "expo-auth-session";
import { decodeToken } from "./decodeToken";
import { MadAccount, MadAuthenticationResult } from "../types";
import { AuthenticationType } from "../hooks";
import { useEffect, useState } from "react";
import { useAuth } from "./context";
import { appInsightsHasBeenInitialized } from "@equinor/mad-insights";

type useExpoAuthenticateProps = {
    config: AuthRequestConfig;
    onAuthenticationSuccessful: (res: MadAuthenticationResult, type: AuthenticationType) => void;
    onAuthenticationFailed: (error: unknown) => void;
    enableAutomaticAuthentication?: boolean;
};
export const useExpoAuthenticate = ({
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

    const withAuthenticationPromiseHandler = async () => {
        try {
            setAuthenticationInProgress(true);
            const codeResponse = await promptAsync();
            if (
                request &&
                codeResponse?.type === "success" &&
                authState.discovery &&
                authState.config
            ) {
                const result = await exchangeCodeAsync(
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

                const user = decodeToken(result.accessToken);
                if (!user) throw new Error("Unable to decode id token");
                setAuthenticationInProgress(false);
                authState.setUserData(user);
                authState.setToken(result);
                onAuthenticationSuccessful(
                    {
                        accessToken: result.accessToken,
                        account: user,
                    },
                    "MANUAL",
                );
            }
        } catch (error) {
            console.error(error);
            setAuthenticationInProgress(false);
            onAuthenticationFailed(error);
        }
    };

    const refreshTokenAndAuthenticate = async (token: TokenResponse, userData: MadAccount) => {
        if (!authState.discovery || !authState.config)
            throw new Error("discovery or config not defined");
        const refreshToken = await token.refreshAsync(authState.config, authState.discovery);
        authState.setToken(refreshToken);
        setIsLoggedIn(true);
        onAuthenticationSuccessful(
            {
                accessToken: refreshToken.accessToken,
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
                    setIsLoggedIn(true);
                    onAuthenticationSuccessful(
                        { accessToken: authState.token.accessToken, account: authState.userData },
                        "AUTOMATIC",
                    );
                } else {
                    void refreshTokenAndAuthenticate(authState.token, authState.userData);
                }
            }
        };
        maybeAuthenticateSilently();
    }, [authState.token, authState.userData, hasAppInsightsBeenInitialized]);

    return {
        authenticate: () => void withAuthenticationPromiseHandler(),
        authenticationInProgress,
    };
};
