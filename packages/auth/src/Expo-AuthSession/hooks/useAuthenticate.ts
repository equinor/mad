import { AuthRequestConfig, useAutoDiscovery } from "expo-auth-session";
import { MadAuthenticationResult } from "../../types";
import { AuthenticationType } from "../../hooks";
import { useEffect, useState } from "react";
import {
    initiateAuthenticationClient,
    authenticateInteractively,
    authenticationClientExists,
    authenticateSilently,
} from "../authenticationHandler";

type useExpoAuthenticateProps = {
    config: AuthRequestConfig;
    onAuthenticationSuccessful: (res: MadAuthenticationResult, type: AuthenticationType) => void;
    onAuthenticationFailed: (error: unknown) => void;
    enableAutomaticAuthentication?: boolean;
};

/**
 * initialize the authentication client, and authenticate the user
 * @param {UseExpoAuthenticateProps} params params for client initialization and authentication flow
 * @returns authenticate function, and some helper variables
 */
export const useAuthenticate = ({
    config,
    onAuthenticationSuccessful,
    onAuthenticationFailed,
    enableAutomaticAuthentication,
}: useExpoAuthenticateProps) => {
    const discovery = useAutoDiscovery(
        "https://login.microsoftonline.com/statoilsrm.onmicrosoft.com/v2.0",
    )!;
    const [authenticationInProgress, setAuthenticationInProgress] = useState(false);
    const [authenticationClientInitialized, setAuthenticationClientInitialized] = useState(false);

    const withAuthenticationPromiseHandler = async (
        promise: () => Promise<MadAuthenticationResult | null>,
        type: AuthenticationType,
    ) => {
        setAuthenticationInProgress(true);
        try {
            const res = await promise();
            if (res) onAuthenticationSuccessful(res, type);
        } catch (e) {
            if (type === "MANUAL") onAuthenticationFailed(e);
        } finally {
            setAuthenticationInProgress(false);
        }
    };

    useEffect(() => {
        const initiateClientAndMaybeAuthenticateSilently = async () => {
            initiateAuthenticationClient(config, discovery);
            if (authenticationClientExists()) setAuthenticationClientInitialized(true);

            if (enableAutomaticAuthentication)
                await withAuthenticationPromiseHandler(
                    () => authenticateSilently(config.scopes),
                    "AUTOMATIC",
                );
        };

        void initiateClientAndMaybeAuthenticateSilently();
    }, [discovery]);

    return {
        authenticationInProgress,
        authenticate: () =>
            void withAuthenticationPromiseHandler(
                () => authenticateInteractively(config.scopes),
                "MANUAL",
            ),
        authenticationClientInitialized:
            authenticationClientExists() && authenticationClientInitialized,
    };
};
