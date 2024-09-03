import React from "react";
import {
    EDSStyleSheet,
    useStyles,
    useBreakpoint,
    Breakpoint,
    IconName,
    Icon,
    Typography,
    Color,
} from "@equinor/mad-components";
import { View, ViewProps } from "react-native";
type PropertyRowStyleProps = {
    breakpoint: Breakpoint;
};
export type PropertyRowProps = {
    label: string;
    value: string;
    iconName?: IconName;
    textColor?: Color;
    selectable?: boolean;
} & ViewProps;
export const PropertyRow = ({
    label,
    value,
    iconName,
    textColor = "textTertiary",
    selectable,
    ...rest
}: PropertyRowProps) => {
    const breakpoint = useBreakpoint();
    const styles = useStyles(themeStyles, { breakpoint });
    const renderIcon = () =>
        iconName && (
            <Icon name={iconName} size={20} style={styles.iconStyle} color="textTertiary" />
        );
    const labelProps =
        breakpoint === "xs"
            ? ({ group: "paragraph", variant: "overline" } as const)
            : ({ group: "paragraph", variant: "body_short" } as const);
    return (
        <View {...rest} style={[styles.propertyLabel, rest.style]}>
            {breakpoint === "xs" && renderIcon()}
            <View style={styles.textContainer}>
                <View style={styles.labelStyle}>
                    {breakpoint !== "xs" && renderIcon()}
                    <Typography {...labelProps} color="textTertiary">
                        {label}
                    </Typography>
                </View>
                <Typography
                    group="paragraph"
                    variant="body_short"
                    color={textColor}
                    numberOfLines={1}
                    selectable={selectable}
                >
                    {value}
                </Typography>
            </View>
        </View>
    );
};
const themeStyles = EDSStyleSheet.create((_, { breakpoint }: PropertyRowStyleProps) => ({
    propertyLabel: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconStyle: {
        paddingRight: 10,
    },
    labelStyle: {
        flexDirection: "row",
        minWidth: breakpoint !== "xs" ? 232 : 0,
    },
    textContainer: {
        flexDirection: breakpoint === "xs" ? "column" : "row",
    },
}));
