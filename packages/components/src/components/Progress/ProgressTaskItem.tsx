import React from "react";
import { View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { useToken } from "../../hooks/useToken";
import { EDSStyleSheet } from "../../styling";
import { Icon } from "../Icon";
import { CircularProgress } from "../ProgressIndicator";
import { Typography } from "../Typography";
import { statusToColor, statusToIconName } from "./progressUtils";
import { ProgressStatus, ProgressTask, ProgressTaskError } from "./types";
import { Button } from "../Button";

type ProgressTaskProps = {
    task: ProgressTask;
    status: ProgressStatus;
    onCopyTextButtonPress?: (message: ProgressTaskError) => void;
    onRetryButtonPress?: (task: ProgressTask) => void;
};

export const ProgressTaskItem = ({
    task,
    status,
    onCopyTextButtonPress,
    onRetryButtonPress,
}: ProgressTaskProps) => {
    const styles = useStyles(themeStyles);
    const token = useToken();

    const taskInProgress = status === "inProgress";
    const showErrorDetails = task.status === "error" && task.error;

    const taskHasError = task.status === "error";

    const handleRetryButtonPress = () => {
        if (taskHasError) {
            onRetryButtonPress && onRetryButtonPress(task);
        }
    };

    const handleCopyTextButtonPress = () => {
        if (task?.error) {
            onCopyTextButtonPress && onCopyTextButtonPress(task?.error);
        }
    };

    const renderError = () => {
        return task.error ? (
            <View style={styles.errorContainer}>
                <Typography variant="description" group="cell" color="textSecondary">
                    {task.error.message}
                </Typography>
                {task.error.code && (
                    <Typography variant="description" group="cell" color="textSecondary">
                        {task.error.code}
                    </Typography>
                )}
                {task.error.suggestion && (
                    <Typography variant="description" group="cell" color="textSecondary">
                        {task.error.suggestion}
                    </Typography>
                )}
            </View>
        ) : null;
    };

    const taskStatusIndicator = taskInProgress ? (
        <CircularProgress size={18} />
    ) : (
        <Icon
            size={18}
            name={statusToIconName(task.status)}
            color={statusToColor(task.status, token)}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.taskContainer}>
                <View style={styles.taskStatusAndTitle}>
                    {taskStatusIndicator}
                    <Typography
                        group="paragraph"
                        variant="body_short"
                        bold={task.status === "error" || task.status === "inProgress"}
                        color={
                            status === "notStarted" || status === "removed"
                                ? "textTertiary"
                                : "textPrimary"
                        }
                    >
                        {task.title}
                    </Typography>
                </View>
                {task.icon && (
                    <Icon
                        color={task.iconColor ?? "secondary"}
                        style={styles.icon}
                        name={task.icon}
                    />
                )}
            </View>

            {showErrorDetails && renderError()}
            <View style={styles.actionContainer}>
                {onCopyTextButtonPress && task?.status === "error" && (
                    <Button
                        title="Copy to clipboard"
                        iconName="clipboard-outline"
                        variant="outlined"
                        onPress={handleCopyTextButtonPress}
                    />
                )}
                {onRetryButtonPress && task.status === "error" ? (
                    <Button iconName="restart" title="Retry" onPress={handleRetryButtonPress} />
                ) : null}
            </View>
        </View>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        gap: theme.spacing.element.paddingVertical,
    },
    taskContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    taskStatusAndTitle: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.button.iconGap,
    },
    icon: {
        paddingHorizontal: theme.spacing.button.paddingHorizontal,
    },
    errorContainer: {
        flexDirection: "column",
        gap: theme.spacing.cell.content.titleDescriptionGap,
    },
    actionContainer: {
        flexDirection: "row",
        gap: theme.spacing.spacer.small,
    },
}));
