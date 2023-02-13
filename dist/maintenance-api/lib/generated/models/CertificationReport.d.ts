import type { Attachment } from './Attachment';
import type { CertificationReportBasic } from './CertificationReportBasic';
import type { MeasuringPointFromTagLookup } from './MeasuringPointFromTagLookup';
import type { Status } from './Status';
import type { TagBasic } from './TagBasic';
export type CertificationReport = (CertificationReportBasic & {
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
     * All statuses possible with information about activation
     */
    statuses?: Array<Status>;
    /**
     * Activities for this failure report
     */
    attachments?: Array<Attachment>;
    tagDetails?: TagBasic | null;
    measuringPoints?: Array<MeasuringPointFromTagLookup>;
});
