/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommunicationBasic } from './CommunicationBasic';

export type CommunicationCreate = (CommunicationBasic & {
    /**
     * If true, an email will be sent to the recipients. If false, no email will be sent.
     *
     */
    sendEmail: boolean;
});

