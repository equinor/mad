import { Elevations } from "@equinor/eds-tokens";
import { ViewStyle } from "react-native";

type ElevationType = keyof Elevations;
type ShadowStyle = Pick<ViewStyle, "shadowColor" | "shadowOffset" | "shadowRadius" | "shadowOpacity" | "elevation">; 

export const elevationShadowStyleMap: Record<ElevationType, ShadowStyle> = {
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
    temporary_nav: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
        elevation: 12,
    },
    above_scrim: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        
        elevation: 19,
    }
} as const;