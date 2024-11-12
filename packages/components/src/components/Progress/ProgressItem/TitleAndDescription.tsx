import React from "react";
import { View } from "react-native";
import { Typography } from "../../Typography";
import { useProgressItemContext } from "./ProgressItemContext";

type TitleAndDescriptionProps = {
    title: string;
    description?: string | ((completeTasks: number, totalTasks: number) => string);
};
export const TitleAndDescription = ({ title, description }: TitleAndDescriptionProps) => {
    const { numCompletedTasks, numTotalTasks, status } = useProgressItemContext();
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Typography
                numberOfLines={1}
                bold={status !== "success"}
                color={status === "notStarted" ? "textDisabled" : "textPrimary"}
                variant="h5"
            >
                {title}
            </Typography>

            {description && (
                <Typography
                    color={status === "notStarted" ? "textDisabled" : "textPrimary"}
                    variant="description"
                    group="cell"
                >
                    {typeof description === "function"
                        ? description(numCompletedTasks, numTotalTasks)
                        : description}
                </Typography>
            )}
        </View>
    );
};
