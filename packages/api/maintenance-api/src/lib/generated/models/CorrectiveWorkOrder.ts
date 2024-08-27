/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CorrectiveWorkOrderBasic } from './CorrectiveWorkOrderBasic';
import type { CorrectiveWorkOrderOperation } from './CorrectiveWorkOrderOperation';
import type { CorrectiveWorkOrderServiceOperation } from './CorrectiveWorkOrderServiceOperation';
import type { EstimatedCosts } from './EstimatedCosts';
import type { MaintenanceRecordMinimalWithActiveStatusIds } from './MaintenanceRecordMinimalWithActiveStatusIds';
import type { Measurement } from './Measurement';
import type { Status } from './Status';
import type { TagBasic } from './TagBasic';
import type { TagRelatedToWorkOrder } from './TagRelatedToWorkOrder';
import type { WorkOrderAttachment } from './WorkOrderAttachment';

export type CorrectiveWorkOrder = (CorrectiveWorkOrderBasic & {
    operations?: Array<CorrectiveWorkOrderOperation>;
    serviceOperations?: Array<CorrectiveWorkOrderServiceOperation>;
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
    attachments?: Array<WorkOrderAttachment>;
    /**
     * Related measurements
     */
    measurements?: Array<Measurement>;
    /**
     * Estimated Costs
     */
    estimatedCosts?: Array<EstimatedCosts>;
});

