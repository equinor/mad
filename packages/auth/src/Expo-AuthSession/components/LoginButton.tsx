import React from "react";
import { Button, ButtonProps } from "@equinor/mad-components";
import * as WebBrowser from "expo-web-browser";
import { AuthenticationType, useAuthenticate } from "../hooks/useAuthenticate";
import { ResponseType } from "expo-auth-session";
import "core-js/stable/atob";
import { View } from "react-native";
import { MadAuthenticationResult } from "../../types";

WebBrowser.maybeCompleteAuthSession();

export type LoginButtonProps = Omit<ButtonProps, "onPress" | "loading" | "disabled" | "title"> & {
    clientId: string;
    redirectUri: string;
    onAuthenticationSuccessful: (res: MadAuthenticationResult, type: AuthenticationType) => void;
    onAuthenticationFailed: (error: unknown) => void;
    title?: ButtonProps["title"];
    scopes?: string[];
    enableAutomaticAuthentication?: boolean;
};

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
