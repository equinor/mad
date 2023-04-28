import { forwardRef, useImperativeHandle, useRef } from "react";
import { Canvas } from "../../Canvas";
import { SignaturePadProps, SkiaDrawHandle } from "../../types";
import { View, StyleSheet, Text } from "react-native";
import { SnapshotHandle } from "../../types";
import { SkRect } from "@shopify/react-native-skia";
import { Button } from "@equinor/mad-components";

export const SignaturePad = forwardRef<SnapshotHandle, SignaturePadProps>(
    (props, ref) => {
        const canvasRef = useRef<SkiaDrawHandle>(null);
        useImperativeHandle(ref, () => ({
            makeImageSnapshot: (rect?: SkRect) =>
                canvasRef.current?.makeImageSnapshot(rect) || undefined,
        }));
        const canvasStyle = StyleSheet.flatten([
            styles.canvas,
            { height: props.height || 200 },
        ]);

        return (
            <View style={styles.container}>
                <View style={styles.canvasContainer}>
                    <Canvas
                        ref={canvasRef}
                        initialDrawColor={"black"}
                        initialStrokeWidth={3}
                        style={canvasStyle}
                        onLayout={props.onLayout}
                    >
                        {props.children}
                    </Canvas>
                    {props.withLabel && (
                        <Text style={styles.signatureLabel}>Signature</Text>
                    )}
                </View>
                <View style={styles.clearSignatureButtonContainer}>
                    <Button
                        variant="outlined"
                        title="Clear signature"
                        color="secondary"
                        onPress={() => canvasRef.current?.clear()} />
                </View>
            </View>
        );
    }
);

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
