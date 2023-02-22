import { View, StyleSheet } from "react-native";
import { Paper } from "@equinor/mad-components"


export const EDSControlPanel = () => {
    const colors = ["red", "blue", "orange", "yellow", "green"];
    return (
        <Paper
            elevation="sticky"
            style={styles.container}>
                {colors.map((c, index) => <View key={index} style={{height: 20, width: 20, backgroundColor: c}}/>)}
        </Paper>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 75,
        width: "100%",
        maxWidth: 500,
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 20,
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingVertical: 30,
    }
});