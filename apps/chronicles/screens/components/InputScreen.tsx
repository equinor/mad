import { ScrollView, View } from "react-native"
import { EDSStyleSheet, useStyles, Typography, Input, Spacer, Icon } from "@equinor/mad-components"
import { Ionicons } from "@expo/vector-icons";

export const InputScreen = () => {
    const styles = useStyles(themedStyles);
    return <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ flex: 1 }}
    >
        <View style={styles.container}>
            <Typography>
                You can use an Input to add left adornments
            </Typography>
            <Spacer />
            <Input leftAdornments={
                <View style={styles.adornment}>
                    <Icon name="face-agent" />
                </View>
            } label="Say something" placeholder="Anything goes here" helperText="Some help"></Input>

            <Spacer />
            <Typography>
                Right adornments
            </Typography>
            <Spacer />
            <Input rightAdornments={
                <View style={[styles.adornment, { flexDirection: "row", width: 100, backgroundColor: "gray", gap: 8 }]}>
                    <Icon name="face-man" color="#FFFFFF" />
                    <Icon name="face-woman" color="#FFFFFF" />
                    <Icon name="face-mask" color="#FFFFFF" />
                </View>
            } label="Say something" placeholder="Anything goes here"></Input>
            <Spacer />
            <Typography>
                Or both
            </Typography>
            <Spacer />
            <Input rightAdornments={
                <View style={styles.adornment}>
                    <Icon name="calculator" />
                </View>
            } leftAdornments={
                <View style={styles.adornment}>
                    <Icon name="backspace" />
                </View>
            } label="Say something" placeholder="Anything goes here"></Input>
        </View>
    </ScrollView >
}

const themedStyles = EDSStyleSheet.create((theme) => ({
    container: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
        backgroundColor: theme.colors.container.default
    },
    adornment: {
        width: 30,
        justifyContent: "center",
        alignItems: "center",
    },
}));