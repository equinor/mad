import { ScrollView } from "react-native"
import { View } from "../../components/Themed"
import { EDSStyleSheet, useStyles, Typography, Input, Spacer } from "@equinor/mad-components"
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
                <View style={{ backgroundColor: "transparent", flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Ionicons name="cafe" size={16} color={"white"} />
                </View>
            } label="Say something" placeholder="Anything goes here" helperText="Some help"></Input>

            <Spacer />
            <Typography>
                Right adornments
            </Typography>
            <Spacer />
            <Input rightAdornments={
                <View style={{ backgroundColor: "#007079", flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Ionicons name="beer" size={16} color={"white"} />
                </View>
            } label="Say something" placeholder="Anything goes here"></Input>
            <Spacer />
            <Typography>
                Or both
            </Typography>
            <Spacer />
            <Input rightAdornments={
                <View style={{ backgroundColor: "#007079", flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Ionicons name="backspace" size={16} color={"white"} />
                </View>
            } leftAdornments={
                <View style={{ backgroundColor: "#007079", flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Ionicons name="calculator" size={16} color={"white"} />
                </View>
            } label="Say something" placeholder="Anything goes here"></Input>
        </View>
    </ScrollView >
}

const themedStyles = EDSStyleSheet.create((theme) => ({
    container: {
        paddingHorizontal: theme.spacing.paddingHorizontal,
        paddingVertical: theme.spacing.paddingVertical,
    }
}));