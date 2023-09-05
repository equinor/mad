import React, { useEffect, useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEDS, EDSProvider } from "@equinor/mad-components";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { useWindowDimensions } from "react-native";
import { appInsightsInit, trackCustom } from "@equinor/mad-insights";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const [hasLoadedEds] = useEDS();
    const colorScheme = useColorScheme();

    const { width } = useWindowDimensions();
    const deviceType = useMemo(() => {
        return width > 576 ? "tablet" : "phone";
    }, [width]);

    useEffect(() => {
        appInsightsInit({
            instrumentationKey: "f1859360-4aa2-425f-b494-2d7320de6832",
            longTermLog: { instrumentationKey: "e91835aa-bcc2-41dd-a79d-352f0df23e1b" },
        });
        trackCustom("testing");
    }, []);

    if (!isLoadingComplete || !hasLoadedEds) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <EDSProvider colorScheme={colorScheme} density={deviceType}>
                    <Navigation colorScheme={colorScheme} />
                    <StatusBar />
                </EDSProvider>
            </SafeAreaProvider>
        );
    }
}
