import React from "react";
import { Accordion, EDSStyleSheet, Spacer, Typography, useStyles } from "@equinor/mad-components";
import { ScrollView, View } from "react-native";

export const AccordionScreen = () => {
    const styles = useStyles(themeStyles);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}
        >
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
                        {["red", "orange", "yellow", "green", "blue", "indigo", "violet"].map(
                            (col, index) => (
                                <View
                                    key={index}
                                    style={{
                                        flex: 1,
                                        borderRadius: 6,
                                        backgroundColor: col,
                                    }}
                                ></View>
                            ),
                        )}
                    </View>
                </Accordion.Item>
                <Accordion.Item title="Right-positioned chevron" chevronPosition="right">
                    <Typography>But it defaults to left!</Typography>
                </Accordion.Item>
                <Accordion.Item title="This item is disabled!" disabled>
                    <Typography>But it defaults to right!</Typography>
                </Accordion.Item>
                <Accordion.Item title="This item is allready open" defaultOpen>
                    <Typography>But you can still close me</Typography>
                </Accordion.Item>
            </Accordion>

            <Spacer amount="large" />

            <View style={styles.readableContent}>
                <Typography variant="h2">Adornments</Typography>
                <Typography>
                    You are free to add an adornment and / or an icon to the accordion items. Note
                    that based on the position of the chevron, the layout will differ. See the
                    following accordion for more info:
                </Typography>
            </View>
            <Spacer />
            <Accordion>
                <Accordion.Item
                    title="Left chevron"
                    adornment={
                        <View style={styles.adornment}>
                            <Typography>Adornment</Typography>
                        </View>
                    }
                >
                    <Typography>
                        For left-positioned chevrons, the adornment is given plenty of space.
                    </Typography>
                </Accordion.Item>
                <Accordion.Item
                    title="Right chevron"
                    chevronPosition="right"
                    adornment={
                        <View style={styles.adornment}>
                            <Typography>Adornment</Typography>
                        </View>
                    }
                >
                    <Typography>
                        For right-positioned chevrons, the adornment is put in between it and the
                        title.
                    </Typography>
                </Accordion.Item>
                <Accordion.Item
                    title="Right chevron with icon"
                    chevronPosition="right"
                    iconName="face-woman-shimmer-outline"
                >
                    <Typography>
                        The icon is auto-positioned to make the accordion item line up with the
                        grid-system.
                    </Typography>
                </Accordion.Item>
                <Accordion.Item title="Left chevron with icon" iconName="face-man-shimmer-outline">
                    <Typography>The chevron and the icon effectively switch places!</Typography>
                </Accordion.Item>
                <Accordion.Item
                    title="Right chevron combo"
                    chevronPosition="right"
                    iconName="face-woman-profile"
                    adornment={
                        <View style={styles.adornment}>
                            <Typography>Adornment</Typography>
                        </View>
                    }
                >
                    <Typography>Things become more tight, but the layout still works.</Typography>
                </Accordion.Item>
                <Accordion.Item
                    title="Left chevron combo"
                    iconName="face-man-profile"
                    adornment={
                        <View style={styles.adornment}>
                            <Typography>Adornment</Typography>
                        </View>
                    }
                >
                    <Typography>
                        Consider the available space for smaller devices as well. Use with caution!
                    </Typography>
                </Accordion.Item>
            </Accordion>
        </ScrollView>
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
    adornment: {
        flex: 1,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "dashed",
        borderColor: theme.colors.interactive.primary,
        borderRadius: theme.geometry.border.elementBorderRadius,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
}));
