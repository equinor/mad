import React, { useEffect, useMemo } from "react";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { useBreakpoint, EDSProvider } from "@equinor/mad-components";
import { Envelope, addTelemetryInitializer, trackCustom, ErrorBoundary } from "@equinor/mad-core";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";
import { StatusBar } from "react-native";
import * as APP from "./app.json";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    const breakpoint = useBreakpoint();
    const deviceType = useMemo(() => {
        return breakpoint === "xs" ? "phone" : "tablet";
    }, [breakpoint]);
    useEffect(() => {
        trackCustom("This is logging before the app is initialized");
        const appVersionEnvelope: Envelope = item => {
            if (item.data) {
                item.data["app-version"] = APP.expo.version;
            }
        };
        addTelemetryInitializer(appVersionEnvelope);
    }, []);

    if (!isLoadingComplete) {
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
