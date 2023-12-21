import React from "react";
import { Typography, useStyles, EDSStyleSheet, Tabs } from "@equinor/mad-components";
import { ScrollView, useWindowDimensions } from "react-native";

export const TabsScreen = () => {
    const styles = useStyles(themeStyles);
    const { width } = useWindowDimensions();
    return (
        <Tabs scrollable={width < 576}>
            <Tabs.Tab title="Read this tab first">
                <ScrollView contentContainerStyle={styles.tabContentContainer}>
                    <Typography>
                        The Tabs component is not meant to replace react native navigation tabs, but
                        provide a nice method for adding sub-screen navigation to your apps!
                    </Typography>
                </ScrollView>
            </Tabs.Tab>
            <Tabs.Tab title="With icon" iconName="trophy-award">
                <ScrollView contentContainerStyle={styles.tabContentContainer}>
                    <Typography>They can be configured with or without icons.</Typography>
                </ScrollView>
            </Tabs.Tab>
            <Tabs.Tab title="Disabled" disabled>
                <ScrollView contentContainerStyle={styles.tabContentContainer}>
                    <Typography>
                        If you can see this, it means the Tabs are not working correctly!
                    </Typography>
                </ScrollView>
            </Tabs.Tab>
            <Tabs.Tab title="Scrollable">
                <ScrollView contentContainerStyle={styles.tabContentContainer}>
                    <Typography>
                        On smaller devices, tabs might end up taking more horizontal space than what
                        they are allowed. When this happens, use the scrollable prop to make the
                        tabs scrollable. Tapping any tab in this mode automatically scrolls to make
                        it fit in screen.
                    </Typography>
                </ScrollView>
            </Tabs.Tab>
        </Tabs>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    tabContentContainer: {
        paddingVertical: theme.spacing.container.paddingVertical,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
}));
