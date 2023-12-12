import { MadBaseOptions, MadDescriptorsBase, UnresolvedScreenOptions } from "./types";
import { shouldDisplayCustomSubHeader } from "./shouldDisplayCustomSubHeader";
import { getCustomRenderFunction } from "./getCustomRenderFunction";
import { ReactNode } from "react";

/**
 * This function takes react navigation's descriptors and inject custom components into the render function.
 * Intended for use in custom navigators
 */
export function createMadDescriptors<T extends MadDescriptorsBase, U extends MadBaseOptions>(
    descriptors: T,
    unresolvedScreenOptions: UnresolvedScreenOptions<U>,
    customSubHeader?: () => ReactNode,
) {
    const newDescriptors: typeof descriptors = { ...descriptors };
    const descriptorKeys = Object.keys(descriptors) as (keyof typeof descriptors)[];
    descriptorKeys.forEach(key => {
        const descriptor = descriptors[key];
        const originalRender = descriptor.render;
        const customRender = getCustomRenderFunction(originalRender, customSubHeader);
        const showCustomSubHeader = shouldDisplayCustomSubHeader(
            descriptor,
            unresolvedScreenOptions,
        );
        newDescriptors[key] = {
            ...descriptor,
            render: showCustomSubHeader ? customRender : originalRender,
        };
    });
    return newDescriptors;
}
