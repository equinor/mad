import React, { useCallback, useEffect, useState } from "react";
import {
    authenticateInteractively,
    authenticateSilently,
    authenticationClientExists,
    initiateAuthenticationClient,
} from "../auth";
import type { MadAuthenticationResult } from "../types";
import { Button } from "@equinor/mad-components";
import { View, Image, Pressable, ImageSourcePropType } from "react-native";
import { DemoButton } from "./DemoButton";

export type LoginScreenProps = {
    logo: ImageSourcePropType;
    clientId: string;
    redirectUri: string;
    navigateFn: () => void;
};
export const LoginScreen = ({ logo, clientId, redirectUri, navigateFn }: LoginScreenProps) => {
    const [logoTapCount, setLogoTapCount] = useState(0);
    const [authenticationInProgress, setAuthenticationInProgress] = useState(false);

    const onAuthenticationSuccessful = useCallback(
        (res: MadAuthenticationResult | null) => {
            if (res) navigateFn();
        },
        [navigateFn],
    );

    const withAuthenticationPromiseHandler = (promise: Promise<MadAuthenticationResult | null>) => {
        setAuthenticationInProgress(true);
        return promise
            .then(res => {
                setAuthenticationInProgress(false);
                onAuthenticationSuccessful(res);
            })
            .catch(() => setAuthenticationInProgress(false));
    };

    useEffect(() => {
        initiateAuthenticationClient({
            clientId,
            redirectUri,
        }).then(() => withAuthenticationPromiseHandler(authenticateSilently([])));
    }, [onAuthenticationSuccessful]);

    const displayDemoButton = logoTapCount >= 5;
    const loginButtonIsDisabled = authenticationInProgress || !authenticationClientExists();

    return (
        <View
            style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                gap: 16,
                padding: 16,
            }}
        >
            <Pressable onPress={() => setLogoTapCount(count => count + 1)}>
                <Image source={logo} resizeMode="contain" style={{ height: 200, width: 200 }} />
            </Pressable>
            <Button
                title="Log in"
                onPress={() => withAuthenticationPromiseHandler(authenticateInteractively([]))}
                loading={loginButtonIsDisabled}
                disabled={loginButtonIsDisabled}
            />
            <DemoButton visible={displayDemoButton} navigateFn={navigateFn} />
        </View>
    );
};
