/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkOrderChangeLogBasic } from './WorkOrderChangeLogBasic';

export type WorkOrderChangeLogBasicWithRelated = (WorkOrderChangeLogBasic & {
    _links: {
        related?: string;
    };
});

