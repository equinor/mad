import React, { createContext, PropsWithChildren, useContext } from "react";

export type CoreNavigatorType = "stack" | "native-stack"

const CoreNavigatorTypeContext = createContext<CoreNavigatorType | null>(null)

type CoreNavigatorTypeProviderProps = PropsWithChildren<{type: CoreNavigatorType}>

export const CoreNavigatorTypeProvider = ({type, children}: CoreNavigatorTypeProviderProps) => {
    return <CoreNavigatorTypeContext.Provider value={type}>{children}</CoreNavigatorTypeContext.Provider>
}

export const useCoreNavigatorType = () => {
    const coreNavigatorType = useContext(CoreNavigatorTypeContext)
    if (!coreNavigatorType) throw new Error("Could not find core navigator type. You have most likely not added a core navigator to your application")
    return coreNavigatorType;
}