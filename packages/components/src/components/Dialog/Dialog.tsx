import React, { PropsWithChildren } from "react"
import { LayoutAnimation, Pressable, ViewStyle } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { Paper } from "../Paper";
import { Portal } from "../Portal";

type DialogProps = PropsWithChildren<{ isOpen: boolean, style?: ViewStyle }> & ({ isDismissable?: false, onClose?: () => void } | { isDismissable: true, onClose: () => void })

export const Dialog = ({ isOpen, style, isDismissable, onClose, children }: DialogProps) => {
    const styles = useStyles(themeStyles, style)
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

const themeStyles = EDSStyleSheet.create((_, style: ViewStyle | undefined) => ({
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
        width: 252,
        ...style
    }
}))