import React, { useContext } from "react";
import { EnvironmentContext } from "./EnvironmentProvider";
import { EnvironmentBase } from "./EnvironmentBase";

export const EnvironmentBanner = () => {
    const environment = useContext(EnvironmentContext);
    return <EnvironmentBase environment={environment || "prod"} />;
};
