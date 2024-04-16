import React from "react";
import { Button } from "@equinor/mad-components";
import * as WebBrowser from "expo-web-browser";
import {
    useAuthRequest,
    AccessTokenRequest,
    exchangeCodeAsync,
    useAutoDiscovery,
    ResponseType,
    fetchUserInfoAsync,
} from "expo-auth-session";
import { LoginButtonProps } from "../components";

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


    const onPress =  () => {
        promptAsync().then((codeResponse) => {
            if (request && codeResponse?.type === 'success' && discovery) {
                exchangeCodeAsync(
                    {
                        clientId,
                        code: codeResponse.params["code"],
                        extraParams: request.codeVerifier
                            ? { code_verifier: request.codeVerifier }
                            : undefined,
                        redirectUri,
                    },
                    discovery,
                ).then((result) => {
                    onAuthenticationSuccessful(
                        {
                            accessToken: result.accessToken,
                            account: {
                                name: "Demo user",
                                username: "demo.user@example.com",
                                identifier: "-1", },
                        },
                        "MANUAL",
                    );
                });
            }
        }).catch(error => console.log(error));
    };


    return <Button title={title} onPress={onPress} {...rest} />;
};
