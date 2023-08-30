import React, { PropsWithChildren, createContext } from "react";
import { EnvironmentName, EnvironmentProps } from "./EnvironmentBase";

export const EnvironmentContext = createContext<EnvironmentName | undefined>(undefined);

export const EnvironmentProvider = ({
    environment,
    children,
}: PropsWithChildren<EnvironmentProps>) => (
    <EnvironmentContext.Provider value={environment}>{children}</EnvironmentContext.Provider>
);
