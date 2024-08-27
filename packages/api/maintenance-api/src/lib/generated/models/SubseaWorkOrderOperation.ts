/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubseaWorkOrderMaterial } from './SubseaWorkOrderMaterial';
import type { WorkOrderAttachment } from './WorkOrderAttachment';
import type { WorkOrderOperation } from './WorkOrderOperation';

export type SubseaWorkOrderOperation = (WorkOrderOperation & {
    materials?: Array<SubseaWorkOrderMaterial> | null;
    attachments?: Array<WorkOrderAttachment> | null;
});

