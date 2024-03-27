/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MaintenanceRecordTaskCreate = {
    /**
     * Max-length of 40 characters
     */
    title: string;
    text?: string;
    taskCodeId?: string;
    taskCodeGroupId?: string;
    /**
     * Must be an Equinor email address. TaskResponsibleId is populated with the employee id of this user.
     */
    taskResponsibleEmail?: string;
    plannedStartDateTime?: string | null;
    plannedEndDateTime?: string | null;
};

