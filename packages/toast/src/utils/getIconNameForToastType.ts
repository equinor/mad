import { IconProps } from "@equinor/mad-components";
import { ToastType } from "../types";

export const getIconNameForToastType = (type: ToastType): IconProps["name"] => {
    switch (type) {
        case "error":
            return "alert-circle-outline";
        case "warning":
            return "alert-outline";
        case "success":
            return "check-circle-outline";
        case "info":
            return "information-outline";
    }
};
