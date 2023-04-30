import { Spacer } from "@equinor/mad-components";
import { ScrollView, StyleSheet } from "react-native";
import { View } from "react-native";

export default function IconsScreen() {
    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={{ height: 60, backgroundColor: "red" }} />
            <Spacer />
            <View style={{ height: 60, backgroundColor: "red" }} />
            <Spacer />
            <View style={{ height: 60, backgroundColor: "red" }} />
            <Spacer />
            <View style={{ height: 60, backgroundColor: "red" }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
});
