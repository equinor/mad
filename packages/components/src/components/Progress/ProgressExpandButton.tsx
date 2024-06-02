import React from "react";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Button } from "../Button";
import { ProgressStatus } from "./types";

type ProgressExpandButtonProps = {
    taskStatus: ProgressStatus;
    taskCounter: number;
    isExpanded: boolean;
    toggleExpand: () => void;
};

export const ProgressExpandButton = ({
    taskStatus,
    taskCounter,
    isExpanded,
    toggleExpand,
}: ProgressExpandButtonProps) => {
    const breakpoint = useBreakpoint();

    return (
        taskStatus !== "notStarted" &&
        taskCounter > 0 &&
        (breakpoint === "xs" ? (
            <Button.Icon
                name={isExpanded ? "chevron-up" : "chevron-down"}
                variant="ghost"
                onPress={toggleExpand}
            />
        ) : (
            <Button
                iconName={isExpanded ? "chevron-up" : "chevron-down"}
                title={isExpanded ? "Show less" : "Show more"}
                iconPosition="trailing"
                onPress={toggleExpand}
                variant="ghost"
            />
        ))
    );
};
