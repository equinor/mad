import { ToastType } from "../types";

// TODO input Equinor Colors

/**
 * Get color by toast type
 * @param toastType 
 * @returns string
 */
export const getColorByToastType = (toastType: ToastType) => {
    switch (toastType) {
        case "ERROR":
            return "red";
        case "INFO":
            return "blue";
        case "WARNING":
            return "yellow";
        default:
            return "gray";
    }
}