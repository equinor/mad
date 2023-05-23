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

const FONT_BASIS = 17;

export const masterToken: MasterToken = {
    colors: {
        border: {
            //TODO: Dark mode on these values
            lighter: {
                light: "#FFFFFF",
                dark: "#132634",
            },
            light: {
                light: "#F7F7F7",
                dark: "#132634",
            },
            medium: {
                light: "#DCDCDC",
                dark: "#3E4F5C",
            },
        },
        container: {
            background: {
                light: "#F7F7F7",
                dark: "#080808", // TODO: This value needs a look at
            },
            default: {
                light: "#FFFFFF",
                dark: "#132634",
            },
            elevation: {
                none: {
                    light: "#FFFFFF",
                    dark: "#132634",
                },
                aboveScrim: {
                    light: "#FFFFFF",
                    dark: "#132634",
                },
                raised: {
                    light: "#FFFFFF",
                    dark: "#243746",
                },
                overlay: {
                    light: "#FFFFFF",
                    dark: "#2E3F4D",
                },
                sticky: {
                    light: "#FFFFFF",
                    dark: "#364855",
                },
                temporaryNav: {
                    light: "#FFFFFF",
                    dark: "#3E4F5C",
                },
            },
        },
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
            disabled: {
                light: "#EAEAEA",
                dark: "#344450",
            },
            pressedOverlay: {
                light: "rgba(0,0,0,0.2)",
                dark: "rgba(255,255,255,0.2)",
            },
            selectedHighlight: {
                light: "#E6FAEC",
                dark: "#97CACE",
            }
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
            tertiary: {
                light: "#6F6F6F",
                dark: "#9CA6AC",
            },
            primaryInverted: {
                light: "#FFFFFF",
                dark: "#000000",
            },
            menu: {
                resting: {
                    light: "#3D3D3D",
                    dark: "#DEE5E7",
                },
                active: {
                    light: "#007079",
                    dark: "#000000",
                }
            },
            disabled: {
                light: "#BEBEBE",
                dark: "#637583",
            },
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
                    tablet: 36,
                    phone: 36,
                },
                minWidth: {
                    tablet: 112,
                    phone: 96,
                },
            },
            icon: {
                size: 22,
            },
            toggleButton: {
                minHeight: {
                    tablet: 36,
                    phone: 36,
                },
                minWidth: {
                    tablet: 48,
                    phone: 36,
                },
            },
            cell: {
                minHeight: 30,
                navigation: {
                    height: {
                        tablet: 60,
                        phone: 60,
                    },
                },
                accordion: {
                    height: {
                        tablet: 40,
                        phone: 32,
                    },
                },
                adornment: {
                    widthSmall: {
                        tablet: 40,
                        phone: 32,
                    },
                    widthMedium: {
                        tablet: 56,
                        phone: 48,
                    },
                    widthLarge: {
                        tablet: 96,
                        phone: 88,
                    },
                },
            },
        },
        shadow: {
            none: {},
            raised: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
            },
            overlay: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 7,
            },
            sticky: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 9,
            },
            temporaryNav: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,
                elevation: 12,
            },
            aboveScrim: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 9,
                },
                shadowOpacity: 0.5,
                shadowRadius: 12.35,
                elevation: 19,
            },
        },
    },
    spacing: {
        container: {
            paddingHorizontal: {
                tablet: SPACING_X_LARGE,
                phone: SPACING_LARGE,
            },
            paddingVertical: {
                tablet: SPACING_MEDIUM,
                phone: SPACING_MEDIUM,
            },
        },
        element: {
            paddingHorizontal: {
                tablet: SPACING_MEDIUM_SMALL,
                phone: SPACING_SMALL,
            },
            paddingVertical: {
                tablet: SPACING_SMALL,
                phone: SPACING_SMALL,
            },
        },
        textField: {
            paddingHorizontal: {
                tablet: SPACING_MEDIUM_SMALL,
                phone: SPACING_SMALL,
            },
            paddingVertical: {
                tablet: SPACING_SMALL,
                phone: SPACING_SMALL,
            },
        },
        menu: {
            paddingVertical: {
                tablet: SPACING_SMALL,
                phone: SPACING_SMALL,
            },
            item: {
                paddingVertical: {
                    tablet: SPACING_MEDIUM_SMALL,
                    phone: SPACING_MEDIUM_SMALL,
                },
                paddingHorizontal: {
                    tablet: SPACING_LARGE,
                    phone: SPACING_LARGE,
                },
                iconGap: {
                    tablet: SPACING_MEDIUM,
                    phone: SPACING_MEDIUM_SMALL,
                },
            },
        },
        cell: {
            group: {
                titleBottomPadding: {
                    tablet: SPACING_MEDIUM_SMALL,
                    phone: SPACING_SMALL
                }
            },
            content: {
                titleDescriptionGap: {
                    tablet: SPACING_SMALL,
                    phone: SPACING_SMALL,
                },
            },
            paddingVertical: {
                tablet: SPACING_MEDIUM,
                phone: SPACING_MEDIUM_SMALL,
            },
            gapHorizontal: {
                tablet: SPACING_LARGE,
                phone: SPACING_MEDIUM,
            }
        },
        spacer: {
            small: {
                tablet: 20,
                phone: 12,
            },
            medium: {
                tablet: 30,
                phone: 22,
            },
            large: {
                tablet: 42,
                phone: 34,
            },
        },
    },
    typography: {
        basic: {
            h1: {
                fontFamily: "Equinor-Regular",
                fontSize: 2 * FONT_BASIS,
                textAlign: "left",
            },
            h2: {
                fontFamily: "Equinor-Regular",
                fontSize: 1.75 * FONT_BASIS,
                textAlign: "left",
            },
            h3: {
                fontFamily: "Equinor-Regular",
                fontSize: 1.5 * FONT_BASIS,
                textAlign: "left",
            },
            h4: {
                fontFamily: "Equinor-Regular",
                fontSize: 1.25 * FONT_BASIS,
                textAlign: "left",
            },
            h5: {
                fontFamily: "Equinor-Medium",
                fontSize: 1.125 * FONT_BASIS,
                textAlign: "left",
            },
            h6: {
                fontFamily: "Equinor-Medium",
                fontSize: FONT_BASIS,
                textAlign: "left",
            },
            p: {
                fontFamily: "Equinor-Regular",
                fontSize: FONT_BASIS,
                textAlign: "left",
                lineHeight: 1.5 * FONT_BASIS,
            },
            label: {
                fontFamily: "Equinor-Medium",
                fontSize: FONT_BASIS * 0.75,
                textAlign: "left",
                lineHeight: FONT_BASIS

            },
            input: {
                fontFamily: "Equinor-Regular",
                fontSize: FONT_BASIS,
                textAlign: "left",
            }
        },
        interactive: {
            button: {
                fontFamily: "Equinor-Medium",
                fontSize: 0.875 * FONT_BASIS,
                textAlign: "left",
            },
        },
        cell: {
            groupTitle: {
                fontFamily: "Equinor-Regular",
                fontSize: 0.875 * FONT_BASIS,
                textAlign: "left",
                textTransform: "uppercase",
            },
            title: {
                fontFamily: "Equinor-Regular",
                fontSize: FONT_BASIS,
                textAlign: "left",
            },
            description: {
                fontFamily: "Equinor-Medium",
                fontSize: 0.75 * FONT_BASIS,
                textAlign: "left",
            }
        },
        ui: {
            tooltip: {
                fontFamily: "Equinor-Medium",
                fontSize: 0.7 * FONT_BASIS,
                textAlign: "left",
            },
        },
    },
    timing: {
        animation: {
            slow: 250,
            normal: 100,
            fast: 50,
        }
    }
};
