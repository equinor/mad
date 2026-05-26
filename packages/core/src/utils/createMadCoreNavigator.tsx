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
import { getDefaultScreenOptionsForLoginScreen } from "./getDefaultScreenOptionsForLoginScreen";
import { MadCoreProviders } from "./MadCoreProviders";

export const createMadCoreNativeStackNavigator = (
    Stack: ReturnType<typeof createNativeStackNavigator>
) => {
    type Props = Parameters<typeof Stack.Navigator>[0]
    function MadCoreNavigator(props: Omit<Props, "initialRouteName"> & { children?: React.ReactNode }) {
        const config = useMadConfig();
        if (!config) return null;
        return (
            <MadCoreProviders config={config} type={"native-stack"}>
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

export const createMadCoreStackNavigator = (
    Stack: ReturnType<typeof createStackNavigator>
) => {
    type Props = Parameters<typeof Stack.Navigator>[0]
    function MadCoreNavigator(props: Omit<Props, "initialRouteName"> & { children?: React.ReactNode }) {
        const config = useMadConfig();
        if (!config) return null;
        return (
            <MadCoreProviders config={config} type={"stack"}>
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
