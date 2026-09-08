import { ExpoAuthSession } from "@equinor/mad-auth";
import { resetCancelledSession } from "./store/auth-session/resetCancelledSession";

export const authenticate = (scopes: string[]) =>
    ExpoAuthSession.authenticate(scopes, {
        onAuthenticationCancelled: resetCancelledSession,
    });
