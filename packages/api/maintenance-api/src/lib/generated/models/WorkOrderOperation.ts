/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from './Attachment';
import type { WorkOrderMaterial } from './WorkOrderMaterial';
import type { WorkOrderOperationSimple } from './WorkOrderOperationSimple';

export type WorkOrderOperation = (WorkOrderOperationSimple & {
    /**
     * Calculation key defines which of the fields plannedWorkHours,capacityCount and plannedDuration are derived based on the values of the two others. If calculation key is `CALC_KEY_MANUAL`, all fields are filled in manually.
     */
    calculationKey: 'CALC_KEY_MANUAL' | 'CALC_KEY_DURATION' | 'CALC_KEY_PLANNED_HOURS' | 'CALC_KEY_CAPACITY' | null;
    activeStatusIds: string;
    materials?: Array<WorkOrderMaterial> | null;
    attachments?: Array<Attachment> | null;
});

