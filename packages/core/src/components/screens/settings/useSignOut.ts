import { useCallback } from "react";
import { useCoreStackNavigation } from "../../../hooks";
import { ExpoAuthSession, signOut } from "@equinor/mad-auth";
import { alert } from "@equinor/mad-components";
import { CoreRoutes } from "../../navigation/coreRoutes";
import { useDemoMode, getConfig } from "../../../store";

export const useSignOut = () => {
    const navigation = useCoreStackNavigation();
    const demoMode = useDemoMode();
    const signOutFn = useCallback(async () => {
        try {
            const result = getConfig().experimental?.useExpoAuthSession
                ? ExpoAuthSession.signOut()
                : await signOut();
            if (!demoMode.isEnabled && !result) throw new Error("Unable to sign out");
            demoMode.disableDemoMode();
            navigation.navigate(CoreRoutes.LOGIN);
        } catch (_) {
            alert("Error", "Unable to sign out", [
                { text: "Try again", isPreferred: true, onPress: () => void signOutFn() },
                { text: "Cancel", onPress: () => undefined },
            ]);
        }
    }, [navigation, demoMode]);
    return signOutFn;
};
