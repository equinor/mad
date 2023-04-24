import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEDS, EDSProvider, Density } from "@equinor/mad-components";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import * as Device from 'expo-device';
import { useState } from "react";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const isLoadingEds = useEDS();
    const colorScheme = useColorScheme();

    const [firstRender, setFirstRender] = useState(true);
    const [deviceType, setDeviceType] = useState("tablet" as Density);

    if (firstRender) {
        setFirstRender(false);
        Device.getDeviceTypeAsync().then((deviceType) => {
            if (deviceType === Device.DeviceType.PHONE) {
                setDeviceType("phone");
            }
        });
    }

    if (!isLoadingComplete || !isLoadingEds) {
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
