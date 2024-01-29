import { useEffect, useState } from "react";
import { MadAuthenticationResult } from "../types";
import {
    authenticateInteractively,
    authenticateSilently,
    authenticationClientExists,
    initiateAuthenticationClient,
} from "../auth";

export type UseAuthenticateProps = {
    onAuthenticationSuccessful: (res: MadAuthenticationResult, type: AuthenticationType) => void;
    onAuthenticationFailed: (error: unknown) => void;
    redirectUri: string;
    clientId: string;
    scopes: string[];
    enableAutomaticAuthentication?: boolean;
};

export type AuthenticationType = "AUTOMATIC" | "MANUAL";

type UseAuthenticateResult = {
    authenticate: () => void;
    authenticationInProgress: boolean;
    authenticationClientInitialized: boolean;
};
/**
 * initialize the authentication client, and authenticate the user
 * @param {UseAuthenticateProps} params params for client initialization and authentication flow
 * @returns authenticate function, and some helper variables
 */
export const useAuthenticate = ({
    onAuthenticationSuccessful,
    onAuthenticationFailed,
    clientId,
    redirectUri,
    scopes,
    enableAutomaticAuthentication,
}: UseAuthenticateProps): UseAuthenticateResult => {
    const [authenticationInProgress, setAuthenticationInProgress] = useState(false);
    const [authenticationClientInitialized, setAuthenticationClientInitialized] = useState(false);

    const withAuthenticationPromiseHandler = async (
        promise: Promise<MadAuthenticationResult | null>,
        type: AuthenticationType,
    ) => {
        setAuthenticationInProgress(true);
        try {
            const res = await promise;
            if (res) onAuthenticationSuccessful(res, type);
        } catch (e) {
            if (type === "MANUAL") onAuthenticationFailed(e);
        } finally {
            setAuthenticationInProgress(false);
        }
    };

    useEffect(() => {
        const initiateClientAndMaybeAuthenticateSilently = async () => {
            await initiateAuthenticationClient({
                clientId,
                redirectUri,
            });
            if (authenticationClientExists()) setAuthenticationClientInitialized(true);
            if (enableAutomaticAuthentication)
                void withAuthenticationPromiseHandler(authenticateSilently(scopes), "AUTOMATIC");
        };

        void initiateClientAndMaybeAuthenticateSilently();
        // eslint-disable-next-line react-hooks/exhaustive-deps -- we want this to run only once
    }, []);

    return {
        authenticationInProgress,
        authenticate: () =>
            void withAuthenticationPromiseHandler(authenticateInteractively(scopes), "MANUAL"),
        authenticationClientInitialized:
            authenticationClientExists() && authenticationClientInitialized,
    };
};
