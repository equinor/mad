import { View, StyleSheet, SafeAreaView } from "react-native"
import { Canvas } from "../Canvas"
import { EDSControlPanel } from "./EDSControlPanel"

export const DFWCanvas = () => {
    return (
    <SafeAreaView style={{flex: 1}}>
        <Canvas />
        <View style={styles.overlay} pointerEvents="box-none">
            <EDSControlPanel />
        </View>
    </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    overlay: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0,
 }
});