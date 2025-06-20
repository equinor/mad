/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProblemDetails } from '../models/ProblemDetails';
import type { SubseaWorkOrder } from '../models/SubseaWorkOrder';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubseaWorkOrdersService {

    /**
     * Subsea Work order - Lookup
     * ### Overview
     * Lookup single Subsea Work order with related information.
     *
     * ### Important information
     * By default `include-person-responsible` is false and then the fields `personResponsibleId` and `personResponsibleEmail` will always have null value.
     *
     * ### Update release 1.4.0
     * Introduced property calculationKey for operations.
     *
     * ### Update release 1.5.0
     * Added createdDateTime for attachments.
     *
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.7.0
     * Added tagsRelated to the response.
     *
     * Adding sourceId to related maintenance records.
     *
     * ### Update release 1.8.0
     * Introduced property activeStatusIds for operations.
     *
     * ### Update release 1.19.0
     * Added properties `systemCondition` and `isExcludedFromWorkOrderPlan` for operations.
     *
     * ### Update release 1.21.0
     * Added ability to read text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.22.0
     * Added new query parameter `include-service-operations`. Operations of type Service - PM03 previously available in the `operations` have been moved to `serviceOperations`.
     *
     * ### Update release 1.24.0
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release 1.26.0
     * Added property `isEquipmentRental` to services in serviceOperations.
     * Added `materials` to serviceOperations.
     *
     * ### Update release 1.27.0
     * Work orders now include the property `isOpen`
     *
     * ### Update release 1.28.0
     * Added new query parameter `include-safety-measures`.
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * Split parts of `location` on `operations.materials` into `finalLocation` and `temporaryLocation` in the response.
     *
     * Added `agreement` & `agreementItem` on `serviceOperations` and `grossPrice`, `netValue` & `currency` on `services`.
     *
     * ### Update release 1.32.0
     * Added `include-cost-data-for-materials` query parameter.
     * When this parameter is set to `true`, the following properties will be included in `materials` expand: `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup`.
     *
     * ### Update release 1.34.0
     * Added properties `additionalCostWBSId`, `additionalCostWBS`, `costWBS`, `isHSECritical` and `isProductionCritical` to the response.
     *
     * ### Update release 1.35.0
     * Added new properties `requisitionerId` and `deliveryComplete` to `materials` in `operations`.
     *
     * Added new properties `personResponsible`, `personResponsibleId` and `personResponsibleEmail` to `operations`.
     *
     * Added new property `requisitionerId` to `serviceOperations`.
     *
     * ### Update release 1.36.0
     * Added new property `planNotes` to `operations`.
     *
     * Added new properties `location` and `locationId` to `tagsRelated` and `maintenanceRecords`.
     *
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Added new properties `plannedWorkHours`, `actualWorkHours`, `capacityCount`, `plannedDuration`, `calculationKey`, `earliestStartDateTime`, `earliestFinishDateTime` and `safetyMeasures` to `serviceOperations`.
     *
     * Removed deprecated property `cmrIndicator`. See STRY0261073 in ServiceNow for more details.
     *
     * ### Update release 1.38.0
     * Added new property `text` to `materials` in `operations` and `serviceOperations`.
     *
     * ### Update release 1.39.0
     * Added new property `superiorOperationId` to `operations` and `serviceOperations`.
     *
     * Added new property `hasCommunication` to `serviceOperations`, and to `materials` expand in `operations` and `serviceOperations`.
     *
     * @returns SubseaWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupSubseaWorkOrder({
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
    }): CancelablePromise<SubseaWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/subsea-work-orders/{work-order-id}',
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
                301: `If work-order-id exist, but is not a \`subseaWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Subsea Work order - Attachment download
     * Download single attachment for subsea work order
     * @returns binary Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static downloadSubseaWorkOrderAttachment({
        recordId,
        attachmentId,
    }: {
        recordId: string,
        attachmentId: string,
    }): CancelablePromise<Blob | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/subsea-work-orders/{record-id}/attachments/{attachment-id}',
            path: {
                'record-id': recordId,
                'attachment-id': attachmentId,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

}
