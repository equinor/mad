/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from './Attachment';
import type { MaintenanceRecordTaskWithResponsibleDetails } from './MaintenanceRecordTaskWithResponsibleDetails';
import type { Status } from './Status';
import type { TagBasic } from './TagBasic';
import type { TechnicalClarificationBasic } from './TechnicalClarificationBasic';

export type TechnicalClarification = (TechnicalClarificationBasic & {
    maintenanceRecordTypeId?: 'technicalClarification';
    /**
     * The internal id of the person who created the maintenance record. The id represents the employee id of the person.
     */
    createdById?: string;
    /**
     * Value only returned if include-created-by-details=true. The full name of the person who created the maintenance record.
     */
    createdBy?: string | null;
    /**
     * Value only returned if include-created-by-details=true. The email of the person who created the maintenance record. This is the preferred way of identifying the person as it's consistent across systems.
     */
    createdByEmail?: string | null;
    /**
     * All statuses possible with information about activation
     */
    statuses?: Array<Status>;
    /**
     * Attachments for this Technical Clarification
     */
    attachments?: Array<Attachment>;
    tagDetails?: TagBasic | null;
    /**
     * Tasks for this technical clarification
     */
    tasks?: Array<MaintenanceRecordTaskWithResponsibleDetails>;
});

