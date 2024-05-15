import React from "react";
import { EnvironmentProvider } from "../components/EnvironmentProvider";
import { LoginScreen } from "../components/screens/LoginScreen";
import { ParamListBase } from "@react-navigation/native";
import { CoreStackParamListBase } from "../types";
import { WhatsNewScreen } from "../components/screens/release-notes/WhatsNewScreen";
import { AppInsightsInitializer } from "@equinor/mad-insights";
import { createNativeStackNavigator } from "../components";
import { ReleaseNotesScreen } from "../components/screens/release-notes/ReleaseNotesScreen";
import { AboutScreen } from "../components/screens/AboutScreen";
import { CreateIncidentScreen } from "../components/screens/create-incident/CreateIncidentScreen";
import { SelectLanguageScreen } from "../components/screens/language/SelectLanguageScreen";
import { ServiceMessageProvider } from "../components/service-message/ServiceMessageProvider";
import { useMadConfig } from "../store";
import { CoreRoutes } from "../components/navigation/coreRoutes";
import { getDefaultScreenOptionsForLoginScreen } from "./getDefaultScreenOptionsForLoginScreen";
import { ToastEmitter } from "../components/ToastEmitter";

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- We need to specify how a general function looks like
type GeneralFunction = (...args: any) => any;
type PropsOf<T extends GeneralFunction> = Parameters<T>[0];
type StackType = ReturnType<typeof createNativeStackNavigator>;
// @ts-expect-error this works, I don't know why it complains
type NavigatorProps = PropsOf<StackType["Navigator"]>;

export const createMadCoreNavigator = <T extends ParamListBase>(
    Stack: ReturnType<typeof createNativeStackNavigator<T & CoreStackParamListBase>>,
) => {
    function MadCoreNavigator(props: Omit<NavigatorProps, "initialRouteName">) {
        const config = useMadConfig();
        if (!config) return null;
        return (
            <AppInsightsInitializer config={config.applicationInsights}>
                <EnvironmentProvider>
                    <ServiceMessageProvider>
                        <Stack.Navigator {...props} initialRouteName={CoreRoutes.LOGIN}>
                            {config.login.addScreenManually !== true && (
                                <Stack.Screen
                                    name={CoreRoutes.LOGIN}
                                    component={LoginScreen}
                                    options={getDefaultScreenOptionsForLoginScreen()}
                                />
                            )}
                            <Stack.Screen
                                name={CoreRoutes.RELEASE_NOTES}
                                component={ReleaseNotesScreen}
                            />
                            <Stack.Screen name={CoreRoutes.WHATS_NEW} component={WhatsNewScreen} />
                            {config.about && (
                                <Stack.Screen name={CoreRoutes.ABOUT} component={AboutScreen} />
                            )}
                            {config.serviceNow && (
                                <Stack.Screen
                                    name={CoreRoutes.FEEDBACK}
                                    component={CreateIncidentScreen}
                                />
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
                        <ToastEmitter />
                    </ServiceMessageProvider>
                </EnvironmentProvider>
            </AppInsightsInitializer>
        );
    }
    return MadCoreNavigator;
};
