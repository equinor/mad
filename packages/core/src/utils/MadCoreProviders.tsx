import React, { PropsWithChildren } from "react";
import { ParamListBase } from "@react-navigation/native";
import { MadConfig, WithoutEnvironmentOptionValues } from "../types";
import { AppInsightsInitializer } from "@equinor/mad-insights";
import { ToastEmitter } from "@equinor/mad-toast";
import { ServiceMessageProvider } from "../components/service-message/ServiceMessageProvider";
import { EnvironmentProvider } from "../components/EnvironmentProvider";
import {
    CoreNavigatorType,
    CoreNavigatorTypeProvider,
} from "../components/CoreNavigatorTypeProvider";

export type MadCoreProvidersProps<T extends ParamListBase | void> = PropsWithChildren<{
    config: WithoutEnvironmentOptionValues<MadConfig<T>>;
    type: CoreNavigatorType;
}>;
export const MadCoreProviders = <T extends ParamListBase | void>({
    config,
    type,
    children,
}: MadCoreProvidersProps<T>) => {
    return (
        <AppInsightsInitializer config={config.applicationInsights}>
            <CoreNavigatorTypeProvider type={type}>
                <EnvironmentProvider>
                    <ServiceMessageProvider>
                        {children}
                        <ToastEmitter />
                    </ServiceMessageProvider>
                </EnvironmentProvider>
            </CoreNavigatorTypeProvider>
        </AppInsightsInitializer>
    );
};
