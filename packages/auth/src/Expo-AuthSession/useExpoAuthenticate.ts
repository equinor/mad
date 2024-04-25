import {
    AuthRequestConfig,
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
    const { token, setToken, userData, setUserData } = useAuth();
    const discovery = useAutoDiscovery(
        "https://login.microsoftonline.com/statoilsrm.onmicrosoft.com/v2.0",
    );
    const [authenticationInProgress, setAuthenticationInProgress] = useState(false);
    const [request, , promptAsync] = useAuthRequest(<AuthRequestConfig>config, discovery);
    const hasAppInsightsBeenInitialized = appInsightsHasBeenInitialized();

    const withAuthenticationPromiseHandler = async () => {
        try {
            setAuthenticationInProgress(true);
            const codeResponse = await promptAsync();
            if (request && codeResponse?.type === "success" && discovery && config) {
                const result = await exchangeCodeAsync(
                    {
                        clientId: config?.clientId,
                        code: codeResponse.params["code"],
                        extraParams: request.codeVerifier
                            ? { code_verifier: request.codeVerifier }
                            : undefined,
                        redirectUri: config?.redirectUri,
                    },
                    discovery,
                );

                const user = decodeToken(result.accessToken);
                if (!user) throw new Error("Unable to decode id token");
                setAuthenticationInProgress(false);
                setUserData(user);
                setToken(result);
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
        if (!discovery) throw new Error("discovery not defined");
        const refreshToken = await token.refreshAsync(config, discovery);
        setToken(refreshToken);
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
                hasAppInsightsBeenInitialized &&
                enableAutomaticAuthentication &&
                token &&
                userData
            ) {
                if (TokenResponse.isTokenFresh(token))
                    onAuthenticationSuccessful(
                        { accessToken: token.accessToken, account: userData },
                        "AUTOMATIC",
                    );
                else {
                    void refreshTokenAndAuthenticate(token, userData);
                }
            }
        };
        maybeAuthenticateSilently();
    }, [token, userData, hasAppInsightsBeenInitialized]);

    return {
        authenticate: () => void withAuthenticationPromiseHandler(),
        authenticationInProgress,
    };
};
