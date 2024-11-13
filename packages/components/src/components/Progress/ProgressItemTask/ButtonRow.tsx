import React from "react";
import { View } from "react-native";
import { useStyles } from "../../../hooks/useStyles";
import { EDSStyleSheet } from "../../../styling";
import { Button } from "../../Button";

type ButtonRowProps = {
    isError: boolean;
    shouldShowCopyButton: boolean;
    shouldShowRetryButton: boolean;
    handleCopyTextButtonPress?: () => void;
    handleRetryButtonPress?: () => void;
};

export const ButtonRow = ({
    isError,
    shouldShowCopyButton,
    shouldShowRetryButton,
    handleCopyTextButtonPress,
    handleRetryButtonPress,
}: ButtonRowProps) => {
    const styles = useStyles(tokenStyles);
    return (
        <View style={styles.container}>
            {shouldShowCopyButton && isError && (
                <Button
                    title="Copy to clipboard"
                    iconName="clipboard-outline"
                    variant="outlined"
                    onPress={handleCopyTextButtonPress}
                />
            )}
            {shouldShowRetryButton && isError ? (
                <Button iconName="restart" title="Retry" onPress={handleRetryButtonPress} />
            ) : null}
        </View>
    );
};

const tokenStyles = EDSStyleSheet.create(token => ({
    container: {
        flexDirection: "row",
        gap: token.spacing.spacer.small,
    },
}));
