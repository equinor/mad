import { Cell, EDSStyleSheet, Spacer, Typography, useStyles } from "@equinor/mad-components";
import { ScrollView, View } from "react-native";


export const NavigationCellScreen = () => {
    const styles = useStyles(themeStyles)
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}>
            <View style={styles.readableContent}>
                <Typography>
                    The navigation cell is a pressable cell with a predefined layout. {"\n"}
                    In its most basic form, it looks pretty boring...
                </Typography>
            </View>
            <Spacer />
            <Cell.Navigation
                title="I'll take you anywhere!"
                onPress={() => null} />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>
                    ...but you may style it with a description...
                </Typography>
            </View>
            <Spacer />
            <Cell.Navigation
                title="Some title here"
                description="And this part makes it more clear, or adds something else."
                onPress={() => null} />
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>
                    ...and an icon
                </Typography>
            </View>
            <Spacer />
            <Cell.Navigation
                title="Fly me to the moon"
                description="Let me play among the stars"
                iconName="moon-waning-crescent"
                onPress={() => null} />
        </ScrollView >
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    readableContent: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
}));
