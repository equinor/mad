/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ActivityReportJsonPatch = {
    /**
     * JSON Patch operation according to RFC6902
     *
     * Operation `replace` is suitable for the following properties:
     * - `/title`
     * - `/text`
     *
     * Operation `append` is suitable for the following properties:
     * - `/text`
     *
     * Operation `prepend` is suitable for the following properties:
     * - `/text`
     *
     */
    op: 'replace' | 'append' | 'prepend';
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

