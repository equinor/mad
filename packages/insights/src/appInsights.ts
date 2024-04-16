import { ReactPlugin } from "@microsoft/applicationinsights-react-js";
import { ReactNativePlugin } from "@microsoft/applicationinsights-react-native";
import {
    ApplicationInsights,
    ICustomProperties,
    IEventTelemetry,
} from "@microsoft/applicationinsights-web";
import { createBrowserHistory } from "history";
import { Platform } from "react-native";

import { obfuscateUser } from "./encrypt";
import { AppInsightsInitConfig, Envelope, TrackEventPayload } from "./types";

let appInsightsMain: ApplicationInsights;
let appInsightsLongTermLog: ApplicationInsights | undefined;
let hasBeenInitialized = false;
let reactPluginWeb: ReactPlugin;
let useSHA1: boolean;
const envelopeBacklog: Envelope[] = [];
const trackShortTermBacklog: TrackEventPayload[] = [];
const trackLongTermBacklog: TrackEventPayload[] = [];

/**
 * Initialize appInsights. This should be called at app startup (useEffect inside App.tsx might be a good place to put it).
 * You need to provide a connectionString OR instrumentationKey.
 * @example initializeTracking({connectionString: "STRING"})
 * @example initializeTracking({instrumentationKey: "STRING"})
 * @param config: { connectionString } OR { instrumentationKey }
 */
export const appInsightsInit = (config: AppInsightsInitConfig) => {
    const { connectionString, instrumentationKey } = config;
    useSHA1 = config.longTermLog?.useSHA1 ?? false;
    if (hasBeenInitialized) return;
    hasBeenInitialized = true;

    if (Platform.OS === "web") {
        const browserHistory = createBrowserHistory();
        reactPluginWeb = new ReactPlugin();
        appInsightsMain = new ApplicationInsights({
            config: {
                connectionString,
                instrumentationKey,
                disableFetchTracking: false,
                extensions: [reactPluginWeb],
                extensionConfig: {
                    [reactPluginWeb.identifier]: { history: browserHistory },
                },
            },
        });
        if (config.longTermLog) {
            appInsightsLongTermLog = new ApplicationInsights({
                config: {
                    connectionString: config.longTermLog.connectionString,
                    instrumentationKey: config.longTermLog.instrumentationKey,
                    disableFetchTracking: false,
                    extensions: [reactPluginWeb],
                    extensionConfig: {
                        [reactPluginWeb.identifier]: { history: browserHistory },
                    },
                },
            });
            appInsightsLongTermLog.loadAppInsights();
        }
        appInsightsMain.loadAppInsights();
    } else {
        const RNPlugin = new ReactNativePlugin();
        appInsightsMain = new ApplicationInsights({
            config: {
                disableFetchTracking: false,
                connectionString,
                instrumentationKey,
                extensions: [RNPlugin],
            },
        });
        if (config.longTermLog) {
            appInsightsLongTermLog = new ApplicationInsights({
                config: {
                    disableFetchTracking: false,
                    connectionString: config.longTermLog.connectionString,
                    instrumentationKey: config.longTermLog.instrumentationKey,
                    extensions: [RNPlugin],
                },
            });
            appInsightsLongTermLog.loadAppInsights();
        }
        appInsightsMain.loadAppInsights();
    }

    envelopeBacklog.forEach(addTelemetryInitializer);
    trackShortTermBacklog.forEach(item => trackEvent(item.event, item.customProperties));
    trackLongTermBacklog.forEach(item => trackEventLongTerm(item.event, item.customProperties));

    void track(metricKeys.APP_STARTED);
};

export const appInsightsHasBeenInitialized = () => hasBeenInitialized;

export const validateAppInsightsInit = () => {
    if (!appInsightsMain) {
        throw new Error(
            "mad-insights error: AppInsights has not been initialized. please run appInsightsInit(args) at startup",
        );
    }
};

export const setUsername = (username: string, userIdentifier: string | undefined) => {
    validateAppInsightsInit();
    appInsightsMain.setAuthenticatedUserContext(username, userIdentifier, true);
    if (appInsightsLongTermLog) {
        const obfuscatedUserName = obfuscateUser(userIdentifier ?? "", username, useSHA1).id;
        const obfuscatedUserId = obfuscateUser(username, userIdentifier ?? "", useSHA1).id;
        appInsightsLongTermLog.setAuthenticatedUserContext(
            obfuscatedUserName,
            obfuscatedUserId,
            true,
        );
    }
};

const trackEvent = (event: IEventTelemetry, customProperties?: ICustomProperties | undefined) => {
    if (!appInsightsMain) {
        trackShortTermBacklog.push({ event, customProperties });
        return;
    }
    appInsightsMain.trackEvent(event, customProperties);
};

const trackEventLongTerm = (
    event: IEventTelemetry,
    customProperties?: ICustomProperties | undefined,
) => {
    if (!appInsightsLongTermLog) {
        trackLongTermBacklog.push({ event, customProperties });
        return;
    }
    appInsightsLongTermLog.trackEvent(event, customProperties);
};

/**
 * Track something for both long term and short term logs. status, modifier & extraData is optional
 * @param {metricKeys} eventName - Name of the event
 * @param {metricStatus} status - Status of the event
 * @param {string} [modifier] - extra text in the name of the event
 * @param {Object} [extraData] - object to send as a customDimension property. Detailed information should be sent here
 */
export const track = (
    eventName: metricKeys,
    eventStatus?: metricStatus,
    extraText?: string,
    extraData?: ICustomProperties,
) => {
    const eventString = `${eventName} ${eventStatus ?? ""}. ${extraText ?? ""}`;
    if (excludeLogFilter(eventString, ["Ping", "ServiceMessage"])) return;
    trackEvent({ name: eventString }, extraData);
    if (appInsightsLongTermLog) {
        trackEventLongTerm({ name: eventString }, extraData);
    }
};

export const addTelemetryInitializer = (envelope: Envelope) => {
    if (!hasBeenInitialized) {
        envelopeBacklog.push(envelope);
        return;
    }
    appInsightsMain.addTelemetryInitializer(envelope);
    appInsightsLongTermLog?.addTelemetryInitializer(envelope);
};

const excludeLogFilter = (eventString: string, excludeStrings: string[]): boolean =>
    excludeStrings.some(excludeString => eventString.includes(excludeString));

/**
 * Track something for short term logs. status, modifier & extraData is optional
 * @param {metricKeys} eventName - Name of the event
 * @param {metricStatus} status - Status of the event
 * @param {string} [modifier] - extra text in the name of the event
 * @param {Object} [extraData] - object to send as a customDimension property. Detailed information should be sent here
 */
export const trackShortTerm = (
    eventName: metricKeys,
    eventStatus?: metricStatus,
    extraText?: string,
    extraData?: ICustomProperties,
) => {
    const eventString = `${eventName} ${eventStatus ?? ""}. ${extraText ?? ""}`;

    trackEvent({ name: eventString }, extraData);
};

/**
 * WARNING: THIS DATA WILL BE STORED FOR UP TO 2 YEARS. PLEASE BE CAUTIOUS WHEN USING THIS METHOD!
 *
 * Track something for long term log. status, modifier & extraData is optional
 * @param {metricKeys} eventName - Name of the event
 * @param {metricStatus} status - Status of the event
 * @param {string} [modifier] - extra text in the name of the event
 * @param {Object} [extraData] - object to send as a customDimension property. Detailed information should be sent here
 */
export const trackLongTerm = (
    eventName: metricKeys,
    eventStatus?: metricStatus,
    extraText?: string,
    extraData?: ICustomProperties,
) => {
    const eventString = `${eventName} ${eventStatus ?? ""}. ${extraText ?? ""}`;
    trackEventLongTerm({ name: eventString }, extraData);
};

/**
 * Track navigation
 * @param routeName - name of route
 * @param longTerm - if you want to track in long term log as well
 */
export const trackNavigation = (routeName: string, longTerm?: boolean) => {
    track(metricKeys.NAVIGATE, undefined, routeName);
    if (longTerm) trackLongTerm(metricKeys.NAVIGATE, undefined, routeName);
};

/**
 * Add a custom tracking event
 * @param {string} text - text you want to add to the name of the event
 * @param {Object} [extraData] - object to send as a customDimension property. Detailed information should be sent here
 */
export const trackCustom = (text: string, extraData?: ICustomProperties) => {
    track(metricKeys.CUSTOM, undefined, text, extraData);
};

/**
 * Handle changes in app state
 * @param nextState - name of next state
 */
export const handleAppStatusChange = (nextState: appStateStatus) => {
    switch (nextState) {
        case appStateStatus.ACTIVE: {
            track(metricKeys.APP_ACTIVE);
            break;
        }
        case appStateStatus.BACKGROUND: {
            track(metricKeys.APP_BACKGROUND);
            break;
        }
    }
};

export enum appStateStatus {
    ACTIVE = "active",
    BACKGROUND = "background",
    INACTIVE = "inactive",
}

export enum metricStatus {
    STARTED = "STARTED",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
}

export enum metricKeys {
    APP_ACTIVE = "Application ACTIVE",
    APP_BACKGROUND = "Application BACKGROUND",
    APP_STARTED = "Application STARTED",
    AUTHENTICATION = "Authentication",
    AUTHENTICATION_DEMO = "Authentication DEMO MODE",
    AUTHENTICATION_AUTOMATIC = "Authentication AUTOMATIC",
    API_GET = "GET",
    API_POST = "POST",
    API_PUT = "PUT",
    API_PATCH = "PATCH",
    API_DELETE = "DELETE",
    API_UPLOAD = "UPLOAD",
    API_DOWNLOAD = "DOWNLOAD",
    NAVIGATE = "NAVIGATE",
    CUSTOM = "CUSTOM",
}

export { reactPluginWeb, appInsightsMain, appInsightsLongTermLog };
