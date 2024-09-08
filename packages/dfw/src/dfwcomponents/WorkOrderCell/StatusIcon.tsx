import React from "react";
import { View } from "react-native";
import {
    Icon,
    Typography,
    useStyles,
    Color,
    IconName,
    EDSStyleSheet,
} from "@equinor/mad-components";

type StatusConfig = {
    icon: IconName;
    label: string;
    textColor: Color;
    iconColor: Color;
};

type StatusIconProps = {
    statusConfig: StatusConfig;
    hideLabel?: boolean;
};

export const StatusIcon = ({ statusConfig, hideLabel }: StatusIconProps) => {
    const styles = useStyles(themeStyles);
    return (
        <View style={styles.iconContainer}>
            <Icon name={statusConfig.icon} size={24} color={statusConfig.iconColor} />
            {!hideLabel && (
                <Typography
                    numberOfLines={1}
                    group="paragraph"
                    variant="caption"
                    color={statusConfig.textColor}
                >
                    {statusConfig.label}
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
