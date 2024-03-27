/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from './Attachment';
import type { MaintenancePlanSimple } from './MaintenancePlanSimple';
import type { MaintenanceRecordMinimalWithActiveStatusIds } from './MaintenanceRecordMinimalWithActiveStatusIds';
import type { Measurement } from './Measurement';
import type { PreventiveWorkOrderBasic } from './PreventiveWorkOrderBasic';
import type { PreventiveWorkOrderOperation } from './PreventiveWorkOrderOperation';
import type { ServiceOperation } from './ServiceOperation';
import type { Status } from './Status';
import type { TagBasic } from './TagBasic';
import type { TagRelatedToWorkOrder } from './TagRelatedToWorkOrder';

export type PreventiveWorkOrder = (PreventiveWorkOrderBasic & {
    operations?: Array<PreventiveWorkOrderOperation>;
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
    maintenancePlan?: MaintenancePlanSimple;
    tagDetails?: TagBasic;
    /**
     * Attachments for this Preventive Work Order
     */
    attachments?: Array<Attachment>;
    /**
     * Related measurements
     */
    measurements?: Array<Measurement>;
});

