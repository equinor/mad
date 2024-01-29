import React from "react";
import { EnvironmentBanner } from "@equinor/mad-components";
import { ServiceMessageBanner } from "../service-message/ServiceMessageBanner";
import { SafeAreaView } from "react-native";

export const MadCoreSubHeader = () => (
    <SafeAreaView>
        <ServiceMessageBanner />
        <EnvironmentBanner />
    </SafeAreaView> 
);
