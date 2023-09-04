import { resolveOptions } from "./resolveOptions";
import { MadBaseOptions, MadDescriptorBase, UnresolvedScreenOptions } from "./types";

/**
 * Calculate whether the environment banner should be displayed or not
 * @param descriptor descriptor from the descriptors object provided by React Navigation
 * @param unresolvedScreenOptions unresolved screen options provided by React Navigation
 * @returns whether the environment banner should be returned or not
 */
export const shouldDisplayEnvironmentBanner = <T extends MadBaseOptions>(
    descriptor: MadDescriptorBase,
    unresolvedScreenOptions: UnresolvedScreenOptions<T>,
) => {
    const { route, navigation } = descriptor;
    const options = resolveOptions(descriptor, unresolvedScreenOptions, route, navigation);
    // if environmentBannerShown is defined, we should always follow whatever it says
    if (options.environmentBannerShown !== undefined) return options.environmentBannerShown;
    // if headerShown is defined, we should always follow whatever it says, given environmentBannerShown is undefined
    if (options.headerShown !== undefined) return options.headerShown;
    //if both environmentBannerShown and headerShown is undefined, we default to true, because headers are displayed by default
    return true;
};
