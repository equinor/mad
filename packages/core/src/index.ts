import { getConfig } from "./store";

export * from "./types";
export * from "./components";
export {
    appInsightsHasBeenInitialized,
    addTelemetryInitializer,
    Envelope,
    metricKeys,
    metricStatus,
    track,
    trackCustom,
    trackLongTerm,
    trackShortTerm,
} from "@equinor/mad-insights";
export { addToast, ToastTypes, ToastType } from "@equinor/mad-toast";
export * from "./hooks";
export * from "./store";
export * from "./utils/getDefaultScreenOptionsForLoginScreen";
export { MadAccount, MadAuthenticationResult } from "@equinor/mad-auth";
import {
    MadAccount,
    authenticateSilently as msalAuthenticateSilently,
    getAccount as msalGetAccount,
    signOut as msalSignOut,
    authenticateInteractively as msalAuthenticateInteractively,
    ExpoAuthSession,
} from "@equinor/mad-auth";

const hasExpoAuthSession = () => getConfig().experimental?.useExpoAuthSession;

/**
 * @JSDocs This export will depend on whether you have opted in to use expo-auth-session. They will function the same, but
 * scopes will not be applied when using expo-auth-session
 */
export const authenticateSilently = (scopes: string[]) =>
    hasExpoAuthSession()
        ? ExpoAuthSession.authenticateSilently(scopes)
        : msalAuthenticateSilently(scopes);
/**
 * @JSDocs This export will depend on whether you have opted in to use expo-auth-session. They will function the same, but
 * getAcount() from expo-auth-session is not inherently async
 */
export const getAccount = async (): Promise<MadAccount | null> =>
    hasExpoAuthSession() ? Promise.resolve(ExpoAuthSession.getAccount()) : msalGetAccount();

/**
 * @JSDocs This export will depend on whether you have opted in to use expo-auth-session. They will function the same, but
 * signOut() from expo-auth-session is not inherently async
 */
export const signOut = async () =>
    hasExpoAuthSession() ? ExpoAuthSession.signOut() : msalSignOut();

/**
 * @JSDocs This export will depend on whether you have opted in to use expo-auth-session. They will function the same, but
 * scopes will not be applied when using expo-auth-session
 */
export const authenticateInteractively = (scopes: string[]) =>
    hasExpoAuthSession()
        ? ExpoAuthSession.authenticateInteractively(scopes)
        : msalAuthenticateInteractively(scopes);
