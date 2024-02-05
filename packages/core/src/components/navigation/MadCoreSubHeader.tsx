import React from "react";
import { EnvironmentBanner } from "../EnvironmentBanner";
import { ServiceMessageBanner } from "../service-message/ServiceMessageBanner";

export const MadCoreSubHeader = () => (
    <>
        <ServiceMessageBanner />
        <EnvironmentBanner />
    </>
);
