import { Image as SKImage, useImage } from "@shopify/react-native-skia";
import React, { forwardRef, useImperativeHandle, useMemo, useRef, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View, ViewProps } from "react-native";
import { Canvas } from "../../Canvas/Canvas";
import {
    CanvasControlProvider,
    CanvasControls,
    CanvasImageControls,
} from "../../CanvasControlProvider";
import { ImageSnapshotConfig } from "../../types";
import { EDSControlPanel } from "./EDSControlPanel";

export type ImageMarkupProps = {
    markupImage?: string;
} & ViewProps;

type Dimensions = {
    width: number;
    height: number;
};

export const ImageMarkup = forwardRef<CanvasImageControls, ImageMarkupProps>((props, ref) => {
    const [contentDim, setContentDim] = useState<Dimensions>();

    const canvasRef = useRef<CanvasControls | null>(null);

    useImperativeHandle(ref, () => ({
        makeImageSnapshot: (config?: ImageSnapshotConfig) =>
            canvasRef.current?.makeImageSnapshot(config) ?? undefined,
    }));

    const image = useImage(props.markupImage);
    const canvasDim: Dimensions | undefined = useMemo(() => {
        if (!contentDim) return undefined;
        if (!image) return contentDim;
        const width = Math.min(
            contentDim.width,
            (contentDim.height * image.width()) / image.height(),
        );
        const height = Math.min(
            contentDim.height,
            (contentDim.width * image.height()) / image.width(),
        );
        return { width, height };
    }, [image, contentDim]);

    return (
        <CanvasControlProvider canvasRef={canvasRef}>
            <View
                onLayout={event =>
                    setContentDim({
                        width: event.nativeEvent.layout.width,
                        height: event.nativeEvent.layout.height,
                    })
                }
                {...props}
                style={[props.style, { width: "100%", position: "relative" }]}
            >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    {canvasDim && (
                        <Canvas
                            ref={canvasRef}
                            style={{
                                maxHeight: canvasDim.height,
                                maxWidth: canvasDim.width,
                            }}
                        >
                            {image && contentDim && (
                                <SKImage
                                    image={image}
                                    fit="contain"
                                    x={0}
                                    y={0}
                                    width={canvasDim.width}
                                    height={canvasDim.height}
                                />
                            )}
                        </Canvas>
                    )}
                </View>

                <KeyboardAvoidingView
                    style={styles.overlay}
                    pointerEvents="box-none"
                    behavior="padding"
                    keyboardVerticalOffset={190}
                >
                    <EDSControlPanel />
                </KeyboardAvoidingView>
            </View>
        </CanvasControlProvider>
    );
});

ImageMarkup.displayName = "ImageMarkup";

const styles = StyleSheet.create({
    overlay: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0,
    },
});
