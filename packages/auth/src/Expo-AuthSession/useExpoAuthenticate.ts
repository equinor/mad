import {
    AuthRequestConfig,
    exchangeCodeAsync,
    TokenResponse,
    useAuthRequest,
    useAutoDiscovery,
} from "expo-auth-session";
import { decodeToken } from "./decodeToken";
import { MadAuthenticationResult } from "../types";
import { AuthenticationType } from "../hooks";
import { useEffect, useState } from "react";
import { useAuth } from "./context";

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
    const sleep = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));

    const withAuthenticationPromiseHandler = async (authenticationType: "AUTOMATIC" | "MANUAL") => {
        try {
            if (
                token &&
                userData &&
                TokenResponse.isTokenFresh(token) &&
                authenticationType === "AUTOMATIC"
            ) {
                setAuthenticationInProgress(true);
                await sleep(200);
                setAuthenticationInProgress(false);
                onAuthenticationSuccessful(
                    { accessToken: token.accessToken, account: userData },
                    authenticationType,
                );
            } else if (authenticationType === "MANUAL") {
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
                        authenticationType,
                    );
                }
            }
        } catch (error) {
            console.error(error);
            setAuthenticationInProgress(false);
            onAuthenticationFailed(error);
        }
    };

    useEffect(() => {
        const maybeAuthenticateSilently = () => {
            if (enableAutomaticAuthentication) {
                void withAuthenticationPromiseHandler("AUTOMATIC");
            }
        };
        maybeAuthenticateSilently();
        // eslint-disable-next-line react-hooks/exhaustive-deps -- we want this to run only once
    }, []);

    return {
        authenticate: () => void withAuthenticationPromiseHandler("MANUAL"),
        authenticationInProgress,
    };
};
