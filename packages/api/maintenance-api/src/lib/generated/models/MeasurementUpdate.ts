/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MeasurementUpdate = {
    /**
     * JSON Patch operation according to RFC6902
     */
    op: 'replace';
    /**
     * Path indicating the property to be impacted by the operation
     */
    path: '/measurementTitle' | '/processingStatusId';
    /**
     * Value to be assigned to a resource property based on the operation and path.
     *
     * Path specific information:
     * - /measurementTitle - max-length 40 characters
     * - /processingStatusId
     * - `1` - MeasReading processed: activities need to be carried out
     * - `2` - MeasReading processed: activities covered by planned task
     * - `7` - MeasReading processed: no activities need to be carried out
     *
     */
    value: string;
};

