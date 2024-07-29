/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MeasurementCreate = {
    /**
     * When the measurement was performed. If not provided, the current datetime will be used.
     */
    measurementDateTime?: string;
    /**
     * The recordId of related maintenance record (typically activity-report or failure-report)
     */
    maintenanceRecordId?: string;
    quantitativeReading?: number;
    qualitativeCodeGroupId?: string;
    qualitativeCodeId?: string;
    measurementTitle?: string;
    /**
     * `1` - MeasReading processed: activities need to be carried out
     * `2` - MeasReading processed: activities covered by planned task
     * `7` -  MeasReading processed: no activities need to be carried out
     *
     */
    processingStatusId?: string;
    /**
     * The workOrderId of the related work order
     */
    workOrderId?: string;
};

