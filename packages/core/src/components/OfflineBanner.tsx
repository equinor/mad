import React from "react";
import { OfflineBanner as ImportedOfflineBanner } from "@equinor/mad-components";
import { getIsOfflineBannerEnabled } from "../store";
import { useNetInfo } from "@react-native-community/netinfo";

export const OfflineBanner = () => {

    const { isConnected } = useNetInfo();
    const isOfflineBannerEnabled = getIsOfflineBannerEnabled();

    if (!isOfflineBannerEnabled) return null;

    return (
        <ImportedOfflineBanner isConnected={isConnected} />
    )
}

