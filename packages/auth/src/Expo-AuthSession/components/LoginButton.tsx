import React from "react";
import { Button } from "@equinor/mad-components";
import * as WebBrowser from "expo-web-browser";
import { useAuthenticate } from "../hooks/useAuthenticate";
import { LoginButtonProps } from "../../components";
import { ResponseType } from "expo-auth-session";
import "core-js/stable/atob";
import { View } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export const LoginButton = ({
    clientId,
    redirectUri,
    onAuthenticationSuccessful,
    onAuthenticationFailed,
    enableAutomaticAuthentication,
    scopes = [],
    title = "Log in",
    ...rest
}: LoginButtonProps) => {
    const config = {
        clientId,
        scopes: [...scopes, "openid", "profile", "offline_access"],
        redirectUri,
        responseType: ResponseType.Code,
    };
    const { authenticate, authenticationInProgress } = useAuthenticate({
        config,
        onAuthenticationSuccessful,
        onAuthenticationFailed,
        enableAutomaticAuthentication,
    });

    return (
        <View>
            <Button
                title={title}
                onPress={authenticate}
                loading={authenticationInProgress}
                disabled={authenticationInProgress}
                {...rest}
            />
        </View>
    );
};
