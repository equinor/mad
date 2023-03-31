import { View, StyleSheet, ViewProps } from "react-native"
import { Canvas } from "../../Canvas"
import { EDSControlPanel } from "./EDSControlPanel"
import { useImperativeHandle, useMemo, useRef, useState } from "react";
import { SkiaDrawHandle } from "../../types";
import React from "react";
import { SnapshotHandle } from "../../types";
import { useImage, Image as SKImage } from "@shopify/react-native-skia";

export type ImageMarkupProps = {
    markupImage?: string,
} & ViewProps;

type Dimensions = {
    width: number,
    height: number,
};

export const ImageMarkup = React.forwardRef<SnapshotHandle, ImageMarkupProps>((props, ref) => {
    const [dimensions, setDimensions] = useState<Dimensions>();

    const canvasRef = useRef<SkiaDrawHandle>(null);
    useImperativeHandle(ref, () => ({ makeImageSnapshot: () => canvasRef.current?.makeImageSnapshot({ x: 0, y: 0, width: dimensions?.width ?? 0, height: dimensions?.height ?? 0 }) || undefined }))
    const image = useImage(props.markupImage);
    const canvasDim: Dimensions | undefined = useMemo(() => {
        if (!dimensions) return undefined;
        if (!image) return dimensions;
        const width = Math.min(dimensions.width, dimensions.height * image.width() / image.height());
        const height = Math.min(dimensions.height, dimensions.width * image.height() / image.width());
        return { width, height };
    }, [image, dimensions]);

    return (
        <View
            style={[props.style, { justifyContent: "center", alignItems: "center" }]}
            onLayout={(event) => setDimensions({ width: event.nativeEvent.layout.width, height: event.nativeEvent.layout.height })}
            {...props}>
            {canvasDim &&
                <Canvas ref={canvasRef} style={{ maxHeight: canvasDim.height, maxWidth: canvasDim.width }}>
                    {
                        image && dimensions &&
                        <SKImage image={image} fit="contain" x={0} y={0} width={dimensions.width} height={canvasDim.height} />
                    }
                </Canvas>
            }
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