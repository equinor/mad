/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DocumentCreate = {
    /**
     * Document title providing additional information
     */
    documentTitle: string;
    /**
     * Internal type id of the document
     */
    documentType: string;
    /**
     * Section of a document which is maintained as an independent document
     */
    documentPart?: string;
    /**
     * Identifies the version of the document
     */
    documentVersion?: string;
    /**
     * Internal document number
     */
    documentNumber?: string;
    /**
     * Id of the Document status
     */
    statusId?: string;
    /**
     * Longtext field of the document
     */
    text?: string;
};

