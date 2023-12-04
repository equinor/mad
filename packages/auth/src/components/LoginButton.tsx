import React from "react";
import { Button, ButtonProps } from "@equinor/mad-components";
import { AuthenticationType, useAuthenticate } from "../hooks/useAuthenticate";
import { MadAuthenticationResult } from "../types";

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
    const { authenticate, authenticationInProgress, authenticationClientInitialized } =
        useAuthenticate({
            clientId,
            redirectUri,
            onAuthenticationSuccessful,
            onAuthenticationFailed,
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
