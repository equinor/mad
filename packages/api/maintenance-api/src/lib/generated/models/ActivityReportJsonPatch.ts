/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ActivityReportJsonPatch = {
    /**
     * JSON Patch operation according to RFC6902
     */
    op: 'replace';
    /**
     * Path indicating the property to be impacted by the operation
     */
    path: '/title' | '/text';
    /**
     * Value to be assigned to a resource property based on the operation and path.
     *
     * Path specific information:
     * - /title - max-length 40 characters
     *
     */
    value: string;
};

