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
        default:
            return "blank";
    }
};

export const statusToColor = (
    status: ProgressStatus,
    token: WithoutThemeOptionValues<MasterToken>,
) => {
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

export const computeTaskStatus = (
    tasks: ProgressTask[],
    status: ProgressStatus,
): ProgressStatus => {
    if (tasks.length === 0 && status) {
        return status;
    }
    const hasOngoing = tasks.some(task => task.status === "inProgress");
    const hasError = tasks.some(task => task.status === "error");
    const allSuccess = tasks.every(task => task.status === "success");

    if (hasError) {
        return "error";
    } else if (hasOngoing) {
        return "inProgress";
    } else if (allSuccess) {
        return "success";
    } else {
        return "notStarted";
    }
};
