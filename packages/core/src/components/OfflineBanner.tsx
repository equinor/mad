import React from "react";
import { SafeAreaView } from "react-native";
import { OfflineBanner as ImportedOfflineBanner } from "@equinor/mad-components";
import { getIsOfflineBannerEnabled } from "../store";
import { useNetInfo } from "@react-native-community/netinfo";

export const OfflineBanner = () => {

    const { isConnected } = useNetInfo();
    const isOfflineBannerEnabled = getIsOfflineBannerEnabled();

    return (
        <SafeAreaView>
            {isOfflineBannerEnabled &&
                <ImportedOfflineBanner isConnected={isConnected}/>
            }
        </SafeAreaView>
    )
}

