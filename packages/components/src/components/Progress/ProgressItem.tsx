import React, { useEffect, useState } from "react";
import { LayoutAnimation, View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { useToken } from "../../hooks/useToken";
import { EDSStyleSheet } from "../../styling";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { ProgressExpandButton } from "./ProgressExpandButton";
import { ProgressItemStatus } from "./ProgressItemStatus";
import { ProgressTaskItem } from "./ProgressTaskItem";
import { ProgressStatus, ProgressTask, ProgressTaskErrorDetails } from "./types";
import { computeTaskStatus } from "./progressUtils";

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
    title?: string;
    /**
     * Optional description to offer more details about the progress or process, giving context to the progress status.
     */
    description?: string;
    /**
     * Flag indicating whether a retry button should be shown, allowing users to attempt the task again if it fails.
     */
    showRetryButton?: boolean;
    /**
     * Flag indicating whether a button to copy error details to the clipboard should be shown, useful for error reporting and diagnostics.
     */
    showCopyTextButton?: boolean;
    /**
     * Callback function that is called when the copy text button is pressed, providing the error details of the failed task.
     * @param message An object containing details of the task error.
     */
    onCopyTextButtonPress?: (message: ProgressTaskErrorDetails) => void;
    /**
     * Callback function that is invoked when the retry button is pressed, allowing the specific failed task to be retried.
     * @param task The task object that failed and needs to be retried.
     */
    onRetryButtonPress?: (task: ProgressTask) => void;
} & ProgressItemPropsOptions;

export const ProgressItem = ({
    title,
    description,
    showCopyTextButton,
    showRetryButton,
    status = "notStarted",
    tasks = [],
    onCopyTextButtonPress,
    onRetryButtonPress,
}: ProgressItemProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const token = useToken();
    const styles = useStyles(themeStyles);

    const taskCounter = tasks?.length;
    const completedTaskCounter = tasks?.filter(task => task.status === "success").length;

    const animationConfig = {
        duration: token.timing.animation.slow,
        create: {
            type: LayoutAnimation.Types.easeInEaseOut,
            property: LayoutAnimation.Properties.opacity,
        },
        update: {
            type: LayoutAnimation.Types.easeInEaseOut,
        },
    };

    const taskStatus = computeTaskStatus(tasks, status);
    const taskHasError = taskStatus === "error";
    const failedTask = tasks.find(task => task.status === "error");

    const handleCopyTextButtonPress = () => {
        if (failedTask?.errorDetails) {
            onCopyTextButtonPress && onCopyTextButtonPress(failedTask?.errorDetails);
        }
    };

    const handleRetryButtonPress = () => {
        if (failedTask) {
            onRetryButtonPress && onRetryButtonPress(failedTask);
        }
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
        LayoutAnimation.configureNext(animationConfig);
    };

    useEffect(() => {
        if (taskHasError && failedTask) {
            setIsExpanded(true);
            console.error(
                `Error in task ${failedTask.title}: ${failedTask.errorDetails?.message}`,
                failedTask.errorDetails,
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
                        {isExpanded &&
                            tasks.map((task, index) => (
                                <ProgressTaskItem key={index} task={task} status={task.status} />
                            ))}
                    </View>
                </View>
                <ProgressExpandButton
                    taskStatus={taskStatus}
                    taskCounter={taskCounter}
                    isExpanded={isExpanded}
                    toggleExpand={toggleExpand}
                />
            </View>

            {taskHasError && (showCopyTextButton ?? showRetryButton) ? (
                <View
                    style={[styles.actionContainer, !failedTask?.errorDetails && { marginTop: 0 }]}
                >
                    {showCopyTextButton && isExpanded && failedTask?.errorDetails && (
                        <Button
                            title="Copy to clipboard"
                            variant="outlined"
                            onPress={handleCopyTextButtonPress}
                        />
                    )}
                    {showRetryButton && <Button title="Retry" onPress={handleRetryButtonPress} />}
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
        flexDirection: "column",
        gap: theme.spacing.button.iconGap,
    },
    actionContainer: {
        marginTop: theme.spacing.container.paddingVertical,
        marginBottom: theme.spacing.container.paddingVertical,
        gap: theme.spacing.spacer.small,
    },
    status: {
        paddingRight: theme.spacing.menu.item.paddingHorizontal,
    },
}));
