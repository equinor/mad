/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProblemDetails = {
    /**
     * Reference to HTTP status definition
     */
    type?: string | null;
    /**
     * Description of error
     */
    title?: string | null;
    /**
     * HTTP status code
     */
    status?: number | null;
    /**
     * Detailed information about error
     */
    readonly extensions?: Record<string, Record<string, any>> | null;
    /**
     * Typically contains validations errors where the property name is the same of the property validated
     */
    errors?: Record<string, Array<string>> | null;
};

