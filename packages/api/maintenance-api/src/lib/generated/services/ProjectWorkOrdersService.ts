/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenericWorkOrderJsonPatch } from '../models/GenericWorkOrderJsonPatch';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { ProjectWorkOrder } from '../models/ProjectWorkOrder';
import type { ProjectWorkOrderBasic } from '../models/ProjectWorkOrderBasic';
import type { ProjectWorkOrderCreate } from '../models/ProjectWorkOrderCreate';
import type { ProjectWorkOrderSimple } from '../models/ProjectWorkOrderSimple';
import type { StatusUpdate } from '../models/StatusUpdate';
import type { WorkOrderOperationCreate } from '../models/WorkOrderOperationCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProjectWorkOrdersService {

    /**
     * Project Work order - Attachment download
     * Download single attachment for Project Work order
     * @returns binary Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static downloadProjectWorkOrderAttachment({
        recordId,
        attachmentId,
    }: {
        recordId: string,
        attachmentId: string,
    }): CancelablePromise<Blob | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/project-work-orders/{record-id}/attachments/{attachment-id}',
            path: {
                'record-id': recordId,
                'attachment-id': attachmentId,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Project Work order - Lookup
     * ### Overview
     * Lookup single Project Work order with related information
     *
     * ### Update release 1.0.0
     * Work order operation actualPercentageComplete now represents progress reported through technical feedback.
     * If the Work order operation is completed, the value of actualPercentageComplete will always be 100.
     *
     * ### Update release 1.1.0
     * If work-order-id exist, but is not a `projectWorkOrder`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
     *
     * ### Update release 1.3.0
     * Introduced holdDeliveryOnshore and requiredDatetime properties for materials.
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
     * Added equipmentId and equipment to the response of tagsRelated.
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
     * Added property `area` to tag details.
     *
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
     * `tagDetails` object now includes the new field `maintenanceConceptId`
     *
     * ### Update release 1.27.0
     * Work orders now include the property `isOpen`
     *
     * Added `tag` and `title` to `maintenanceRecords` expand.
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
     * @returns ProjectWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupProjectWorkOrder({
        workOrderId,
        includeOperations = true,
        includeServiceOperations = true,
        includeMaterials = true,
        includeMaintenanceRecords = false,
        includeAttachments = false,
        includeStatusDetails = false,
        includeTagDetails = false,
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
         * Include related maintenance records (from object list)
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include Work order attachments (on header and for operation)
         */
        includeAttachments?: boolean,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include detailed for the main tag of the Work order
         */
        includeTagDetails?: boolean,
        /**
         * Include related tags (from object list)
         */
        includeRelatedTags?: boolean,
        /**
         * Include safety-measures in work order operations
         */
        includeSafetyMeasures?: boolean,
    }): CancelablePromise<ProjectWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/project-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            query: {
                'include-operations': includeOperations,
                'include-service-operations': includeServiceOperations,
                'include-materials': includeMaterials,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-attachments': includeAttachments,
                'include-status-details': includeStatusDetails,
                'include-tag-details': includeTagDetails,
                'include-related-tags': includeRelatedTags,
                'include-safety-measures': includeSafetyMeasures,
            },
            errors: {
                301: `If work-order-id exist, but is not a \`projectWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Project Work order - Update
     * ### Overview
     * Update project work order.
     *
     * Supports:
     * - Append and replace text
     * - Update workCenterId and workCenterPlantId
     * - Update tagId and tagPlantId
     * - Update basicStartDateTime and basicEndDateTime
     * - Update sortField
     * - Update title
     * - Update plannerGroupId
     * - Update revisionId (Use `/plants/{plant-id}?include-revisions=true&api-version=v1` to get a list of possible values)
     * - Update locationId (Use `/plants/{plant-id}?include-locations=true&api-version=v1` to get a list of possible values)
     * - Update systemId (Use `/plants/{plant-id}?include-systems=true&api-version=v1` to get a list of possible values)
     *
     * ### Important information
     * Append to text follows requirement `I-103209 - Notation in long text field - Upstream offshore`.
     *
     * Newest information in text is added above existing information and is automatically signed with date and full name of logged on user.
     *
     * ***When Advanced ERP text is enabled, information is not automatically signed and has to be sent with the input when using append***
     *
     * ### Update release 1.0.0
     * Added additional properties to update
     *
     * ### Update release 1.4.0
     * Adjusted logic for append text to work order. Newest information in text is now added above existing information.
     *
     * ### Update release 1.6.0
     * Added possibility for update of sortField and revisionId.
     *
     * ### Update release 1.7.0
     * Added possibility for update of locationId and systemId.
     *
     * ### Update release 1.18.0
     * Added possibility for update of `title` and `plannerGroupId`.
     *
     * ### Update release 1.21.0
     * Added ability to update text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateProjectWorkOrder({
        workOrderId,
        requestBody,
    }: {
        workOrderId: string,
        /**
         * The information to be updated
         */
        requestBody: GenericWorkOrderJsonPatch,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-orders/project-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update work order operation`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * Project Work order - Update status
     * Activate or deactivate status for Work order
     *
     * ### Important information
     * Currently, not all statuses are supported.
     *
     * The status supported are:
     * 1. RDEX - Ready for execution
     * 2. CLSD - Business close
     *
     * ### Update version 1.6.0
     * Support for ActivatedDateTime for TECO status. It is an optional parameter which allows to overwrite the default reference date for TECO. If no value is provided, the value will be set to current timestamp.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateProjectWorkOrderStatus({
        workOrderId,
        statusId,
        requestBody,
    }: {
        workOrderId: string,
        statusId: string,
        /**
         * Work order status to update
         */
        requestBody: StatusUpdate,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-orders/project-work-orders/{work-order-id}/statuses/{status-id}',
            path: {
                'work-order-id': workOrderId,
                'status-id': statusId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User does not have sufficient rights to update Work order`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * Project Work order - Search
     * ### Overview
     * Search for project Work orders through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response does not include all details for each project work order.
     * This can be found by subsequent call to lookup project-work-order
     *
     * ### Filter: open-by-plant
     * Find open Project Work orders by plant
     * Parameters:
     * - plant-id
     * - location-id (optional)
     * - system-id (optional)
     *
     * ### Filter: recent-status-activations
     * Project work orders based on recent status activations for the work orders.
     * Parameters:
     * - status-id
     * - plant-id
     * - max-days-since-activation
     *
     * ### Filter: by-cost-network
     * Project work orders based on cost network id.
     * Parameters:
     * - cost-network-id
     * - plant-id (optional)
     *
     * ### Filter: by-cost-wbs
     * Project work orders based on cost WBS id.
     * Parameters:
     * - cost-wbs-id
     * - plant-id (optional)
     *
     * ### Update release 1.4.0
     * Added location-id and system-id to filter `open-by-plant`.
     *
     * ### Update release 1.5.0
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.21.0
     * Added filter `by-cost-network`, with required parameter `cost-network-id` and optional parameter `plant-id`.
     *
     * ### Update release 1.24.0
     * Added filter `by-cost-wbs`, with required parameter `cost-wbs-id`. Can be used in combination with optional parameter `plant-id`.
     * This filter only includes work orders where the WBS is represented on the work order level.
     * It does not include work orders where WBS is only represented in the settlement rules.
     *
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * @returns ProjectWorkOrderSimple Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchProjectWorkOrders({
        filter,
        statusId,
        plantId,
        costNetworkId,
        costWbsId,
        locationId,
        systemId,
        maxDaysSinceActivation,
    }: {
        /**
         * Filter to limit the Project work order by
         */
        filter: 'open-by-plant' | 'recent-status-activations' | 'by-cost-network' | 'by-cost-wbs',
        /**
         * Status
         */
        statusId?: string,
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Required parameter if `filter=by-cost-network`
         */
        costNetworkId?: string,
        /**
         * Required parameter if `filter=by-cost-wbs`
         */
        costWbsId?: string,
        /**
         * Structured location within the plant. Use /plants/{plant-id}/locations for possible values
         */
        locationId?: string,
        /**
         * System id to filter by
         */
        systemId?: string,
        /**
         * Define how many days from the current day to include results for. 0 if only include for today
         */
        maxDaysSinceActivation?: number,
    }): CancelablePromise<Array<ProjectWorkOrderSimple> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/project-work-orders',
            query: {
                'filter': filter,
                'status-id': statusId,
                'plant-id': plantId,
                'cost-network-id': costNetworkId,
                'cost-wbs-id': costWbsId,
                'location-id': locationId,
                'system-id': systemId,
                'max-days-since-activation': maxDaysSinceActivation,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Project Work order - Create
     * ### Overview
     * Create new Project Work order
     *
     *
     * ### Update release 1.4.0
     * Fixed bug related to costNetworkId.
     *
     * ### Update release 1.5.0
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.6.0
     * Added sortField and revisionId to create request. Use `/plants/{plant-id}?include-revisions=true&api-version=v1` to get a list of possible values for `revisionId`.
     *
     * ### Update release 1.8.0
     * Added support for calculation key on operation level. It determines the relationship between plannedWorkDuration, plannedWorkHours, and capacityCount.
     *
     * ### Update release 1.19.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns ProjectWorkOrderBasic Created
     * @throws ApiError
     */
    public static createProjectWorkOrder({
        requestBody,
    }: {
        /**
         * Project Work order to create
         */
        requestBody: ProjectWorkOrderCreate,
    }): CancelablePromise<ProblemDetails | ProjectWorkOrderBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-orders/project-work-orders',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to create a Project Work order`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Project Work order - Add operation(s)
     * Add operations
     * ### Update release 1.8.0
     * Added support for calculation key, which determines the relationship between plannedWorkDuration plannedWorkHours, and capacityCount.
     * ### Update release 1.19.0
     * Added support for  `standardTextTemplate` (standard text template identifier), `systemCondition` (describes required process condition for each operation) and `isExcludedFromWorkOrderPlan` (based on operation status).
     *
     * ### Update release 1.21.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static addProjectWorkOrderOperations({
        workOrderId,
        requestBody,
    }: {
        workOrderId: string,
        /**
         * Operations to add to existing Work order
         */
        requestBody: Array<WorkOrderOperationCreate>,
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-orders/project-work-orders/{work-order-id}/operations',
            path: {
                'work-order-id': workOrderId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to add operations to work order`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

}
