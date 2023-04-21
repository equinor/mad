import {
    Button,
    EDSStyleSheet,
    Spacer,
    Typography,
    useStyles
} from "@equinor/mad-components";
import { ScrollView, View } from "react-native";

export const ButtonScreen = () => {
    const styles = useStyles(themeStyles);

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{ flex: 1 }}
        >
            <Typography style={styles.textArea}>
                Buttons come in different colors...
            </Typography>
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                }}
            >
                <Button title="Primary" color="primary" />
                <Button title="Secondary" color="secondary" />
                <Button title="Danger" color="danger" />
            </View>
            <Spacer />
            <Typography style={styles.textArea}>
                ...and in different variants.
            </Typography>
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                }}
            >
                <Button title="Contained" variant="contained" />
                <Button title="Outlined" variant="outlined" />
                <Button title="ICON (TBA)" color="danger" variant="outlined" />
            </View>
            <Spacer />
            <Typography style={styles.textArea}>
                They can also be grouped
            </Typography>
            <View style={{ alignItems: "center" }}>
                <Button.Group>
                    <Button title="One" />
                    <Button title="Two" />
                    <Button title="Three" />
                </Button.Group>
            </View>
            <Spacer />
            <Typography style={styles.textArea}>
                Or used as toggles
            </Typography>
            <View style={{ alignItems: "center" }}>
                <Button.Toggle>
                    <Button title="One" />
                    <Button title="Two" />
                    <Button title="Three" />
                </Button.Toggle>
            </View>
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create((theme: any) => ({
    textArea: {
        paddingHorizontal: theme.spacing.paddingHorizontal,
        paddingVertical: theme.spacing.paddingVertical,
    },
}));
