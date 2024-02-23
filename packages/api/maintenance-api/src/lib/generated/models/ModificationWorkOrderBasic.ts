/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ModificationWorkOrderSimple } from './ModificationWorkOrderSimple';

export type ModificationWorkOrderBasic = (ModificationWorkOrderSimple & {
    text: string;
    /**
     * The type of work order it is an instance of
     */
    workOrderTypeId: 'modificationWorkOrder';
    costWBS: string;
    additionalCostWBS?: string;
    plannerGroup: string;
    workCenter: string;
});

