import { MadBaseOptions, MadDescriptorsBase, UnresolvedScreenOptions } from "./types";
import { shouldDisplayEnvironmentBanner } from "./shouldDisplayEnvironmentBanner";
import { getCustomRenderFunction } from "./getCustomRenderFunction";

/**
 * This function takes react navigation's descriptors and inject custom components into the render function.
 * Intended for use in custom navigators
 */
export function createMadDescriptors<T extends MadDescriptorsBase, U extends MadBaseOptions>(
    descriptors: T,
    unresolvedScreenOptions: UnresolvedScreenOptions<U>,
) {
    const newDescriptors: typeof descriptors = { ...descriptors };
    const descriptorKeys = Object.keys(descriptors) as Array<keyof typeof descriptors>;
    descriptorKeys.forEach(key => {
        const descriptor = descriptors[key];
        const originalRender = descriptor.render;
        const customRender: typeof originalRender = getCustomRenderFunction(originalRender);
        const showEnvironmentBanner = shouldDisplayEnvironmentBanner(
            descriptor,
            unresolvedScreenOptions,
        );
        newDescriptors[key] = {
            ...descriptor,
            render: showEnvironmentBanner ? customRender : originalRender,
        };
    });
    return newDescriptors;
}
