/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkOrderOperation } from './WorkOrderOperation';

export type WorkOrderOperationForSearchFull = (WorkOrderOperation & {
    workOrderId?: string;
    tagId?: string | null;
    tagPlantId?: string;
    isServiceOperation?: boolean;
    /**
     * Datetime of when the Work order operation was last changed (based on Status Changelog)
     */
    statusChangedDateTime?: string | null;
});

