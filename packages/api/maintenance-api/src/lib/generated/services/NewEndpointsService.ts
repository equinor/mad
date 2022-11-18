/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EquipmentListItem } from '../models/EquipmentListItem';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { TagHierachyItem } from '../models/TagHierachyItem';
import type { TechnicalFeedbackJsonPatch } from '../models/TechnicalFeedbackJsonPatch';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NewEndpointsService {

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
     * @param plantId
     * @param filter Filter to limit the tag hierachy by
     * @param rootTagIdAnyOf Comma-separated list of tags (without tagPlantId prefix)
     * @returns TagHierachyItem Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getTagHierarchy(
        plantId: string,
        filter?: 'by-root-tags',
        rootTagIdAnyOf?: string,
    ): CancelablePromise<Array<TagHierachyItem> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/tag-hierarchy',
            path: {
                'plant-id': plantId,
            },
            query: {
                'filter': filter,
                'root-tag-id-any-of': rootTagIdAnyOf,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Equipment list - Get
     * Get list of all equipment for the specified plant.
     *
     * The response will include `equipmentCategoryId` and `catalogProfileId` for each equipment.
     *
     * ### Filter: filter-by-equipment-category (optional)
     * Limits the response to the provided `equipmentCategoryId`(s).
     * Parameters:
     * - equipment-category-id-any-of
     *
     * ### Important information
     * The endpoint returns a significant amount of data as it returns all equipment for the specified plant.  The data will be cached in the API and renewed on a daily basis.
     *
     * @param plantId
     * @param filter Filter to limit the equipment list by
     * @param equipmentCategoryIdAnyOf Comma-separated list of equipment categories. `G` = Tank Customer equipment, `M` = Machines/Equipment, `P` = Production resources/tools, `Q` = Test/measurement equipment, `R` = Process Equipment, `S` = Customer equipment, `T` = IT Equipment, `U` = Subsea Equipment, `W` = Wind Operation Certified Equip, `Y` = Tool Crib
     * @returns EquipmentListItem Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getEquipmentList(
        plantId: string,
        filter?: 'filter-by-equipment-category',
        equipmentCategoryIdAnyOf?: string,
    ): CancelablePromise<Array<EquipmentListItem> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/equipment-list',
            path: {
                'plant-id': plantId,
            },
            query: {
                'filter': filter,
                'equipment-category-id-any-of': equipmentCategoryIdAnyOf,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Technical Feedback - Update
     * ### Overview
     * Update the results of technical feedback.
     *
     * When executing a technical feedback , the end-user will complete the steps described in `maintenanceActivityText` and end up with a result in the form of a status (`feedbackStatusId`) and a reason (`feedbackReasonId`). Compare the result with the business rules defined by `/work-orders/technical-feedback-master-data`:
     *
     * * `hasRequiredMaintenanceRecord: false` Use this endpoint
     *
     * * `hasRequiredMaintenanceRecord: true`: Create a new maintenance record for technical feedback using the `POST /maintenance-records/failure-reports` or `POST /maintenance-records/activity-reports` endpoints with the relatedWorkOrder properties in the request to specify the work order and technical feedback
     *
     * @param operationId
     * @param technicalFeedbackId The id of the technical feedback as found in the work order lookup endpoint
     * @param requestBody Update technical feedback
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateTechnicalFeedback(
        operationId: string,
        technicalFeedbackId: string,
        requestBody: Array<TechnicalFeedbackJsonPatch>,
    ): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-order-operations/{operation-id}/technical-feedback/{technical-feedback-id}',
            path: {
                'operation-id': operationId,
                'technical-feedback-id': technicalFeedbackId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update operation`,
                404: `The specified resource was not found`,
                409: `Technical feedback result requires a maintenance record to be created`,
            },
        });
    }

}
