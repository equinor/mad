import { useEffect } from "react";
import { appInsightsInit } from "./appInsights";
import { AppInsightsInitConfig } from "./types";

export const useAppInsights = (config: AppInsightsInitConfig) => {
    useEffect(() => {
        appInsightsInit(config);
        // eslint-disable-next-line react-hooks/exhaustive-deps -- `config` may be an environment proxy with an unstable reference; depend on its primitive fields instead.
    }, [
        config.connectionString,
        config.instrumentationKey,
        config.longTermLog?.connectionString,
        config.longTermLog?.instrumentationKey,
        config.longTermLog?.useSHA1,
    ]);
};
