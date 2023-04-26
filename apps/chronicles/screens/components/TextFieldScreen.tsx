import { ScrollView } from "react-native"
import { View } from "../../components/Themed"
import { EDSStyleSheet, useStyles, Typography, TextField, Spacer } from "@equinor/mad-components"

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
            <TextField disabled label="Say something" placeholder="Anything goes here"></TextField>
        </View>
    </ScrollView >
}

const themedStyles = EDSStyleSheet.create((theme) => ({
    container: {
        paddingHorizontal: theme.spacing.paddingHorizontal,
        paddingVertical: theme.spacing.paddingVertical,
    }
}));