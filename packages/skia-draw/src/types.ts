import { StyleProp, ViewProps, ViewStyle } from "react-native";
import { PropsWithChildren } from "react";
import { ImageFormat } from "@shopify/react-native-skia";

export type SkiaDrawSnapshot = {
    /**
     * Data URL containing metadata and base64 data. Can be used with React Native's Image component
     */
    uri: string;
    /**
     * Raw base64 data. Suitable for storing the image
     */
    data: string;
    /**
     * Height of the image in pixels
     */
    height: number;
    /**
     * Width of the image in pixels
     */
    width: number;
};

export type SignaturePadProps = PropsWithChildren<{
    height?: number;
    withLabel?: boolean;
    onLayout?: CanvasProps["onLayout"];
}>;

export type CanvasProps = {
    /**
     * Set this to true if you want to render children of the canvas on top of the drawing instead of behind
     */
    renderChildrenOnTop?: boolean;

    style?: StyleProp<ViewStyle>;
    onLayout?: ViewProps["onLayout"];
};

/**
 * Options object for configuring how the {@linkcode makeImageSnapshot} method encodes the resulting image.
 */
export type ImageSnapshotEncodingOptions = {
    /**
     * The format to encode the image in. Defaults to PNG.
     */
    imageFormat?: ImageFormat;
    /**
     * A value from 0 to 100. 100 is the least lossy. May be ignored.
     */
    quality?: number;
};
