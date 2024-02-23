/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModifiedEndpointsV1280Service {

    /**
     * Failure report - Attachment upload
     * Upload attachment for failure report
     *
     * Note: Attachment upload endpoints (including this one) do not support being called in parallel.
     *
     * ### Update release 1.17.0
     * Added `documentTitle` as input. If supplied, the title is added to all files that are sent
     * in the current request. If different titles are wanted for different files, they have to be sent in separately
     * (one file, one document title per request). When supplying a document-title, a new document will always be created for the attachment
     *
     * ### Update release 1.19.0
     * Added ability to supply `document-title` as a query parameter. If documentTitle is supplied both as form-data and query parameter, the query parameter
     * will take precedence. `document-title` should be Uri encoded.
     *
     * ### Update release 1.28.0
     * Added the optional parameter `document-id` as a query parameter.
     * If documentId is supplied, the attachment will be uploaded specifically to this document. `document-title` and `document-id` cannot be supplied together.
     *
     * @returns any Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static uploadFailureReportAttachment({
        recordId,
        documentTitle = null,
        documentId = null,
        formData,
    }: {
        recordId: string,
        documentTitle?: string | null,
        /**
         * `documentId` can be found by sending a GET request to: `/document-relationships/{relationship-type}/{source-id}`
         *
         */
        documentId?: string | null,
        formData?: {
            files: Array<Blob>;
            'document-title'?: string | null;
        },
    }): CancelablePromise<any | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/failure-reports/{record-id}/attachments',
            path: {
                'record-id': recordId,
            },
            query: {
                'document-title': documentTitle,
                'document-id': documentId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                403: `User does not have sufficient rights to upload attachment`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Activity report - Attachment upload
     * ### Overview
     * Upload attachment for activity report
     * Note: Attachment upload endpoints (including this one) do not support being called in parallel.
     *
     * ### Update release 1.28.0
     * Added the optional parameter `document-id` as a query parameter.
     * If documentId is supplied, the attachment will be uploaded specifically to this document.
     *
     * @returns any Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static uploadActivityReportAttachment({
        recordId,
        documentId = null,
        formData,
    }: {
        recordId: string,
        /**
         * `documentId` can be found by sending a GET request to: `/document-relationships/{relationship-type}/{source-id}`
         *
         */
        documentId?: string | null,
        formData?: {
            files?: Array<Blob>;
        },
    }): CancelablePromise<any | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/activity-reports/{record-id}/attachments',
            path: {
                'record-id': recordId,
            },
            query: {
                'document-id': documentId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                403: `User does not have sufficient rights to upload attachment`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Modification Proposal - Attachment upload
     * ### Overview
     * Upload attachment for modification proposal
     *
     * Note: Attachment upload endpoints (including this one) do not support being called in parallel.
     *
     * ### Update release 1.28.0
     * Added the optional parameter `document-id` as a query parameter.
     * If documentId is supplied, the attachment will be uploaded specifically to this document.
     *
     * @returns any Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static uploadModificationProposalAttachment({
        recordId,
        documentId = null,
        formData,
    }: {
        recordId: string,
        /**
         * `documentId` can be found by sending a GET request to: `/document-relationships/{relationship-type}/{source-id}`
         *
         */
        documentId?: string | null,
        formData?: {
            files?: Array<Blob>;
        },
    }): CancelablePromise<any | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/modification-proposals/{record-id}/attachments',
            path: {
                'record-id': recordId,
            },
            query: {
                'document-id': documentId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                403: `User does not have sufficient rights to upload attachment`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Technical Information Update Request - Attachment upload
     * ### Overview
     * Upload attachment for technical information update request.
     *
     * Note: Attachment upload endpoints (including this one) do not support being called in parallel.
     *
     * ### Update release 1.28.0
     * Added the optional parameter `document-id` as a query parameter.
     * If documentId is supplied, the attachment will be uploaded specifically to this document.
     *
     * @returns any Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static uploadTechnicalInformationUpdateRequestAttachment({
        recordId,
        documentId = null,
        formData,
    }: {
        recordId: string,
        /**
         * `documentId` can be found by sending a GET request to: `/document-relationships/{relationship-type}/{source-id}`
         *
         */
        documentId?: string | null,
        formData?: {
            files?: Array<Blob>;
        },
    }): CancelablePromise<any | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/technical-information-update-requests/{record-id}/attachments',
            path: {
                'record-id': recordId,
            },
            query: {
                'document-id': documentId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                403: `User does not have sufficient rights to upload attachment`,
                404: `The specified resource was not found`,
            },
        });
    }

}
