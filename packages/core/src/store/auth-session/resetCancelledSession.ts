import { ExpoAuthSession } from "@equinor/mad-auth";
import { disableDemoMode } from "../demo-mode";
import { getIsAuthSessionInvalidated, invalidateAuthSession } from "./auth-session";

let cancelledSessionReset: Promise<void> | null = null;

export const resetCancelledSession = () => {
    if (cancelledSessionReset) return cancelledSessionReset;
    if (getIsAuthSessionInvalidated()) return Promise.resolve();

    disableDemoMode();
    invalidateAuthSession();
    cancelledSessionReset = Promise.resolve()
        .then(() => ExpoAuthSession.signOut())
        .then(() => undefined)
        .catch(() => undefined)
        .finally(() => {
            cancelledSessionReset = null;
        });
    return cancelledSessionReset;
};
