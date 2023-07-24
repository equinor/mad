import React from 'react';
import { PropsWithChildren } from "react";
import { View } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";


export const DialogCustomContent = ({ children }: PropsWithChildren) => {
    const styles = useStyles(themeStyles);
    return <View style={styles.customContentContainer}>
        {children}
    </View>
}

const themeStyles = EDSStyleSheet.create(() => ({
    customContentContainer: {
        flex: 1,
        padding: 16
    }
}))