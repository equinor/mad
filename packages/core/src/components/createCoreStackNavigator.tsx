import { CoreStackParamListBase, MadConfig } from "../types";
import { createNativeStackNavigator } from "@equinor/mad-navigation";
import { createMadCoreNavigator } from "../utils/createMadCoreNavigator";

export const createCoreStackNavigator = (config: MadConfig) => {
    const Stack = createNativeStackNavigator<CoreStackParamListBase>();
    const Navigator = createMadCoreNavigator(Stack, config);

    return { ...Stack, Navigator };
};
