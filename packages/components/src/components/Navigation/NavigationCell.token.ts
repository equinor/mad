import { tokens } from "@equinor/eds-tokens";
import type { ComponentToken } from "@equinor/eds-tokens";
import { convertToUnitlessNumber } from "../../translations/units";

const {
    colors: {
        ui: {
            background__default: { hex: background },
            background__medium: { hex: borderColor },
        },
        interactive: {
            pressed_overlay_dark: { rgba: pressedBackground },
        },
    },
    spacings: {
        comfortable: { medium_small: padding },
    },
} = tokens;
const p = convertToUnitlessNumber(padding)?.toString();

export const navigationToken: ComponentToken = {
    background,
    border: {
        color: borderColor,
    },
    states: {
        pressed: {
            background: pressedBackground,
        },
    },
    spacings: {
        left: p,
        right: p,
        top: p,
        bottom: p,
    },
};
