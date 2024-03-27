import { resolveScreenOptions } from "./resolveScreenOptions";
import { MadBaseOptions, MadDescriptorBase, UnresolvedScreenOptions } from "./types";

/**
 * Given the descriptor, and the unresolved screen options, should return the final options we have to work with. This is needed because we two options objects: screenOptions provided by the navigator/group, and the options object in the descriptor.
 * @param descriptor descriptor from the descriptors object provided by React Navigation
 * @param unresolvedScreenOptions unresolved screen options provided by React Navigation
 * @returns a resolved options object
 */
export const resolveOptions = <T extends MadBaseOptions>(
    descriptor: MadDescriptorBase,
    unresolvedScreenOptions: UnresolvedScreenOptions<T>,
): MadBaseOptions => {
    const { route, navigation } = descriptor;
    const resolvedScreenOptions = resolveScreenOptions(unresolvedScreenOptions, route, navigation);
    if (!resolvedScreenOptions && !descriptor.options)
        return { headerShown: undefined, customSubHeaderShown: undefined };
    if (!resolvedScreenOptions && descriptor.options) return descriptor.options;
    if (!descriptor.options && resolvedScreenOptions) return resolvedScreenOptions;
    return { ...resolvedScreenOptions, ...descriptor.options };
};
