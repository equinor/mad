import {
    Typography,
    Portal,
    EDSStyleSheet,
    useStyles,
    Spacer,
    Paper,
    Icon,
    Button,
} from "@equinor/mad-components";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";

export const PortalScreen = () => {
    const styles = useStyles(themeStyles);
    const [isRootPortaling, setIsRootPortaling] = useState<boolean>(false);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.contentContainer}
        >
            <Typography>
                Portals consists of hosts and portal content. The Portal.Host component acts as an
                anchor for a portal instance that references the same name as its host.
            </Typography>
            <Spacer />
            <Paper elevation="raised" style={styles.paperContainer}>
                <Portal.Host name="A" style={styles.greenContainer} />
                <Portal name="B">
                    <Typography>This text is actually inside the green container!</Typography>
                </Portal>
            </Paper>
            <Spacer />
            <Paper elevation="raised" style={styles.paperContainer}>
                <Portal.Host name="B" style={styles.orangeContainer} />
                <Portal name="A">
                    <Typography>
                        This text is actually defined in the orange container, but has been
                        portalled to a Portal.Host in the green container!
                    </Typography>
                </Portal>
            </Paper>
            <Spacer />
            <Typography variant="h2">Root portaling</Typography>
            <Typography>
                {
                    'Portals are useful tools, and while the prior example perhaps fail to justify why, \
                imagine a scenario where you need to send content to the root of the DOM tree. You \
                may define your own hosts, or use the default "root" host that comes included with \
                the EDSProvider component you hopefully have wrapped your app in allready.'
                }
            </Typography>
            <Spacer />
            <Button
                title={isRootPortaling ? "No thanks!" : "Offer me something"}
                iconName={isRootPortaling ? "arrange-send-backward" : "arrange-bring-forward"}
                color={isRootPortaling ? "danger" : "primary"}
                onPress={() => setIsRootPortaling(state => !state)}
            />
            {isRootPortaling && (
                <Portal name="root">
                    <Paper elevation="raised" style={styles.extendedWarrantyContainer}>
                        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                            <Icon name="face-man" color="textInverted" />
                            <Typography variant="h6" color="textInverted">
                                {
                                    "Sir, we've been trying to reach you about your car's extended warrranty"
                                }
                            </Typography>
                        </View>
                    </Paper>
                </Portal>
            )}
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    contentContainer: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    paperContainer: {
        borderRadius: theme.geometry.border.elementBorderRadius,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    orangeContainer: {
        borderRadius: theme.geometry.border.elementBorderRadius,
        borderWidth: theme.geometry.border.focusedBorderWidth,
        borderColor: theme.colors.feedback.warning,
        paddingHorizontal: theme.spacing.element.paddingHorizontal,
        paddingVertical: theme.spacing.element.paddingVertical,
        borderStyle: "dashed",
    },
    greenContainer: {
        borderRadius: theme.geometry.border.elementBorderRadius,
        borderWidth: theme.geometry.border.focusedBorderWidth,
        borderColor: theme.colors.feedback.success,
        paddingHorizontal: theme.spacing.element.paddingHorizontal,
        paddingVertical: theme.spacing.element.paddingVertical,
        borderStyle: "dashed",
    },
    extendedWarrantyContainer: {
        height: 200,
        justifyContent: "flex-end",
        backgroundColor: theme.colors.interactive.secondary,
        zIndex: 10,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingHorizontal,
    },
}));
