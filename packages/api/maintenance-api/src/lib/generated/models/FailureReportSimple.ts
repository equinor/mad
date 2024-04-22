/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { failureImpactId } from './failureImpactId';

export type FailureReportSimple = {
    recordId: string;
    tagId: string | null;
    tagPlantId: string;
    equipmentId: string;
    title: string;
    requiredEndDate: string | null;
    failureImpactId: failureImpactId;
    isBreakdown: boolean;
    /**
     * Unsafe failure mode identified for failure report ref `R-12137 - Give immediate warning of unsafe failure modes`
     */
    hasUnsafeFailureMode: boolean;
    /**
     * Unsafe failure mode status for failure report ref `R-12137 - Give immediate warning of unsafe failure modes`. Value `IN_PAST` is used if tag or failure mode has been modified since creation and the criterias for unsafe failure mode are no longer fulfilled.
     */
    unsafeFailureModeStatus: 'OUTSTANDING' | 'MADE_SAFE' | 'IN_PAST' | null;
    /**
     * Structured location within the plant where the tag is located
     */
    locationId: string;
    systemId: string;
    failureModeId: string | null;
    failureModeGroupId: string | null;
    detectionMethodId: string | null;
    detectionMethodGroupId: string | null;
    failureMechanismId: string | null;
    failureMechanismGroupId: string | null;
    /**
     * Active statuses for the maintenance record with space as separating character
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
    correctiveWorkOrderExist: boolean;
    correctiveWorkOrderId: string;
    /**
     * The point in time where the failure started
     */
    failureStartDateTime: string | null;
    /**
     * The point in time where the failure resolved
     */
    failureEndDateTime: string | null;
    workCenterId: string | null;
};

