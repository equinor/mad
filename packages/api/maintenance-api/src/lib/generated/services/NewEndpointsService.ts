/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CatalogProfile } from '../models/CatalogProfile';
import type { CatalogProfileWithText } from '../models/CatalogProfileWithText';
import type { CertificationReportBasic } from '../models/CertificationReportBasic';
import type { CertificationReportCreate } from '../models/CertificationReportCreate';
import type { DocumentURLReferencesAdd } from '../models/DocumentURLReferencesAdd';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { TagHierarchyTree } from '../models/TagHierarchyTree';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NewEndpointsService {

    /**
     * Tag hierarchy tree - Get
     * Get the entire tag hierarchy for a plant in a tree structure.
     * For each tag you will be provided with catalog profile and the parent tag.
     *
     * ### Important information
     * The query parameter `root-tag-id` is mandatory and is the root tag for the hierarchy.
     * Use the query parameter `sub-hierarchy-limit` to control how many levels below the root the response will contain.
     *
     * The data will be cached in the API and renewed on a daily basis.
     *
     * The property `subTagHierarchy` is an array of `TagHierarchyTree` objects, meaning that this is a recursive property.
     * When the array is empty, either the sub-limit has restricted further levels to serialize, or the hierarchy has reached the bottom.
     * The property `isEndNode` indicates if there are further tags in the hierarchy which can be looked up with a subsequent request.
     *
     * @returns TagHierarchyTree Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getTagHierarchyTree({
        plantId,
        rootTagId,
        subHierarchyLimit = 4,
    }: {
        plantId: string,
        /**
         * The root tag for the hierarchy
         */
        rootTagId: string,
        /**
         * Limit the response to a certain number of levels below the root tag.
         * If this parameter is omitted, a maximum of 4 sub levels will be included.
         * Setting this parameter to 0 will output the full depth of the hierarchy tree.
         *
         */
        subHierarchyLimit?: number,
    }): CancelablePromise<TagHierarchyTree | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/tag-hierarchy-tree',
            path: {
                'plant-id': plantId,
            },
            query: {
                'root-tag-id': rootTagId,
                'sub-hierarchy-limit': subHierarchyLimit,
            },
            errors: {
                404: `The specified resource was not found`,
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

    /**
     * Catalog Profiles - Search
     * ### Overview
     * Returns a list of Catalog Profiles for the given `catalog-profile-id`s. This endpoint allows for including the following multi-line `helpText` properties if `include-text=true` is set in the request:
     * - `failureModeHelpText` for `failureModes`
     * - `detectionMethodHelpText` for `detectionMethods`
     * - `failureMechanismHelpText` for `failureMechanisms`
     *
     * These are not included by default due to their detrimental effect on the performance of this endpoint.
     *
     * @returns any Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchCatalogProfiles({
        catalogProfileId,
        includeText = false,
    }: {
        /**
         * List of `catalog-profile-id`s to search for
         */
        catalogProfileId: string,
        /**
         * Include helpText properties for failureModes, detectionMethods and failureMechanisms in the response. Affects performance.
         */
        includeText?: boolean,
    }): CancelablePromise<Array<(CatalogProfile | CatalogProfileWithText)> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/catalogs/profiles',
            query: {
                'catalog-profile-id': catalogProfileId,
                'include-text': includeText,
            },
            errors: {
                400: `The request was malformed or contained invalid parameters.`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Work order operation - Remove safety measure
     * Remove a safety measure from a work order operation.
     *
     * The `operation-id` and `document-id` parameters to use in the request URL can be found using the various Lookup and Search endpoints for Work orders, typically by using the `include-operations` query parameter.
     *
     * - `operation-id` consists of two internal ids from the ERP system called routing number and counter separated by the `-` character.
     * - `document-id` consists of four parts separated by the `-` character: A `document number` of up to 25 characters (e.g. `WORK AT HEIGHT`), the `document type` (e.g. `B30`, `A01`), a 3-digit `document part` (e.g. `000`), and a 2-digit `document version` part (e.g. `01`).
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static removeSafetyMeasure({
        operationId,
        documentId,
    }: {
        /**
         * The `operation-id` of the Work order operation that has the safety measure document to remove.
         */
        operationId: string,
        /**
         * Unique id for the safety measure document to remove.
         */
        documentId: string,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/work-order-operations/{operation-id}/safety-measures/{document-id}',
            path: {
                'operation-id': operationId,
                'document-id': documentId,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update work order operation`,
                404: `The specified resource was not found`,
                409: `Work order operation is locked by other user or it is not possible to remove the safety measure`,
            },
        });
    }

    /**
     * Certification report - Attachment upload
     * Upload attachment for certification report
     *
     * Limitations of Attachment upload endpoints:
     * - No support for parallel calls (uploading multiple attachments at once).
     * - Maximum file size is 60 MB. Files between 60.0MB - 99.9MB will give a 400 error. Files larger than 100MB will result in a `413 Request Entity Too Large' Error in HTML. This is due to constraints in the underlying system and is outside of our control.
     *
     * ### Important information
     * If `documentTitle` is supplied, the title is added to all files that are sent
     * in the current request. If different titles are wanted for different files, they have to be sent in separately
     * (one file, one document title per request). When supplying a document-title, a new document will always be created for the attachment
     *
     * If documentTitle is supplied both as form-data and query parameter, the query parameter
     * will take precedence.
     *
     * If `document-id` is supplied, the attachment will be uploaded specifically to this document. `document-title` and `document-id` cannot be supplied together.
     *
     * @returns any Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static uploadCertificationReportAttachment({
        recordId,
        documentTitle = null,
        documentId = null,
        formData,
    }: {
        recordId: string,
        documentTitle?: string | null,
        /**
         * Can be found by sending a GET request to: `/document-relationships/{relationship-type}/{source-id}`
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
            url: '/maintenance-records/certification-reports/{record-id}/attachments',
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
                413: `Request Entity Too Large.
                This error occurs when the size of an attachment exceeds 100MB.
                `,
            },
        });
    }

    /**
     * Certification report - Create
     * Create new certification report.
     *
     * The following endpoints can be used to find possible values for input:
     * 1. `workCenterId` - [/plants/{plant-id}?include-work-centers](#operation/LookupPlant)
     * 1. `plannerGroupId` - [/plants/{plant-id}?include-planner-groups=true](#operation/LookupPlant)
     * 1. `locationId` - [/plants/{plant-id}?include-locations=true](#operation/LookupPlant)
     * 1. `detectionMethodId`, `failureMechanismId`, `failureModeId` - [/plants/{plant-id}/tags/{tag-id}?include-catalog-profile-details=true](#operation/LookupTag) or [/equipment/{equipment-id}?include-catalog-profile-details=true](#operation/LookupEquipment)
     *
     * ### Important information
     * It is possible to create certification report for either tagId or equipmentId.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns CertificationReportBasic Created
     * @throws ApiError
     */
    public static createCertificationReport({
        requestBody,
    }: {
        /**
         * Certification report to create
         */
        requestBody: CertificationReportCreate,
    }): CancelablePromise<ProblemDetails | CertificationReportBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/certification-reports',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User does not have sufficient rights to create a failure report`,
            },
        });
    }

}
