import { EDSStyleSheet, Spacer, TextField, Typography, useStyles } from "@equinor/mad-components";
import { ScrollView } from "react-native";
import { View } from "../../components/Themed";

export const TextFieldScreen = () => {
    const styles = useStyles(themedStyles);
    return <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ flex: 1 }}
    >
        <View style={styles.container}>
            <Typography>
                You can use a TextField to accept user input
            </Typography>
            <Spacer />
            <TextField label="Say something" placeholder="Anything goes here" />

            <Spacer />
            <Typography>
                It can accept multiple lines of text too
            </Typography>
            <Spacer />
            <TextField multiline label="Say something" placeholder="Anything goes here" />
        </View>
    </ScrollView >
}

const themedStyles = EDSStyleSheet.create((theme) => ({
    container: {
        paddingHorizontal: theme.spacing.paddingHorizontal,
        paddingVertical: theme.spacing.paddingVertical,
        backgroundColor: theme.colors.container.default
    }
}));