import { Button, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { Paper, Typography, PopoverContainer } from "@equinor/mad-components";

export default function DiscoverScreen({
    navigation,
}: RootTabScreenProps<"Discover">) {
    return (
        <ScrollView
            style={{ backgroundColor: "white" }}
            contentContainerStyle={styles.container}
        >
            <Typography variant="h1_bold">Paper</Typography>
            <View
                style={{
                    backgroundColor: "#D0D0D0",
                    padding: 10,
                    flex: 1,
                    alignItems: "stretch",
                    width: "100%",
                    justifyContent: "space-evenly",
                    height: 2000,
                }}
            >
                <Paper elevation="none" style={{ width: "auto", height: 50 }}>
                    <Typography>none</Typography>
                </Paper>
                <Paper elevation="raised" style={{ width: "auto", height: 50 }}>
                    <Typography style={{ flex: 1 }}>raised</Typography>
                </Paper>
                <Paper
                    elevation="overlay"
                    style={{ width: "auto", height: 50 }}
                >
                    <Typography>overlay</Typography>
                </Paper>
                <Paper elevation="sticky" style={{ width: "auto", height: 50 }}>
                    <Typography>sticky</Typography>
                </Paper>
                <Paper
                    elevation="temporary_nav"
                    style={{ width: "auto", height: 50 }}
                >
                    <Typography>temporary_nav</Typography>
                </Paper>
                <Paper
                    elevation="above_scrim"
                    style={{ width: "auto", height: 50 }}
                >
                    <Typography>above_scrim</Typography>
                </Paper>
            </View>

            <Typography variant="h1_bold">Popover</Typography>
            <PopoverContainer
                popoverText="This is a test"
                buttonTitle="Press Me!"
                style={{ margin: 10 }}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 20,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
