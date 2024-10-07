/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ModificationWorkOrderBasic } from './ModificationWorkOrderBasic';
import type { ServiceOperation } from './ServiceOperation';
import type { Status } from './Status';
import type { TagBasic } from './TagBasic';
import type { TagRelatedToWorkOrder } from './TagRelatedToWorkOrder';
import type { WorkOrderAttachment } from './WorkOrderAttachment';
import type { WorkOrderObjectMaintenanceRecordMinimal } from './WorkOrderObjectMaintenanceRecordMinimal';
import type { WorkOrderOperation } from './WorkOrderOperation';

export type ModificationWorkOrder = (ModificationWorkOrderBasic & {
    operations?: Array<WorkOrderOperation>;
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
     * Related maintenance records
     */
    maintenanceRecords?: Array<WorkOrderObjectMaintenanceRecordMinimal>;
    tagDetails?: TagBasic;
    /**
     * Attachments for this Modification Work order
     */
    attachments?: Array<WorkOrderAttachment>;
    requiredEndDate: string | null;
    isProductionCritical: string;
    isHSECritical: string;
});

