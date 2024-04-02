import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { Button } from "../Button";
import { Spacer } from "../Spacer";
import { Typography } from "../Typography";
import { ProgressExpandButton } from "./ProgressExpandButton";
import { ProgressExpandableSection } from "./ProgressExpandableSection";
import { ProgressItemStatus } from "./ProgressItemStatus";
import { ProgressTaskItem } from "./ProgressTaskItem";
import { computeTaskStatus } from "./progressUtils";
import { ProgressStatus, ProgressTask, ProgressTaskError } from "./types";

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
           * Manually set the overall status of the progress item. Valid statuses; 'notStarted', 'inProgress', 'success', or 'error'.
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
     * Callback function that is called when the copy text button is pressed, providing the error details of the failed task.
     * @param message An object containing details of the task error.
     */
    onCopyTextButtonPress?: (message: ProgressTaskError) => void;
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
    onCopyTextButtonPress,
    onRetryButtonPress,
}: ProgressItemProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const styles = useStyles(themeStyles);

    const taskCounter = tasks?.length;
    const completedTaskCounter = tasks?.filter(task => task.status === "success").length;

    const taskStatus = computeTaskStatus(tasks, status);
    const taskHasError = taskStatus === "error";
    const failedTask = tasks.find(task => task.status === "error");

    const handleCopyTextButtonPress = () => {
        if (failedTask?.error) {
            onCopyTextButtonPress && onCopyTextButtonPress(failedTask?.error);
        }
    };

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
        <View>
            <Typography
                bold={taskStatus !== "success"}
                color={taskStatus === "notStarted" ? "textDisabled" : "textPrimary"}
                variant="body_short"
                group="paragraph"
            >
                {title}
            </Typography>

            {description ? (
                <View style={styles.descriptionContainer}>
                    {taskStatus !== "notStarted" && taskCounter > 0 ? (
                        <Typography>
                            {completedTaskCounter} / {taskCounter} {description}
                        </Typography>
                    ) : (
                        <Typography>{description}</Typography>
                    )}
                </View>
            ) : null}
        </View>
    );

    return (
        <View style={styles.progressContainer}>
            <View style={styles.mainContentContainer}>
                <View style={styles.statusAndTextContainer}>
                    <ProgressItemStatus
                        style={styles.status}
                        taskCounter={taskCounter}
                        status={taskStatus}
                    />
                    <View style={styles.textContainer}>
                        {renderItemText()}
                        <ProgressExpandableSection expanded={isExpanded}>
                            <Spacer amount="small" />
                            <View style={styles.progressTaskItemContainer}>
                                {tasks.map((task, index) => (
                                    <ProgressTaskItem
                                        key={index}
                                        task={task}
                                        status={task.status}
                                    />
                                ))}
                            </View>
                        </ProgressExpandableSection>
                    </View>
                </View>
                <ProgressExpandButton
                    taskStatus={taskStatus}
                    taskCounter={taskCounter}
                    isExpanded={isExpanded}
                    toggleExpand={toggleExpand}
                />
            </View>

            {taskHasError && (onCopyTextButtonPress ?? onRetryButtonPress) ? (
                <View style={[styles.actionContainer, !failedTask?.error && { marginTop: 0 }]}>
                    {onCopyTextButtonPress && isExpanded && failedTask?.error && (
                        <Button
                            title="Copy to clipboard"
                            variant="outlined"
                            onPress={handleCopyTextButtonPress}
                        />
                    )}
                    {onRetryButtonPress && (
                        <Button title="Retry" onPress={handleRetryButtonPress} />
                    )}
                </View>
            ) : null}
        </View>
    );
};

ProgressItem.displayName = "Progress.Item";

const themeStyles = EDSStyleSheet.create(theme => ({
    progressContainer: {
        backgroundColor: theme.colors.container.default,
        paddingHorizontal: theme.spacing.menu.item.paddingHorizontal,
        borderRadius: theme.geometry.border.elementBorderRadius,
        justifyContent: "space-between",
        flexDirection: "column",
    },
    mainContentContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    statusAndTextContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    descriptionContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.button.iconGap,
    },
    textContainer: {
        flex: 1,
        flexDirection: "column",
    },
    actionContainer: {
        marginTop: theme.spacing.container.paddingVertical,
        marginBottom: theme.spacing.container.paddingVertical,
        gap: theme.spacing.spacer.small,
    },
    progressTaskItemContainer: {
        gap: theme.spacing.cell.gapHorizontal,
    },
    status: {
        paddingRight: theme.spacing.menu.item.paddingHorizontal,
    },
}));
