import { MasterToken, WithoutThemeOptionValues } from "@equinor/mad-components";
import { ToastType } from "../types";

export const getToastTokenForType = (
    masterToken: WithoutThemeOptionValues<MasterToken>,
    type: ToastType,
) => {
    switch (type) {
        case "ERROR":
            return masterToken.colors.toast.error;
        case "INFO":
            return masterToken.colors.toast.info;
        case "SUCCESS":
            return masterToken.colors.toast.success;
        case "WARNING":
            return masterToken.colors.toast.warning;
    }
};
