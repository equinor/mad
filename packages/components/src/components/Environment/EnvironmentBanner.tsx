import React, { useContext } from "react";
import { EnvironmentContext, EnvironmentContextProps } from "./EnvironmentProvider";
import { View } from "react-native";
import { Typography } from "../Typography";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";

type EnvironmentStyleProps = Pick<EnvironmentContextProps, "environment">;

export const EnvironmentBanner = () => {
    const environment = useContext(EnvironmentContext);
    const styles = useStyles(themeStyles, { environment });

    if (environment === "prod") return null;

    return (
        <View style={styles.container}>
            <Typography color={styles.text.color}>{environment} environment</Typography>
        </View>
    );
};

const themeStyles = EDSStyleSheet.create((theme, props: EnvironmentStyleProps) => {
    const { environment } = props;
    let backgroundColor = "#00000000";
    if (environment !== "prod") {
        backgroundColor = theme.colors.environment[environment];
    }

    return {
        container: {
            alignItems: "center",
            justifyContent: "center",
            backgroundColor,
        },
        text: {
            color: theme.colors.environment.text,
        },
    };
});
