import { Button, EDSStyleSheet, Typography, useStyles } from "@equinor/mad-components";
import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { LoginButton } from "@equinor/mad-auth";
import { useAppVersion, useAuthConfig, useLoginScreenConfig } from "../../store/mad-config";
import { useCoreStackNavigation } from "../../hooks/useCoreStackNavigation";
import { getNavigationRouteForLoginScreen } from "../../utils/getNavigationRouteForLoginScreen";
import { enableDemoMode } from "../../store/demo-mode";
import { useReleaseNotesVersion } from "../../store/release-notes/release-notes";
import { metricKeys, metricStatus, track } from "@equinor/mad-insights";
import { useDictionary } from "../../language/useDictionary";
import { SvgXml } from "react-native-svg";
import { useToken } from "@equinor/mad-components";

export const LoginScreen = () => {
    const styles = useStyles(theme);
    const dictionary = useDictionary();
    const authConfig = useAuthConfig();
    const navigation = useCoreStackNavigation();
    const appVersion = useAppVersion();
    const token = useToken();
    const primaryColor = token.colors.interactive.primary;
    const { lastDisplayedReleaseNotesVersion } = useReleaseNotesVersion();
    const { title, logo } = useLoginScreenConfig();
    const [demoPressCount, setDemoPressCount] = useState(0);
    const shouldDisplayDemoButton = demoPressCount >= 5;

    const recoloredLogo = logo.replaceAll("#000000", primaryColor);
    return (
        <View style={styles.container}>
            <Pressable onPress={() => setDemoPressCount(state => state + 1)}>
                <SvgXml width={150} height={150} xml={recoloredLogo} />
            </Pressable>
            <Typography variant="h1" color={primaryColor}>
                {title}
            </Typography>
            <View style={{ gap: 8 }}>
                <LoginButton
                    {...authConfig}
                    onAuthenticationSuccessful={(_, type) => {
                        if (type === "AUTOMATIC") {
                            void track(metricKeys.AUTHENTICATION_AUTOMATIC);
                        } else {
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
        justifyContent: "center",
        gap: 60,
        backgroundColor: theme.colors.interactive.selectedHighlight,
    },
}));
