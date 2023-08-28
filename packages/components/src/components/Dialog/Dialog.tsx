import React from "react";
import {
    ScaledSize,
    StyleProp,
    StyleSheet,
    ViewProps,
    ViewStyle,
    useWindowDimensions,
} from "react-native";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { Paper } from "../Paper";
import { Scrim, ScrimProps } from "../Scrim";
import { PopInContainer } from "../_internal/PopInContainer";

type DialogProps = Omit<ScrimProps, "onPress"> & { onScrimPress?: ScrimProps["onPress"] };

export const Dialog = ({ isOpen, onScrimPress, children, ...rest }: DialogProps & ViewProps) => {
    const dimensions = useWindowDimensions();
    const styles = useStyles(themeStyles, { style: rest.style, dimensions });
    return (
        <Scrim isOpen={isOpen} onPress={onScrimPress}>
            <PopInContainer>
                <Paper elevation="aboveScrim" style={[styles.dialog, rest.style]} {...rest}>
                    {children}
                </Paper>
            </PopInContainer>
        </Scrim>
    );
};

const themeStyles = EDSStyleSheet.create(
    (theme, props: { style: StyleProp<ViewStyle>; dimensions: ScaledSize }) => ({
        dialog: StyleSheet.flatten({
            backgroundColor: theme.colors.container.elevation.aboveScrim,
            borderRadius: theme.geometry.border.elementBorderRadius,
            minHeight: theme.geometry.dimension.dialog.minHeight,
            width: theme.geometry.dimension.dialog.defaultWidth,
            maxWidth: props.dimensions.width - theme.spacing.container.paddingVertical * 2,
        }),
    }),
);
