/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SASChangeWorkOrderBasic } from './SASChangeWorkOrderBasic';
import type { ServiceOperation } from './ServiceOperation';
import type { Status } from './Status';
import type { TagBasic } from './TagBasic';
import type { TagRelatedToWorkOrder } from './TagRelatedToWorkOrder';
import type { WorkOrderAttachment } from './WorkOrderAttachment';
import type { WorkOrderObjectMaintenanceRecordMinimal } from './WorkOrderObjectMaintenanceRecordMinimal';
import type { WorkOrderOperation } from './WorkOrderOperation';

export type SASChangeWorkOrder = (SASChangeWorkOrderBasic & {
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
     * Attachments for the SAS Change Work order
     */
    attachments?: Array<WorkOrderAttachment>;
    requiredEndDate: string | null;
    additionalCostWBSId: string;
    additionalCostWBS: string;
    isProductionCritical: string;
    isHSECritical: string;
});

