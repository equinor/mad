/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaintenanceRecordMinimal } from './MaintenanceRecordMinimal';

export type TechnicalFeedback = {
    feedbackId?: string;
    tagId?: string | null;
    tagPlantId?: string;
    tag?: string;
    equipmentId?: string;
    /**
     * Detailed technical feedback will require a specialized action to complete such as PSV certificate
     */
    isDetailedFeedback?: boolean;
    /**
     * Type of detailed feedback to be used for this technical feedback
     */
    detailedFeedbackTypeId?: string;
    /**
     * Name of detailed feedback to be used for this technical feedback
     */
    detailedFeedbackType?: string;
    maintenanceConceptId?: string;
    maintenanceConceptionVersionId?: string;
    maintenanceActivityId?: string;
    /**
     * Title of the maintenance activity
     */
    maintenanceActivity?: string;
    /**
     * Multi-line text describing the maintenance activity
     */
    maintenanceActivityText?: string;
    catalogProfileId?: string;
    systemId?: string;
    lastDoneDateTime?: string | null;
    feedbackStatusId?: string;
    feedbackReasonId?: string;
    detectionMethodGroupId?: string;
    detectionMethodId?: string;
    /**
     * Mandatory maintenance records created based on feedbackStatusId and feedbackReasonId
     */
    mandatoryMaintenanceRecords?: Array<MaintenanceRecordMinimal>;
    /**
     * Optional maintenance records
     */
    optionalMaintenanceRecords?: Array<MaintenanceRecordMinimal>;
};

