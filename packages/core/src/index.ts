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
import { MadAccount, ExpoAuthSession } from "@equinor/mad-auth";

/**
 * @JSDocs This export will depend on whether you have opted in to use expo-auth-session. They will function the same, but
 * scopes will not be applied when using expo-auth-session
 */
export const authenticateSilently = (scopes: string[]) =>
    ExpoAuthSession.authenticateSilently(scopes);
/**
 * @JSDocs This export will depend on whether you have opted in to use expo-auth-session. They will function the same, but
 * getAcount() from expo-auth-session is not inherently async
 */
export const getAccount = async (): Promise<MadAccount | null> =>
    Promise.resolve(ExpoAuthSession.getAccount());

/**
 * @JSDocs This export will depend on whether you have opted in to use expo-auth-session. They will function the same, but
 * signOut() from expo-auth-session is not inherently async
 */
export const signOut = async () =>
    ExpoAuthSession.signOut();

/**
 * @JSDocs This export will depend on whether you have opted in to use expo-auth-session. They will function the same, but
 * scopes will not be applied when using expo-auth-session
 */
export const authenticateInteractively = (scopes: string[]) =>
    ExpoAuthSession.authenticateInteractively(scopes);
