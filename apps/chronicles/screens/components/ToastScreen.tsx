import { EDSStyleSheet, useStyles, ToastEmitter, Button, addToast, Typography } from "@equinor/mad-components";
import { ToastType } from "@equinor/mad-components/dist/components/Toast/types";
import { ScrollView, View } from "react-native";

const toastTypes: ToastType[] = ["ERROR", "INFO", "SUCCESS", "WARNING"];
const pickRandomToastType = () => toastTypes[Math.floor(Math.random() * toastTypes.length)];

export const ToastScreen = () => {
    const styles = useStyles(themeStyles);

    const onPress = (duration?: number) => {
        const toastType = pickRandomToastType()
        addToast({ "message": `${toastType}: This is a toast`, "type": toastType, duration })
    }

    return (
        <>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={styles.container}>
                <Typography>This button will add a toast of a random type. The top ToastEmitter will only display errors and warning, while the bottom ToastEmitter will only display info and success</Typography>
                <Button title="Click me many times" onPress={() => onPress(undefined)} />
                <Typography>You can also set the duration of specific toasts. Toasts from the button below will only last 0.5 seconds</Typography>
                <Button title="0.5s duration toast" onPress={() => onPress(0.5)} />

            </ScrollView >
            <View style={styles.floatTop}>
                <ToastEmitter filter={["ERROR", "WARNING"]} direction="down" maxAmountDisplayed={3} />
            </View>
            <View style={styles.floatBottom}>
                <ToastEmitter filter={["INFO", "SUCCESS"]} direction="up" maxAmountDisplayed={6} />
            </View>
        </>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    floatTop: {
        width: '100%',
        position: "absolute",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 130,
        paddingHorizontal: theme.spacing.container.paddingHorizontal
    },
    floatBottom: {
        width: '100%',
        position: "absolute",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        bottom: 0,
        paddingHorizontal: theme.spacing.container.paddingHorizontal
    },
    container: {
        paddingVertical: theme.spacing.container.paddingVertical,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        height: "80%",
        justifyContent: "center"
    },
    readableContent: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
    progressRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 10,
    },
    incrementButtonRow: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        columnGap: 10,
    },
    dotsContainer: {
        rowGap: 10,
        alignItems: "center"
    }
}));
