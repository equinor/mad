import type { CorrectiveWorkOrderSimple } from './CorrectiveWorkOrderSimple';
import type { WorkOrderOperationSimple } from './WorkOrderOperationSimple';
export type CorrectiveWorkOrderWithOperationSelf = (CorrectiveWorkOrderSimple & {
    text?: string | null;
    _links: {
        self?: string;
    };
    operations: Array<WorkOrderOperationSimple>;
});
