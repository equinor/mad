import React from "react";
import {
    EDSStyleSheet,
    useStyles,
    useBreakpoint,
    Breakpoint,
    IconName,
    Icon,
    Typography,
} from "@equinor/mad-components";
import { View, ViewStyle } from "react-native";

type PropertyRowStyleProps = {
    breakpoint: Breakpoint;
};

export type PropertyRowProps = {
    label: string;
    value: string;
    iconName?: IconName;
    rowStyle?: ViewStyle;
};

export const PropertyRow = ({ label, value, iconName, rowStyle }: PropertyRowProps) => {
    const breakpoint = useBreakpoint();
    const styles = useStyles(themeStyles, { breakpoint });
    const renderIcon = () => {
        if (iconName) {
            return <Icon name={iconName} size={20} style={styles.iconStyle} />;
        }
        return <View style={{ paddingRight: 30 }} />;
    };
    const labelProps =
        breakpoint === "xs"
            ? ({ group: "paragraph", variant: "overline" } as const)
            : ({ group: "paragraph", variant: "body_short" } as const);

    return (
        <View style={[styles.propertyLabel, rowStyle]}>
            {renderIcon()}
            <View style={styles.textContainer}>
                <Typography style={styles.labelStyle} {...labelProps}>
                    {label}
                </Typography>
                <Typography
                    group="paragraph"
                    variant="body_short"
                    color="textSecondary"
                    style={{ flex: 1 }}
                    numberOfLines={1}
                >
                    {value}
                </Typography>
            </View>
        </View>
    );
};

const themeStyles = EDSStyleSheet.create((theme, { breakpoint }: PropertyRowStyleProps) => ({
    propertyLabel: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    iconStyle: {
        paddingRight: 10,
        flexDirection: breakpoint === "xs" ? "row" : undefined,
    },
    labelStyle: {
        minWidth: breakpoint !== "xs" ? 232 : 0,
    },

    textContainer: {
        flexDirection: breakpoint === "xs" ? "column" : "row",
        //gap: theme.spacing.cell.content.titleDescriptionGap,
    },
}));
