/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CharacteristicsUpdate } from '../models/CharacteristicsUpdate';
import type { Document } from '../models/Document';
import type { DocumentAddClass } from '../models/DocumentAddClass';
import type { DocumentBasic } from '../models/DocumentBasic';
import type { DocumentCreate } from '../models/DocumentCreate';
import type { DocumentRelationshipToBusinessObjectsAdd } from '../models/DocumentRelationshipToBusinessObjectsAdd';
import type { DocumentURLReferencesAdd } from '../models/DocumentURLReferencesAdd';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { RelationshipToDocument } from '../models/RelationshipToDocument';
import type { RelationshipToDocumentsAdd } from '../models/RelationshipToDocumentsAdd';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DocumentsService {

    /**
     * Document - Search
     * ### Overview
     * Search documents and include related information such as characteristics, materials, equipment and attachments.
     *
     *
     * The client must in the request provide at least one of the following search parameters:
     * * `document-type-any-of`
     * * `document-number-any-of`
     * * `characteristic-value-any-of`
     *
     * **N.B** The link in the attachment object is in the first iteration always routed via the equipment attachment endpoint.
     * In a future release we will implement a general endpoint `documents/attachment/{attachment-id}` for downloading attachments which will be displayed here.
     *
     * ### Update release 1.31.0
     * Added `include-inventory-count` query parameter to include `equipmentInventoryCount` and `materialInventoryCount` property in the response.
     *
     * Added support for including more business objects: `include-tags`, `include-measuring-points` and `include-maintenance-records`.
     *
     * ### Update in upcoming release
     * Added `include-url-references` query parameter to include URL references in the response.
     *
     * @returns Document Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchDocuments({
        documentTypeAnyOf,
        documentNumberAnyOf,
        characteristicValueAnyOf,
        characteristicId,
        classId,
        includeCharacteristics = false,
        includeMaterial = false,
        includeEquipment = false,
        includeTags = false,
        includeMaintenanceRecords = false,
        includeMeasuringPoints = false,
        includeAttachments = false,
        includeInventoryCount = false,
        includeUrlReferences = false,
        perPage = 50,
        page = 1,
    }: {
        /**
         * Search based on `documentType`.
         */
        documentTypeAnyOf?: Array<string>,
        /**
         * Search based on `documentNumber`.
         */
        documentNumberAnyOf?: Array<string>,
        /**
         * Search based on characteristic values. Must be used in combination with `class-id` and `characteristic-id` Wildcards are not supported. Make sure to encode the parameters if they contain special characters.
         */
        characteristicValueAnyOf?: string,
        /**
         * Required field if `characteristic-value-any-of` is supplied. Endpoint [/characteristics/{class-id}](#operation/LookupClass) can be used to find characteristic ids
         */
        characteristicId?: string | null,
        /**
         * Required field if `characteristic-value-any-of` is supplied.
         */
        classId?: string | null,
        /**
         * Include tag characteristics such as 'Function Fail Consequence' and 'Safety Critical Element (SCE)'
         */
        includeCharacteristics?: boolean,
        /**
         * Include material related to the object
         */
        includeMaterial?: boolean,
        /**
         * Include equipment related to the object
         */
        includeEquipment?: boolean,
        /**
         * Include tags.
         */
        includeTags?: boolean,
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all supported types are returned
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include measuring points for this tag
         */
        includeMeasuringPoints?: boolean,
        /**
         * Include equipment or tag attachments
         */
        includeAttachments?: boolean,
        includeInventoryCount?: boolean,
        /**
         * Include URL references for object
         */
        includeUrlReferences?: boolean,
        /**
         * Results to return pr page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<Document> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/documents',
            query: {
                'document-type-any-of': documentTypeAnyOf,
                'document-number-any-of': documentNumberAnyOf,
                'characteristic-value-any-of': characteristicValueAnyOf,
                'characteristic-id': characteristicId,
                'class-id': classId,
                'include-characteristics': includeCharacteristics,
                'include-material': includeMaterial,
                'include-equipment': includeEquipment,
                'include-tags': includeTags,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-measuring-points': includeMeasuringPoints,
                'include-attachments': includeAttachments,
                'include-inventory-count': includeInventoryCount,
                'include-url-references': includeUrlReferences,
                'per-page': perPage,
                'page': page,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to view document`,
                404: `The specified resource was not found`,
            },
        });
    }

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
     * Document - Lookup
     * ### Overview
     * Lookup document by id. Use the different include parameters to include additional information about the document.
     * [POST document-relationships/{relationship-type}/{source-id}](#operation/AddRelationshipsToDocument) can be used to link the document to a business object.
     *
     * **N.B** The link in the attachment object is in the first iteration always routed via the equipment attachment endpoint.
     * In a future release we will implement a general endpoint `documents/attachment/{attachment-id}` for downloading attachments which will be displayed here.
     *
     * ### Update release 1.31.0
     * Added `include-inventory-count` query parameter to include `equipmentInventoryCount` and `materialInventoryCount` property in the response.
     *
     * Added support for including more business objects: `include-tags`, `include-measuring-points` and `include-maintenance-records`.
     *
     * ### Update in upcoming release
     * Added `include-url-references` query parameter to include URL references in the response.
     *
     * @returns Document Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupDocument({
        documentId,
        includeCharacteristics = false,
        includeMaterial = false,
        includeEquipment = false,
        includeTags = false,
        includeMaintenanceRecords = false,
        includeMeasuringPoints = false,
        includeAttachments = false,
        includeInventoryCount = false,
        includeUrlReferences = false,
    }: {
        /**
         * Unique id for the document to be used against endpoints for the `/documents` resource
         */
        documentId: string,
        /**
         * Include tag characteristics such as 'Function Fail Consequence' and 'Safety Critical Element (SCE)'
         */
        includeCharacteristics?: boolean,
        /**
         * Include material related to the object
         */
        includeMaterial?: boolean,
        /**
         * Include equipment related to the object
         */
        includeEquipment?: boolean,
        /**
         * Include tags.
         */
        includeTags?: boolean,
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all supported types are returned
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include measuring points for this tag
         */
        includeMeasuringPoints?: boolean,
        /**
         * Include equipment or tag attachments
         */
        includeAttachments?: boolean,
        includeInventoryCount?: boolean,
        /**
         * Include URL references for object
         */
        includeUrlReferences?: boolean,
    }): CancelablePromise<Document | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/documents/{document-id}',
            path: {
                'document-id': documentId,
            },
            query: {
                'include-characteristics': includeCharacteristics,
                'include-material': includeMaterial,
                'include-equipment': includeEquipment,
                'include-tags': includeTags,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-measuring-points': includeMeasuringPoints,
                'include-attachments': includeAttachments,
                'include-inventory-count': includeInventoryCount,
                'include-url-references': includeUrlReferences,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to view document`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Documents - Add new relationships to a document
     * ### Overview
     * Add new relationships between a single document and one or more business objects.
     *
     * Example url: `/documents/10004099768-A01-000-00?api-version=v1`
     *
     * This endpoint returns no response data.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static addRelationshipBetweenBusinessObjectsAndSingleDocument({
        documentId,
        requestBody,
    }: {
        /**
         * Can be found by sending a GET request to: `/document-relationships/{relationship-type}/{source-id}`
         *
         */
        documentId: string,
        /**
         * Business objects to add a relationship to from the specified `documentId`
         */
        requestBody: Array<DocumentRelationshipToBusinessObjectsAdd>,
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/documents/{document-id}/relationships',
            path: {
                'document-id': documentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update document`,
                404: `The specified resource was not found`,
                409: `Document is locked by other user`,
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
     * Document relationships - Get relationships
     * ### Overview
     * Get relationship between a business object and documents.
     *
     * Example urls:
     * - Tags: `/document-relationships/tags/1100-AE5566?api-version=v1`
     * - Equipment: `/document-relationships/equipment/11948620?api-version=v1`
     * - Measuring points: `/document-relationships/measuring-points/14626974?api-version=v1`
     * - Maintenance records: `/document-relationships/maintenance-records/45939208?api-version=v1`
     * - Materials: `/document-relationships/materials/741466?api-version=v1`
     *
     * ### Update release 1.27.0
     * Added support for business objects: Equipment, Measuring points and Maintenance records.
     *
     * Added `include-characteristics` and `include-attachments`.
     *
     * Added property `documentTitle` to the response.
     *
     * ### Update release 1.28.0
     * Added property `documentCreatedDate` to the response.
     *
     * ### Update release 1.30.0
     * Added possibility to search by document relationship to material.
     *
     * @returns RelationshipToDocument Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupRelationshipsToDocument({
        relationshipType,
        sourceId,
        includeCharacteristics = false,
        includeAttachments = false,
    }: {
        /**
         * Type of business object to replace relationships to documents for
         */
        relationshipType: 'tags' | 'equipment' | 'measuring-points' | 'maintenance-records' | 'materials',
        sourceId: string,
        /**
         * Include tag characteristics such as 'Function Fail Consequence' and 'Safety Critical Element (SCE)'
         */
        includeCharacteristics?: boolean,
        /**
         * Include equipment or tag attachments
         */
        includeAttachments?: boolean,
    }): CancelablePromise<Array<RelationshipToDocument> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/document-relationships/{relationship-type}/{source-id}',
            path: {
                'relationship-type': relationshipType,
                'source-id': sourceId,
            },
            query: {
                'include-characteristics': includeCharacteristics,
                'include-attachments': includeAttachments,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to view document`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Document relationships - Add new document relationships to a business object
     * ### Overview
     * Add new relationships between a single business object and one or more documents.
     *
     * The documents specified in the the request must contain one of:
     * - `documentId`
     * - `documentNumber`, `documentType`, `documentPart`, `documentVersion`
     * - `documentNumber`, `documentType`
     *
     * Example urls:
     * - Tags: `/document-relationships/tags/1100-AE5566?api-version=v1`
     * - Equipment: `/document-relationships/equipment/11948620?api-version=v1`
     * - Measuring points: `/document-relationships/measuring-points/14626974?api-version=v1`
     * - Maintenance records: `/document-relationships/maintenance-records/45939208?api-version=v1`
     * - Materials: `/document-relationships/materials/741466?api-version=v1`
     *
     * This endpoint returns no response data.
     *
     * ### Update release 1.27.0
     * Added support for business objects: Equipment, Measuring points and Maintenance records.
     *
     * ### Update release 1.30.0
     * Added possibility to create document relationship to material.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static addRelationshipsToDocument({
        relationshipType,
        sourceId,
        requestBody,
    }: {
        /**
         * Type of business object to replace relationships to documents for
         */
        relationshipType: 'tags' | 'equipment' | 'measuring-points' | 'maintenance-records' | 'materials',
        sourceId: string,
        /**
         * Documents to add a relationship to from the `sourceId`
         */
        requestBody: Array<RelationshipToDocumentsAdd>,
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/document-relationships/{relationship-type}/{source-id}',
            path: {
                'relationship-type': relationshipType,
                'source-id': sourceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update document`,
                404: `The specified resource was not found`,
                409: `Document is locked by other user`,
            },
        });
    }

    /**
     * Document relationships - Replace relationships
     * ### Overview
     * Replace existing relationship between a business object and documents.
     *
     * The documents specified in the the request must contain one of:
     * - `documentId`
     * - `documentNumber`, `documentType`, `documentPart`, `documentVersion`
     * - `documentNumber`, `documentType`
     *
     * Example urls:
     * - Tags: `/document-relationships/tags/1100-AE5566?api-version=v1`
     * - Equipment: `/document-relationships/equipment/11948620?api-version=v1`
     * - Measuring points: `/document-relationships/measuring-points/14626974?api-version=v1`
     * - Maintenance records: `/document-relationships/maintenance-records/45939208?api-version=v1`
     * - Materials: `/document-relationships/materials/741466?api-version=v1`
     *
     *
     * This endpoint returns no response data.
     *
     * ### Important information
     * NOTE: Take special care when using this endpoint. The PUT operation will remove any document relationships from the `source-id`(for example tags) which are not present in the request body. Normally, the corresponding POST operation should be used as it only adds new relationships and never removes existing ones.
     *
     * ### Update release 1.27.0
     * Added support for business objects: Equipment, Measuring points and Maintenance records.
     *
     * ### Update release 1.30.0
     * Added possibility to replace document relationship to material.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static replaceRelationshipsToDocument({
        relationshipType,
        sourceId,
        requestBody,
    }: {
        /**
         * Type of business object to replace relationships to documents for
         */
        relationshipType: 'tags' | 'equipment' | 'measuring-points' | 'maintenance-records' | 'materials',
        sourceId: string,
        /**
         * Documents to replace a relationship to from the `sourceId`
         */
        requestBody: Array<RelationshipToDocumentsAdd>,
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/document-relationships/{relationship-type}/{source-id}',
            path: {
                'relationship-type': relationshipType,
                'source-id': sourceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update document`,
                404: `The specified resource was not found`,
                409: `Document is locked by other user`,
            },
        });
    }

    /**
     * Document relationships - Remove relationships
     * ### Overview
     * Remove one or more relationships between a business object and documents.
     *
     * The documents specified in the the request must contain one of:
     * - `documentId`
     * - `documentNumber`, `documentType`, `documentPart`, `documentVersion`
     * - `documentNumber`, `documentType`
     *
     * Example urls:
     * - Tags: `/document-relationships/tags/1100-AE5566?api-version=v1`
     * - Equipment: `/document-relationships/equipment/11948620?api-version=v1`
     * - Measuring points: `/document-relationships/measuring-points/14626974?api-version=v1`
     * - Maintenance records: `/document-relationships/maintenance-records/45939208?api-version=v1`
     * - Materials: `/document-relationships/materials/741466?api-version=v1`
     *
     *
     * This endpoint returns no response data.
     *
     * ### Update release 1.27.0
     * Added support for business objects: Equipment, Measuring points and Maintenance records.
     *
     * ### Update release 1.30.0
     * Added possibility to delete document relationship to material.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static removeRelationshipsToDocument({
        relationshipType,
        sourceId,
        requestBody,
    }: {
        /**
         * Type of business object to replace relationships to documents for
         */
        relationshipType: 'tags' | 'equipment' | 'measuring-points' | 'maintenance-records' | 'materials',
        sourceId: string,
        /**
         * Documents to remove a relationship to from the `sourceId`
         */
        requestBody: Array<RelationshipToDocumentsAdd>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/document-relationships/{relationship-type}/{source-id}',
            path: {
                'relationship-type': relationshipType,
                'source-id': sourceId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update document`,
                404: `The specified resource was not found`,
                409: `Document is locked by other user`,
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
        /**
         * Can be found by sending a GET request to: `/document-relationships/{relationship-type}/{source-id}`
         *
         */
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
        /**
         * Can be found by sending a GET request to: `/document-relationships/{relationship-type}/{source-id}`
         *
         */
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

    /**
     * Document - Attachment download
     * ### Overview
     * Download a single attachment from a specific document.
     *
     * @returns binary Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static downloadDocumentAttachment({
        documentId,
        attachmentId,
    }: {
        /**
         * Can be found by sending a GET request to: `/document-relationships/{relationship-type}/{source-id}`
         *
         */
        documentId: string,
        attachmentId: string,
    }): CancelablePromise<Blob | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/documents/{document-id}/attachments/{attachment-id}',
            path: {
                'document-id': documentId,
                'attachment-id': attachmentId,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Document - Remove attachment
     * ### Overview
     * Remove an attachment from an existing DMS document linked to a maintenance record.
     *
     * This endpoint returns no response data. Perform a lookup on the linked maintenance record to get updated information.
     *
     * Currently, this endpoint only supports removing attachments from documents of type 'B30'.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static removeAttachmentFromDocument({
        documentId,
        attachmentId,
    }: {
        /**
         * Can be found by sending a GET request to: `/document-relationships/{relationship-type}/{source-id}`
         *
         */
        documentId: string,
        attachmentId: string,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/documents/{document-id}/attachments/{attachment-id}',
            path: {
                'document-id': documentId,
                'attachment-id': attachmentId,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights`,
                404: `The specified resource was not found`,
                409: `Document is locked by other user or it is not possible to remove the relationship`,
            },
        });
    }

}
