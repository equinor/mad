/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { failureImpactId } from './failureImpactId';

export type FailureReportBasic = {
    recordId: string;
    tagId: string | null;
    tagPlantId: string;
    equipmentId: string;
    equipment: string;
    title: string;
    text: string;
    workCenterId: string;
    workCenter: string;
    workCenterPlantId: string;
    planningPlantId: string;
    plannerGroupId: string;
    plannerGroup: string;
    /**
     * Structured location within the plant where the tag is located
     */
    locationId: string;
    location: string;
    systemId: string;
    failureImpactId: failureImpactId;
    failureImpact: string;
    priorityId?: 'D' | 'H' | 'L' | 'M' | 'U' | null;
    isBreakdown: boolean;
    /**
     * Unsafe failure mode identified for failure report ref `R-12137 - Give immediate warning of unsafe failure modes`
     */
    hasUnsafeFailureMode: boolean;
    /**
     * Unsafe failure mode status for failure report ref `R-12137 - Give immediate warning of unsafe failure modes`. Value `IN_PAST` is used if tag or failure mode has been modified since creation and the criteria for unsafe failure mode are no longer fulfilled.
     */
    unsafeFailureModeStatus: 'OUTSTANDING' | 'MADE_SAFE' | 'IN_PAST' | null;
    requiredEndDate: string | null;
    failureModeId: string | null;
    failureMode: string | null;
    failureModeGroupId: string | null;
    failureModeGroup: string | null;
    detectionMethodId: string | null;
    detectionMethod: string | null;
    detectionMethodGroupId: string | null;
    detectionMethodGroup: string | null;
    failureMechanismId: string | null;
    failureMechanism: string | null;
    failureMechanismGroupId: string | null;
    failureMechanismGroup: string | null;
    /**
     * General classification of failure reports, for example used for lifting equipment control
     */
    codingId: string | null;
    /**
     * Group for general classification of failure reports
     */
    codingGroupId: string | null;
    correctiveWorkOrderExist: boolean;
    correctiveWorkOrderId: string;
    /**
     * Active statuses for the Failure report with space as separating character
     */
    activeStatusIds: string;
    /**
     * Failure report is open
     */
    isOpen: boolean;
    /**
     * The point in time where the failure report was created
     */
    createdDateTime: string | null;
    /**
     * The point in time where the failure report was completed
     */
    completedDateTime: string | null;
    /**
     * The point in time where the failure started
     */
    failureStartDateTime: string | null;
    /**
     * The point in time where the failure resolved
     */
    failureEndDateTime: string | null;
};

