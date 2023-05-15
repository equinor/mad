import { EDSStyleSheet, Spacer, TextField, Typography, useStyles } from "@equinor/mad-components";
import { ScrollView, View } from "react-native";

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
            <TextField multiline label="Say something" placeholder="Anything goes here" helperText="Hello everyone hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello" />
        </View>
    </ScrollView >
}

const themedStyles = EDSStyleSheet.create((theme) => ({
    container: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
        backgroundColor: theme.colors.container.default
    }
}));