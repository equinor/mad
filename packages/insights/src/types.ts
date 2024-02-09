import {
    ICustomProperties,
    IEventTelemetry,
    ITelemetryItem,
} from "@microsoft/applicationinsights-web";

export type AppInsightsInitConfig = (
    | { connectionString: string; instrumentationKey?: undefined }
    | { instrumentationKey: string; connectionString?: undefined }
) & {
    /**
     * Long term log hides user id
     */
    longTermLog?: (
        | { connectionString: string; instrumentationKey?: undefined }
        | { instrumentationKey: string; connectionString?: undefined }
    ) & {
        /**@deprecated ONLY use in special circumstances. SHA1 is _NOT_ secure*/
        useSHA1?: boolean;
    };
};

export type Envelope = (item: ITelemetryItem) => boolean | void;

export type TrackEventPayload = {
    event: IEventTelemetry;
    customProperties?: ICustomProperties | undefined;
};
