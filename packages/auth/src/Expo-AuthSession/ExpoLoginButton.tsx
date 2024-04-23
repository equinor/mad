import React from "react";
import { Button } from "@equinor/mad-components";
import * as WebBrowser from "expo-web-browser";
import { ResponseType, useAuthRequest, useAutoDiscovery } from "expo-auth-session";
import { useExpoAuthenticate } from "./useExpoAuthenticate";
import { LoginButtonProps } from "../components";
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

    const { authenticate, authenticationInProgress } = useExpoAuthenticate({
        clientId,
        redirectUri,
        discovery,
        onAuthenticationSuccessful,
        onAuthenticationFailed,
        enableAutomaticAuthentication,
        request,
        promptAsync,
    });

    return (
        <Button
            title={title}
            onPress={authenticate}
            loading={!authenticationInProgress}
            disabled={!authenticationInProgress}
            {...rest}
        />
    );
};
