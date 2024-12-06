/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { _return } from './_return';
import type { data_fleet } from './data_fleet';
import type { data_general } from './data_general';
import type { data_specific } from './data_specific';
import type { return_commit } from './return_commit';
import type { return_warranty } from './return_warranty';

export type RawEquipmentCreateReturn = {
    equipment?: string;
    return_text?: string;
    return_commit?: return_commit;
    return_warranty?: return_warranty;
    return?: _return;
    data_general?: data_general;
    data_fleet?: data_fleet;
    data_specific?: data_specific;
};

