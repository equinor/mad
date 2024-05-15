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
import { getMaxToastWidth } from "../utils/getMaxToastWidth";
import { getToastTokenForType } from "../utils/getToastTokenForType";

export type ToastComponentProps = { text: string; type: ToastType; onPress?: () => void };
export const ToastComponent = ({ text, type, onPress }: ToastComponentProps) => {
    const styles = useStyles(theme, type);
    const masterToken = useToken();
    const { text: textColor } = getToastTokenForType(masterToken, type);

    return (
        <TouchableHighlight
            disabled={typeof onPress !== "function"}
            onPress={onPress}
            style={{ borderRadius: 4 }}
        >
            <Paper elevation="raised" style={styles.background}>
                <Icon name="information-outline" color={textColor} />
                <Typography color={textColor} numberOfLines={2} style={{ maxWidth: "90%" }}>
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
            maxWidth: getMaxToastWidth(),
            padding: 16,
        },
    };
});
