import { EDSStyleSheet, Typography, useStyles } from "@equinor/mad-components";
import React from "react";
import { Image, View } from "react-native";
import { LoginButton } from "@equinor/mad-auth";
import { useAppVersion, useAuthConfig, useLoginScreenConfig } from "../../hooks/MadConfigProvider";
import { useCoreStackNavigation } from "../../hooks/useCoreStackNavigation";
import { getNavigationRouteForLoginScreen } from "../../utils/getNavigationRouteForLoginScreen";

export const LoginScreen = () => {
    const styles = useStyles(theme);
    const authConfig = useAuthConfig();
    const navigation = useCoreStackNavigation();
    const appVersion = useAppVersion();
    const { title, logo } = useLoginScreenConfig();
    return (
        <View style={styles.container}>
            <Typography variant="h1">{title}</Typography>
            <Image source={logo} resizeMode="contain" style={{ height: 200, width: 200 }} />
            <LoginButton
                {...authConfig}
                onAuthenticationSuccessful={() =>
                    navigation.navigate(getNavigationRouteForLoginScreen({ appVersion }))
                }
            />
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
