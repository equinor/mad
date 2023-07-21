import { ToastType } from "../types";

// TODO input Equinor Colors

/**
 * Get color by toast type
 * @param toastType 
 * @returns string
 */
export const getColorByToastType = (toastType: ToastType) => {
    switch (toastType) {
        // case "ERROR":
        //     return "#FF6670";
        // case "INFO":
        //     return "#D5EAF4";
        // case "WARNING":
        //     return "#FFC67A";
        // default:
        //     return "#C1E7C1";
        case "ERROR":
            return "#EB0000";
        case "INFO":
            return "#243746";
        case "WARNING":
            return "#FF9200";
        default:
            return "#4BB748";
    }
}