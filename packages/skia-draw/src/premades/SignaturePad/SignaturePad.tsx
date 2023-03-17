import {forwardRef, PropsWithChildren, useImperativeHandle, useRef} from "react";
import {Canvas} from '../../Canvas'
import {SkiaDrawHandle} from "../../types";
import {View, StyleSheet, Text} from "react-native";
import {SignaturePadHandle} from "../../types";
import {SkRect} from "@shopify/react-native-skia";
import {ClearSignatureButton} from "./components/ClearSignatureButton";

export const SignaturePad = forwardRef<SignaturePadHandle, PropsWithChildren<{height?: number, withLabel?: boolean}>>((props, ref) => {
    const canvasRef = useRef<SkiaDrawHandle>(null);
    useImperativeHandle(ref, () => ({makeImageSnapshot: (rect?: SkRect) => canvasRef.current?.makeImageSnapshot(rect) || undefined}))
    const canvasStyle = StyleSheet.flatten([styles.canvas, {height:props.height || 200}])

    return <View style={styles.container}>
        <View style={styles.canvasContainer}>

    <Canvas ref={canvasRef} initialDrawColor={"black"} initialStrokeWidth={3} style={canvasStyle}>
        {props.children}
    </Canvas>
            {props.withLabel && <Text style={styles.signatureLabel}>Signature</Text>}
        </View>
    <View style={styles.clearSignatureButtonContainer}>
        <ClearSignatureButton onPress={() => canvasRef.current?.clear()}/>
    </View>
    </View>
})

const styles = StyleSheet.create({
    canvas: {flex:1, backgroundColor: "white", borderColor: "#DFDFDF", borderWidth: 1, borderRadius: 8},
    canvasContainer: {flexDirection: "row", marginBottom: 16},
    container: {padding: 16, width: "100%"},
    clearSignatureButtonContainer: {flexDirection: "row", justifyContent: "flex-end", flex: 1},
    signatureLabel: {
        position: 'absolute',
        left: 32,
        top: -7,
        fontSize: 12,
        backgroundColor: 'white',
        paddingHorizontal: 4
    }
})