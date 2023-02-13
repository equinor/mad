export type Attachment = {
    attachmentId: string;
    fileName: string;
    fileSize: string;
    mimeType: string;
    createdDateTime: string | null;
    _links: {
        enclosure?: string;
    };
};
