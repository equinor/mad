import { View } from "react-native";
import React from "react";
import { CircularProgress } from "../ProgressIndicator";
import { Icon } from "../Icon";
import { Typography } from "../Typography";
import { ProgressStatus, ProgressTask } from "./types";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { useToken } from "../../hooks/useToken";
import { statusToColor, statusToIconName } from "./progressUtils";

type ProgressTaskProps = {
    task: ProgressTask;
    status: ProgressStatus;
};

export const ProgressTaskItem = ({ task, status }: ProgressTaskProps) => {
    const styles = useStyles(themeStyles);
    const token = useToken();

    const taskInProgress = status === "inProgress";

    const renderErrorDetails = ({ errorDetails }: ProgressTask) => {
        return errorDetails ? (
            <View style={styles.errorDetailsContainer}>
                <Typography>{errorDetails.message}</Typography>
                {errorDetails.code && <Typography>Error Code: {errorDetails.code}</Typography>}
                {errorDetails.suggestion && <Typography>{errorDetails.suggestion}</Typography>}
            </View>
        ) : null;
    };

    const TaskIcon = taskInProgress ? (
        <CircularProgress size={18} />
    ) : (
        <Icon
            size={18}
            name={statusToIconName(task.status)}
            color={statusToColor(task.status, token)}
        />
    );

    return (
        <View style={taskInProgress ? styles.taskTitleContainer : styles.taskContainer}>
            <View style={styles.taskTitleContainer}>
                {TaskIcon}
                <Typography>{task.title}</Typography>
            </View>
            {task.status === "error" && renderErrorDetails(task)}
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
    errorDetailsContainer: {
        flexDirection: "column",
    },
}));
