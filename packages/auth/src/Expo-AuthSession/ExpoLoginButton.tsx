import React from "react";
import { Button } from "@equinor/mad-components";
import * as WebBrowser from "expo-web-browser";
import {
    exchangeCodeAsync,
    ResponseType,
    useAuthRequest,
    useAutoDiscovery,
} from "expo-auth-session";
import { MadAccount, UserInfo } from "../types";
import { LoginButtonProps } from "../components";
import { jwtDecode } from "jwt-decode";
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
        "https://login.microsoftonline.com/statoilsrm.onmicrosoft.com/",
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

    const onPress = () => {
        promptAsync()
            .then(codeResponse => {
                if (request && codeResponse?.type === "success" && discovery) {
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
                    )
                        .then(result => {
                            const user = decodeIdToken(result.idToken);
                            if (!user) throw new Error("Unable to decode id token");
                            onAuthenticationSuccessful(
                                {
                                    accessToken: result.accessToken,
                                    account: user,
                                },
                                "MANUAL",
                            );
                        })
                        .catch(error => onAuthenticationFailed(error));
                }
            })
            .catch(error => onAuthenticationFailed(error));
    };

    return <Button title={title} onPress={onPress} {...rest} />;
};

const decodeIdToken = (idToken: string | undefined) => {
    if (!idToken) return undefined;
    const decoded = jwtDecode<UserInfo>(idToken);
    const account: MadAccount = {
        name: decoded.name,
        username: decoded.unique_name,
        identifier: decoded.onprem_sid,
    };
    return account;
};
