import React, { useEffect, useState } from "react";
import { LayoutAnimation, View, Pressable } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { useToken } from "../../hooks/useToken";
import { EDSStyleSheet } from "../../styling";
import { Button } from "../Button";
import { Icon, IconName } from "../Icon";
import { CircularProgress } from "../ProgressIndicator";
import { Typography } from "../Typography";
import { ProgressStatusLine } from "./ProgressStatusLine";

export type TaskErrorDetails = {
    message: string;
    code?: string;
    suggestion?: string;
};

export type ProgressTask = {
    title: string;
    status: TaskStatus;
    errorDetails?: TaskErrorDetails;
};

type ProgressItemPropsOptions =
    | {
          tasks: ProgressTask[];
          status?: never;
      }
    | {
          tasks?: never;
          status: TaskStatus;
      };

export type ProgressItemProps = {
    title?: string;
    description?: string;
    onCopyTextButtonPress?: () => void;
    onRetryButtonPress?: () => void;
} & ProgressItemPropsOptions;

export type TaskStatus = "success" | "error" | "notStarted" | "inProgress";

export const ProgressItem = ({
    title,
    description,
    tasks: tasks = [],
    onCopyTextButtonPress,
    onRetryButtonPress,
}: ProgressItemProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const token = useToken();
    const styles = useStyles(themeStyles);

    const taskCounter = tasks?.filter(task => task.status).length;
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

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
        LayoutAnimation.configureNext(animationConfig);
    };

    const computeTaskStatus = (): TaskStatus => {
        const hasError = tasks.some(task => task.status === "error");
        const hasOngoing = tasks.some(task => task.status === "inProgress");
        const allSuccess = tasks.every(task => task.status === "success");

        if (hasError) return "error";
        if (hasOngoing) return "inProgress";
        if (allSuccess) return "success";
        return "notStarted";
    };

    const taskStatus = computeTaskStatus();
    const taskHasError = taskStatus === "error";
    const taskInProgress = taskStatus === "inProgress";

    useEffect(() => {
        if (taskHasError) {
            setIsExpanded(true);
            tasks.forEach(task => {
                if (taskHasError && task.errorDetails) {
                    console.error(
                        `Error in task ${task.title}: ${task.errorDetails.message}`,
                        task.errorDetails,
                    );
                }
            });
        }
    }, [taskHasError, tasks]);

    const statusToIconName = (status: TaskStatus): IconName => {
        switch (status) {
            case "success":
                return "check-circle-outline";
            case "error":
                return "alert-circle-outline";
            case "notStarted":
                return "clock-time-five-outline";
            default:
                return "blank";
        }
    };

    const statusToColor = (status: TaskStatus) => {
        switch (status) {
            case "success":
                return token.colors.feedback.success;
            case "error":
                return token.colors.feedback.danger;
            case "notStarted":
                return token.colors.text.disabled;
            case "inProgress":
                return token.colors.interactive.primary;
        }
    };

    const renderErrorDetails = ({ errorDetails }: ProgressTask) => {
        return errorDetails ? (
            <View style={styles.errorDetailsContainer}>
                <Typography>{errorDetails.message}</Typography>
                {errorDetails.code && <Typography>Error Code: {errorDetails.code}</Typography>}
                {errorDetails.suggestion && <Typography>{errorDetails.suggestion}</Typography>}
            </View>
        ) : null;
    };

    const renderItemStatus = () => {
        return (
            <View>
                {taskInProgress ? (
                    <CircularProgress size={26} style={{ marginBottom: 8 }} />
                ) : (
                    <Icon
                        style={{ marginBottom: 8 }}
                        name={statusToIconName(taskStatus)}
                        color={statusToColor(taskStatus)}
                        size={26}
                    />
                )}

                {taskCounter > 0 && <ProgressStatusLine color={statusToColor(taskStatus)} />}
            </View>
        );
    };

    const renderTask = (task: ProgressTask, index: number) => {
        const TaskIcon = taskInProgress ? (
            <CircularProgress size={18} />
        ) : (
            <Icon name={statusToIconName(task.status)} color={statusToColor(task.status)} />
        );

        return (
            <View
                key={index}
                style={taskInProgress ? styles.taskTitleContainer : styles.taskContainer}
            >
                <View style={styles.taskTitleContainer}>
                    {TaskIcon}
                    <Typography>{task.title}</Typography>
                </View>
                {!taskInProgress && task.status === "error" && renderErrorDetails(task)}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.mainContentContainer}>
                <View style={styles.contentContainer}>
                    {renderItemStatus()}

                    <View style={styles.textContainer}>
                        <Typography
                            bold={taskStatus === "success" ? false : true}
                            color={taskStatus === "notStarted" ? "textDisabled" : "textPrimary"}
                            variant="body_short"
                            group="paragraph"
                        >
                            {title}
                        </Typography>
                        {taskStatus !== "notStarted" && (
                            <View style={styles.descriptionContainer}>
                                {taskStatus === "inProgress" ||
                                (taskStatus === "success" && taskCounter > 0) ? (
                                    <>
                                        <Typography>
                                            {completedTaskCounter} /{taskCounter} {description}
                                        </Typography>
                                    </>
                                ) : (
                                    taskCounter > 0 && <Typography>{description}</Typography>
                                )}
                            </View>
                        )}
                        {isExpanded && tasks.map(renderTask)}
                    </View>
                </View>
                <View>
                    {taskStatus !== "notStarted" && taskCounter > 0 && (
                        <Pressable style={[styles.dropDownContainer]} onPress={toggleExpand}>
                            <Typography style={{ minWidth: 85 }}>
                                {isExpanded ? "Show less" : "Show more"}
                            </Typography>
                            <Icon name={isExpanded ? "chevron-up" : "chevron-down"} />
                        </Pressable>
                    )}
                </View>
            </View>
            {isExpanded && taskStatus === "error" && (
                <View style={styles.actionContainer}>
                    <Button
                        title="Copy to clipboard"
                        variant="outlined"
                        onPress={onCopyTextButtonPress}
                    />
                    {taskHasError && <Button title="Retry" onPress={onRetryButtonPress} />}
                </View>
            )}
        </View>
    );
};

ProgressItem.displayName = "Progress.Item";

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        backgroundColor: theme.colors.container.default,
        paddingHorizontal: theme.spacing.menu.item.paddingHorizontal,
        justifyContent: "space-between",
        flexDirection: "column",
    },
    mainContentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: theme.spacing.container.paddingVertical,
    },
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    descriptionContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.button.iconGap,
    },
    errorDetailsContainer: {
        flexDirection: "column",
    },
    textContainer: {
        flexDirection: "column",
        paddingLeft: theme.spacing.menu.item.paddingHorizontal,
        gap: theme.spacing.button.iconGap,
    },
    actionContainer: {
        marginVertical: theme.spacing.container.paddingVertical,
        gap: theme.spacing.spacer.small,
    },
    dropDownContainer: {
        flexDirection: "row",
        gap: theme.spacing.button.iconGap,
    },
    taskTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.button.iconGap,
    },
    taskContainer: {
        gap: theme.spacing.cell.content.titleDescriptionGap,
    },
}));
