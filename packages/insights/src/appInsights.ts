import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
import { ReactNativePlugin } from '@microsoft/applicationinsights-react-native';
import {
  ApplicationInsights,
  ICustomProperties,
  IEventTelemetry,
  ITelemetryItem,
} from '@microsoft/applicationinsights-web';
import { createBrowserHistory } from 'history';
import { Platform } from 'react-native';

import { obfuscateUser } from './encrypt';

let appInsightsMain: ApplicationInsights;
let appInsightsLongTermLog: ApplicationInsights;
let reactPluginWeb: ReactPlugin;
let useSHA1: boolean;

/**
 * Initialize appInsights. This should be called at app startup (useEffect inside App.tsx might be a good place to put it).
 * You need to provide a connectionString OR instrumentationKey.
 * @example appInsightsInit({connectionString: "STRING"})
 * @example appInsightsInit({instrumentationKey: "STRING"})
 * @param payload: { connectionString } OR { instrumentationKey }
 */
export const appInsightsInit = (
  payload: (
    | { connectionString: string; instrumentationKey?: undefined }
    | { instrumentationKey: string; connectionString?: undefined }
  ) & {
    fetchDepartmentId?: boolean;

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
  }
) => {
  const { connectionString, instrumentationKey } = payload;
  useSHA1 = payload.longTermLog?.useSHA1 || false;

  if (Platform.OS === 'web') {
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
    if (payload.longTermLog) {
      appInsightsLongTermLog = new ApplicationInsights({
        config: {
          connectionString: payload.longTermLog.connectionString,
          instrumentationKey: payload.longTermLog.instrumentationKey,
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
    if (payload.longTermLog) {
      appInsightsLongTermLog = new ApplicationInsights({
        config: {
          disableFetchTracking: false,
          connectionString: payload.longTermLog.connectionString,
          instrumentationKey: payload.longTermLog.instrumentationKey,
          extensions: [RNPlugin],
        },
      });
      appInsightsLongTermLog.loadAppInsights();
    }
    appInsightsMain.loadAppInsights();
  }
  track(metricKeys.APP_STARTED);
};

export const validateAppInsightsInit = () => {
  if (!appInsightsMain) {
    throw 'MAD-EXPO-CORE ERROR: AppInsights has not been initialized. please run appInsightsInit(args) at startup';
  }
};

export const setUsername = (username: string, userIdentifier: string | undefined) => {
  validateAppInsightsInit();
  appInsightsMain.setAuthenticatedUserContext(username, userIdentifier, true);
  if (appInsightsLongTermLog) {
    const obfuscatedUserName = obfuscateUser(
      userIdentifier || "",
      username,
      useSHA1
    ).id;
    const obfuscatedUserId = obfuscateUser(
      username,
      userIdentifier || "",
      useSHA1
    ).id;
    appInsightsLongTermLog.setAuthenticatedUserContext(
      obfuscatedUserName,
      obfuscatedUserId,
      true
    );
  }
};

const trackEvent = (
  event: IEventTelemetry,
  customProperties?: ICustomProperties | undefined
) => {
  validateAppInsightsInit();
  appInsightsMain.trackEvent(event, customProperties);
};

const trackEventLongTerm = (
  event: IEventTelemetry,
  customProperties?: ICustomProperties | undefined
) => {
  if (!appInsightsLongTermLog) throw 'No long term log set up';
  appInsightsLongTermLog.trackEvent(event, customProperties);
};

/**
 * Track something for both long term and short term logs. status, modifier & extraData is optional
 * @param {metricKeys} eventName - Name of the event
 * @param {metricStatus} status - Status of the event
 * @param {string} [modifier] - extra text in the name of the event
 * @param {Object} [extraData] - object to send as a customDimension property. Detailed information should be sent here
 */
export const track = async (
  eventName: metricKeys,
  eventStatus?: metricStatus,
  extraText?: string,
  extraData?: ICustomProperties
) => {
  const eventString = `${eventName} ${eventStatus || ''}. ${extraText || ''}`;
  if (excludeLogFilter(eventString, ['Ping', 'ServiceMessage,', 'STARTED']))
    return;
  const departmentId = '0' //TODO implement
  trackEvent(
    { name: eventString },
    departmentId != '0' ? { ...extraData, departmentId } : extraData
  );
  if (appInsightsLongTermLog) {
    trackEventLongTerm(
      { name: eventString },
      departmentId != '0' ? { ...extraData, departmentId } : extraData
    );
  }
};

export const addTelemetryInitializer = (
  envelope: (item: ITelemetryItem) => boolean | void
) => {
  appInsightsMain.addTelemetryInitializer(envelope);
  appInsightsLongTermLog.addTelemetryInitializer(envelope);
};

const excludeLogFilter = (
  eventString: string,
  excludeStrings: Array<string>
): boolean =>
  excludeStrings.some((excludeString) => eventString.includes(excludeString));

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
  extraData?: ICustomProperties
) => {
  const eventString = `${eventName} ${eventStatus || ''}. ${extraText || ''}`;

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
  extraData?: ICustomProperties
) => {
  const eventString = `${eventName} ${eventStatus || ''}. ${extraText || ''}`;
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
 * Handle changes in app state
 * @param nextState - name of next state
 */
export const handleAppStatusChange = (nextState: appStateStatus) => {
  switch (nextState) {
    case 'active': {
      track(metricKeys.APP_ACTIVE);
      break;
    }
    case 'background': {
      track(metricKeys.APP_BACKGROUND);
      break;
    }
  }
};

export enum appStateStatus {
  ACTIVE = 'active',
  BACKGROUND = 'background',
  INACTIVE = 'inactive',
}

export enum metricStatus {
  STARTED = 'STARTED',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

export enum metricKeys {
  DEP_ID = 'Department ID',
  APP_ACTIVE = 'Application ACTIVE',
  APP_BACKGROUND = 'Application BACKGROUND',
  APP_STARTED = 'Application STARTED',
  AUTHENTICATION = 'Authentication',
  AUTHENTICATION_DEMO = 'Authentication DEMO MODE',
  AUTHENTICATION_AUTOMATIC = 'Authentication AUTOMATIC',
  API_GET = 'GET',
  API_POST = 'POST',
  API_PUT = 'PUT',
  API_PATCH = 'PATCH',
  API_DELETE = 'DELETE',
  API_UPLOAD = 'UPLOAD',
  API_DOWNLOAD = 'DOWNLOAD',
  NAVIGATE = 'NAVIGATE',
  CUSTOM = 'CUSTOM',
}

export { reactPluginWeb, appInsightsMain, appInsightsLongTermLog };
