/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CodeGroup } from "../models/CodeGroup";
import type { ModificationProposalJsonUpdate } from "../models/ModificationProposalJsonUpdate";
import type { ProblemDetails } from "../models/ProblemDetails";
import type { RelationshipToTagAdd } from "../models/RelationshipToTagAdd";
import type { TechnicalFeedbackStatus } from "../models/TechnicalFeedbackStatus";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class NewEndpointsService {
    /**
     * Code Group - Search
     * ### Overview
     * Returns a list of codeGroups that belong in the catalog.
     *
     * The catalog-id can be any of the following:
     * | catalogId      |  Description                                                         |
     * |-----------------------|-----------------------------------------------------------------------|
     * | 1                     |  Characteristic attribute       |
     * | 2                     |  Tasks                          |
     * | 5                     |  Failure mechanism              |
     * | C                     |  Failure mode                   |
     * | V                     |  Measuring points               |
     *
     * @returns CodeGroup Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchCodeGroup({
        catalogId,
    }: {
        catalogId: "1" | "2" | "5" | "C" | "V";
    }): CancelablePromise<Array<CodeGroup> | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/catalogs/{catalog-id}/code-groups",
            path: {
                "catalog-id": catalogId,
            },
            errors: {
                400: `Request is missing required parameters`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Technical feedback - Master data
     * ### Overview
     * Get a list of all statuses and reasons which can be used in technical feedback.
     *
     * @returns TechnicalFeedbackStatus Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getTechnicalFeedbackMasterData(): CancelablePromise<
        Array<TechnicalFeedbackStatus> | ProblemDetails
    > {
        return __request(OpenAPI, {
            method: "GET",
            url: "/work-orders/technical-feedback-master-data",
        });
    }

    /**
     * Work order relationships - Add related tag
     * ### Overview
     * Add new relationship between a work order and a tag.
     *
     * This endpoint returns no response data. Perform a lookup request for the specific work order type to get updated information. This is currently not possible for technical feedback, but is expected to be added in the future.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static addRelationshipFromWorkOrderToTag({
        workOrderId,
        requestBody,
    }: {
        /**
         * Id of the work order (can be any type)
         */
        workOrderId: string;
        /**
         * Define tag to add relationship to
         */
        requestBody: RelationshipToTagAdd;
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/work-order-relationships/{work-order-id}/related-tags",
            path: {
                "work-order-id": workOrderId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to work order`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * Work order relationships - Remove related tag
     * ### Overview
     * Remove an existing relationship between a work order and a tag/functional location.
     *
     * Internally in the ERP system, this relationship will be removed from the object list of the work order.
     *
     * This endpoint returns no response data. Perform a lookup request for the specific work order type to get updated information.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static removeRelationshipFromWorkOrderToTag({
        workOrderId,
        tagPlantId,
        tagId,
    }: {
        /**
         * Id of the work order (can be any type)
         */
        workOrderId: string;
        /**
         * Id of the plant
         */
        tagPlantId: string;
        /**
         * Id of the tag
         */
        tagId: string;
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: "DELETE",
            url: "/work-order-relationships/{work-order-id}/related-tags/{tag-plant-id}-{tag-id}",
            path: {
                "work-order-id": workOrderId,
                "tag-plant-id": tagPlantId,
                "tag-id": tagId,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to work order`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user or it is not possible to remove the relationship`,
            },
        });
    }

    /**
     * Modification proposal - Update
     * ### Overview
     * Update key fields of a modification proposal.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateModificationProposal({
        recordId,
        requestBody,
    }: {
        recordId: string;
        /**
         * Details on how to update modification proposal
         */
        requestBody: Array<ModificationProposalJsonUpdate>;
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/maintenance-records/modification-proposals/{record-id}",
            path: {
                "record-id": recordId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                403: `User does not have sufficient rights to update activity report`,
                404: `The specified resource was not found`,
                409: `Activity report is locked by other user`,
            },
        });
    }
}
