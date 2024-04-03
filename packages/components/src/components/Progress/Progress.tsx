import React from "react";
import { StrictChildrenReactNode } from "../../utils/types";
import { Cell } from "../Cell";
import { ProgressItemProps } from "./ProgressItem";

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
    return <Cell.Group title={title}>{children}</Cell.Group>;
};
