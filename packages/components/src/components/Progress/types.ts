export type ProgressStatus = "success" | "error" | "notStarted" | "inProgress";

export type ProgressTaskErrorDetails = {
    message: string;
    code?: string;
    suggestion?: string;
};

export type ProgressTask = {
    title: string;
    status: ProgressStatus;
    errorDetails?: ProgressTaskErrorDetails;
};
