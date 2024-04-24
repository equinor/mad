import React from "react";
import { Button } from "@equinor/mad-components";
import * as WebBrowser from "expo-web-browser";
import { useExpoAuthenticate } from "./useExpoAuthenticate";
import { LoginButtonProps } from "../components";
import "core-js/stable/atob";
import { ResponseType } from "expo-auth-session";

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
    const config = { clientId, scopes, redirectUri, responseType: ResponseType.Code };
    const { authenticate, authenticationInProgress } = useExpoAuthenticate({
        config,
        onAuthenticationSuccessful,
        onAuthenticationFailed,
        enableAutomaticAuthentication,
    });

    return (
        <Button
            title={title}
            onPress={authenticate}
            loading={authenticationInProgress}
            disabled={authenticationInProgress}
            {...rest}
        />
    );
};
