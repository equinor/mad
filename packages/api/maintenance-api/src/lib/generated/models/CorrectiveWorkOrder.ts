/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from './Attachment';
import type { CorrectiveWorkOrderBasic } from './CorrectiveWorkOrderBasic';
import type { CorrectiveWorkOrderOperation } from './CorrectiveWorkOrderOperation';
import type { EstimatedCosts } from './EstimatedCosts';
import type { MaintenanceRecordMinimalWithActiveStatusIds } from './MaintenanceRecordMinimalWithActiveStatusIds';
import type { Measurement } from './Measurement';
import type { ServiceOperation } from './ServiceOperation';
import type { Status } from './Status';
import type { TagBasic } from './TagBasic';
import type { TagRelatedToWorkOrder } from './TagRelatedToWorkOrder';

export type CorrectiveWorkOrder = (CorrectiveWorkOrderBasic & {
    operations?: Array<CorrectiveWorkOrderOperation>;
    serviceOperations?: Array<ServiceOperation>;
    /**
     * All statuses possible with information about activation
     */
    statuses?: Array<Status>;
    /**
     * Related tags
     */
    tagsRelated?: Array<TagRelatedToWorkOrder>;
    /**
     * Related tags
     */
    maintenanceRecords?: Array<MaintenanceRecordMinimalWithActiveStatusIds>;
    tagDetails?: TagBasic;
    /**
     * Attachments to this Corrective Work order
     */
    attachments?: Array<Attachment>;
    /**
     * Related measurements
     */
    measurements?: Array<Measurement>;
    /**
     * Estimated Costs
     */
    estimatedCosts?: Array<EstimatedCosts>;
});

