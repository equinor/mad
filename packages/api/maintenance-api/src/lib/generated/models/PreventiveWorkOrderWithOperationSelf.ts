/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PreventiveWorkOrderSimple } from './PreventiveWorkOrderSimple';
import type { WorkOrderOperationSimpleForSearch } from './WorkOrderOperationSimpleForSearch';

export type PreventiveWorkOrderWithOperationSelf = (PreventiveWorkOrderSimple & {
    text?: string | null;
    /**
     * Datetime of when the Work order was last changed (based on Changelog)
     */
    changeLogChangedDateTime?: string | null;
    _links: {
        self?: string;
    };
    operations?: Array<WorkOrderOperationSimpleForSearch> | null;
});

