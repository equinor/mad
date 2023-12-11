import { Button, EDSStyleSheet, Typography, useStyles } from "@equinor/mad-components";
import React, { useState } from "react";
import { Image, Pressable, View } from "react-native";
import { LoginButton } from "@equinor/mad-auth";
import { useAppVersion, useAuthConfig, useLoginScreenConfig } from "../../store/mad-config";
import { useCoreStackNavigation } from "../../hooks/useCoreStackNavigation";
import { getNavigationRouteForLoginScreen } from "../../utils/getNavigationRouteForLoginScreen";
import { enableDemoMode } from "../../store/demo-mode";
import { useReleaseNotesVersion } from "../../store/release-notes/release-notes";
import { metricKeys, metricStatus, track } from "@equinor/mad-insights";

export const LoginScreen = () => {
    const styles = useStyles(theme);
    const authConfig = useAuthConfig();
    const navigation = useCoreStackNavigation();
    const appVersion = useAppVersion();
    const { lastDisplayedReleaseNotesVersion } = useReleaseNotesVersion();
    const { title, logo } = useLoginScreenConfig();
    const [demoPressCount, setDemoPressCount] = useState(0);
    const shouldDisplayDemoButton = demoPressCount >= 5;
    return (
        <View style={styles.container}>
            <Typography variant="h1">{title}</Typography>
            <Pressable onPress={() => setDemoPressCount(state => state + 1)}>
                <Image source={logo} resizeMode="contain" style={{ height: 200, width: 200 }} />
            </Pressable>
            <View style={{ gap: 8 }}>
                <LoginButton
                    {...authConfig}
                    onAuthenticationSuccessful={(_, type) => {
                        if (type === "AUTOMATIC") {
                            void track(metricKeys.AUTHENTICATION_AUTOMATIC);
                        }
                        else {
                            void track(metricKeys.AUTHENTICATION, metricStatus.SUCCESS);
                        }
                        navigation.navigate(
                            getNavigationRouteForLoginScreen({
                                appVersion,
                                lastDisplayedReleaseNotesVersion,
                            }),
                        );
                    }}
                    onAuthenticationFailed={error =>
                        void track(metricKeys.AUTHENTICATION, metricStatus.FAILED, undefined, { error })
                    }
                    enableAutomaticAuthentication
                    scopes={authConfig.scopes ?? []}
                />
                {shouldDisplayDemoButton && (
                    <Button
                        title="Demo"
                        variant="outlined"
                        onPress={() => {
                            void track(metricKeys.AUTHENTICATION_DEMO);
                            enableDemoMode();
                            navigation.navigate(
                                getNavigationRouteForLoginScreen({
                                    appVersion,
                                    lastDisplayedReleaseNotesVersion,
                                    isDemoMode: true,
                                }),
                            );
                        }}
                    />
                )}
            </View>
        </View>
    );
};

const theme = EDSStyleSheet.create(theme => ({
    container: {
        paddingVertical: theme.spacing.container.paddingVertical,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        height: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
}));
