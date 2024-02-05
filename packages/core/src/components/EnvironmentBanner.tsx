import React from "react";
import { EnvironmentBanner as ImportedEnvironmentBanner } from "@equinor/mad-components";
import { useEnvironment } from "../store/mad-config";
import { SafeAreaView } from "react-native";

/*
 * This component exists in order to render SafeAreaView conditionally.
 */
export const EnvironmentBanner = () => {
    const environment = useEnvironment();
    if (environment === "prod") return null;
    return (
        <SafeAreaView>
            <ImportedEnvironmentBanner />
        </SafeAreaView>
    );
};
