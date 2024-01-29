import { Progress as _Progress, ProgressProps } from "./Progress";
import { ProgressTask, ProgressStatus, ProgressTaskErrorDetails } from "./types";
import { ProgressItem, ProgressItemProps } from "./ProgressItem";
import { ProgressStatusLine, ProgressStatusLineProps } from "./ProgressStatusLine";

type ProgressFamily = typeof _Progress & {
    Item: typeof ProgressItem;
    StatusLine: typeof ProgressStatusLine;
};

const Progress = _Progress as ProgressFamily;
Progress.Item = ProgressItem;
Progress.StatusLine = ProgressStatusLine;

export { Progress };
export type {
    ProgressProps,
    ProgressItemProps as ProgressItem,
    ProgressTask,
    ProgressStatus,
    ProgressTaskErrorDetails,
    ProgressStatusLineProps,
};
