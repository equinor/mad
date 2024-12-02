import { MadNavigationOptions } from "@equinor/mad-navigation/dist/_internal/types";

export const getDefaultScreenOptionsForLoginScreen = (): MadNavigationOptions & {headerShown?: boolean} => ({
    headerShown: false,
    customSubHeaderShown: true,
    customSubHeaderFloat: true,
});
