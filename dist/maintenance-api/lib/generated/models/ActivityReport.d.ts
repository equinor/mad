import type { ActivityReportBasic } from './ActivityReportBasic';
import type { Attachment } from './Attachment';
import type { MaintenanceRecordActivity } from './MaintenanceRecordActivity';
import type { Status } from './Status';
import type { URLReference } from './URLReference';
export type ActivityReport = (ActivityReportBasic & {
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
     * Activities for this activity report
     */
    activities?: Array<MaintenanceRecordActivity>;
    /**
     * Activities for this activity report
     */
    attachments?: Array<Attachment>;
    /**
     * URL references for this activity report
     */
    urlReferences?: Array<URLReference>;
    /**
     * All statuses possible with information about activation
     */
    statuses?: Array<Status>;
});
