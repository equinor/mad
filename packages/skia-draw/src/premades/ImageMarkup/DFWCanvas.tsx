import { View, StyleSheet, SafeAreaView } from "react-native"
import { Canvas } from "../../Canvas"
import { EDSControlPanel } from "./EDSControlPanel"
import { useImperativeHandle, useRef } from "react";
import { SkiaDrawHandle } from "../../types";
import React from "react";
import { SignaturePadHandle } from "../../types";

export const DFWCanvas = React.forwardRef<SignaturePadHandle>((_, ref) => {
    const canvasRef = useRef<SkiaDrawHandle>(null);
    useImperativeHandle(ref, () => ({ makeImageSnapshot: () => canvasRef.current?.makeImageSnapshot() || undefined }))
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Canvas ref={canvasRef} />
            <View style={styles.overlay} pointerEvents="box-none">
                <EDSControlPanel canvasRef={canvasRef} />
            </View>
        </SafeAreaView>
    )
});

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