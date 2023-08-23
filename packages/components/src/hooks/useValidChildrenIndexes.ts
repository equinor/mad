import React, { useMemo } from "react";

const getValidIndexes = (children: React.ReactNode) => {
    const childValidityArray: boolean[] = [];
    React.Children.forEach(children, child => childValidityArray.push(React.isValidElement(child)));
    return childValidityArray.reduce<number[]>(
        (validIndexes, isValid, index) => (isValid ? validIndexes.concat(index) : validIndexes),
        [],
    );
};

/**
 * Calculates whether or not the provided children are valid react elements.
 * @param children Children to calculate validity for.
 * @returns An array of indexes representing the valid children.
 */
export const useValidChildrenIndexes = (children: React.ReactNode) => {
    return useMemo(() => getValidIndexes(children), [children]);
};
