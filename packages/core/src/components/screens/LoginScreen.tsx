import { Button, EDSStyleSheet, useStyles } from "@equinor/mad-components";
import React, { useState } from "react";
import { Image, Platform, Pressable, View } from "react-native";
import { LoginButton } from "@equinor/mad-auth";
import { useAuthConfig, useLoginScreenConfig } from "../../store/mad-config";
import { enableDemoMode } from "../../store/demo-mode";
import { metricKeys, metricStatus, track } from "@equinor/mad-insights";
import { useDictionary } from "../../language/useDictionary";
import { useNavigateFromLoginScreen } from "../../hooks/useNavigateFromLoginScreen";

export const LoginScreen = () => {
    const styles = useStyles(theme);
    const dictionary = useDictionary();
    const authConfig = useAuthConfig();
    const navigate = useNavigateFromLoginScreen();
    const { splash } = useLoginScreenConfig();
    const [demoPressCount, setDemoPressCount] = useState(0);
    const shouldDisplayDemoButton = demoPressCount >= 5;
    const resizeMode = Platform.OS === "web" ? "contain" : "cover";
    return (
        <View style={styles.container}>
            <Image
                source={splash}
                resizeMode={resizeMode}
                style={{ height: "100%", width: "100%" }}
            />
            <View style={styles.secretHitboxContainer}>
                <Pressable
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    onPress={() => setDemoPressCount(count => count + 1)}
                />
            </View>
            <View style={styles.buttonContainer}>
                <LoginButton
                    {...authConfig}
                    onAuthenticationSuccessful={(_, type) => {
                        if (type === "AUTOMATIC") {
                            void track(metricKeys.AUTHENTICATION_AUTOMATIC);
                        } else {
                            void track(metricKeys.AUTHENTICATION, metricStatus.SUCCESS);
                        }
                        navigate();
                    }}
                    onAuthenticationFailed={error =>
                        void track(metricKeys.AUTHENTICATION, metricStatus.FAILED, undefined, {
                            error,
                        })
                    }
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
                            enableDemoMode();
                            navigate();
                        }}
                    />
                )}
            </View>
        </View>
    );
};

const theme = EDSStyleSheet.create(() => ({
    container: {
        flex: 1,
        height: "100%",
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
}));
