/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectWorkOrderBasic } from './ProjectWorkOrderBasic';
import type { ServiceOperation } from './ServiceOperation';
import type { Status } from './Status';
import type { TagBasic } from './TagBasic';
import type { TagRelatedToWorkOrder } from './TagRelatedToWorkOrder';
import type { WorkOrderAttachment } from './WorkOrderAttachment';
import type { WorkOrderObjectMaintenanceRecordMinimal } from './WorkOrderObjectMaintenanceRecordMinimal';
import type { WorkOrderOperation } from './WorkOrderOperation';

export type ProjectWorkOrder = (ProjectWorkOrderBasic & {
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
    tagDetails?: TagBasic | null;
    /**
     * Attachments for this Project Work order
     */
    attachments?: Array<WorkOrderAttachment>;
    requiredEndDate: string | null;
    additionalCostWBSId: string;
    additionalCostWBS: string;
    isProductionCritical: string;
    isHSECritical: string;
});

