import { MadBaseOptions, MadDescriptorsBase, ScreenOptions } from "./types";
import { shouldDisplayEnvironmentBanner } from "./shouldDisplayEnvironmentBanner";
import { getCustomRenderFunction } from "./getCustomRenderFunction";

/**
 * This function takes react navigation's descriptors and inject custom components into the render function.
 * Intended for use in custom navigators
 */
export function createMadDescriptors<T extends MadDescriptorsBase, U extends MadBaseOptions>(
    descriptors: T,
    screenOptions: ScreenOptions<U>,
) {
    const newDescriptors: typeof descriptors = { ...descriptors };
    const descriptorKeys = Object.keys(descriptors) as Array<keyof typeof descriptors>;
    descriptorKeys.forEach(key => {
        const descriptor = descriptors[key];
        const originalRender = descriptor.render;
        const customRender = getCustomRenderFunction(descriptor);
        const showEnvironmentBanner = shouldDisplayEnvironmentBanner(
            descriptors[key],
            screenOptions,
        );
        newDescriptors[key] = {
            ...descriptors[key],
            render: showEnvironmentBanner ? customRender : originalRender,
        };
    });
    return newDescriptors;
}
