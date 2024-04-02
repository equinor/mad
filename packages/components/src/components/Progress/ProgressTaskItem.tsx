import React from "react";
import { View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { useToken } from "../../hooks/useToken";
import { EDSStyleSheet } from "../../styling";
import { Icon } from "../Icon";
import { CircularProgress } from "../ProgressIndicator";
import { Typography } from "../Typography";
import { statusToColor, statusToIconName } from "./progressUtils";
import { ProgressStatus, ProgressTask } from "./types";

type ProgressTaskProps = {
    task: ProgressTask;
    status: ProgressStatus;
};

export const ProgressTaskItem = ({ task, status }: ProgressTaskProps) => {
    const styles = useStyles(themeStyles);
    const token = useToken();

    const taskInProgress = status === "inProgress";
    const showErrorDetails = task.status === "error" && task.error;

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
        <View style={styles.taskContainer}>
            <View style={styles.taskTitleContainer}>
                {taskStatusIndicator}
                <Typography>{task.title}</Typography>
            </View>
            {showErrorDetails && renderError()}
        </View>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    taskContainer: {
        gap: theme.spacing.cell.content.titleDescriptionGap,
    },
    taskTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.button.iconGap,
    },
    errorContainer: {
        flexDirection: "column",
        gap: theme.spacing.cell.content.titleDescriptionGap,
    },
}));
