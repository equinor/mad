/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectWorkOrderSimple } from "./ProjectWorkOrderSimple";
import type { WorkOrderOperationSimple } from "./WorkOrderOperationSimple";

export type ProjectWorkOrderWithOperationSelf = ProjectWorkOrderSimple & {
    text?: string | null;
    _links: {
        self?: string;
    };
    operations: Array<WorkOrderOperationSimple>;
};
