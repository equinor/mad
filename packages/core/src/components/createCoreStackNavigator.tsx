import {CoreStackParamListBase, MadConfig} from "../types";
import { createNativeStackNavigator } from "./navigation";
import { createMadCoreNavigator } from "../utils/createMadCoreNavigator";
import {setConfig} from "../store/mad-config";

export const createCoreStackNavigator = (config: MadConfig) => {
    setConfig(config);
    const Stack = createNativeStackNavigator<CoreStackParamListBase>();
    const Navigator = createMadCoreNavigator(Stack);

    return { ...Stack, Navigator };
};
