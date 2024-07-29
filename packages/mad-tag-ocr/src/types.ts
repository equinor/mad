import { IconButtonProps } from "@equinor/mad-components";

export type Color = string | number | Float32Array | number[];

export type Point = {
    x: number;
    y: number;
};

export type BoundingBox = {
    x: number;
    y: number;
    width: number;
    height: number;
};

export type ButtonConfig = {
    showCloseButton?: boolean;
    showInfoButton?: boolean;
    extraButtons?: IconButtonProps[];
};

export type OCRCameraProps = {
    /**
     * Target frames per second that the camera should use
     * Can be reduced to limit fps drops when scanning many text blocks simultaneously
     */
    fps?: number;
    /**
     * Controls whether a confirm selection dialog is shown when the user clicks a highlighted text block
     * If true, `onSelectTag` is called after the user presses `confirm` in the dialog
     * If false, `onSelectTag` is called immediately when the user clicks a highlighted text block
     */
    enableConfirmTextDialog?: boolean;
    /**
     * Color of the bounding box shown around text blocks
     */
    textHighlightColor?: Color;
    /**
     * Customize which buttons to show on the top right of the screen
     */
    buttonConfig?: ButtonConfig;
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
     */
    shouldHighlightText?: (text: string, textBoundingBox: BoundingBox) => boolean;
};
