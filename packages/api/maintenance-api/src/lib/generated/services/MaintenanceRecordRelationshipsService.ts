/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProblemDetails } from '../models/ProblemDetails';
import type { RelationshipURLReferencesAdd } from '../models/RelationshipURLReferencesAdd';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MaintenanceRecordRelationshipsService {

    /**
     * Maintenance record relationships -  Add URL reference
     * ### Overview
     * Add a URL reference to a maintenance record.
     *
     * Supported maintenance record types:
     * - Activity reports
     * - Failure reports
     *
     * URL references are stored in the Document Management System (DMS). If there exist a DMS document for the provided characteristics it will be reused, otherwise a new DMS document will be created.
     *
     * The following characteristicId can be used:
     * - `DISCIPLINE_B30`
     * - `ADDITIONAL_REFERENCE_B30`
     * - `DATE_OF_DOCUMENT_B30` (Date of photo / report)
     *
     * Existing URL references are available through the lookup endpoints for maintenance records. Examples: `GET /maintenance-records/failure-reports/{record-id}?include-url-references=true&api-version=v1`
     *
     * ## Update release 1.28.0
     * Added optional input field `documentId`.
     * If documentId is supplied, the attachment will be uploaded specifically to this document.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static addRelationshipFromMaintenanceRecordToUrlReference({
        recordId,
        requestBody,
    }: {
        /**
         * Id of the maintenance record (can be any type)
         */
        recordId: string,
        /**
         * Define URL reference to add relationship
         */
        requestBody: RelationshipURLReferencesAdd,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-record-relationships/{record-id}/url-references',
            path: {
                'record-id': recordId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights for updating maintenance record`,
                404: `The specified resource was not found`,
                409: `Maintenance record is locked by other user, characteristicId used are not suitable for the maintenance record type or type of maintenance record not supported`,
            },
        });
    }

    /**
     * Maintenance record relationships - Remove URL reference
     * ### Overview
     * Remove a URL reference from an existing maintenance record.
     *
     * Existing URL references can be found through the lookup endpoints for maintenance records. Example: `GET /maintenance-records/failure-reports/{record-id}?include-url-references=true&api-version=v1`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static removeRelationshipFromMaintenanceRecordToUrl({
        recordId,
        urlReferenceId,
    }: {
        /**
         * Id of the maintenance record (can be any type)
         */
        recordId: string,
        /**
         * Id of the URL reference
         */
        urlReferenceId: string,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/maintenance-record-relationships/{record-id}/url-references/{url-reference-id}',
            path: {
                'record-id': recordId,
                'url-reference-id': urlReferenceId,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to work order`,
                404: `The specified resource was not found`,
                409: `Maintenance record is locked by other user or it is not possible to remove the relationship`,
            },
        });
    }

}
