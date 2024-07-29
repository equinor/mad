import { MasterToken, WithoutThemeOptionValues } from "../../styling";
import { IconName } from "../Icon";
import { ProgressStatus, ProgressTask } from "./types";

export const statusToIconName = (status: ProgressStatus): IconName => {
    switch (status) {
        case "success":
            return "check-circle-outline";
        case "error":
            return "alert-circle-outline";
        case "notStarted":
            return "clock-time-five-outline";
        case "removed":
            return "minus";
        default:
            return "blank";
    }
};

export const statusToColor = (
    status: ProgressStatus,
    token: WithoutThemeOptionValues<MasterToken>,
) => {
    switch (status) {
        case "inProgress":
        case "success":
            return token.colors.feedback.success;
        case "error":
            return token.colors.feedback.danger;
        case "notStarted":
        case "removed":
            return token.colors.text.disabled;

        default:
            return token.colors.text.primary;
    }
};

export const computeTaskStatus = (
    tasks: ProgressTask[],
    status: ProgressStatus,
): ProgressStatus => {
    if (tasks.length === 0 && status) {
        return status;
    }
    const hasOngoing = tasks.some(task => task.status === "inProgress");
    const hasError = tasks.some(task => task.status === "error");
    const hasRemoved = tasks.some(task => task.status === "removed");
    const allSuccess = tasks.every(task => task.status === "success" || task.status === "removed");

    if (hasError) {
        return "error";
    } else if (hasOngoing) {
        return "inProgress";
    } else if (allSuccess) {
        return "success";
    } else if (hasRemoved) {
        return "removed";
    } else {
        return "notStarted";
    }
};
