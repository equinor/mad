import { EDSStyleSheet, useStyles } from "@equinor/mad-components";
import { ScrollView } from "react-native";


export const ProgressIndicatorScreen = () => {
    const styles = useStyles(themeStyles)
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}>

        </ScrollView >
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingVertical: theme.spacing.container.paddingVertical,
        paddingHorizontal: theme.spacing.container.paddingHorizontal
    },
    readableContent: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
}));
