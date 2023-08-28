import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";

export const DialogCustomContent = ({ children }: PropsWithChildren) => {
    const styles = useStyles(themeStyles);
    return <View style={styles.customContentContainer}>{children}</View>;
};

const themeStyles = EDSStyleSheet.create(theme => ({
    customContentContainer: {
        padding: theme.spacing.dialog.padding,
        paddingBottom: 0,
    },
}));
