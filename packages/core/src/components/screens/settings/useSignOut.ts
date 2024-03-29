import { useCallback } from "react";
import { useCoreStackNavigation } from "../../../hooks/useCoreStackNavigation";
import { signOut } from "@equinor/mad-auth";
import { alert } from "@equinor/mad-components";
import { useDemoMode } from "../../../store/demo-mode";
import { CoreRoutes } from "../../navigation/coreRoutes";

export const useSignOut = () => {
    const navigation = useCoreStackNavigation();
    const demoMode = useDemoMode();
    const signOutFn = useCallback(async () => {
        try {
            const result = await signOut();
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
