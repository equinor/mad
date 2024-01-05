/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from "./Attachment";
import type { WorkOrderMaterial } from "./WorkOrderMaterial";
import type { WorkOrderOperationSimple } from "./WorkOrderOperationSimple";

export type WorkOrderOperation = WorkOrderOperationSimple & {
    activeStatusIds: string;
    materials?: Array<WorkOrderMaterial> | null;
    attachments?: Array<Attachment> | null;
};
