/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PreventiveWorkOrderSimple } from './PreventiveWorkOrderSimple';

export type PreventiveWorkOrderBasic = (PreventiveWorkOrderSimple & {
    text: string;
    /**
     * The type of work order it is an instance of
     */
    workOrderTypeId: 'preventiveWorkOrder';
    plannerGroup: string;
    workCenter: string;
});

