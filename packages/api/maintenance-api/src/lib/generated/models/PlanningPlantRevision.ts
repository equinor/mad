/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PlanningPlantRevisionBasic } from './PlanningPlantRevisionBasic';
import type { RevisionWorkOrderOperation } from './RevisionWorkOrderOperation';

export type PlanningPlantRevision = (PlanningPlantRevisionBasic & {
    /**
     * Work order operations
     */
    workOrderOperations?: Array<RevisionWorkOrderOperation>;
});

