/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from './Attachment';
import type { SubseaWorkOrderMaterial } from './SubseaWorkOrderMaterial';
import type { WorkOrderOperation } from './WorkOrderOperation';

export type SubseaWorkOrderOperation = (WorkOrderOperation & {
    materials?: Array<SubseaWorkOrderMaterial> | null;
    attachments?: Array<Attachment> | null;
});

