import React from "react";
import { EnvironmentBanner } from "../EnvironmentBanner";
import { ServiceMessageBanner } from "../service-message/ServiceMessageBanner";
import { OfflineBanner } from "../OfflineBanner";

export const MadCoreSubHeader = () => (
    <>
        <ServiceMessageBanner />
        <EnvironmentBanner />
        <OfflineBanner />
    </>
);
