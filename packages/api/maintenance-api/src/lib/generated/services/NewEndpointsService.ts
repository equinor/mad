/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CharacteristicsUpdate } from '../models/CharacteristicsUpdate';
import type { DocumentAddClass } from '../models/DocumentAddClass';
import type { DocumentBasic } from '../models/DocumentBasic';
import type { DocumentCreate } from '../models/DocumentCreate';
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NewEndpointsService {

    /**
     * Document - Create
     * ### Overview
     * Create a new document.
     * This document will not be linked to any business object, but can be linked afterwards by calling POST `/document-relationships/{relationship-type}/{source-id}`.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns DocumentBasic Created
     * @throws ApiError
     */
    public static createDocument({
        requestBody,
    }: {
        /**
         * Document to create
         */
        requestBody: DocumentCreate,
    }): CancelablePromise<ProblemDetails | DocumentBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/documents',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request, for example documentType is invalid.`,
                403: `User does not have sufficient rights to create an equipment.`,
            },
        });
    }

    /**
     * Document - Add characteristics
     * Add new characteristics to an existing document.
     *
     * Characteristics are grouped into a class such as `FL_MAINT_STRATEGY`. Classes can be assigned to a document and specific characteristics such as `CRIT_PRODUCTION` will then be available for that specific document.
     *
     * With this endpoint, the consumer can assign classes to a document and define initial values for some of the characteristics in the classes.
     *
     * Note that if a given characteristic has already been added to this document, repeated adding will result in overwriting of the characteristic value.
     * If you want to update a characteristic the `PATCH` endpoint can be used.
     *
     * ### Important information
     * Use GET `document-relationships/{relationship-type}/{source-id}` to view characteristics with value after using this endpoint.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static addCharacteristicsToDocument({
        documentId,
        requestBody,
    }: {
        documentId: string,
        /**
         * Characteristics to add to the document.
         */
        requestBody: Array<DocumentAddClass>,
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/documents/{document-id}/characteristics',
            path: {
                'document-id': documentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
            errors: {
                400: `Request is missing required parameters or characteristicId is not part of class`,
                403: `User does not have sufficient rights to add characteristics to measuring point`,
            },
        });
    }

    /**
     * Document - Update characteristic
     * Update existing values of characteristics on a document. If the characteristics does not exist, a `404 - Not Found` is returned.
     * ### Important information
     * Use GET `document-relationships/{relationship-type}/{source-id}` to view characteristics with value after using this endpoint.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateDocumentCharacteristics({
        documentId,
        requestBody,
    }: {
        documentId: string,
        /**
         * Characteristics to be updated, based on JsonPatch standard
         */
        requestBody: Array<CharacteristicsUpdate>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/documents/{document-id}/characteristics',
            path: {
                'document-id': documentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to characteristics`,
                404: `The specified resource was not found`,
                409: `Characteristics is locked by other user`,
            },
        });
    }

}
