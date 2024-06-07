import { useEDS } from "@equinor/mad-components";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);
    const [hasLoadedEds] = useEDS();

    // Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                await SplashScreen.preventAutoHideAsync();
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
            }
        }

        void loadResourcesAndDataAsync();
    }, []);

    useEffect(() => {
        if (isLoadingComplete && hasLoadedEds) void SplashScreen.hideAsync();
    }, [isLoadingComplete, hasLoadedEds]);

    return isLoadingComplete;
}
