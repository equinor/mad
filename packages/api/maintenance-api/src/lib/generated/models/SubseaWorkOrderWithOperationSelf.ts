/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubseaWorkOrderSimple } from './SubseaWorkOrderSimple';
import type { WorkOrderOperationSimpleForSearch } from './WorkOrderOperationSimpleForSearch';

export type SubseaWorkOrderWithOperationSelf = (SubseaWorkOrderSimple & {
    text?: string | null;
    requiredEndDate: string | null;
    /**
     * Datetime of when the Work order was last changed (based on Changelog)
     */
    changeLogChangedDateTime?: string | null;
    _links: {
        self?: string;
    };
    operations?: Array<WorkOrderOperationSimpleForSearch> | null;
});

