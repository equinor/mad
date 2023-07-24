import { Button, Dialog, EDSStyleSheet, Typography, useStyles } from "@equinor/mad-components";
import { useState } from "react"
import { ScrollView } from "react-native-gesture-handler"


export const DialogScreen = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const styles = useStyles(themeStyles);
    return <><ScrollView
        contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.contentContainer}>
        <Button title="Trigger dialog" onPress={() => setIsDialogOpen(true)} />
        <Typography variant="h5" style={{ paddingTop: 16 }}>Differences from eds-core-react:</Typography>
        <Typography>{"- 'open' prop is now named 'isOpen'"}</Typography>
        <Typography>{"- 'dialogRef' prop does not exist. Could be implemented if needed"}</Typography>
        <Typography>{"- if 'isDismissable' is true, 'onClose' is required"}</Typography>
        <Typography>{"- Dialog.Actions has a 'align' prop, to help you align buttons left or right"}</Typography>
    </ScrollView>
        <Dialog isOpen={isDialogOpen} isDismissable={true} onClose={() => setIsDialogOpen(false)}>
            <Dialog.Header>Title</Dialog.Header>
            <Dialog.CustomContent>
                <Typography>Small description here.</Typography>
            </Dialog.CustomContent>
            <Dialog.Actions align="right">
                <Button title="OK" />
                <Button variant="outlined" title="Cancel" />
            </Dialog.Actions>
        </Dialog>
    </>
}

const themeStyles = EDSStyleSheet.create((theme) => ({
    contentContainer: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical
    },
    // paperContainer: {
    //     borderRadius: theme.geometry.border.elementBorderRadius,
    //     paddingHorizontal: theme.spacing.container.paddingHorizontal,
    //     paddingVertical: theme.spacing.container.paddingVertical
    // },
    // orangeContainer: {
    //     borderRadius: theme.geometry.border.elementBorderRadius,
    //     borderWidth: theme.geometry.border.focusedBorderWidth,
    //     borderColor: theme.colors.interactive.warning,
    //     paddingHorizontal: theme.spacing.element.paddingHorizontal,
    //     paddingVertical: theme.spacing.element.paddingVertical,
    //     borderStyle: "dashed"
    // },
    // greenContainer: {
    //     borderRadius: theme.geometry.border.elementBorderRadius,
    //     borderWidth: theme.geometry.border.focusedBorderWidth,
    //     borderColor: theme.colors.interactive.success,
    //     paddingHorizontal: theme.spacing.element.paddingHorizontal,
    //     paddingVertical: theme.spacing.element.paddingVertical,
    //     borderStyle: "dashed",
    // },
    // extendedWarrantyContainer: {
    //     height: 200,
    //     justifyContent: "flex-end",
    //     backgroundColor: theme.colors.interactive.secondary,
    //     zIndex: 10,
    //     paddingHorizontal: theme.spacing.container.paddingHorizontal,
    //     paddingVertical: theme.spacing.container.paddingHorizontal,
    // }
}));