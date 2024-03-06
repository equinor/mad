import { createNativeStackNavigator } from "./navigation";
import { createMadCoreNavigator } from "../utils/createMadCoreNavigator";
import { setConfig } from "../store/mad-config";
import { initiateAuthenticationClient } from "../utils/initiateAuthenticationClient";
import type { CoreStackParamListBase, MadConfig } from "../types";
import type { ParamListBase } from "@react-navigation/native";

type CreateNativeStackNavigatorReturnType<T extends ParamListBase> = ReturnType<typeof createNativeStackNavigator<CoreStackParamListBase & T>>

type CreateCoreStackNavigatorReturnType<T extends ParamListBase> =  {
    Group: CreateNativeStackNavigatorReturnType<T>["Group"],
    Screen: CreateNativeStackNavigatorReturnType<T>["Screen"],
    Navigator: ReturnType<typeof createMadCoreNavigator>
}

type CreateCoreStackNavigatorType = <T extends ParamListBase>(config: MadConfig<T>) =>  CreateCoreStackNavigatorReturnType<T>

export const createCoreStackNavigator: CreateCoreStackNavigatorType = <T extends ParamListBase>(config: MadConfig<T>) => {
    setConfig(config as MadConfig);
    initiateAuthenticationClient();
    const Stack = createNativeStackNavigator<CoreStackParamListBase & T>();
    const Navigator = createMadCoreNavigator(Stack);

    return { ...Stack, Navigator };
};
