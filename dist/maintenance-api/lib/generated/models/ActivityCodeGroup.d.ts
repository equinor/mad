import type { ActivityCode } from './ActivityCode';
export type ActivityCodeGroup = {
    activityCodeGroupId: string;
    activityCodeGroup: string;
    /**
     * Activity codes in this group
     */
    activityCodes: Array<ActivityCode>;
};
