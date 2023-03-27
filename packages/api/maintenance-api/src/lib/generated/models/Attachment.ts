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
    _links: {
        enclosure?: string;
    };
};

