/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EquipmentAttachment = {
    attachmentId: string;
    fileName: string;
    fileSize: string;
    mimeType: string;
    createdDateTime: string | null;
    /**
     * Document title providing additional information to the attachment
     */
    documentTitle: string;
    /**
     * Internal type id of the document
     */
    documentType: string;
    /**
     * Internal document number
     */
    documentNumber: string;
    _links: {
        enclosure?: string;
    };
};
