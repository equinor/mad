/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MaintenanceRecordItemMetadataJsonPatch = {
    /**
     * JSON Patch operation according to RFC6902
     */
    op: 'replace';
    /**
     * Path indicating the property to be impacted by the operation
     */
    path: '/title' | '/failureModeId' | '/failureModeGroupId' | '/detectionMethodId' | '/detectionMethodGroupId' | '/failureMechanismId' | '/failureMechanismGroupId';
    /**
     * Value to be assigned to a resource property based on the operation and path
     *
     * Path specific information:
     * - /failureModeId and /failureModeGroupId - Both fields must be present in order to update failure mode
     * - /detectionMethodId and /detectionMethodGroupId - Both fields must be present in order to update detection method
     * - /failureMechanismId and /failureMechanismGroupId - Both fields must be present in order to update failure mechanism method
     *
     */
    value: string;
};

