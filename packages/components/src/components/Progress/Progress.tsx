import React, { Children } from "react";
import { useValidChildren } from "../../hooks/useValidChildren";
import { StrictChildrenReactNode } from "../../utils/types";
import { Cell } from "../Cell";
import { ProgressItemProps } from "./ProgressItem/ProgressItem";
import { View } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";

export type ProgressProps = {
    /**
     * Optional title for the progress group. This title can be used to provide a heading or context for the set of progress items contained within.
     */
    title?: string;
    /**
     * Children elements of the Progress component, which should be one or more `ProgressItem` components. The `Progress` component acts as a container that groups these items together.
     * This allows for structured display of multiple progress-tracking elements, each representing a distinct task or process.
     */
    children?:
        | StrictChildrenReactNode<ProgressItemProps>
        | StrictChildrenReactNode<ProgressItemProps>[];
};

export const Progress = ({ title, children }: ProgressProps) => {
    const styles = useStyles(tokenStyles);
    const validChildren = useValidChildren(children);
    return validChildren.map((child, index) => (
        <>
            {child}
            {index < validChildren.length - 1 && <View style={styles.divider} />}
        </>
    ));
};

const tokenStyles = EDSStyleSheet.create(token => ({
    divider: {
        marginHorizontal: token.spacing.container.paddingHorizontal,
        height: token.geometry.border.borderWidth,
        backgroundColor: token.colors.border.medium,
    },
}));
