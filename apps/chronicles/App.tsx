import React, { useEffect, useMemo } from "react";
import Navigation from "./navigation";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEDS, EDSProvider } from "@equinor/mad-components";
import { Envelope, addTelemetryInitializer, ErrorBoundary } from "@equinor/mad-core";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { useWindowDimensions } from "react-native";
import * as APP from "./app.json";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const [hasLoadedEds] = useEDS();
    const colorScheme = useColorScheme();

    const { width } = useWindowDimensions();
    const deviceType = useMemo(() => {
        return width > 576 ? "tablet" : "phone";
    }, [width]);
    useEffect(() => {
        const appVersionEnvelope: Envelope = item => {
            if (item.data) {
                item.data["app-version"] = APP.expo.version;
            }
        };
        addTelemetryInitializer(appVersionEnvelope);
    }, []);

    if (!isLoadingComplete || !hasLoadedEds) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <EDSProvider colorScheme={colorScheme} density={deviceType}>
                    <ErrorBoundary>
                        <Navigation colorScheme={colorScheme} />
                        <StatusBar />
                    </ErrorBoundary>
                </EDSProvider>
            </SafeAreaProvider>
        );
    }
}
