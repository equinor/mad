import React from "react";
import { EnvironmentProvider, createNativeStackNavigator } from "@equinor/mad-navigation";
import { LoginScreen } from "../components/screens/LoginScreen";
import { ParamListBase } from "@react-navigation/native";
import { CoreStackParamListBase, MadConfig } from "../types";
import { WhatsNewScreen } from "../components/screens/release-notes/WhatsNewScreen";
import { AnnouncementsProvider } from "../components/AnnouncementsProvider";

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- We need to specify how a general function looks like
type GeneralFunction = (...args: any) => any;
type PropsOf<T extends GeneralFunction> = Parameters<T>[0];
type StackType = ReturnType<typeof createNativeStackNavigator>;
// @ts-expect-error this works, I don't know why it complains
type NavigatorProps = PropsOf<StackType["Navigator"]>;

export const createMadCoreNavigator = <T extends ParamListBase>(
    Stack: ReturnType<typeof createNativeStackNavigator<T & CoreStackParamListBase>>,
    config: MadConfig,
) => {
    const MadCoreNavigator = (props: Omit<NavigatorProps, "initialRouteName">) => {
        return (
            <EnvironmentProvider environment={config.environment}>
                <AnnouncementsProvider>
                    <Stack.Navigator {...props} initialRouteName={"Login"}>
                        <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{ headerShown: false, environmentBannerShown: true }}
                        />
                        <Stack.Screen name="WhatsNew" component={WhatsNewScreen} />
                        {props.children}
                    </Stack.Navigator>
                </AnnouncementsProvider>
            </EnvironmentProvider>
        );
    };
    return MadCoreNavigator;
};
