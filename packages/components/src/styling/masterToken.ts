import { MasterToken } from "./types";

const SPACING_XXX_LARGE = 48;
const SPACING_XX_LARGE = 40;
const SPACING_X_LARGE = 32;
const SPACING_LARGE = 24;
const SPACING_MEDIUM = 16;
const SPACING_MEDIUM_SMALL = 12;
const SPACING_SMALL = 8;
const SPACING_X_SMALL = 4;
const SPACING_XX_SMALL = 2;

export const masterToken: MasterToken = {
    colors: {
        interactive: {
            primary: {
                light: "#007079",
                dark: "#97CACE",
            },
            secondary: {
                light: "#233746",
                dark: "#DEE5E7",
            },
            success: {
                light: "#4BB748",
                dark: "#4BB748",
            },
            warning: {
                light: "#FF9200",
                dark: "#FF9200",
            },
            danger: {
                light: "#EB0000",
                dark: "#EB0000",
            },
        },
        text: {
            primary: {
                light: "#3D3D3D",
                dark: "#FFFFFF",
            },
            secondary: {
                light: "#565656",
                dark: "#DEE5E7",
            },
            tetriary: {
                light: "#6F6F6F",
                dark: "#9CA6AC",
            },
            primaryInverted: {
                light: "#FFFFFF",
                dark: "#000000",
            }
        },
    },
    geometry: {
        border: {
            elementBorderRadius: 4,
            containerBorderRadius: 24,
            borderWidth: 1,
        },
        dimension: {
            button: {
                minHeight: {
                    comfortable: 36,
                    tight: 36,
                },
                minWidth: {
                    comfortable: 112,
                    tight: 96,
                }
            },
        },
    },
    spacing: {
        paddingHorizontal: {
            comfortable: SPACING_MEDIUM,
            tight: SPACING_MEDIUM_SMALL,
        },
        paddingVertical: {
            comfortable: SPACING_MEDIUM,
            tight: SPACING_MEDIUM,
        },
        spacer: {
            small: {
                comfortable: 20,
                tight: 12,
            },
            medium: {
                comfortable: 30,
                tight: 22,
            },
            large: {
                comfortable: 42,
                tight: 34,
            }
        }
    }
}