import {
    AuthRequest,
    AuthRequestPromptOptions,
    AuthSessionResult,
    DiscoveryDocument,
    exchangeCodeAsync,
} from "expo-auth-session";
import { decodeToken } from "./decodeToken";
import { MadAuthenticationResult } from "../types";
import { AuthenticationType } from "../hooks";
import { useEffect, useState } from "react";

type useExpoAuthenticateProps = {
    clientId: string;
    redirectUri: string;
    discovery: DiscoveryDocument | null;
    onAuthenticationSuccessful: (res: MadAuthenticationResult, type: AuthenticationType) => void;
    onAuthenticationFailed: (error: unknown) => void;
    enableAutomaticAuthentication?: boolean;
    request: AuthRequest | null;
    promptAsync: (options?: AuthRequestPromptOptions | undefined) => Promise<AuthSessionResult>;
};
export const useExpoAuthenticate = ({
    clientId,
    redirectUri,
    discovery,
    onAuthenticationSuccessful,
    onAuthenticationFailed,
    enableAutomaticAuthentication,
    request,
    promptAsync,
}: useExpoAuthenticateProps) => {
    const [authenticationInProgress, setAuthenticationInProgress] = useState(false);

    const withAuthenticationPromiseHandler = async () => {
        try {
            setAuthenticationInProgress(true);
            const codeResponse = await promptAsync();
            if (request && codeResponse?.type === "success" && discovery) {
                const result = await exchangeCodeAsync(
                    {
                        clientId,
                        code: codeResponse.params["code"],
                        extraParams: request.codeVerifier
                            ? { code_verifier: request.codeVerifier }
                            : undefined,
                        redirectUri,
                    },
                    discovery,
                );

                const user = decodeToken(result.accessToken);
                if (!user) throw new Error("Unable to decode id token");
                setAuthenticationInProgress(false);
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

    useEffect(() => {
        const maybeAuthenticateSilently = () => {
            if (enableAutomaticAuthentication) {
                // TODO: implement authenticateSilently
                // void withAuthenticationPromiseHandler(authenticateSilently(scopes), "AUTOMATIC");
            }
        };
        void maybeAuthenticateSilently();
        // eslint-disable-next-line react-hooks/exhaustive-deps -- we want this to run only once
    }, []);

    return {
        authenticate: () => void withAuthenticationPromiseHandler(),
        authenticationInProgress,
    };
};
