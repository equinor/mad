/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Communication } from './Communication';
import type { WorkOrderMaterial } from './WorkOrderMaterial';

export type CorrectiveWorkOrderMaterial = (WorkOrderMaterial & {
    /**
     * Communication between the work order responsible and the requisitioner
     */
    communications?: Array<Communication> | null;
});

