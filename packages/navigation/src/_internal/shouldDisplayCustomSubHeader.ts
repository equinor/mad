import { MadBaseOptions } from "./types";

/**
 * Calculate whether the custom sub-header should be displayed or not
 * @param options the resolved options for the descriptor
 * @returns whether the custom sub-header should be returned or not
 */
export const shouldDisplayCustomSubHeader = <T extends MadBaseOptions>(options: T) => {
    // if customSubHeaderShown is defined, we should always follow whatever it says
    if (options.customSubHeaderShown !== undefined) return options.customSubHeaderShown;
    // if headerShown is defined, we should always follow whatever it says, given customSubHeaderShown is undefined
    if (options.headerShown !== undefined) return options.headerShown;
    //if both customSubHeaderShown and headerShown is undefined, we default to true, because headers are displayed by default
    return true;
};
