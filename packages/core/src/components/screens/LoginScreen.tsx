import { EDSStyleSheet, Typography, useStyles } from "@equinor/mad-components";
import React from "react";
import { Image, View } from "react-native";
import { LoginButton } from "@equinor/mad-auth";

export type LoginScreenProps = { title: string; logo: string };
export const LoginScreen = ({ title, logo }: LoginScreenProps) => {
    const styles = useStyles(theme);
    return (
        <View style={styles.container}>
            <Typography variant="h1">{title}</Typography>
            <Image source={{ uri: logo }} resizeMode="contain" height={200} width={200} />
            <LoginButton />
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
