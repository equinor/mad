import { IconButtonProps } from "@equinor/mad-components";
import { Color } from "@shopify/react-native-skia";

export type Point = {
    x: number;
    y: number;
};

export type BoundingBox = {
    topLeft: Point;
    bottomRight: Point;
};

export type ButtonConfig = {
    showCloseButton?: boolean;
    showInfoButton?: boolean;
    extraButtons?: IconButtonProps[];
};

export type OCRCameraProps = {
    /**
     * Customize which buttons to show on the top right of the screen
     */
    buttonConfig?: ButtonConfig;
    /**
     * Controls whether a confirm selection dialog is shown when the user clicks a text block
     * If true, `onSelectTag` is called after the user has clicked some text and then presses `confirm` in the prompt
     * If false, `onSelectTag` is called immediately when the user clicks a text block
     */
    enableConfirmTextDialog?: boolean;
    /**
     * Frames per second (fps) that the camera should use
     * Can be reduced to limit fps drops when scanning many text blocks simultaneously
     */
    fps?: number;
    /**
     * Color of the bounding box shown around text blocks
     */
    textHighlightColor?: Color;
    /**
     * Is called when the user confirms selected text
     */
    onSelectTag?: (tag: string) => void;
    /**
     * Is called when the user clicks the close button
     */
    onClose?: () => void;
    /**
     * Is called whenever a block of text is detected. If this returns false, then the text block is not highlighted on screen and is not pressable
     * The bounding box represents the corners of the detected text block
     */
    shouldHighlightText?: (text: string, textBoundingBox: BoundingBox) => boolean;
};
