/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FailureReportJsonPatch = {
    /**
     * JSON Patch operation according to RFC6902
     *
     * Operation `replace` is suitable for the following properties:
     * - `/tagId`
     * - `/tagPlantId`
     * - `/equipmentId`
     * - `/failureImpactId`
     * - `/failureModeId`
     * - `/failureModeGroupId`
     * - `/detectionMethodId`
     * - `/detectionMethodGroupId`
     * - `/failureMechanismId`
     * - `/failureMechanismGroupId`
     * - `/codingId`
     * - `/codingGroupId`
     * - `/workCenterId`
     * - `/workCenterPlantId`
     * - `/locationId`
     * - `/title`
     * - `/text`
     * - `/failureStartDateTime`
     * - `/failureEndDateTime`
     * - `/plannerGroupId`
     *
     * Operation `append` is suitable for the following properties:
     * - `/text`
     *
     * Operation `prepend` is suitable for the following properties:
     * - `/text`
     *
     */
    op: 'replace' | 'append' | 'prepend';
    /**
     * Path indicating the property to be impacted by the operation
     */
    path: '/tagId' | '/tagPlantId' | '/equipmentId' | '/failureImpactId' | '/failureModeId' | '/failureModeGroupId' | '/detectionMethodId' | '/detectionMethodGroupId' | '/failureMechanismId' | '/failureMechanismGroupId' | '/codingId' | '/codingGroupId' | '/workCenterId' | '/workCenterPlantId' | '/locationId' | '/title' | '/text' | '/failureStartDateTime' | '/failureEndDateTime' | '/plannerGroupId';
    /**
     * Value to be assigned to a resource property based on the operation and path.
     *
     * Path specific information:
     * - /title - max-length 40 characters
     * - /plannerGroupId - Must exist in for the planningPlantId of the maintenance record
     *
     */
    value: string;
};

