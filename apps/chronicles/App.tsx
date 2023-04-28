import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEDS, EDSProvider } from "@equinor/mad-components";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { useWindowDimensions } from 'react-native';
import { useMemo } from "react";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const [hasLoadedEds, edsLoadError] = useEDS();
    const colorScheme = useColorScheme();

    const { width } = useWindowDimensions();
    const deviceType = useMemo(() => {
        return width > 576 ? "tablet" : "phone"
    }, [width]);

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