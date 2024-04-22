/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DocumentBasic = {
    /**
     * Unique id for the document to be used against endpoints for the `/documents` resource
     */
    documentId?: string;
    /**
     * Title of the document
     */
    documentTitle?: string | null;
    /**
     * Internal document number
     */
    documentNumber?: string;
    /**
     * Internal type id of the document
     */
    documentType?: string;
    /**
     * Section of a document which is maintained as an independent document
     */
    documentPart?: string | null;
    /**
     * Identifies the version of the document
     */
    documentVersion?: string | null;
    /**
     * Date when the document was created
     */
    documentCreatedDate?: string | null;
};

