import React from "react";
import { Button, ButtonProps } from "@equinor/mad-components";
import { useAuthenticate } from "../hooks/useAuthenticate";

export type LoginButtonProps = Omit<ButtonProps, "onPress" | "loading" | "disabled" | "title"> & {
    clientId: string;
    redirectUri: string;
    onAuthenticationSuccessful: () => void;
    title?: ButtonProps["title"];
    enableAutomaticAuthentication?: boolean;
};
export const LoginButton = ({
    clientId,
    redirectUri,
    onAuthenticationSuccessful,
    enableAutomaticAuthentication,
    title = "Log in",
    ...rest
}: LoginButtonProps) => {
    const { authenticate, authenticationInProgress, authenticationClientInitialized } =
        useAuthenticate({
            clientId,
            redirectUri,
            onAuthenticationSuccessful,
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
