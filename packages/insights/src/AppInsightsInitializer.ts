import { PropsWithChildren } from "react";
import { AppInsightsInitConfig } from "./types";
import { useAppInsights } from "./useAppInsights";

export type AppInsightsInitializerProps = PropsWithChildren<{ config: AppInsightsInitConfig }>;
/**
 * This component will run the `useAppInsights` hook for you, and return the children
 */
export const AppInsightsInitializer = ({ children, config }: AppInsightsInitializerProps) => {
    useAppInsights(config);
    return children;
};
