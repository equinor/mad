/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MaintenanceRecordTask = {
    /**
     * Internal id for task (not known to user)
     */
    taskId: string;
    /**
     * User-defined value for task
     */
    sortField: string;
    title: string;
    text: string;
    /**
     * Active statuses for the Failure report with space as separating character
     */
    activeStatusIds: string;
    /**
     * Status of the task
     */
    isCompleted: boolean;
    taskCodeId: string;
    taskCode: string;
    taskCodeGroupId: string;
    taskCodeGroup: string;
    /**
     * VW - Person responsible, VN - Vendor, AB - Department Resp., RT - Team Resp., ST - Position Resp., VU - User Resp.
     */
    taskResponsibleType: '' | 'VW' | 'VN' | 'VU' | 'AB' | 'RT' | 'ST';
    /**
     * Value is dependent on taskResponsibleType
     */
    taskResponsibleId: string;
    plannedStartDateTime: string | null;
    plannedEndDateTime: string | null;
    createdDateTime: string | null;
    completedDateTime: string | null;
    quantity: number;
};

