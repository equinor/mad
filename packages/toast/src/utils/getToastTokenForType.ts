import { MasterToken, WithoutThemeOptionValues } from "@equinor/mad-components";
import { ToastType } from "../types";

export const getToastTokenForType = (
    masterToken: WithoutThemeOptionValues<MasterToken>,
    type: ToastType,
) => {
    return masterToken.colors.toast[type];
};
