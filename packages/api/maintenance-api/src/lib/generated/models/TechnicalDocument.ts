/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from "./Attachment";
import type { URLReference } from "./URLReference";

export type TechnicalDocument = {
    documentId?: string;
    /**
     * Is the technical document cancelled and should not be used anymore
     */
    isCancelled?: boolean;
    /**
     * Characteristics are metadata for the technical document
     */
    characteristics?: Array<{
        /**
         * Id of characteristic containing additional metadata.
         */
        characteristicId?: string;
        valueId?: string;
    }>;
    /**
     * Attachment in the technical document
     */
    attachments?: Array<Attachment>;
    /**
     * URL references in the technical document
     */
    urlReferences?: Array<URLReference>;
};
