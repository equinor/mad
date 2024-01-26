import { CoreStackParamListBase, MadConfig } from "../types";
import { createNativeStackNavigator } from "./navigation";
import { createMadCoreNavigator } from "../utils/createMadCoreNavigator";
import { setConfig } from "../store/mad-config";
import { ParamListBase } from "@react-navigation/native";

export const createCoreStackNavigator = <T extends ParamListBase>(config: MadConfig<T>) => {
    setConfig(config as MadConfig);
    const Stack = createNativeStackNavigator<CoreStackParamListBase & T>();
    const Navigator = createMadCoreNavigator(Stack);

    return { ...Stack, Navigator };
};
