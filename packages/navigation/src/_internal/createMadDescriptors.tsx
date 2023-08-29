import { Environment } from "@equinor/mad-components";
import React, { ReactNode } from "react";

export type MadDescriptorBase = Record<string, {options: {headerShown?: boolean, environmentBannerShown?: boolean}, render: () => ReactNode}>

/**
 * This function takes react navigation's descriptors and inject custom components into the render function.
 * Intended for use in custom navigators
 */
export function createMadDescriptors<T extends MadDescriptorBase>(descriptors: T) {
    const newDescriptors: typeof descriptors = {...descriptors};
    const descriptorKeys = Object.keys(descriptors) as Array<keyof typeof descriptors>
    descriptorKeys.forEach(key => {
        const originalRender = descriptors[key].render
        const customRender = () => <>
        <Environment environment='test' />
        {originalRender()}
        </>
            const showEnvironmentBanner = descriptors[key].options.headerShown !== false && descriptors[key].options.environmentBannerShown !== false
        newDescriptors[key] = {...descriptors[key], render: showEnvironmentBanner ? customRender : originalRender}
    })
    return newDescriptors;
  }