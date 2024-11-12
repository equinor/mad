import React from "react";
import { Button } from "../../Button";
import { useProgressItemContext } from "./ProgressItemContext";

export const ExpandButton = () => {
    const { status, numTotalTasks, isExpanded, setIsExpanded } = useProgressItemContext();
    return (
        status !== "notStarted" &&
        numTotalTasks > 0 && (
            <Button
                iconName={isExpanded ? "chevron-up" : "chevron-down"}
                title={isExpanded ? "Show less" : "Show more"}
                iconPosition="trailing"
                onPress={() => setIsExpanded(!isExpanded)}
                variant="outlined"
            />
        )
    );
};
