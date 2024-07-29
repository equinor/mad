/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Attachment = {
    attachmentId: string;
    fileName: string;
    fileSize: string;
    mimeType: string;
    createdDateTime: string | null;
    /**
     * Document title providing additional information
     */
    documentTitle: string | null;
    /**
     * Internal type id of the document
     */
    documentType: string | null;
    /**
     * Internal document number
     */
    documentNumber: string | null;
    /**
     * Date when the document was created
     */
    documentCreatedDate?: string | null;
    _links: {
        enclosure?: string;
        documentEnclosure?: string;
    };
};

