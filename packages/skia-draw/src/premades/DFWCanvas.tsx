import { View, StyleSheet, SafeAreaView } from "react-native"
import { Canvas } from "../Canvas"
import { EDSControlPanel } from "./EDSControlPanel"
import {useRef} from "react";
import {SkiaDrawHandle} from "../types";

export const DFWCanvas = () => {
    const canvasRef = useRef<SkiaDrawHandle>(null);
    return (
    <SafeAreaView style={{flex: 1}}>
        <Canvas ref={canvasRef}/>
        <View style={styles.overlay} pointerEvents="box-none">
            <EDSControlPanel canvasRef={canvasRef}/>
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