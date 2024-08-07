import { Button } from "@equinor/mad-components";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Canvas } from "../../Canvas/Canvas";
import {
    CanvasControlProvider,
    CanvasControls,
    CanvasImageControls,
} from "../../CanvasControlProvider";
import { ImageSnapshotConfig, SignaturePadProps } from "../../types";

export const SignaturePad = forwardRef<CanvasImageControls, SignaturePadProps>((props, ref) => {
    const canvasRef = useRef<CanvasControls>(null);
    useImperativeHandle(ref, () => ({
        makeImageSnapshot: (config?: ImageSnapshotConfig) =>
            canvasRef.current?.makeImageSnapshot(config) ?? undefined,
    }));
    const canvasStyle = StyleSheet.flatten([styles.canvas, { height: props.height ?? 200 }]);

    return (
        <CanvasControlProvider
            canvasRef={canvasRef}
            initialStrokeWeight={3}
            initialToolColor={"black"}
        >
            <View style={styles.container}>
                <View style={styles.canvasContainer}>
                    <Canvas ref={canvasRef} style={canvasStyle} onLayout={props.onLayout}>
                        {props.children}
                    </Canvas>
                    {props.withLabel && <Text style={styles.signatureLabel}>Signature</Text>}
                </View>
                <View style={styles.clearSignatureButtonContainer}>
                    <Button
                        variant="outlined"
                        title="Clear signature"
                        color="secondary"
                        onPress={() => canvasRef.current?.clear()}
                    />
                </View>
            </View>
        </CanvasControlProvider>
    );
});

SignaturePad.displayName = "SignaturePad";

const styles = StyleSheet.create({
    canvas: {
        flex: 1,
        backgroundColor: "white",
        borderColor: "#DFDFDF",
        borderWidth: 1,
        borderRadius: 8,
    },
    canvasContainer: { flexDirection: "row", marginBottom: 16 },
    container: { padding: 16, width: "100%" },
    clearSignatureButtonContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    signatureLabel: {
        position: "absolute",
        left: 32,
        top: -7,
        fontSize: 12,
        backgroundColor: "white",
        paddingHorizontal: 4,
    },
});
