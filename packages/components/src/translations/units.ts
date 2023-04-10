const DEFAULT_PIXEL_SIZE = 17;

export const convertToUnitlessNumber = (value: string): number | undefined => {
    const trimmedValue = value.replace(/\s+/g, "");
    const valueSplit = trimmedValue.match(/(^\d*[\.\,]?\d*)([^0-9]+$)/);
    if (valueSplit?.length !== 3) return undefined;
    const [_, strVal, unit] = valueSplit;
    const val = Number(strVal.replace(",", "."));
    switch (unit) {
        case "px":
            return val;
        case "em":
            return val * DEFAULT_PIXEL_SIZE;
        case "rem":
            return val * DEFAULT_PIXEL_SIZE;
        default:
            return undefined;
    }
};
