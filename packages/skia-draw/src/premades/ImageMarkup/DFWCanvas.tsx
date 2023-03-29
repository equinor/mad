import { View, StyleSheet, ViewProps } from "react-native"
import { Canvas } from "../../Canvas"
import { EDSControlPanel } from "./EDSControlPanel"
import { useImperativeHandle, useRef, useState } from "react";
import { SkiaDrawHandle } from "../../types";
import React from "react";
import { SignaturePadHandle } from "../../types";
import { useImage, Image as SKImage } from "@shopify/react-native-skia";

export type DFWCanvas = {
    markupImageUri?: string,
} & ViewProps;

export const DFWCanvas = React.forwardRef<SignaturePadHandle, DFWCanvas>((props, ref) => {
    const [dimensions, setDimensions] = useState<{ width: number, height: number }>();

    const canvasRef = useRef<SkiaDrawHandle>(null);
    useImperativeHandle(ref, () => ({ makeImageSnapshot: () => canvasRef.current?.makeImageSnapshot({ x: 0, y: 100, width: dimensions?.width ?? 0, height: dimensions?.height ?? 0 }) || undefined }))
    const image = useImage(props.markupImageUri);

    return (
        <View {...props} onLayout={(event) => setDimensions({ width: event.nativeEvent.layout.width, height: event.nativeEvent.layout.height })}>
            <Canvas ref={canvasRef}>
                {image && dimensions && <SKImage image={image} fit="contain" x={0} y={0} width={dimensions.width} height={dimensions.height} />}
            </Canvas>
            <View style={styles.overlay} pointerEvents="box-none">
                <EDSControlPanel canvasRef={canvasRef} />
            </View>
        </View>
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