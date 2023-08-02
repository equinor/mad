import React from "react"
import { ScaledSize, ViewStyle, useWindowDimensions } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { Paper } from "../Paper";
import { Scrim, ScrimProps } from "../Scrim";

type DialogProps = Omit<ScrimProps, "onPress"> & { style?: ViewStyle } & { onScrimPress?: ScrimProps["onPress"] }

export const Dialog = ({ isOpen, style, onScrimPress, children }: DialogProps) => {
    const dimensions = useWindowDimensions();
    const styles = useStyles(themeStyles, { style, dimensions })
    return <Scrim isOpen={isOpen} onPress={onScrimPress}>
        <Paper elevation="aboveScrim" style={styles.dialog}>
            {children}
        </Paper>
    </Scrim>
}

const themeStyles = EDSStyleSheet.create((theme, props: { style: ViewStyle | undefined, dimensions: ScaledSize }) => ({
    dialog: {
        backgroundColor: "white",
        borderRadius: theme.geometry.border.elementBorderRadius,
        minHeight: theme.geometry.dimension.dialog.minHeight,
        width: theme.geometry.dimension.dialog.defaultWidth,
        maxWidth: props.dimensions.width - (theme.spacing.container.paddingVertical * 2),
        ...props.style
    }
}))