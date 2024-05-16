import { MasterToken, WithoutThemeOptionValues } from "@equinor/mad-components";
import { ToastType } from "../types";

export const getToastTokenForType = (
    masterToken: WithoutThemeOptionValues<MasterToken>,
    type: ToastType,
) => {
    const tokenType = toTypedLowerCase(type);
    return masterToken.colors.toast[tokenType];
};

const toTypedLowerCase = <T extends string>(str: T) => str.toLowerCase() as Lowercase<T>;
