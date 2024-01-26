import { Button, EDSStyleSheet, Typography, useStyles, useToken } from "@equinor/mad-components";
import React, { useState, useMemo } from "react";
import { Pressable, View } from "react-native";
import { LoginButton } from "@equinor/mad-auth";
import { useAuthConfig, useLoginScreenConfig } from "../../store/mad-config";
import { enableDemoMode } from "../../store/demo-mode";
import { metricKeys, metricStatus, track } from "@equinor/mad-insights";
import { useDictionary } from "../../language/useDictionary";
import { SvgXml } from "react-native-svg";
import { useNavigateFromLoginScreen } from "../../hooks/useNavigateFromLoginScreen";

export const LoginScreen = () => {
    const styles = useStyles(theme);
    const dictionary = useDictionary();
    const authConfig = useAuthConfig();
    const token = useToken();
    const primaryColor = token.colors.presentation.primary;
    const navigate = useNavigateFromLoginScreen();
    const { title, logo } = useLoginScreenConfig();
    const [demoPressCount, setDemoPressCount] = useState(0);
    const shouldDisplayDemoButton = demoPressCount >= 5;

    const recoloredLogo = useMemo(
        () => logo.replaceAll("#007079", primaryColor),
        [primaryColor, logo],
    );
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

const theme = EDSStyleSheet.create(theme => ({
    container: {
        paddingVertical: theme.spacing.container.paddingVertical,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 60,
        backgroundColor: theme.colors.presentation.background,
    },
}));
