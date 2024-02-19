import { Button, EDSProvider, EDSStyleSheet, useStyles } from "@equinor/mad-components";
import React, { useState } from "react";
import { Image, Platform, Pressable, View } from "react-native";
import { LoginButton, LoginButtonProps } from "@equinor/mad-auth";
import { useAuthConfig, useLoginScreenConfig } from "../../store/mad-config";
import { metricKeys, metricStatus, setUsername, track } from "@equinor/mad-insights";
import { useDictionary } from "../../language/useDictionary";
import { useNavigateFromLoginScreen } from "../../hooks/useNavigateFromLoginScreen";

export type LoginScreenProps = Partial<
    Pick<LoginButtonProps, "onAuthenticationSuccessful" | "onAuthenticationFailed">
>;
export const LoginScreen = ({
    onAuthenticationSuccessful,
    onAuthenticationFailed,
}: LoginScreenProps) => {
    const styles = useStyles(theme);
    const dictionary = useDictionary();
    const authConfig = useAuthConfig();
    const navigate = useNavigateFromLoginScreen();
    const { splash } = useLoginScreenConfig();
    const [demoPressCount, setDemoPressCount] = useState(0);
    const shouldDisplayDemoButton = demoPressCount >= 5;
    const resizeMode = Platform.OS === "web" ? "contain" : "cover";
    return (
        <EDSProvider colorScheme="light" density="tablet">
            <View style={styles.container}>
                <Image source={splash} resizeMode={resizeMode} style={styles.fill} />
                <View style={styles.secretHitboxContainer}>
                    <Pressable
                        style={styles.fill}
                        onPress={() => setDemoPressCount(count => count + 1)}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <LoginButton
                        {...authConfig}
                        onAuthenticationSuccessful={(result, type) => {
                            setUsername(result.account.username, result.account.identifier);
                            if (type === "AUTOMATIC") {
                                void track(metricKeys.AUTHENTICATION_AUTOMATIC);
                            } else {
                                void track(metricKeys.AUTHENTICATION, metricStatus.SUCCESS);
                            }
                            onAuthenticationSuccessful?.(result, type);
                            navigate({ demoMode: false });
                        }}
                        onAuthenticationFailed={error => {
                            void track(metricKeys.AUTHENTICATION, metricStatus.FAILED, undefined, {
                                error,
                            });
                            onAuthenticationFailed?.(error);
                        }}
                        title={dictionary.login.logIn}
                        enableAutomaticAuthentication
                        scopes={authConfig.scopes ?? []}
                    />
                    {shouldDisplayDemoButton && (
                        <Button
                            title={dictionary.login.demo}
                            variant="outlined"
                            onPress={() => {
                                void track(metricKeys.AUTHENTICATION_DEMO);
                                navigate({ demoMode: true });
                            }}
                        />
                    )}
                </View>
            </View>
        </EDSProvider>
    );
};

const theme = EDSStyleSheet.create(() => ({
    container: {
        flex: 1,
        backgroundColor: "#E6FAEC",
    },
    secretHitboxContainer: {
        position: "absolute",
        top: 0,
        height: "55%",
        width: "100%",
        alignItems: "center",
    },
    buttonContainer: {
        position: "absolute",
        top: "60%",
        width: "100%",
        alignItems: "center",
        gap: 8,
    },
    fill: {
        width: "100%",
        height: "100%",
    },
}));
