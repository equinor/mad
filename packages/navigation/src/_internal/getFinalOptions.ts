import { MadBaseOptions, MadDescriptorBase } from "./types";

/**
 * Given the descriptor, and the screenOptions, should return the final options we have to work with
 * @param descriptor
 * @param screenOptions
 */
export const getFinalOptions = (
    descriptor: MadDescriptorBase,
    screenOptions: MadBaseOptions | undefined,
): MadBaseOptions => {
    if (!screenOptions && !descriptor.options)
        return { headerShown: undefined, environmentBannerShown: undefined };
    if (!screenOptions && descriptor.options) return descriptor.options;
    if (!descriptor.options && screenOptions) return screenOptions;
    return { ...screenOptions, ...descriptor.options };
};
