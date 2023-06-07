import React from "react";
import { useMemo } from "react"

const getValidIndexes = (children: React.ReactNode) => {
    const childValidityArray: boolean[] = [];
    React.Children.forEach(children, child => childValidityArray.push(React.isValidElement(child)));
    return childValidityArray.reduce<number[]>(
        (validIndexes, isValid, index) => isValid ? validIndexes.concat(index) : validIndexes, [])
};

export const useValidChildrenIndexes = (children: React.ReactNode) => {
    return useMemo(() => getValidIndexes(children), [children])
}