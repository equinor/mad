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

const useExpoAuthSession = getConfig().experimental.useExpoAuthSession;

/**
 * @JSDocs This export will depend on whether you have opted in to use expo-auth-session. They will function the same, but
 * scopes will not be applied when using expo-auth-session
 */
export const authenticateSilently = (scopes: string[]) =>
    useExpoAuthSession ? ExpoAuthSession.authenticateSilently() : msalAuthenticateSilently(scopes);
/**
 * @JSDocs This export will depend on whether you have opted in to use expo-auth-session. They will function the same, but
 * getAcount() from expo-auth-session is not inherently async
 */
export const getAccount = async (): Promise<MadAccount | null> =>
    useExpoAuthSession ? Promise.resolve(ExpoAuthSession.getAccount()) : msalGetAccount();

/**
 * @JSDocs This export will depend on whether you have opted in to use expo-auth-session. They will function the same, but
 * signOut() from expo-auth-session is not inherently async
 */
export const signOut = async () => (useExpoAuthSession ? ExpoAuthSession.signOut() : msalSignOut());

/**
 * @JSDocs This export will depend on whether you have opted in to use expo-auth-session. They will function the same, but
 * scopes will not be applied when using expo-auth-session
 */
export const authenticateInteractively = (scopes: string[]) =>
    useExpoAuthSession
        ? ExpoAuthSession.authenticateInteractively()
        : msalAuthenticateInteractively(scopes);
