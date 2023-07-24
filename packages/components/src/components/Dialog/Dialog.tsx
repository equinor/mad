import React, { PropsWithChildren } from "react"
import { LayoutAnimation, Pressable, ScaledSize, ViewStyle, useWindowDimensions } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { Paper } from "../Paper";
import { Portal } from "../Portal";

type DialogProps = PropsWithChildren<{ isOpen: boolean, style?: ViewStyle }> & ({ isDismissable?: false, onClose?: () => void } | { isDismissable: true, onClose: () => void })

export const Dialog = ({ isOpen, style, isDismissable, onClose, children }: DialogProps) => {
    const dimensions = useWindowDimensions();
    const styles = useStyles(themeStyles, { style, dimensions })
    LayoutAnimation.configureNext({ ...LayoutAnimation.Presets.spring, duration: 100 })
    if (!isOpen) return null;
    return <Portal name="scrim">
        <Pressable style={styles.background} onPress={() => isDismissable && onClose()}>
            <Paper elevation="aboveScrim" style={styles.dialog}>
                {children}
            </Paper>
        </Pressable>
    </Portal>
}

const themeStyles = EDSStyleSheet.create((theme, props: { style: ViewStyle | undefined, dimensions: ScaledSize }) => ({
    background: {
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
    },
    dialog: {
        borderRadius: 4,
        height: 213,
        width: 500,
        maxWidth: props.dimensions.width - (theme.spacing.container.paddingVertical * 2),
        ...props.style
    }
}))