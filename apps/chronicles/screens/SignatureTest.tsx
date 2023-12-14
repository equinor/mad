import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Typography } from "@equinor/mad-components";
import { SkiaDrawSnapshot } from "@equinor/react-native-skia-draw/dist/types";
import { SignaturePad, CanvasImageControls  } from "@equinor/react-native-skia-draw";
import { Circle } from "@shopify/react-native-skia";

type Dimensions = { width: number; height: number };
export const SignatureScreen = () => {
    const [image, setImage] = useState<SkiaDrawSnapshot>();
    const [imageDimensions, setImageDimensions] = useState<Dimensions>({
        width: 0,
        height: 0,
    });
    const [canvasDimensions, setCanvasDimensions] = useState<Dimensions>({
        width: 0,
        height: 0,
    });
    useEffect(() => {
        if (!image) return;
        Image.getSize(image.uri, (newWidth, newHeight) => {
            setImageDimensions({ height: newHeight / 2, width: newWidth / 2 });
        });
    }, [image]);

    const drawRef = useRef<CanvasImageControls>(null);
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.resultsContainer}>
                <Typography>Results:</Typography>
                <Image
                    source={{ uri: image?.uri }}
                    style={{
                        height: imageDimensions.height,
                        width: imageDimensions.width,
                    }}
                />
            </View>
            <View style={styles.padContainer}>
                <View style={styles.canvasContainer}>
                    <SignaturePad
                        ref={drawRef}
                        withLabel
                        height={200}
                        onLayout={e => {
                            setCanvasDimensions({
                                height: e.nativeEvent.layout.height,
                                width: e.nativeEvent.layout.width,
                            });
                        }}
                    >
                        <Circle cx={128} cy={128} r={128} color="lightblue" />
                    </SignaturePad>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Snapshot"
                        onPress={() =>
                            drawRef.current?.makeImageSnapshot &&
                            setImage(drawRef.current?.makeImageSnapshot())
                        }
                    />
                </View>
                <Typography>{canvasDimensions.height}</Typography>
                <Typography>{canvasDimensions.width}</Typography>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    resultsContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    padContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    canvasContainer: { flex: 2, flexDirection: "row" },
});
