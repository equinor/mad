/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkOrderOperationSimple } from './WorkOrderOperationSimple';

export type WorkOrderOperationSimpleForSearch = (WorkOrderOperationSimple & {
    /**
     * Id of the Confirmation (from 'Confirmation Data'). This Id does not change even if the operation (activity) number changes.
     */
    confirmationId: string | null;
});

