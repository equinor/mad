import React from "react";
import { StrictChildrenReactNode } from "../../utils/types";
import { Cell } from "../Cell";
import { ProgressItemProps } from "./ProgressItem";

export type ProgressProps = {
    title?: string;
    children?:
        | StrictChildrenReactNode<ProgressItemProps>
        | StrictChildrenReactNode<ProgressItemProps>[];
};

export const Progress = ({ title, children }: ProgressProps) => {
    return <Cell.Group title={title}>{children}</Cell.Group>;
};
