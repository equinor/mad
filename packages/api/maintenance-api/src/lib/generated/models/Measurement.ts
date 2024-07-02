/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Measurement = {
    measurementId: string;
    /**
     * The recordId of related maintenance record (typically activity-report or failure-report)
     */
    maintenanceRecordId: string | null;
    measuringPointId: string;
    measurementDateTime: string;
    measurementTitle: string;
    quantitativeReading: number;
    quantitativeReadingUnitId: string;
    qualitativeCodeGroupId: string;
    qualitativeCodeId: string;
    /**
     * `1` - MeasReading processed: activities need to be carried out
     * `2` - MeasReading processed: activities covered by planned task
     * `7` -  MeasReading processed: no activities need to be carried out
     *
     */
    processingStatusId: string;
    /**
     * The Id of related Work Order
     */
    workOrderId: string | null;
};

