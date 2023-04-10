/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlanningPlantRevision } from "../models/PlanningPlantRevision";
import type { ProblemDetails } from "../models/ProblemDetails";
import type { RelationshipToDocument } from "../models/RelationshipToDocument";
import type { RelationshipToDocumentsAdd } from "../models/RelationshipToDocumentsAdd";
import type { TagAddClass } from "../models/TagAddClass";
import type { TagBasic } from "../models/TagBasic";
import type { TagCreate } from "../models/TagCreate";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class NewEndpointsService {
    /**
     * Tag - Add characteristics
     * Add new characteristics to an existing tag.
     *
     * Characteristics are grouped into a class such as `FL_MAINT_STRATEGY`. Classes can be assigned to a tag and specific characteristics such as `CRIT_PRODUCTION` will then be available for that specific equipment.
     *
     * With this endpoint, the consumer can assign classes to a tag and define initial values for some of the characteristics in the classes.
     *
     * There is currently no endpoint for looking up existing classes and their characteristics, but this may be added in the future.
     *
     * Note that if a given characteristic has already been added to this tag, repeated adding will result into overwriting of the characteristic value.
     *
     * ### Important information
     * Use `/plants/{plant-id}/tags/{tag-id}?include-characteristics=true&api-version=v1` to view characteristics with value after using this endpoint.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static addCharacteristicsToTag({
        plantId,
        tagId,
        requestBody,
    }: {
        plantId: string;
        tagId: string;
        /**
         * Characteristics to add to tag.
         */
        requestBody: Array<TagAddClass>;
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/plants/{plant-id}/tags/{tag-id}/characteristics",
            path: {
                "plant-id": plantId,
                "tag-id": tagId,
            },
            body: requestBody,
            mediaType: "application/json",
            responseHeader: "Location",
            errors: {
                400: `Request is missing required parameters or characteristicId is not part of class`,
                403: `User does not have sufficient rights to add characteristics to measuring point`,
            },
        });
    }

    /**
     * Document relationships - Get relationships
     * ### Overview
     * Get relationship between a business object such as tags and documents.
     *
     * Currently, `relationship-type` only supports tags, but in the future this may be extended to equipment, maintenance record etc.
     *
     * Example urls:
     * - Tags: `/document-relationships/tags/1100-AE5566?api-version=v1`
     *
     * @returns RelationshipToDocument Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupRelationshipsToDocument({
        relationshipType,
        sourceId,
    }: {
        /**
         * Type of business object to add relationship to documents for
         */
        relationshipType: "tags";
        sourceId: string;
    }): CancelablePromise<Array<RelationshipToDocument> | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/document-relationships/{relationship-type}/{source-id}",
            path: {
                "relationship-type": relationshipType,
                "source-id": sourceId,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update document`,
                404: `The specified resource was not found`,
                409: `Document is locked by other user`,
            },
        });
    }

    /**
     * Document relationships - Add new relationships
     * ### Overview
     * Add new relationship between a business object such as tags and documents.
     *
     * Currently, `relationship-type` only supports tags, but in the future this may be extended to equipment, maintenance record etc.
     *
     * The documents specified in the the request must contain one of:
     * - `documentId`
     * - `documentNumber`, `documentType`, `documentPart`, `documentVersion`
     * - `documentNumber`, `documentType`
     *
     * Example urls:
     * - Tags: `/document-relationships/tags/1100-AE5566?api-version=v1`
     *
     * This endpoint returns no response data.
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
         * Type of business object to add relationship to documents for
         */
        relationshipType: "tags";
        sourceId: string;
        /**
         * Documents to add a relationship to from the `sourceId`
         */
        requestBody: Array<RelationshipToDocumentsAdd>;
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/document-relationships/{relationship-type}/{source-id}",
            path: {
                "relationship-type": relationshipType,
                "source-id": sourceId,
            },
            body: requestBody,
            mediaType: "application/json",
            responseHeader: "Location",
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
     * Replace existing relationship between a business object such as tags and documents.
     *
     * Currently, `relationship-type` only supports tags, but in the future this may be extended to equipment, maintenance record etc.
     *
     * The documents specified in the the request must contain one of:
     * - `documentId`
     * - `documentNumber`, `documentType`, `documentPart`, `documentVersion`
     * - `documentNumber`, `documentType`
     *
     * Example urls:
     * - Tags: `/document-relationships/tags/1100-AE5566?api-version=v1`
     *
     * This endpoint returns no response data.
     *
     * ### Important information
     * NOTE: Take special care when using this endpoint. The PUT operation will remove any document relationships from the `source-id`(for example tags) which are not present in the request body. Normally, the corresponding POST operation should be used as it only adds new relationships and never removes existing ones.
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
        relationshipType: "tags";
        sourceId: string;
        /**
         * Documents to replace a relationship to from the `sourceId`
         */
        requestBody: Array<RelationshipToDocumentsAdd>;
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: "PUT",
            url: "/document-relationships/{relationship-type}/{source-id}",
            path: {
                "relationship-type": relationshipType,
                "source-id": sourceId,
            },
            body: requestBody,
            mediaType: "application/json",
            responseHeader: "Location",
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
     * Remove one or more relationships between a business object such as tags and documents.
     *
     * Currently, `relationship-type` only supports tags, but in the future this may be extended to equipment, maintenance record etc.
     *
     * The documents specified in the the request must contain one of:
     * - `documentId`
     * - `documentNumber`, `documentType`, `documentPart`, `documentVersion`
     * - `documentNumber`, `documentType`
     *
     * Example urls:
     * - Tags: `/document-relationships/tags/1100-AE5566?api-version=v1`
     *
     * This endpoint returns no response data.
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
         * Type of business object to remove relationship to documents for
         */
        relationshipType: "tags";
        sourceId: string;
        /**
         * Documents to remove a relationship to from the `sourceId`
         */
        requestBody: Array<RelationshipToDocumentsAdd>;
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/document-relationships/{relationship-type}/{source-id}",
            path: {
                "relationship-type": relationshipType,
                "source-id": sourceId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update document`,
                404: `The specified resource was not found`,
                409: `Document is locked by other user`,
            },
        });
    }

    /**
     * Revisions - Search
     * ### Overview
     * Search revisions for a single plant with related information.
     *
     * ### Filter: by-revision-id
     * Search by revision ids for a single plant
     *
     * Parameters:
     * - revision-id-any-of
     * - include-work-order-operations (default: false)
     * - include-work-order-operation-text (default: false)
     * - include-only-work-order-operations-with-materials (default: false)
     *
     * ### Examples
     * `/plants/1310/revisions?filter=by-revision-id&revision-id-any-of=OFP,OFP%202022,&include-work-order-operations=true&include-only-work-order-operations-with-materials=true&include-work-order-operation-text=true&api-version=v1`
     *
     * @returns PlanningPlantRevision Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchRevisions({
        plantId,
        filter,
        revisionIdAnyOf,
        includeWorkOrderOperations = false,
        includeOnlyWorkOrderOperationsWithMaterials = false,
    }: {
        plantId: string;
        /**
         * Filter to limit revisions
         */
        filter: "by-revision-id";
        /**
         * Comma-separated list of revision-id
         */
        revisionIdAnyOf?: string;
        /**
         * Include the work order operations
         */
        includeWorkOrderOperations?: boolean;
        /**
         * Limit the work order operations to only those which have material
         */
        includeOnlyWorkOrderOperationsWithMaterials?: boolean;
    }): CancelablePromise<Array<PlanningPlantRevision> | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/plants/{plant-id}/revisions",
            path: {
                "plant-id": plantId,
            },
            query: {
                filter: filter,
                "revision-id-any-of": revisionIdAnyOf,
                "include-work-order-operations": includeWorkOrderOperations,
                "include-only-work-order-operations-with-materials":
                    includeOnlyWorkOrderOperationsWithMaterials,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Tag - Create
     * ### Overview
     * Create tag with option to create linear data. Linear data can be creted only for the tagCategoryId `U` (Pipeline).
     *
     * Locations and systems available for this plant can be found by querying `/plants/{plant-id}?include-systems=true&nclude-locations=true&api-version=v1`
     *
     * To find a valid parentTagId, use the tag search endpoint `/plants/{plant-id}/tag-hierarchy`
     * ### Important information
     * There is a plant-specific configuration called "data origin" which determines which properties should be inherited from the parent tag, and which should be maintained by user directly, e.g. via the API. Properties provided in the request will overwrite the inherited default values. Nevertheless, the inheritance rules of the "data origin" configuration remain the same even if default values were overwritten during the creation.
     *
     * Please note that to execute this request, elevated roles are required in Equinor's ERP system.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns TagBasic Created
     * @throws ApiError
     */
    public static createTag({
        plantId,
        requestBody,
    }: {
        plantId: string;
        /**
         * Tag to create
         */
        requestBody: TagCreate;
    }): CancelablePromise<ProblemDetails | TagBasic> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/plants/{plant-id}/tags",
            path: {
                "plant-id": plantId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Bad request, for example if missing required properties`,
                403: `User does not have sufficient rights to create tag.`,
            },
        });
    }
}
