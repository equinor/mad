/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaintenanceRecordItemMetadataCreate } from "./MaintenanceRecordItemMetadataCreate";

export type FailureReportCreate = {
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
    failureImpactId: "D" | "S" | "U" | "X";
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
     * If failure report was initially created in an external system, this represent the unique id of it
     */
    externalPartnerRecordId?: string;
    /**
     * If modification proposal was initially created in an external system, this represent the name of the external system
     */
    externalPartnerId?: string;
    /**
     * Optional parameter used in special cases where the failure report was created at an earlier time. Should not be a date in the future
     */
    createdDateTime?: string;
    /**
     * The point in time where the failure started
     */
    failureStartDateTime?: string;
    /**
     * The point in time where the failure resolved
     */
    failureEndDateTime?: string;
    /**
     * Additional metadata to be used in special cases
     */
    additionalMetadata?: Array<MaintenanceRecordItemMetadataCreate>;
    /**
     * Defines a relationship to a specific part of a work order
     */
    relatedWorkOrder?: {
        /**
         * Work order id this activity report is related to
         */
        workOrderId?: string;
        /**
         * Defines the type of relationship to the work order
         */
        source?: "ObjectList" | "TechnicalFeedback";
        /**
         * Reference to the specific element the relationship will be defined for. The specific format for this value will depend on the `source` type and the value should be found using lookup of the work order.
         */
        sourceId?: string;
        /**
         * For source `TechnicalFeedback` these parameters are normally also supplied. If they are not supplied, the relationship between maintenance and technical feedback is of type optional.
         */
        technicalFeedbackParameters?: {
            statusId?: string;
            reasonId?: string;
        };
    };
};
