/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MaintenanceRecordActivity = {
    activityId: string;
    title: string;
    text: string | null;
    /**
     * Is true if this activity's `text` property is read only. Trying to update an activity with this set to `true`  will result in a `400 - Bad Request` response.
     *
     */
    isReadonlyText?: boolean;
    activityCodeId: string;
    activityCode: string;
    activityCodeGroupId: string;
    activityCodeGroup: string;
    startDateTime: string | null;
    endDateTime: string | null;
};

