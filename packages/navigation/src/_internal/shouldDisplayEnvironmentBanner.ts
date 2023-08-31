import { getFinalOptions } from "./getFinalOptions";
import { getFinalScreenOptions } from "./getFinalScreenOptions";
import { MadBaseOptions, MadDescriptorBase, ScreenOptions } from "./types";

/**
 * Calculate whether the environment banner should be displayed or not
 * @param descriptor
 * @param screenOptions
 * @returns
 */
export const shouldDisplayEnvironmentBanner = <T extends MadBaseOptions>(
    descriptor: MadDescriptorBase,
    screenOptions: ScreenOptions<T>,
) => {
    const { route, navigation } = descriptor;
    const finalScreenOptions = getFinalScreenOptions(screenOptions, route, navigation);
    const options = getFinalOptions(descriptor, finalScreenOptions);
    // if environmentBannerShown is defined, we should always follow whatever it says
    if (options.environmentBannerShown !== undefined) return options.environmentBannerShown;
    // if headerShown is defined, we should always follow whatever it says, given environmentBannerShown is undefined
    if (options.headerShown !== undefined) return options.headerShown;
    //if both environmentBannerShown and headerShown is undefined, we default to true, because headers are displayed by default
    return true;
};
