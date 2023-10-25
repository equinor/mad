import React from "react";
import { Button, ButtonProps } from "@equinor/mad-components";
import { useAuthenticate } from "../hooks/useAuthenticate";

export type LoginButtonProps = Omit<ButtonProps, "onPress" | "loading" | "disabled" | "title"> & {
    clientId: string;
    redirectUri: string;
    onAuthenticationSuccessful: () => void;
    title?: ButtonProps["title"];
    scopes?: string[];
    enableAutomaticAuthentication?: boolean;
};
export const LoginButton = ({
    clientId,
    redirectUri,
    onAuthenticationSuccessful,
    enableAutomaticAuthentication,
    scopes = [],
    title = "Log in",
    ...rest
}: LoginButtonProps) => {
    const { authenticate, authenticationInProgress, authenticationClientInitialized } =
        useAuthenticate({
            clientId,
            redirectUri,
            onAuthenticationSuccessful,
            scopes,
            enableAutomaticAuthentication,
        });

    const loginButtonIsDisabled =
        authenticationInProgress || authenticationClientInitialized == false;

    return (
        <Button
            title={title}
            onPress={authenticate}
            loading={loginButtonIsDisabled}
            disabled={loginButtonIsDisabled}
            {...rest}
        />
    );
};
