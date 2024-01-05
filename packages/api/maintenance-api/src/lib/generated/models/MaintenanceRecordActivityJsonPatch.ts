/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MaintenanceRecordActivityJsonPatch = {
    /**
     * JSON Patch operation according to RFC6902
     */
    op: 'replace';
    /**
     * Path indicating the property to be impacted by the operation
     */
    path: '/title' | '/text' | '/activityCodeId' | '/activityCodeGroupId' | '/startDateTime' | '/endDateTime';
    /**
     * Value to be assigned to a resource property based on the operation and path
     * - /activityCodeGroupId and /activityCodeId - Both fields must be present in order to update activity code
     *
     */
    value: string;
};

