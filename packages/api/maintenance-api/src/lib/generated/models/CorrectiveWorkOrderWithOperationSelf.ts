/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CorrectiveWorkOrderSimple } from './CorrectiveWorkOrderSimple';
import type { WorkOrderOperationSimpleForSearch } from './WorkOrderOperationSimpleForSearch';

export type CorrectiveWorkOrderWithOperationSelf = (CorrectiveWorkOrderSimple & {
    text?: string | null;
    requiredEndDate: string | null;
    _links: {
        self?: string;
    };
    operations: Array<WorkOrderOperationSimpleForSearch> | null;
});

