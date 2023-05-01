import { Accordion, EDSStyleSheet, Spacer, Typography, useStyles } from "@equinor/mad-components";
import { ScrollView, View } from "react-native";


export const AccordionScreen = () => {
    const styles = useStyles(themeStyles)
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}>
            <View style={styles.readableContent}>
                <Typography>
                    An accordion is a collection of accordion items that can be expanded and
                    collapsed at any time.
                </Typography>
            </View>
            <Spacer />
            <Accordion>
                <Accordion.Item title="Click me first!">
                    <Typography>This is the content for the first accordion item!</Typography>
                </Accordion.Item>
                <Accordion.Item title="Items can be anything">
                    <Typography>Here are some colors:</Typography>
                    <Spacer />
                    <View style={styles.rainbowContainer}>
                        {["red", "orange", "yellow", "green", "blue", "indigo", "violet"].map((col, index) => (
                            <View
                                key={index}
                                style={{
                                    flex: 1,
                                    borderRadius: 6,
                                    backgroundColor: col
                                }}>
                            </View>))}
                    </View>
                </Accordion.Item>
                <Accordion.Item title="Left-positioned chevron" chevronPosition="left">
                    <Typography>But it defaults to right!</Typography>
                </Accordion.Item>
                <Accordion.Item title="This item is disabled!" disabled>
                    <Typography>But it defaults to right!</Typography>
                </Accordion.Item>
            </Accordion>
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
    rainbowContainer: {
        flexDirection: "row",
        height: 30,
        gap: 4,
    },
}));
