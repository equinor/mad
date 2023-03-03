import { tokens } from "@equinor/eds-tokens";
import type { ComponentToken, Elevations } from "@equinor/eds-tokens";

const {
    elevation,
    colors: {
        ui: {
            background__default: {hex: background},
        },
    },
} = tokens;

export type ElevationType = keyof Elevations;
export const elevationToken = elevation;;
export const paperToken: ComponentToken = {
    background
};
