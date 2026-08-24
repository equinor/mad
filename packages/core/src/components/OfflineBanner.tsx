import React from "react";
import { OfflineBanner as ImportedOfflineBanner } from "@equinor/mad-components";
import { getIsOfflineBannerEnabled } from "../store";
import { useNetworkState } from "expo-network";

export const OfflineBanner = () => {
    const { isConnected } = useNetworkState();
    const isOfflineBannerEnabled = getIsOfflineBannerEnabled();

    if (!isOfflineBannerEnabled) return null;

    return <ImportedOfflineBanner isConnected={isConnected} />;
};
