/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OverheadMaintenanceWorkOrderSimple } from './OverheadMaintenanceWorkOrderSimple';
import type { WorkOrderOperationSimpleForSearch } from './WorkOrderOperationSimpleForSearch';

export type OverheadMaintenanceWorkOrderWithOperationSelf = (OverheadMaintenanceWorkOrderSimple & {
    text?: string | null;
    requiredEndDate: string | null;
    _links: {
        self?: string;
    };
    operations?: Array<WorkOrderOperationSimpleForSearch> | null;
});

