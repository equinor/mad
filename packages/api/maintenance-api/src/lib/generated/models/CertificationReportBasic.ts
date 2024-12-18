/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CertificationReportSimple } from './CertificationReportSimple';

export type CertificationReportBasic = (CertificationReportSimple & {
    text: string;
    /**
     * The point in time when the failure started
     */
    failureStartDateTime: string | null;
    /**
     * The point in time when the failure was resolved
     */
    failureEndDateTime: string | null;
});

