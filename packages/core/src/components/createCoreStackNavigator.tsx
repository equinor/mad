import {CoreStackParamListBase, EnvironmentContext} from "../types";
import { createNativeStackNavigator } from "./navigation";
import { createMadCoreNavigator } from "../utils/createMadCoreNavigator";
import { setConfig } from "../store/mad-config";

export const createCoreStackNavigator = (config: EnvironmentContext) => {
    setConfig(config);
    const Stack = createNativeStackNavigator<CoreStackParamListBase>();
    const Navigator = createMadCoreNavigator(Stack, config);

    return { ...Stack, Navigator };
};
