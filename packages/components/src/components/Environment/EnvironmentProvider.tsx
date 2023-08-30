import React, { PropsWithChildren, createContext } from "react";
import { EnvironmentName } from "./types";

export const EnvironmentContext = createContext<EnvironmentName>("prod");

export type EnvironmentContextProps = {
    /**
     * A string representing the environment that the banner should be rendered for.
     */
    environment: EnvironmentName;
};

/**
 * Provides the environment value to all environment banners in the app.
 */
export const EnvironmentProvider = ({
    environment,
    children,
}: PropsWithChildren<EnvironmentContextProps>) => (
    <EnvironmentContext.Provider value={environment}>{children}</EnvironmentContext.Provider>
);
