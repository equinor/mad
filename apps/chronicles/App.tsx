import React, { useEffect, useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEDS, EDSProvider, ErrorBoundary } from "@equinor/mad-components";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { useWindowDimensions } from "react-native";
import {
    ITelemetryItem,
    addTelemetryInitializer,
    trackCustom,
    useAppInsights,
} from "@equinor/mad-insights";
import * as APP from "./app.json";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const [hasLoadedEds] = useEDS();
    const colorScheme = useColorScheme();

    const { width } = useWindowDimensions();
    const deviceType = useMemo(() => {
        return width > 576 ? "tablet" : "phone";
    }, [width]);
    useAppInsights({
        instrumentationKey: "f1859360-4aa2-425f-b494-2d7320de6832",
        longTermLog: { instrumentationKey: "e91835aa-bcc2-41dd-a79d-352f0df23e1b" },
    });
    useEffect(() => {
        const appVersionEnvelope = (item: ITelemetryItem) => {
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
                    <ErrorBoundary
                        onError={(error, info) =>
                            trackCustom(`${error.name} - ${error.message}`, { error, info })
                        }
                    >
                        <Navigation colorScheme={colorScheme} />
                        <StatusBar />
                    </ErrorBoundary>
                </EDSProvider>
            </SafeAreaProvider>
        );
    }
}
