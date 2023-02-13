import type { Attachment } from './Attachment';
import type { MaintenanceRecordMinimal } from './MaintenanceRecordMinimal';
import type { SASChangeWorkOrderBasic } from './SASChangeWorkOrderBasic';
import type { Status } from './Status';
import type { TagBasic } from './TagBasic';
import type { TagRelatedToWorkOrder } from './TagRelatedToWorkOrder';
import type { WorkOrderOperation } from './WorkOrderOperation';
export type SASChangeWorkOrder = (SASChangeWorkOrderBasic & {
    operations?: Array<WorkOrderOperation>;
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
    tagDetails?: TagBasic;
    /**
     * Attachments to Work order operation
     */
    attachments?: Array<Attachment>;
});
