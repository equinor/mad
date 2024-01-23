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
    const labelProps =
        breakpoint === "xs"
            ? ({ group: "paragraph", variant: "overline" } as const)
            : ({ group: "paragraph", variant: "body_short" } as const);
    return (
        <View style={[styles.propertyRow, rowStyle]}>
            <View style={styles.propertyLabel}>
                {iconName && <Icon name={iconName} size={20} style={styles.iconStyle} />}
                <Typography {...labelProps}>{label}</Typography>
            </View>
            <Typography
                group="paragraph"
                variant="body_short"
                color="textTertiary"
                style={{ flex: 1 }}
                numberOfLines={1}
            >
                {value}
            </Typography>
        </View>
    );
};

const themeStyles = EDSStyleSheet.create((theme, { breakpoint }: PropertyRowStyleProps) => ({
    propertyRow: {
        flexDirection: breakpoint !== "xs" ? "row" : "column",
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignItems: breakpoint !== "xs" ? "center" : "flex-start",
    },
    propertyLabel: {
        flexBasis: breakpoint !== "xs" ? 232 : undefined,
        flexDirection: "row",
    },
    iconStyle: {
        paddingRight: 10,
    },
}));
