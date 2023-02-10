/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from './Attachment';
import type { MaintenancePlanSimple } from './MaintenancePlanSimple';
import type { MaintenanceRecordMinimal } from './MaintenanceRecordMinimal';
import type { PreventiveWorkOrderBasic } from './PreventiveWorkOrderBasic';
import type { PreventiveWorkOrderOperation } from './PreventiveWorkOrderOperation';
import type { Status } from './Status';
import type { TagBasic } from './TagBasic';
import type { TagRelatedToWorkOrder } from './TagRelatedToWorkOrder';

export type PreventiveWorkOrder = (PreventiveWorkOrderBasic & {
    operations?: Array<PreventiveWorkOrderOperation>;
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
    maintenanceRecords?: Array<MaintenanceRecordMinimal>;
    maintenancePlan?: MaintenancePlanSimple;
    tagDetails?: TagBasic;
    /**
     * Attachments to Work order operation
     */
    attachments?: Array<Attachment>;
});

