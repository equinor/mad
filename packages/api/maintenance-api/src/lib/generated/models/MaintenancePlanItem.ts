/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaintenancePlanEquipment } from './MaintenancePlanEquipment';
import type { MaintenancePlanItemPartial } from './MaintenancePlanItemPartial';
import type { MaintenancePlanItemTask } from './MaintenancePlanItemTask';

export type MaintenancePlanItem = (MaintenancePlanItemPartial & {
    taskList?: MaintenancePlanItemTask | null;
    objectList?: Array<MaintenancePlanEquipment>;
});

