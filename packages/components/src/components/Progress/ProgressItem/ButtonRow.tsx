import React from "react";
import { View, ViewProps } from "react-native";
import { useStyles } from "../../../hooks/useStyles";
import { EDSStyleSheet } from "../../../styling";
import { Button } from "../../Button";
import { ProgressTask } from "../types";
import { ExpandButton } from "./ExpandButton";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

type ButtonRowProps = {
    onRetryButtonPress?: (task: ProgressTask) => void;
    taskHasError?: boolean;
    handleRetryButtonPress?: () => void;
} & ViewProps;

export const ButtonRow = ({
    onRetryButtonPress,
    taskHasError,
    handleRetryButtonPress,
    ...viewProps
}: ButtonRowProps) => {
    const styles = useStyles(tokenStyles);
    const breakpoint = useBreakpoint();
    return (
        <View {...viewProps} style={[styles.buttonsRow, viewProps.style]}>
            {breakpoint === "xs" && <ExpandButton variant="outlined" />}
            {onRetryButtonPress && taskHasError ? (
                <Button iconName="restart" title="Retry" onPress={handleRetryButtonPress} />
            ) : null}
        </View>
    );
};

const tokenStyles = EDSStyleSheet.create(() => ({
    buttonsRow: {
        flexDirection: "row",
        alignItems: "center",
    },
}));
