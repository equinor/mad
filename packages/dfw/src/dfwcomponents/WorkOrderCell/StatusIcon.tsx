import { EDSStyleSheet, Icon, Typography, useStyles } from "@equinor/mad-components";
import React from "react";
import { View } from "react-native";
import { StatusConfig } from "./types";

export const StatusIcon = ({ icon, label, textColor, iconColor }: StatusConfig) => {
    const styles = useStyles(themeStyles);
    return (
        <View style={styles.iconContainer}>
            <Icon name={icon} size={24} color={iconColor} />
            {label && (
                <Typography numberOfLines={1} group="paragraph" variant="caption" color={textColor}>
                    {label}
                </Typography>
            )}
        </View>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.cell.content.titleDescriptionGap,
    },
}));
