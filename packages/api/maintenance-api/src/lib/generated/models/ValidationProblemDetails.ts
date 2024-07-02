/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProblemDetails } from './ProblemDetails';

export type ValidationProblemDetails = (ProblemDetails & {
    /**
     * Contains the same information as the `errors` field, but presented in a different format, as a list of strings.
     */
    errorDetails?: Array<string> | null;
    /**
     * Summary of properties that failed validation, or details about the error.
     */
    detail?: string | null;
});

