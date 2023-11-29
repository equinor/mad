import { CoreStackParamListBase, MadConfig } from "../types";
import { createNativeStackNavigator } from "@equinor/mad-navigation";
import { createMadCoreNavigator } from "../utils/createMadCoreNavigator";
import { setConfig } from "../store/mad-config";
import { ParamListBase } from "@react-navigation/native";

type NativeStackType<T extends ParamListBase> = ReturnType<typeof createNativeStackNavigator<T>>
type CreateCoreStackNavigatorType = (config: MadConfig) => {Navigator: ReturnType<typeof createMadCoreNavigator<CoreStackParamListBase>>, Group: NativeStackType<CoreStackParamListBase>['Group'], Screen: NativeStackType<CoreStackParamListBase>['Screen']}

export const createCoreStackNavigator: CreateCoreStackNavigatorType = (config: MadConfig) => {
    setConfig(config);
    const Stack = createNativeStackNavigator<CoreStackParamListBase>();
    const Navigator = createMadCoreNavigator(Stack, config);

    return { ...Stack, Navigator };
};
