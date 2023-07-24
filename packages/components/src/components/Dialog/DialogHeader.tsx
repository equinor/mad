import React from "react";
import { EDSStyleSheet } from "../../styling";
import { TextChildren, Typography } from "../Typography";
import { View } from "react-native";
import { useStyles } from "../../hooks/useStyles";

export const DialogHeader = (props: TextChildren) => {
    const styles = useStyles(themeStyles);
    return <View style={styles.header}>
        <Typography variant="h6" style={styles.title} >{props.children}</Typography>
    </View>

}

const themeStyles = EDSStyleSheet.create(theme => ({
    header: {
        height: 49,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border.medium,
        paddingHorizontal: 16,
        paddingTop: 16
    },
    title: {
        lineHeight: 26,
        color: theme.colors.text.primary
    }
}))