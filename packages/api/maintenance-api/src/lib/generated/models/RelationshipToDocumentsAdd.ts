/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RelationshipToDocumentsAdd = {
    /**
     * Unique id for the document to be used against endpoints for the `/documents` resource
     */
    documentId?: string;
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
};

