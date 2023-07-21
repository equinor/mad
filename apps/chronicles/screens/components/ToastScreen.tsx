import { EDSStyleSheet, useStyles, ToastEmitter, Button, addToast } from "@equinor/mad-components";
import { ToastType } from "@equinor/mad-components/dist/components/Toast/types";
import { ScrollView, View } from "react-native";

const toastTypes: ToastType[] = ["ERROR", "INFO", "SUCCESS", "WARNING"];
const pickRandomToastType = () => toastTypes[Math.floor(Math.random() * toastTypes.length)];

console.log("RERENDER SCREEN")

export const ToastScreen = () => {
    const styles = useStyles(themeStyles);

    const onPress = () => {
        const toastType = pickRandomToastType()
        addToast({ "message": `${toastType}: This is a toast`, "type": toastType })
    }

    return (
        <>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={styles.container}>
                <Button title="Click me" onPress={onPress} />

            </ScrollView >
            <View style={styles.float}>
                <ToastEmitter direction="down" maxAmountDisplayed={3} />
            </View>
        </>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    float: {
        width: '100%',
        position: "absolute",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 170,
        paddingHorizontal: theme.spacing.container.paddingHorizontal
    },
    container: {
        paddingVertical: theme.spacing.container.paddingVertical,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        height: "80%",
        justifyContent: "flex-end"
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
