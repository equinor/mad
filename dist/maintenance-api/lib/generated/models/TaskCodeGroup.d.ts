import type { TaskCode } from './TaskCode';
export type TaskCodeGroup = {
    taskCodeGroupId: string;
    taskCodeGroup: string;
    /**
     * Task codes in this group
     */
    taskCodes: Array<TaskCode>;
};
