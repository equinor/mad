import type { SubseaWorkOrderSimple } from './SubseaWorkOrderSimple';
import type { WorkOrderOperationSimple } from './WorkOrderOperationSimple';
export type SubseaWorkOrderWithOperationSelf = (SubseaWorkOrderSimple & {
    text?: string | null;
    _links: {
        self?: string;
    };
    operations: Array<WorkOrderOperationSimple>;
});
