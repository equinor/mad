/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Communication } from './Communication';
import type { ServiceOperation } from './ServiceOperation';

export type CorrectiveWorkOrderServiceOperation = (ServiceOperation & {
    /**
     * Communication between the work order responsible and the requisitioner
     */
    communications?: Array<Communication>;
});

