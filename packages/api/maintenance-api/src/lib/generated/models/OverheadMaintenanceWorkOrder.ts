/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OverheadMaintenanceWorkOrderBasic } from './OverheadMaintenanceWorkOrderBasic';
import type { ServiceOperation } from './ServiceOperation';
import type { Status } from './Status';
import type { TagRelatedToWorkOrder } from './TagRelatedToWorkOrder';
import type { WorkOrderAttachment } from './WorkOrderAttachment';
import type { WorkOrderOperation } from './WorkOrderOperation';

export type OverheadMaintenanceWorkOrder = (OverheadMaintenanceWorkOrderBasic & {
    operations?: Array<WorkOrderOperation>;
    serviceOperations?: Array<ServiceOperation>;
    /**
     * All statuses possible with information about activation
     */
    statuses?: Array<Status>;
    /**
     * Attachments for this Overhead Maintenance Work order
     */
    attachments?: Array<WorkOrderAttachment>;
    /**
     * Related equipment
     */
    tagsRelated?: Array<TagRelatedToWorkOrder>;
    additionalCostWBSId: string;
    additionalCostWBS: string;
    costWBS: string;
    isProductionCritical: string;
    isHSECritical: string;
    /**
     * Value only returned if include-person-responsible=true. The internal id of the person responsible for the processing of the overhead maintenance work order. The id represents the employee id of the person.
     */
    personResponsibleId: string | null;
    /**
     * Value only returned if include-person-responsible=true. The email of the person responsible for the processing of the overhead maintenance work order. This is the preferred way of identifying the person as it's consistent across systems.
     */
    personResponsibleEmail: string | null;
});

