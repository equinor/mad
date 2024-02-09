import { MadNativeStackNavigationOptions } from "@equinor/mad-navigation";

export const getDefaultScreenOptionsForLoginScreen = (): MadNativeStackNavigationOptions => ({
    headerShown: false,
    customSubHeaderShown: true,
    customSubHeaderFloat: true,
});
