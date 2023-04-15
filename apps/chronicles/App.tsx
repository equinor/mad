import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEDS, EDSProvider } from "@equinor/mad-components";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const isLoadingEds = useEDS();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete || !isLoadingEds) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <EDSProvider colorScheme="light" density="comfortable">
                    <Navigation colorScheme={colorScheme} />
                    <StatusBar />
                </EDSProvider>
            </SafeAreaProvider>
        );
    }
}
