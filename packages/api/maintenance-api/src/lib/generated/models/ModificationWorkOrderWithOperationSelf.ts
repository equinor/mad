/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GenericWorkOrderSimple } from './GenericWorkOrderSimple';
import type { WorkOrderOperationSimple } from './WorkOrderOperationSimple';

export type ModificationWorkOrderWithOperationSelf = (GenericWorkOrderSimple & {
    text?: string | null;
    _links: {
        self?: string;
    };
    operations: Array<WorkOrderOperationSimple>;
});

