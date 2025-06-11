/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OverheadMaintenanceWorkOrder } from '../models/OverheadMaintenanceWorkOrder';
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OverheadMaintenanceWorkOrdersService {

    /**
     * Overhead Maintenance Work order - Lookup
     * ### Overview
     * Lookup single Overhead Maintenance Work order related information.
     *
     * ### Important information
     * By default `include-person-responsible` is false and then the fields `personResponsibleId` and `personResponsibleEmail` will always have null value.
     *
     * ### Update release 1.38.0
     * Added new property `text` to `materials` in `operations` and `serviceOperations`.
     *
     * ### Update release 1.39.0
     * Added new property `superiorOperationId` to `operations` and `serviceOperations`.
     *
     * Added new property `hasCommunication` to `serviceOperations`, and to `materials` expand in `operations` and `serviceOperations`.
     *
     * @returns OverheadMaintenanceWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupOverheadMaintenanceWorkOrders({
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
