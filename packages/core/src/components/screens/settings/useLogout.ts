import { useCallback } from "react";
import { useCoreStackNavigation } from "../../../hooks/useCoreStackNavigation";
import { signOut } from "@equinor/mad-auth";
import { alert } from "@equinor/mad-components";

export const useSignOut = () => {
    const navigation = useCoreStackNavigation();
    const signOutFn = useCallback(async () => {
        try {
            await signOut();
            navigation.navigate("Login");
        } catch (_) {
            alert("Error", "Unable to sign out", [
                { text: "Try again", isPreferred: true, onPress: signOutFn },
                { text: "Cancel", onPress: () => undefined },
            ]);
        }
    }, [navigation]);
    return signOutFn;
};
