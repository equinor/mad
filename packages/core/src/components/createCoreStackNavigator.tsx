import { CoreStackParamListBase, MadConfig } from "../types";
import { createNativeStackNavigator } from "@equinor/mad-navigation";
import { createMadCoreNavigator } from "../utils/createMadCoreNavigator";
import { setConfig } from "../store/mad-config";
import type {} from "@react-navigation/native-stack";

export const createCoreStackNavigator = (config: MadConfig) => {
    setConfig(config);
    const Stack = createNativeStackNavigator<CoreStackParamListBase>();
    const Navigator = createMadCoreNavigator(Stack, config);

    return { ...Stack, Navigator };
};
