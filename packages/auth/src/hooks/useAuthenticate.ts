import { useEffect, useState } from "react";
import { MadAuthenticationResult } from "../types";
import {
    authenticateInteractively,
    authenticateSilently,
    authenticationClientExists,
    initiateAuthenticationClient,
} from "../auth";

export type UseAuthenticateProps = {
    onAuthenticationSuccessful: (res: MadAuthenticationResult) => void;
    redirectUri: string;
    clientId: string;
    enableAutomaticAuthentication?: boolean;
};

type ReturnType = {
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
    clientId,
    redirectUri,
    enableAutomaticAuthentication,
}: UseAuthenticateProps): ReturnType => {
    const [authenticationInProgress, setAuthenticationInProgress] = useState(false);
    const [authenticationClientInitialized, setAuthenticationClientInitialized] = useState(false);

    const withAuthenticationPromiseHandler = async (
        promise: Promise<MadAuthenticationResult | null>,
    ) => {
        setAuthenticationInProgress(true);
        try {
            const res = await promise;
            if (res) onAuthenticationSuccessful(res);
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
                withAuthenticationPromiseHandler(authenticateSilently([]));
        };

        initiateClientAndMaybeAuthenticateSilently();
        // eslint-disable-next-line react-hooks/exhaustive-deps -- we want this to run only once
    }, []);

    return {
        authenticationInProgress,
        authenticate: () => withAuthenticationPromiseHandler(authenticateInteractively([])),
        authenticationClientInitialized:
            authenticationClientExists() && authenticationClientInitialized,
    };
};
