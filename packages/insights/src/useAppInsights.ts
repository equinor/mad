import { useEffect } from "react";
import { appInsightsInit } from "./appInsights";

export const useAppInsights = (...args: Parameters<typeof appInsightsInit>) => {
    useEffect(() => {
        appInsightsInit(...args);
    }, [args]);
};
