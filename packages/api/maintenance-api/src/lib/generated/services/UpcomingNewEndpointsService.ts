/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocumentURLReferencesAdd } from '../models/DocumentURLReferencesAdd';
import type { InstallEquipment } from '../models/InstallEquipment';
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UpcomingNewEndpointsService {

    /**
     * Equipment - Install
     * ### Overview
     * Install Equipment on a tag hierarchy.
     *
     * An equipment can be either installed on a Tag, or an Equipment.
     *
     * If `equipmentId` is provided in the body, the `equipmentId` from the path will be installed here.
     * If `tagPlantId`-`tagId` is provided in the body, the `equipmentId` from the path will be installed here.
     *
     * ### Important information
     * Both of these cases cannot be supported at the same time.
     * An equipment can not be installed at more than one place at a time.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static installEquipment({
        equipmentId,
        requestBody,
    }: {
        /**
         * The unique equipmentId in Equinor's system
         */
        equipmentId: string,
        /**
         * Install Equipment in a hierarchy.
         */
        requestBody: InstallEquipment,
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/equipment/{equipment-id}/install',
            path: {
                'equipment-id': equipmentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
            errors: {
                400: `Request is missing required parameters or \`equipmentId\` is located in the body alongside \`tagPlantId\`-\`tagId\``,
                403: `User does not have sufficient rights to install an equipment to a hierarchy`,
            },
        });
    }

    /**
     * Equipment - Dismantle
     * ### Overview
     * Dismantle Equipment on a tag hierarchy.
     *
     * An equipment can be either installed on a Tag, or an Equipment.
     * The correct installation needs to be provided in the body to be successfull.
     *
     * If `equipmentId` is provided in the body, the `equipmentId` from the path will be dismantled here.
     * If `tagPlantId`-`tagId` is provided in the body, the `equipmentId` from the path will be dismantled here.
     *
     * ### Important information
     * Both of these cases cannot be supported at the same time.
     * An equipment can not be installed at more than one place at a time.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static dismantleEquipment({
        equipmentId,
        requestBody,
        deleteEquipment = false,
    }: {
        /**
         * The unique equipmentId in Equinor's system
         */
        equipmentId: string,
        /**
         * Dismantle Equipment in a hierarchy.
         */
        requestBody: InstallEquipment,
        /**
         * Delete the equipment after dismantling
         */
        deleteEquipment?: boolean,
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/equipment/{equipment-id}/dismantle',
            path: {
                'equipment-id': equipmentId,
            },
            query: {
                'delete-equipment': deleteEquipment,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
            errors: {
                400: `Request is missing required parameters or \`equipmentId\` is located in the body alongside \`tagPlantId\`-\`tagId\``,
                403: `User does not have sufficient rights to dismantle an equipment to a hierarchy`,
            },
        });
    }

    /**
     * Document -  Add URL reference
     * ### Overview
     * Add a URL reference to a document.
     *
     * URL references are stored in the Document Management System (DMS).
     *
     * The following characteristicId can be used:
     * - `DISCIPLINE_B30`
     * - `ADDITIONAL_REFERENCE_B30`
     * - `DATE_OF_DOCUMENT_B30` (Date of photo/report)
     *
     * Existing URL references are available through the lookup endpoints for documents. Examples: `GET /documents/{document-id}?include-url-references=true&api-version=v1`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static addUrlReferenceToDocument({
        documentId,
        requestBody,
    }: {
        /**
         * Can be found by sending a GET request to: `/document-relationships/{relationship-type}/{source-id}`
         *
         */
        documentId: string,
        /**
         * Define URL reference to add
         */
        requestBody: DocumentURLReferencesAdd,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/documents/{document-id}/url-references',
            path: {
                'document-id': documentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights for updating document`,
                404: `The specified resource was not found`,
                409: `Document is locked by other user, characteristicId used are not suitable for the document`,
            },
        });
    }

    /**
     * Document - Remove URL reference
     * ### Overview
     * Remove a URL reference from an existing Document.
     *
     * Existing URL references can be found through the lookup endpoints for documents. Example: `GET /documents/{document-id}?include-url-references=true&api-version=v1`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static removeUrlReferenceFromDocument({
        documentId,
        urlReferenceId,
    }: {
        /**
         * Can be found by sending a GET request to: `/document-relationships/{relationship-type}/{source-id}`
         *
         */
        documentId: string,
        /**
         * Id of the URL reference
         */
        urlReferenceId: string,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/documents/{document-id}/url-references/{url-reference-id}',
            path: {
                'document-id': documentId,
                'url-reference-id': urlReferenceId,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to remove URL reference`,
                404: `The specified resource was not found`,
                409: `Document is locked by other user`,
            },
        });
    }

}
