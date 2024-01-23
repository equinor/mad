import { Progress as _Progress, ProgressProps } from "./Progress";
import {
    ProgressItem,
    ProgressTask,
    ProgressItemProps,
    TaskStatus,
    TaskErrorDetails,
} from "./ProgressItem";
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
    ProgressItemProps,
    ProgressTask,
    TaskStatus,
    TaskErrorDetails,
    ProgressStatusLineProps,
};
