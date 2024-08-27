/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CertificationReportCreate = {
    /**
     * Required to input either tag or equipment
     */
    tagId?: string;
    /**
     * Required to input either tag or equipment
     */
    tagPlantId?: string;
    /**
     * Required to input either tag or equipment
     */
    equipmentId?: string;
    isBreakdown?: boolean;
    failureModeId: string;
    failureModeGroupId: string;
    detectionMethodId: string;
    detectionMethodGroupId: string;
    failureMechanismId?: string;
    failureMechanismGroupId?: string;
    /**
     * If workCenter is not provided, it will use default defined on tag
     */
    workCenterId?: string;
    /**
     * If workCenter is not provided, it will use default defined on tag
     */
    workCenterPlantId?: string;
    title: string;
    text: string;
    /**
     * Optional parameter used in special cases where the failure report was created at an earlier time. Should not be a date in the future
     */
    createdDateTime?: string;
    /**
     * The point in time when the failure started
     */
    failureStartDateTime?: string;
    /**
     * The point in time when the failure was resolved
     */
    failureEndDateTime?: string;
};

