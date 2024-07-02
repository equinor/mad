/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { failureImpactId } from './failureImpactId';
import type { MaintenanceRecordItemMetadataCreate } from './MaintenanceRecordItemMetadataCreate';

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
    failureImpactId: failureImpactId;
    isBreakdown?: boolean;
    failureModeId: string;
    failureModeGroupId: string;
    detectionMethodId: string;
    detectionMethodGroupId: string;
    failureMechanismId?: string;
    failureMechanismGroupId?: string;
    /**
     * General classification of failure reports, for example used for lifting equipment control
     */
    codingId?: string | null;
    /**
     * Group for general classification of failure reports
     */
    codingGroupId?: string | null;
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
        source?: 'ObjectList' | 'TechnicalFeedback';
        /**
         * Reference to the specific element the relationship will be defined for. The specific format for this value will depend on the `source` type and the value should be found using lookup of the work order.
         *
         * SourceId comes in the format 'XX-1234567-1'. XX denotes whether the object comes from the Object List directly ("OL"), or from Technical Feedback ("TL").
         *
         * The 7 digits are an internal SAP id of this object list, uniquely identifying the Object List of your work order.
         *
         * The last digit is the counter of the object list, identifying the line in the Object List.
         *
         */
        sourceId?: string;
        /**
         * For source `TechnicalFeedback`, `sourceId` needs to be supplied.
         */
        technicalFeedbackParameters?: {
            statusId?: string;
            reasonId?: string | null;
        };
    };
};

