import {
    EDSStyleSheet,
    Icon,
    Paper,
    PressableHighlight,
    Typography,
    useStyles,
    useToken,
} from "@equinor/mad-components";
import React from "react";
import { ToastType } from "../types";
import { getMaxToastWidth } from "../utils/getMaxToastWidth";
import { getToastTokenForType } from "../utils/getToastTokenForType";
import { getIconNameForToastType } from "../utils/getIconNameForToastType";

export type ToastComponentProps = { text: string; type: ToastType; onPress?: () => void };
export const ToastComponent = ({ text, type, onPress }: ToastComponentProps) => {
    const styles = useStyles(theme, type);
    const masterToken = useToken();
    const { text: textColor } = getToastTokenForType(masterToken, type);
    const iconName = getIconNameForToastType(type);

    return (
        <PressableHighlight
            disabled={typeof onPress !== "function"}
            onPress={onPress}
            style={styles.pressable}
        >
            <Paper elevation="raised" style={styles.background}>
                <Icon name={iconName} color={textColor} />
                <Typography color={textColor} numberOfLines={2} style={styles.text}>
                    {text}
                </Typography>
            </Paper>
        </PressableHighlight>
    );
};

const theme = EDSStyleSheet.create((token, type: ToastType) => {
    const { background: backgroundColor } = getToastTokenForType(token, type);
    return {
        pressable: { borderRadius: 4 },
        background: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor,
            borderRadius: 4,
            gap: 16,
            maxWidth: getMaxToastWidth(),
            padding: 16,
            userSelect: "none",
        },
        text: {
            maxWidth: "90%",
            // prevent selecting text for web, since this disrupts the swipable properties
            userSelect: "none",
        },
    };
});
