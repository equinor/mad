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
            contentContainerStyle={styles.container}
        >
            <Typography variant="h2">Variations</Typography>
            <Typography>
                Select between multiple colors:
            </Typography>
            <View style={styles.buttonRow}>
                <Button title="Primary" color="primary" />
                <Button title="Secondary" color="secondary" />
                <Button title="Danger" color="danger" />
            </View>
            <Spacer />
            <Typography >
                And different variants:
            </Typography>
            <View style={styles.buttonRow}>
                <Button title="Contained" variant="contained" />
                <Button title="Outlined" variant="outlined" />
                <Button title="Ghost" variant="ghost" />
            </View>
            <Spacer amount="large" />

            <Typography variant="h2">States</Typography>
            <Typography>A button can have multiple states:</Typography>
            <View style={styles.buttonRow}>
                <Button title="Disabled" disabled />
                <Button title="Loading" />
            </View>
            <Spacer amount="large" />

            <Typography variant="h2">Toggles and groups</Typography>
            <Typography>
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
            <Typography>
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

const themeStyles = EDSStyleSheet.create((theme) => ({
    container: {
        flex: 1,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
}));
