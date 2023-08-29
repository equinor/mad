import { ReactNode } from "react";
export type MadDescriptorBase = Record<string, {
    options: {
        headerShown?: boolean;
        environmentBannerShown?: boolean;
    };
    render: () => ReactNode;
}>;
/**
 * This function takes react navigation's descriptors and inject custom components into the render function.
 * Intended for use in custom navigators
 */
export declare function createMadDescriptors<T extends MadDescriptorBase>(descriptors: T): T;
