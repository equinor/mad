/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { data_custom } from './data_custom';
import type { data_customx } from './data_customx';
import type { data_fleet } from './data_fleet';
import type { data_fleetx } from './data_fleetx';
import type { data_general } from './data_general';
import type { data_generalx } from './data_generalx';
import type { data_specific } from './data_specific';
import type { data_specificx } from './data_specificx';

export type RawEquipmentChange = {
    valid_time?: string;
    valid_date?: string;
    data_general?: data_general;
    data_generalX?: data_generalx;
    data_specificX?: data_specificx;
    data_fleetX?: data_fleetx;
    data_fleet?: data_fleet;
    data_custom?: data_custom;
    data_specific?: data_specific;
    data_customX?: data_customx;
};

