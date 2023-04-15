import { View } from "react-native";
import { useStyles } from "../../hooks/useStyles"
import { EDSStyleSheet } from "../../styling"


export type SpacerProps = {
    amount?: "small" | "medium" | "large",
}

export const Spacer = ({
    amount = "medium",
}: SpacerProps) => {
    const styles = useStyles(themeStyles, { amount });

    return <View style={styles.spacer} />
}

Spacer.defaultName = "Spacer";

const themeStyles = EDSStyleSheet.create((theme, props) => {
    const { amount: amount = "medium" } = props as SpacerProps;
    return {
        spacer: {
            flexBasis: theme.spacing.spacer[amount],
        },
    };
});
