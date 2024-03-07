import React from "react";
import { Button } from "@equinor/mad-components";
import * as WebBrowser from "expo-web-browser";
import { useAuthRequest, useAutoDiscovery } from "expo-auth-session";
import {LoginButtonProps} from "../components";

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
        },
        discovery,
    );

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
