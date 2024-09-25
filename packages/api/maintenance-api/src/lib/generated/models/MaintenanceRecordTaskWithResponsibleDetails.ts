/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaintenanceRecordTask } from './MaintenanceRecordTask';

export type MaintenanceRecordTaskWithResponsibleDetails = (MaintenanceRecordTask & {
    /**
     * The full name of the person who is responsible for the task.
     */
    taskResponsible?: string | null;
    /**
     * The email address of the person who is responsible for the task.
     */
    taskResponsibleEmail?: string | null;
});

