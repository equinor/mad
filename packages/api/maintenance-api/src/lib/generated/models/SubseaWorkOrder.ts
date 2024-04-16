/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from './Attachment';
import type { Status } from './Status';
import type { SubseaServiceOperation } from './SubseaServiceOperation';
import type { SubseaWorkOrderBasic } from './SubseaWorkOrderBasic';
import type { SubseaWorkOrderOperation } from './SubseaWorkOrderOperation';
import type { TagRelatedToWorkOrder } from './TagRelatedToWorkOrder';

export type SubseaWorkOrder = (SubseaWorkOrderBasic & {
    /**
     * Value only returned if include-person-responsible=true. The internal id of the person responsible for the processing of the subsea work order. The id represents the employee id of the person.
     */
    personResponsibleId: string | null;
    /**
     * Value only returned if include-person-responsible=true. The email of the person responsible for the processing of the subsea work order. This is the preferred way of identifying the person as it's consistent across systems.
     */
    personResponsibleEmail: string | null;
    operations?: Array<SubseaWorkOrderOperation>;
    serviceOperations?: Array<SubseaServiceOperation>;
    /**
     * All statuses possible with information about activation
     */
    statuses?: Array<Status>;
    /**
     * Attachments for this Subsea Work order
     */
    attachments?: Array<Attachment>;
    /**
     * Related equipment
     */
    tagsRelated?: Array<TagRelatedToWorkOrder>;
});

