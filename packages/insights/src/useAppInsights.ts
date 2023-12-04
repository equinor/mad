import { useEffect } from "react";
import { appInsightsHasBeenInitialized, appInsightsInit } from "./appInsights";

export const useAppInsights = (...args: Parameters<typeof appInsightsInit>) => {
    useEffect(() => {
        if (appInsightsHasBeenInitialized()) return;
        appInsightsInit(...args);
    }, [args]);
};
