import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { ProgressExpandButton } from "./ProgressExpandButton";
import { ProgressExpandableSection } from "./ProgressExpandableSection";
import { ProgressItemStatus } from "./ProgressItemStatus";
import { ProgressTaskItem } from "./ProgressTaskItem";
import { computeTaskStatus } from "./progressUtils";
import { ProgressStatus, ProgressTask } from "./types";

type ProgressItemPropsOptions =
    | {
          /**
           * An array of tasks to be tracked by the progress item. Each task represents a unit of work whose progress or status can be monitored.
           * Specifying `tasks` will automatically determine the overall status of the progress item based on the individual statuses of these tasks.
           */
          tasks: ProgressTask[];
          /**
           * The `status` prop should not be used when `tasks` is provided. The overall status is computed based on the progress of the individual tasks.
           */
          status?: never;
      }
    | {
          /**
           * When `tasks` is not provided, the `status` prop can be used to manually set the overall status of the progress item.
           * This is useful for simpler use cases where there is a single task or the progress does not need to be broken down into individual tasks.
           */
          tasks?: never;
          /**
           * Manually set the overall status of the progress item. Valid statuses; 'notStarted', 'inProgress', 'success', 'removed' or 'error'.
           */
          status: ProgressStatus;
      };

export type ProgressItemProps = {
    /**
     * Optional title for the progress item
     */
    title: string;
    /**
     * Optional description to offer more details about the progress or process, giving context to the progress status.
     */
    description?: string;
    /**
     * Callback function that is invoked when the retry button is pressed, allowing the specific failed task to be retried.
     * @param task The task object that failed and needs to be retried.
     */
    onRetryButtonPress?: (task: ProgressTask) => void;
} & ProgressItemPropsOptions;

export const ProgressItem = ({
    title,
    description,
    status = "notStarted",
    tasks = [],
    onRetryButtonPress,
}: ProgressItemProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const styles = useStyles(themeStyles);

    const taskCounter = tasks?.length;
    const completedTaskCounter = tasks?.filter(
        task => task.status === "success" || task.status === "removed",
    ).length;

    const taskStatus = computeTaskStatus(tasks, status);
    const taskHasError = taskStatus === "error";
    const failedTask = tasks.find(task => task.status === "error");

    const handleRetryButtonPress = () => {
        if (failedTask) {
            onRetryButtonPress && onRetryButtonPress(failedTask);
        }
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        if (taskHasError && failedTask) {
            setIsExpanded(true);
            console.error(
                `Error in task ${failedTask.title}: ${failedTask.error?.message}`,
                failedTask.error,
            );
        }
    }, [taskHasError, failedTask]);

    const renderItemText = () => (
        <View style={styles.descriptionTextContainer}>
            <Typography
                numberOfLines={1}
                bold={taskStatus !== "success"}
                color={
                    taskStatus === "notStarted" || taskStatus === "removed"
                        ? "textDisabled"
                        : "textPrimary"
                }
                group="cell"
                variant="title"
            >
                {title}
            </Typography>

            {description && (
                <>
                    {taskStatus !== "notStarted" && taskCounter > 0 ? (
                        <Typography variant="description" group="cell">
                            {completedTaskCounter} / {taskCounter} {description}
                        </Typography>
                    ) : (
                        <Typography
                            color={
                                taskStatus === "notStarted" || taskStatus === "removed"
                                    ? "textDisabled"
                                    : "textPrimary"
                            }
                            variant="description"
                            group="cell"
                        >
                            {description}
                        </Typography>
                    )}
                </>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.topRowContainer}>
                <ProgressItemStatus
                    style={styles.status}
                    taskCounter={taskCounter}
                    status={taskStatus}
                    completedTaskCounter={completedTaskCounter}
                />
                <View style={{ flex: 1 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        {renderItemText()}
                        <ProgressExpandButton
                            taskStatus={taskStatus}
                            taskCounter={taskCounter}
                            isExpanded={isExpanded}
                            toggleExpand={toggleExpand}
                        />
                    </View>

                    <ProgressExpandableSection expanded={isExpanded}>
                        <View style={styles.progressTaskItemContainer}>
                            {tasks.map((task, index) => (
                                <ProgressTaskItem
                                    key={index}
                                    task={task}
                                    status={task.status}
                                    onCopyTextButtonPress={task.onCopyTextButtonPress}
                                    onRetryButtonPress={task.onRetryButtonPress}
                                />
                            ))}
                        </View>
                    </ProgressExpandableSection>
                </View>
            </View>
            {onRetryButtonPress && taskHasError ? (
                <Button iconName="restart" title="Retry" onPress={handleRetryButtonPress} />
            ) : null}
        </View>
    );
};

ProgressItem.displayName = "Progress.Item";

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        backgroundColor: theme.colors.container.default,
        paddingHorizontal: theme.spacing.menu.item.paddingHorizontal,
        borderRadius: theme.geometry.border.elementBorderRadius,
        justifyContent: "space-between",
        flexDirection: "column",
    },
    topRowContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    descriptionTextContainer: {
        flex: 1,
        gap: theme.spacing.cell.content.titleDescriptionGap,
    },
    progressTaskItemContainer: {
        paddingVertical: theme.spacing.element.paddingVertical,
        gap: theme.spacing.cell.gapHorizontal,
    },
    status: {
        paddingRight: theme.spacing.menu.item.paddingHorizontal,
    },
}));
