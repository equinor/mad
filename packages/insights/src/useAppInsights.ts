import { useEffect } from "react";
import { appInsightsInit } from "./appInsights";
import { AppInsightsInitConfig } from "./types";

export const useAppInsights = (config: AppInsightsInitConfig) => {
    useEffect(() => {
        appInsightsInit(config);
    }, [config]);
};
