/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MeasuringPoint } from '../models/MeasuringPoint';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { RelationshipToDocument } from '../models/RelationshipToDocument';
import type { RelationshipToDocumentsAdd } from '../models/RelationshipToDocumentsAdd';
import type { TagHierachyItem } from '../models/TagHierachyItem';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModifiedEndpointsService {

    /**
     * Tag hierarchy - Get
     * Get the entire tag hierarchy for a plant.
     * For each tag you will be provided with catalog profile and the parent tag.
     *
     * ### Filter: by-root-tags
     * Limits the response to the sub-trees defined by the provided root tags.
     * Parameters:
     * - root-tag-id-any-of
     *
     * ### Important information
     * This returns a significant amount of data as it returns all tags for a plant (which may be up to 250 000).
     *
     * The data will be cached in the API and renewed on a daily basis.
     *
     * ### Update release v1.30.0
     * Added property `tag` to the response.
     *
     * Added query parameter `sub-hierarchy-limit` which controls how many levels below the root the response will contain.
     *
     * @returns TagHierachyItem Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getTagHierarchy({
        plantId,
        filter,
        rootTagIdAnyOf,
        subHierarchyLimit = 4,
    }: {
        plantId: string,
        /**
         * Filter to limit the tag hierachy by
         */
        filter?: 'by-root-tags',
        /**
         * Comma-separated list of tags (without tagPlantId prefix)
         */
        rootTagIdAnyOf?: string,
        /**
         * Limit the response to a certain number of levels below the root tag
         * If this parameter is omitted, a maximum of 4 sub levels will be included.
         *
         */
        subHierarchyLimit?: number,
    }): CancelablePromise<Array<TagHierachyItem> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/tag-hierarchy',
            path: {
                'plant-id': plantId,
            },
            query: {
                'filter': filter,
                'root-tag-id-any-of': rootTagIdAnyOf,
                'sub-hierarchy-limit': subHierarchyLimit,
            },
            errors: {
                404: `The specified resource was not found`,
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
     * ### Update release v1.27.0
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
     * Document relationships - Add new relationships
     * ### Overview
     * Add new relationship between a business object and documents.
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
     * ### Update release v1.27.0
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
     * ### Update release v1.27.0
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
     * ### Update release v1.27.0
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
     * Measuring points - Search
     * ### Overview
     * Search measuring points.
     *
     * ### Filter: by-plant
     * Search measuring points based on plant and one other property of the measuring point.
     * Parameters:
     * - plant-id
     *
     * At least one of the following parameters is required:
     *
     * - `tag-prefix`
     * - `measuring-position`
     * - `quantitative-characteristic`
     * - `qualitative-code-group`
     * - `measuring-point-name`
     * - `characteristic-value-any-of`
     *
     * ### Examples
     * `/measuring-points?filter=by-plant&plant-id=1180&tag-prefix=18HV10&api-version=v1`
     * `/measuring-points?filter=by-plant&plant-id=1102&quantitative-characteristic=SURFACE_MAINTEANC&api-version=v1`
     *
     * `/measuring-points?filter=by-plant&plant-id=1180&tag-prefix=18HV10&position=VALVE%20STATUS&include-last-measurement=true&api-version=v1`
     *
     *
     * When using the `characteristic-value-any-of` it is important to URI Encode the input data especially when there are special characters as part of the input:
     *
     * `/measuring-points?characteristic-value-any-of=%3D17445%2F9818,%3D17433/6333&class-id=L_PART&characteristic-id=L_E3DREF&plant-id=1201&api-version=v1`
     *
     * ### Update release v1.10.0
     * Added property `maintenanceRecordId` to measurements.
     *
     * Added `include-characteristics` and `include-characteristics-without-value` query parameter.
     *
     * ### Update release v1.15.0
     * Added `workOrderId` to response.
     *
     * ### Update release v1.20.0
     * Edited the response structure to support pagination. Use the parameters `page` and `per-page` in the parameters to edit wanted response.
     *
     * ### Update release v1.21.0
     * Measuring points for equipment are now included in searches based on `plant-id`.
     * Measuring points for equipment now include the `tagId` and `tagPlantId` of the tag the equipment is installed on.
     *
     * ### Update release v1.22.0
     * To limit the response data for filter `by-plant`, at least one of the additional parameters must be provided.
     *
     * ### Update release v1.30.0
     * Added `characteristic-value-any-of`, `class-id` and `characteristic-id` query parameters.
     * Can be used to search for measuring points based on values of a characteristic.
     *
     * @returns MeasuringPoint Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchMeasuringPoints({
        filter,
        plantId,
        tagPrefix,
        measuringPosition,
        quantitativeCharacteristic,
        qualitativeCodeGroup,
        measuringPointName,
        includeLastMeasurement = false,
        includeMeasurements = false,
        includeQualitativeCodeGroup = false,
        includeCharacteristics = false,
        includeCharacteristicsWithoutValue = false,
        perPage = 50,
        page = 1,
        characteristicId,
        classId,
        characteristicValueAnyOf,
    }: {
        /**
         * Filter to limit the measuring points by
         */
        filter: 'by-plant',
        /**
         * Plant the tag-prefix belongs to
         */
        plantId?: string,
        /**
         * The first few characters of the tag
         */
        tagPrefix?: string,
        /**
         * Limit result based on a specific measuring position value
         */
        measuringPosition?: string,
        /**
         * Limit result based on a specific quantitative characteristic value
         */
        quantitativeCharacteristic?: string,
        /**
         * Limit result based on a specific qualitative code group value
         */
        qualitativeCodeGroup?: string,
        /**
         * Limit result based on a specific measuring point name value
         */
        measuringPointName?: string,
        /**
         * Include the last measurement of the measuring points
         */
        includeLastMeasurement?: boolean,
        /**
         * Include measurements of the measuring points
         */
        includeMeasurements?: boolean,
        /**
         * Include possible codes for qualitative measurements if qualitativeCodeGroupId is set
         */
        includeQualitativeCodeGroup?: boolean,
        /**
         * Include characteristics with defined value for the measuring points. Use `include-characteristics-without-value` to retrieve all characteristics available for the measuring points.
         */
        includeCharacteristics?: boolean,
        /**
         * Include all characteristics available for the measuring points regardless if they have a defined value or not. Use `include-characteristics` to only include characteristics with defined value for the measuring points.
         */
        includeCharacteristicsWithoutValue?: boolean,
        /**
         * Results to return pr page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
        /**
         * Required field if `characteristic-value-any-of` is supplied. Endpoint [/characteristics/{class-id}](#operation/LookupClass) can be used to find characteristic ids.
         */
        characteristicId?: string | null,
        /**
         * Required field if `characteristic-value-any-of` is supplied.
         */
        classId?: string | null,
        /**
         * Search based on characteristic values. Must be used in combination with `class-id` and `characteristic-id`. Wildcards are not supported. Make sure to encode the parameters if they contain special characters.
         */
        characteristicValueAnyOf?: string,
    }): CancelablePromise<Array<MeasuringPoint> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measuring-points',
            query: {
                'filter': filter,
                'plant-id': plantId,
                'tag-prefix': tagPrefix,
                'measuring-position': measuringPosition,
                'quantitative-characteristic': quantitativeCharacteristic,
                'qualitative-code-group': qualitativeCodeGroup,
                'measuring-point-name': measuringPointName,
                'include-last-measurement': includeLastMeasurement,
                'include-measurements': includeMeasurements,
                'include-qualitative-code-group': includeQualitativeCodeGroup,
                'include-characteristics': includeCharacteristics,
                'include-characteristics-without-value': includeCharacteristicsWithoutValue,
                'per-page': perPage,
                'page': page,
                'characteristic-id': characteristicId,
                'class-id': classId,
                'characteristic-value-any-of': characteristicValueAnyOf,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

}
