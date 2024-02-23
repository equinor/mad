/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CorrectiveWorkOrderWithOperationSelf } from './CorrectiveWorkOrderWithOperationSelf';
import type { ModificationWorkOrderWithOperationSelf } from './ModificationWorkOrderWithOperationSelf';
import type { PreventiveWorkOrderWithOperationSelf } from './PreventiveWorkOrderWithOperationSelf';
import type { ProjectWorkOrderWithOperationSelf } from './ProjectWorkOrderWithOperationSelf';
import type { SASChangeWorkOrderWithOperationSelf } from './SASChangeWorkOrderWithOperationSelf';
import type { SubseaWorkOrderWithOperationSelf } from './SubseaWorkOrderWithOperationSelf';

export type WorkOrderWithOperationList = {
    correctiveWorkOrders?: Array<CorrectiveWorkOrderWithOperationSelf>;
    preventiveWorkOrders?: Array<PreventiveWorkOrderWithOperationSelf>;
    modificationWorkOrders?: Array<ModificationWorkOrderWithOperationSelf>;
    sasChangeWorkOrders?: Array<SASChangeWorkOrderWithOperationSelf>;
    projectWorkOrders?: Array<ProjectWorkOrderWithOperationSelf>;
    subseaWorkOrders?: Array<SubseaWorkOrderWithOperationSelf>;
};

