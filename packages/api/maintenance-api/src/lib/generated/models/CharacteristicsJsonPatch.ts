/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * JsonPatch object with characteristics updates
 */
export type CharacteristicsJsonPatch = {
    /**
     * JSON Patch operation according to RFC6902
     */
    op: 'replace';
    /**
     * Path indicating the property to be impacted by the operation
     */
    path: '/valueId';
    /**
     * Value to be assigned to a resource property based on the operation and path.
     * Path specific information:
     * - /valueId - max length 30
     *
     */
    value: string;
};

