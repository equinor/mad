import { useEnvironment } from "../store/mad-config";
import { EnvironmentProvider as ProvideEnvironment } from "@equinor/mad-components";
import React, { PropsWithChildren } from "react";

export function EnvironmentProvider(props: PropsWithChildren) {
    const environment = useEnvironment();
    return <ProvideEnvironment currentEnvironment={environment}>{props.children}</ProvideEnvironment>;
}
