/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ActivityReportSimple = {
    recordId: string;
    tagId: string | null;
    tagPlantId: string;
    equipmentId: string;
    title: string;
    isOpen: boolean;
    /**
     * Active statuses for the maintenance record with space as separating character
     */
    activeStatusIds: string;
    /**
     * Datetime of activity report
     */
    createdDateTime?: string | null;
};

