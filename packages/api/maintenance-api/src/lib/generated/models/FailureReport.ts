/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from './Attachment';
import type { FailureReportBasic } from './FailureReportBasic';
import type { MaintenanceRecordActivity } from './MaintenanceRecordActivity';
import type { MaintenanceRecordItemMetadata } from './MaintenanceRecordItemMetadata';
import type { MaintenanceRecordTask } from './MaintenanceRecordTask';
import type { Measurement } from './Measurement';
import type { Status } from './Status';
import type { TagBasic } from './TagBasic';
import type { URLReference } from './URLReference';

export type FailureReport = (FailureReportBasic & {
    maintenanceRecordTypeId?: 'failureReport';
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
     * Activities for this failure report
     */
    activities?: Array<MaintenanceRecordActivity>;
    /**
     * Tasks for this failure report
     */
    tasks?: Array<MaintenanceRecordTask>;
    /**
     * Attachments for this failure report
     */
    attachments?: Array<Attachment>;
    /**
     * URL references for this failure report
     */
    urlReferences?: Array<URLReference>;
    tagDetails?: TagBasic | null;
    /**
     * Extra metadata related to additional failure modes and detection modes. This is only used in rare cases
     */
    additionalMetadata?: Array<MaintenanceRecordItemMetadata>;
    /**
     * Related measurements
     */
    measurements?: Array<Measurement>;
});

