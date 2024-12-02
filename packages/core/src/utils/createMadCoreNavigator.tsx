import React from "react";
import { createNativeStackNavigator, createStackNavigator } from "../components";
import { CoreRoutes } from "../components/navigation/coreRoutes";
import { AboutScreen } from "../components/screens/AboutScreen";
import { CreateIncidentScreen } from "../components/screens/create-incident/CreateIncidentScreen";
import { SelectLanguageScreen } from "../components/screens/language/SelectLanguageScreen";
import { LoginScreen } from "../components/screens/LoginScreen";
import { ReleaseNotesScreen } from "../components/screens/release-notes/ReleaseNotesScreen";
import { WhatsNewScreen } from "../components/screens/release-notes/WhatsNewScreen";
import { useMadConfig } from "../store";
import { CoreStackParamListBase } from "../types";
import { getDefaultScreenOptionsForLoginScreen } from "./getDefaultScreenOptionsForLoginScreen";
import { MadCoreProviders } from "./MadCoreProviders";

export const createMadCoreNativeStackNavigator = <T extends CoreStackParamListBase>(
    Stack: ReturnType<typeof createNativeStackNavigator<T>>
) => {
    //@ts-expect-error this works
    type Props = Parameters<typeof Stack.Navigator>[0]
    function MadCoreNavigator(props: Omit<Props, "initialRouteName">) {
        const config = useMadConfig();
        if (!config) return null;
        return (
            <MadCoreProviders config={config} type={"native-stack"}>
                {/*@ts-expect-error this works */}
                <Stack.Navigator {...props} initialRouteName={CoreRoutes.LOGIN}>
                    {config.login.addScreenManually !== true && (
                        <Stack.Screen
                            name={CoreRoutes.LOGIN}
                            component={LoginScreen}
                            options={getDefaultScreenOptionsForLoginScreen()}
                        />
                    )}
                    <Stack.Screen name={CoreRoutes.RELEASE_NOTES} component={ReleaseNotesScreen} />
                    <Stack.Screen name={CoreRoutes.WHATS_NEW} component={WhatsNewScreen} />
                    {config.about && (
                        <Stack.Screen name={CoreRoutes.ABOUT} component={AboutScreen} />
                    )}
                    {config.serviceNow && (
                        <Stack.Screen name={CoreRoutes.FEEDBACK} component={CreateIncidentScreen} />
                    )}
                    {config.language.supportedLanguages.length > 1 && (
                        <>
                            <Stack.Screen
                                name={CoreRoutes.SELECT_LANGUAGE}
                                component={SelectLanguageScreen}
                            />
                            <Stack.Screen
                                name={CoreRoutes.SELECT_LANGUAGE_ONBOARDING}
                                component={SelectLanguageScreen}
                                options={{ headerBackVisible: false }}
                            />
                        </>
                    )}
                    {props.children}
                </Stack.Navigator>
            </MadCoreProviders>
        );
    }
    return MadCoreNavigator;
};

export const createMadCoreStackNavigator = <T extends CoreStackParamListBase>(
    Stack: ReturnType<typeof createStackNavigator<T>>
) => {
    //@ts-expect-error this works
    type Props = Parameters<typeof Stack.Navigator>[0]
    function MadCoreNavigator(props: Omit<Props, "initialRouteName">) {
        const config = useMadConfig();
        if (!config) return null;
        return (
            <MadCoreProviders config={config} type={"stack"}>
                {/*@ts-expect-error this works */}
                <Stack.Navigator {...props} initialRouteName={CoreRoutes.LOGIN}>
                    {config.login.addScreenManually !== true && (
                        <Stack.Screen
                            name={CoreRoutes.LOGIN}
                            component={LoginScreen}
                            options={getDefaultScreenOptionsForLoginScreen()}
                        />
                    )}
                    <Stack.Screen name={CoreRoutes.RELEASE_NOTES} component={ReleaseNotesScreen} />
                    <Stack.Screen name={CoreRoutes.WHATS_NEW} component={WhatsNewScreen} />
                    {config.about && (
                        <Stack.Screen name={CoreRoutes.ABOUT} component={AboutScreen} />
                    )}
                    {config.serviceNow && (
                        <Stack.Screen name={CoreRoutes.FEEDBACK} component={CreateIncidentScreen} />
                    )}
                    {config.language.supportedLanguages.length > 1 && (
                        <>
                            <Stack.Screen
                                name={CoreRoutes.SELECT_LANGUAGE}
                                component={SelectLanguageScreen}
                            />
                            <Stack.Screen
                                name={CoreRoutes.SELECT_LANGUAGE_ONBOARDING}
                                component={SelectLanguageScreen}
                                options={{ headerLeft: () => null }}
                            />
                        </>
                    )}
                    {props.children}
                </Stack.Navigator>
            </MadCoreProviders>
        );
    }
    return MadCoreNavigator;
};
