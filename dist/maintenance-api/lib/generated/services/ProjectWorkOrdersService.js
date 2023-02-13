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
    static downloadProjectWorkOrderAttachment({ recordId, attachmentId, }) {
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
     * ### Important information
     * Properties areaId and area are deprecated as of 01.2021 in order to align with naming across Equinor system. Use locationId and location instead.
     *
     * ### Update release v1.0.0
     * Work order operation actualPercentageComplete now represents progress reported through technical feedback.
     * If the Work order operation is completed, the value of actualPercentageComplete will always be 100.
     *
     * ### Update release v1.1.0
     * If work-order-id exist, but is not a `projectWorkOrder`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
     *
     * ### Update release v1.3.0
     * Introduced holdDeliveryOnshore and requiredDatetime properties for materials.
     *
     * ### Update release v1.4.0
     * Introduced property calculationKey for operations.
     *
     * ### Update release v1.5.0
     * Added createdDateTime for attachments.
     *
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release v1.7.0
     * Added equipmentId and equipment to the response of tagsRelated.
     *
     * Adding sourceId to related maintenance records.
     *
     * ### Update release v1.8.0
     * Introduced property activeStatusIds for operations.
     *
     * @returns ProjectWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static lookupProjectWorkOrder({ workOrderId, includeOperations = true, includeMaterials = true, includeMaintenanceRecords = false, includeAttachments = false, includeStatusDetails = false, includeTagDetails = false, includeRelatedTags = false, }) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/project-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            query: {
                'include-operations': includeOperations,
                'include-materials': includeMaterials,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-attachments': includeAttachments,
                'include-status-details': includeStatusDetails,
                'include-tag-details': includeTagDetails,
                'include-related-tags': includeRelatedTags,
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
     * - Append to text
     * - Update workCenterId and workCenterPlantId
     * - Update tagId and tagPlantId
     * - Update basicStartDateTime and basicEndDateTime
     * - Update sortField
     * - Update revisionId (Use `/plants/{plant-id}?include-revisions=true&api-version=v1` to get a list of possible values)
     * - Update locationId (Use `/plants/{plant-id}?include-locations=true&api-version=v1` to get a list of possible values)
     * - Update systemId (Use `/plants/{plant-id}?include-systems=true&api-version=v1` to get a list of possible values)
     *
     * ### Important information
     * Append to text follows requirement `I-103209 - Notation in long text field - Upstream offshore`.
     *
     * Newest information in text is added above existing information and is automatically signed with date and full name of logged on user.
     *
     * ### Update release v1.0.0
     * Added additional properties to update
     *
     * ### Update release v1.4.0
     * Adjusted logic for append text to work order. Newest information in text is now added above existing information.
     *
     * ### Update release v1.6.0
     * Added possibility for update of sortField and revisionId.
     *
     * ### Update release v1.7.0
     * Added possibility for update of locationId and systemId.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static updateProjectWorkOrder({ workOrderId, requestBody, }) {
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
    static updateProjectWorkOrderStatus({ workOrderId, statusId, requestBody, }) {
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
     * ### Important information
     * Properties areaId and area are deprecated as of 01.2021 in order to align with naming across Equinor system. Use locationId and location instead.
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
     * ### Update release 1.4.0
     * Added location-id and system-id to filter `open-by-plant`.
     *
     * ### Update release v1.5.0
     * Added revisionId to work order response (represents shutdown or campaign work).
     *
     * @returns ProjectWorkOrderSimple Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static searchProjectWorkOrders({ filter, statusId, plantId, locationId, systemId, maxDaysSinceActivation, }) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/project-work-orders',
            query: {
                filter: filter,
                'status-id': statusId,
                'plant-id': plantId,
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
     * ### Important information
     * Properties areaId and area are deprecated as of 01.2021 in order to align with naming across Equinor system. Use locationId and location instead.
     *
     * ### Update release v1.4.0
     * Fixed bug related to costNetworkId.
     *
     * ### Update release v1.5.0
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release v1.6.0
     * Added sortField and revisionId to create request. Use `/plants/{plant-id}?include-revisions=true&api-version=v1` to get a list of possible values for `revisionId`.
     *
     * ### Update release v1.8.0
     * Added support for calculation key on operation level. It determines the relationship between plannedWorkDuration, plannedWorkHours, and capacityCount.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns ProjectWorkOrderBasic Created
     * @throws ApiError
     */
    static createProjectWorkOrder({ requestBody, }) {
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
     * ### Update release v1.8.0
     * Added support for calculation key, which determines the relationship between plannedWorkDuration plannedWorkHours, and capacityCount.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    static addProjectWorkOrderOperations({ workOrderId, requestBody, }) {
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
