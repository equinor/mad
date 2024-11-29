import { ParamListBase } from "@react-navigation/native";
import { setConfig } from "../store/mad-config";
import { CoreStackParamListBase, MadConfig } from "../types";
import { createMadCoreStackNavigator, createMadCoreNativeStackNavigator } from "../utils/createMadCoreNavigator";
import { initiateAuthenticationClient } from "../utils/initiateAuthenticationClient";
import { createNativeStackNavigator, createStackNavigator } from "./navigation";

export const createStackCoreNavigator = <T extends ParamListBase>(config: MadConfig<T>) => {
    setConfig(config as MadConfig);
    initiateAuthenticationClient();
    const Stack = createStackNavigator<CoreStackParamListBase & T>();
    const Navigator = createMadCoreStackNavigator(Stack);
    return { ...Stack, Navigator }; 
}
export const createNativeStackCoreNavigator = <T extends ParamListBase>(config: MadConfig<T>) => {
    setConfig(config as MadConfig);
    initiateAuthenticationClient();
    const Stack = createNativeStackNavigator<CoreStackParamListBase & T>();
    const Navigator = createMadCoreNativeStackNavigator(Stack);
    return { ...Stack, Navigator }; 
}

/**
 * 
 * @deprecated This functions is replaced by `createStackCoreNavigator` and `createNativeStackCoreNavigator`. USE `createNativeStackCoreNavigator` IF YOU DON'T WANT BREAKING CHANGES IN YOUR APP
 */
export const createCoreStackNavigator = <T extends ParamListBase>(config: MadConfig<T>) => createNativeStackCoreNavigator(config)