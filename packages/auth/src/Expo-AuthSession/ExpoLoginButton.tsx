import React from "react";
import { Button } from "@equinor/mad-components";
import * as WebBrowser from "expo-web-browser";
import {
    exchangeCodeAsync,
    ResponseType,
    useAuthRequest,
    useAutoDiscovery,
} from "expo-auth-session";
import { LoginButtonProps } from "../components";
import { decodeToken } from "./decodeToken";
import "core-js/stable/atob";

WebBrowser.maybeCompleteAuthSession();

export const ExpoLoginButton = ({
    clientId,
    redirectUri,
    onAuthenticationSuccessful,
    onAuthenticationFailed,
    enableAutomaticAuthentication,
    scopes = [],
    title = "Log in",
    ...rest
}: LoginButtonProps) => {
    const discovery = useAutoDiscovery(
        "https://login.microsoftonline.com/statoilsrm.onmicrosoft.com/v2.0",
    );

    const [request, , promptAsync] = useAuthRequest(
        {
            clientId,
            scopes: scopes,
            redirectUri,
            responseType: ResponseType.Code,
        },
        discovery,
    );

    const onPress = async () => {
        try {
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
            onAuthenticationFailed(error);
        }
    };
    return <Button title={title} onPress={onPress} {...rest} />;
};
