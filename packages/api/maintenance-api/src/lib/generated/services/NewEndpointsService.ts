/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EstimatedCostsJsonPatch } from '../models/EstimatedCostsJsonPatch';
import type { OverheadMaintenanceWorkOrder } from '../models/OverheadMaintenanceWorkOrder';
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NewEndpointsService {

    /**
     * Preventive Work order - Update estimated costs
     * ### Overview
     * Update estimated costs for preventive work order. Cost needs to be provided in the currency of the work order.
     * The Cost Category ID needs to be:
     * - `COST_CUTBACK`
     * - `COST_EXTERNAL_SERVICES`
     * - `COST_INTERNAL_SERVICES`
     * - `COST_INTERNAL_PERSONELL`
     * - `COST_MATERIALS_OF_CONSUMPTION`
     * - `COST_OTHER_EXPENCES`
     * - `COST_REPAIR_AND_MAINTENANCE`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static addPreventiveWoEstimatedCosts({
        workOrderId,
        costCategoryId,
        requestBody,
    }: {
        workOrderId: string,
        costCategoryId: string,
        /**
         * Estimated cost for cost category
         */
        requestBody: Array<EstimatedCostsJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-orders/preventive-work-orders/{work-order-id}/estimated-costs/{cost-category-id}',
            path: {
                'work-order-id': workOrderId,
                'cost-category-id': costCategoryId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to update estimated costs`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * @deprecated
     * Overhead Maintenance Work order - Lookup
     * ### Deprecated
     * This endpoint is marked as deprecated due to currently being unavailable. This endpoint is only a draft. Calling the endpoint until available will result in a `404- Not Found`. Deprecation will be removed when the endpoint is available.
     *
     * ### Overview
     * Lookup single Overhead Maintenance Work order related information.
     *
     * ### Important information
     * By default `include-person-responsible` is false and then the fields `personResponsibleId` and `personResponsibleEmail` will always have null value.
     *
     * @returns OverheadMaintenanceWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupoverheadMaintenanceWorkOrders({
        workOrderId,
        includeOperations = true,
        includeServiceOperations = true,
        includeMaterials = true,
        includeCostDataForMaterials = false,
        includeAttachments = false,
        includePersonResponsible = false,
        includeStatusDetails = false,
        includeRelatedTags = false,
        includeSafetyMeasures = false,
    }: {
        workOrderId: string,
        /**
         * Include Work order operations
         */
        includeOperations?: boolean,
        /**
         * Include Work order service operations
         */
        includeServiceOperations?: boolean,
        /**
         * Include materials for Work order operations
         */
        includeMaterials?: boolean,
        /**
         * Include cost data for materials. Additional authorization will be required to retrieve these fields.
         */
        includeCostDataForMaterials?: boolean,
        /**
         * Include Work order attachments (on header and for operation)
         */
        includeAttachments?: boolean,
        /**
         * Include person responsible information in response, for example the email or name of the person responsible. May have a slight performance impact.
         */
        includePersonResponsible?: boolean,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include related tags (from object list)
         */
        includeRelatedTags?: boolean,
        /**
         * Include safety-measures in work order operations
         */
        includeSafetyMeasures?: boolean,
    }): CancelablePromise<OverheadMaintenanceWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/overhead-maintenance-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            query: {
                'include-operations': includeOperations,
                'include-service-operations': includeServiceOperations,
                'include-materials': includeMaterials,
                'include-cost-data-for-materials': includeCostDataForMaterials,
                'include-attachments': includeAttachments,
                'include-person-responsible': includePersonResponsible,
                'include-status-details': includeStatusDetails,
                'include-related-tags': includeRelatedTags,
                'include-safety-measures': includeSafetyMeasures,
            },
            errors: {
                301: `If work-order-id exist, but is not a \`OverheadMaintenanceWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

}
