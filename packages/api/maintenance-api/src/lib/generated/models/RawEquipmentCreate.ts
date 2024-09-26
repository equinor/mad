/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { data_custom } from './data_custom';
import type { data_fleet } from './data_fleet';
import type { data_general } from './data_general';
import type { data_specific } from './data_specific';

export type RawEquipmentCreate = {
    valid_time?: string;
    valid_date?: string;
    data_general?: data_general;
    data_fleet?: data_fleet;
    data_custom?: data_custom;
    data_specific?: data_specific;
};

