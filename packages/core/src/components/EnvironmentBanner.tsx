import React from "react";
import { EnvironmentBanner as ImportedEnvironmentBanner } from "@equinor/mad-components";
import { useEnvironment } from "../store/mad-config";
import { SafeAreaView } from "react-native";

/**
 * This is so stupid, but we have to render the SafeAreaView conditionally. Whenever
 * SafeAreaView is used, it messes up the design of the login screen by providing a grey
 * area at the top. Therefore we have to prevent it from happening whenever possible.
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
