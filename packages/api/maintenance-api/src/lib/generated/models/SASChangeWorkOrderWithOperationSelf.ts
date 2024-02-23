/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SASChangeWorkOrderSimple } from './SASChangeWorkOrderSimple';
import type { WorkOrderOperationSimple } from './WorkOrderOperationSimple';

export type SASChangeWorkOrderWithOperationSelf = (SASChangeWorkOrderSimple & {
    text?: string | null;
    _links: {
        self?: string;
    };
    operations: Array<WorkOrderOperationSimple>;
});

