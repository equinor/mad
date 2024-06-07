import { ButtonConfig } from "./types";

export const MaxTagLength = 20;
export const MinTagLength = 4;
export const BoundingBoxPadding = 10;
export const OcrUsageSteps = [
    "1. Place the tag in the view of the camera",
    "2. A rectangle should appear around the tag",
    "3. Click within the rectanble to select the tag",
    "4. A new prompt appears where you can make adjustments to the tag text if needed",
    "5. Click confirm to search",
];

export const defaultButtonConfig: ButtonConfig = {
    showCloseButton: true,
    showInfoButton: true,
    extraButtons: [],
};
