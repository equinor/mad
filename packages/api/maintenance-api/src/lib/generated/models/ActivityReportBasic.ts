/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ActivityReportBasic = {
    recordId: string;
    tagId: string | null;
    tagPlantId: string;
    equipmentId: string;
    title: string;
    text: string;
    isOpen: boolean;
    workCenterId: string;
    workCenterPlantId: string;
    /**
     * Active statuses for the Failure report with space as separating character
     */
    activeStatusIds: string;
    /**
     * Datetime of activity report
     */
    createdDateTime?: string | null;
};

