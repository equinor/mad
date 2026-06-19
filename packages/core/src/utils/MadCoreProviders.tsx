import React, { PropsWithChildren, useLayoutEffect } from "react";
import { ParamListBase } from "@react-navigation/native";
import { MadConfig, WithoutEnvironmentOptionValues } from "../types";
import {
    AppInsightsInitializer,
    AppInsightsInitConfig,
    disableInsights,
} from "@equinor/mad-insights";
import { ToastEmitter } from "@equinor/mad-toast";
import { ServiceMessageProvider } from "../components/service-message/ServiceMessageProvider";
import { EnvironmentProvider } from "../components/EnvironmentProvider";
import {
    CoreNavigatorType,
    CoreNavigatorTypeProvider,
} from "../components/CoreNavigatorTypeProvider";

const AppInsightsSlot = ({ config }: { config?: AppInsightsInitConfig }) => {
    if (!config) return null;
    return <AppInsightsInitializer config={config}>{null}</AppInsightsInitializer>;
};

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

    useLayoutEffect(() => {
        if (!hasInsightsConfig) disableInsights();
    }, [hasInsightsConfig]);

    return (
        <>
            <AppInsightsSlot config={insightsConfig} />
            <CoreNavigatorTypeProvider type={type}>
                <EnvironmentProvider>
                    <ServiceMessageProvider>
                        {children}
                        <ToastEmitter />
                    </ServiceMessageProvider>
                </EnvironmentProvider>
            </CoreNavigatorTypeProvider>
        </>
    );
};
