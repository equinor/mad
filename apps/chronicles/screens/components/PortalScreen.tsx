import {
    Typography,
    Portal,
    EDSStyleSheet,
    useStyles,
    Spacer,
    Paper
} from "@equinor/mad-components";
import { ScrollView } from "react-native";

export const PortalScreen = () => {
    const styles = useStyles(themeStyles);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.contentContainer}
        >
            <Typography>
                Portals consists of hosts and portal content. The Portal.Host component acts as an anchor
                for a portal instance that references the same name as its host.
            </Typography>
            <Spacer />
            <Paper elevation="raised" style={styles.paperContainer}>
                <Portal.Host name="A" style={styles.greenContainer} />
                <Portal name="B">
                    <Typography>
                        This text is actually inside the green container!
                    </Typography>
                </Portal>
            </Paper>
            <Spacer />
            <Paper elevation="raised" style={styles.paperContainer}>
                <Portal.Host name="B" style={styles.orangeContainer} />
                <Portal name="A">
                    <Typography>
                        This text is actually defined in the orange container,
                        but has been portalled to a Portal.Host in the green container!
                    </Typography>
                </Portal>
            </Paper>
            <Spacer />
            <Typography variant="h2">Root portaling</Typography>
            <Typography>
                Portals are useful tools, and while the example shown in this page perhaps fails to justify why,
                imagine a scenario where you need to send content to the root of the DOM tree.
                You may define your own hosts, or use the default "root" host that comes included with the
                EDSProvider component you hopefully have wrapped your app in allready.
            </Typography>
        </ScrollView>
    );
}

const themeStyles = EDSStyleSheet.create((theme) => ({
    contentContainer: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical
    },
    paperContainer: {
        borderRadius: theme.geometry.border.elementBorderRadius,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical
    },
    orangeContainer: {
        borderRadius: theme.geometry.border.elementBorderRadius,
        borderWidth: theme.geometry.border.focusedBorderWidth,
        borderColor: theme.colors.interactive.warning,
    },
    greenContainer: {
        borderRadius: theme.geometry.border.elementBorderRadius,
        borderWidth: theme.geometry.border.focusedBorderWidth,
        borderColor: theme.colors.interactive.success,
    }
}));