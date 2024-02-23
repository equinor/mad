/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CorrectiveWorkOrderSimple } from './CorrectiveWorkOrderSimple';

export type CorrectiveWorkOrderBasic = (CorrectiveWorkOrderSimple & {
    text: string;
    /**
     * The type of work order it is an instance of
     */
    workOrderTypeId: 'correctiveWorkOrder';
    plannerGroup: string;
    workCenter: string;
});

