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

    let title;
    if (breakpoint === "xs") {
        title = isExpanded ? "Hide" : "Show";
    } else {
        title = isExpanded ? "Show less" : "Show more";
    }

    return (
        taskStatus !== "notStarted" &&
        taskCounter > 0 && (
            <Button
                iconName={isExpanded ? "chevron-up" : "chevron-down"}
                title={title}
                iconPosition="trailing"
                onPress={toggleExpand}
                variant="ghost"
            ></Button>
        )
    );
};
