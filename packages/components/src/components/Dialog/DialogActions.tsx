import React from 'react'
import { View } from "react-native"
import { EDSStyleSheet } from "../../styling"
import { PropsWithChildren } from "react"
import { useStyles } from "../../hooks/useStyles"

export type DialogActionsProps = PropsWithChildren<{ align?: "left" | "right" }>
export const DialogActions = ({ align = "left", children }: DialogActionsProps) => {
    const styles = useStyles(themeStyles, align)
    return <View style={styles.actionsContainer}>
        {children}
    </View>
}

const themeStyles = EDSStyleSheet.create((theme, align: "left" | "right") => ({
    actionsContainer: {
        flexDirection: "row",
        gap: 16,
        justifyContent: align === "left" ? "flex-start" : "flex-end",
        padding: 16
    }
}))