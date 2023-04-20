import {
    Button,
    EDSStyleSheet,
    Spacer,
    Typography,
    useStyles,
    ButtonGroup,
    ToggleButton
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
            <View style={{ justifyContent: "space-evenly", flexDirection: "row" }}>
                <ButtonGroup>
                    <Button title="One"></Button>
                    <Button title="Two"></Button>
                    <Button title="Three"></Button>
                </ButtonGroup>
            </View>
            <Spacer />
            <Typography style={styles.textArea}>
                Or used as toggles
            </Typography>
            <View style={{ justifyContent: "space-evenly", flexDirection: "row" }}>
                <ToggleButton>
                    <Button title="One"></Button>
                    <Button title="Two"></Button>
                    <Button title="Three"></Button>
                </ToggleButton>
            </View>
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create((theme) => ({
    textArea: {
        paddingHorizontal: theme.spacing.paddingHorizontal,
        paddingVertical: theme.spacing.paddingVertical,
    },
}));
