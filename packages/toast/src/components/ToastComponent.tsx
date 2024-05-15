import {
    EDSStyleSheet,
    Icon,
    Paper,
    Typography,
    useStyles,
    useToken,
} from "@equinor/mad-components";
import React from "react";
import { TouchableHighlight } from "react-native";
import { ToastType } from "../types";
import { getMaxTextWidth } from "../utils/getMaxTextWidth";
import { getToastTokenForType } from "../utils/getToastTokenForType";

export type ToastComponentProps = { text: string; type: ToastType; onPress?: () => void };
export const ToastComponent = ({ text, type, onPress }: ToastComponentProps) => {
    const styles = useStyles(theme, type);
    const masterToken = useToken();
    const { text: textColor } = getToastTokenForType(masterToken, type);
    const maxTextWidth = getMaxTextWidth();

    return (
        <TouchableHighlight disabled={!!onPress} onPress={onPress}>
            <Paper elevation="raised" style={styles.background}>
                <Icon name="information-outline" color={textColor} />
                <Typography color={textColor} numberOfLines={2} style={{ maxWidth: maxTextWidth }}>
                    {text}
                </Typography>
            </Paper>
        </TouchableHighlight>
    );
};

const theme = EDSStyleSheet.create((token, type: ToastType) => {
    const { background: backgroundColor } = getToastTokenForType(token, type);
    return {
        background: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor,
            borderRadius: 4,
            gap: 16,
            padding: 16,
        },
    };
});
