import React, { PropsWithChildren, useEffect } from "react";
import { ParamListBase } from "@react-navigation/native";
import { MadConfig, WithoutEnvironmentOptionValues } from "../types";
import { AppInsightsInitializer, disableInsights } from "@equinor/mad-insights";
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
    const insightsConfig = config.applicationInsights;
    const hasInsightsConfig = !!insightsConfig;

    useEffect(() => {
        if (!hasInsightsConfig) disableInsights();
    }, [hasInsightsConfig]);

    const content = (
        <CoreNavigatorTypeProvider type={type}>
            <EnvironmentProvider>
                <ServiceMessageProvider>
                    {children}
                    <ToastEmitter />
                </ServiceMessageProvider>
            </EnvironmentProvider>
        </CoreNavigatorTypeProvider>
    );

    if (!insightsConfig) return content;

    return <AppInsightsInitializer config={insightsConfig}>{content}</AppInsightsInitializer>;
};
