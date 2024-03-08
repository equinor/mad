import React, { useEffect } from "react";
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
        "https://login.microsoftonline.com/statoilsrm.onmicrosoft.com/",
    );

    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: clientId,
            scopes: scopes,
            redirectUri: redirectUri,
            responseType: ResponseType.Code,
        },
        discovery,
    );

    useEffect(() => {
        if (response && response?.type === "error") {
            onAuthenticationFailed(response.error);
            return;
        }

        if (!discovery || response?.type !== "success") return;
        const code = response.params["code"];
        if (!code) return;

        const getToken = async () => {
            console.log("authenticating!");
            try {
                const accessToken = new AccessTokenRequest({
                    code,
                    clientId,
                    redirectUri,
                    scopes,
                    extraParams: {
                        code_verifier: request?.codeVerifier ? request.codeVerifier : "",
                    },
                });

                const tokenResponse = await exchangeCodeAsync(accessToken, discovery);
                const userId = await fetchUserInfoAsync(tokenResponse, discovery);
                onAuthenticationSuccessful(
                    {
                        accessToken: tokenResponse.accessToken,
                        account: {
                            name: userId["name"] as string,
                            username: userId["email"] as string,
                            identifier: userId["identifier"] as string,
                        },
                    },
                    "MANUAL",
                );
            } catch (e: any) {
                console.log("failed!")
                console.log(e);
                onAuthenticationFailed(e);
            }
        };
        getToken();
    }, [response, discovery]);

    const onPress = async () => {
        console.log("here we go!");
        await promptAsync()
            .then(result => {
                if (result.type === "success" && result.authentication) {
                    onAuthenticationSuccessful(
                        {
                            ...result.authentication,
                            account: {
                                name: "Demo user",
                                username: "demo.user@example.com",
                                identifier: "-1",
                            },
                        },
                        "MANUAL",
                    );
                } else if (result.type === "error") {
                    onAuthenticationFailed(result.error);
                }
            })
            .catch(error => console.log(error));
    };

    return <Button title={title} onPress={onPress} {...rest} />;
};
