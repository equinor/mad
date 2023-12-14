import React from "react";
import { EnvironmentProvider } from "@equinor/mad-components";
import { LoginScreen } from "../components/screens/LoginScreen";
import { ParamListBase } from "@react-navigation/native";
import { CoreStackParamListBase, MadConfig } from "../types";
import { WhatsNewScreen } from "../components/screens/release-notes/WhatsNewScreen";
import { AnnouncementsProvider } from "../components/AnnouncementsProvider";
import { AppInsightsInitializer } from "@equinor/mad-insights";
import { createNativeStackNavigator } from "../components/navigation";
import { ReleaseNotesScreen } from "../components/screens/release-notes/ReleaseNotesScreen";
import { AboutScreen } from "../components/screens/AboutScreen";
import { CreateIncidentScreen } from "../components/screens/CreateIncidentScreen";
import { SelectLanguageScreen } from "../components/screens/language/SelectLanguageScreen";
import { ServiceMessageProvider } from "../components/service-message/ServiceMessageProvider";

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
    function MadCoreNavigator(props: Omit<NavigatorProps, "initialRouteName">) {
        return (
        <AppInsightsInitializer config={config.applicationInsights}>
            <EnvironmentProvider environment={config.environment}>
                <ServiceMessageProvider>
                    <AnnouncementsProvider>
                        <Stack.Navigator {...props} initialRouteName={"Login"}>
                            <Stack.Screen
                                name="Login"
                                component={LoginScreen}
                                options={{headerShown: false, customSubHeaderShown: true}}
                                />
                            <Stack.Screen name="ReleaseNotes" component={ReleaseNotesScreen} />
                            <Stack.Screen
                                name="WhatsNew"
                                component={WhatsNewScreen}
                                />
                                {config.about && <Stack.Screen name="About" component={AboutScreen} />}
                                {config.serviceNow && (
                                    <Stack.Screen name="Feedback" component={CreateIncidentScreen} />
                                    )}
                                {config.language.supportedLanguages.length > 1 && <>
                                    <Stack.Screen name="SelectLanguage" component={SelectLanguageScreen} />
                                    <Stack.Screen name="SelectLanguageOnboarding" component={SelectLanguageScreen} options={{headerBackVisible: false}} />
                                </>}
                                {props.children}
                            </Stack.Navigator>
                    </AnnouncementsProvider>
                </ServiceMessageProvider>
            </EnvironmentProvider>
        </AppInsightsInitializer>
        );
    }
    return MadCoreNavigator;
};
