/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CorrectiveWorkOrder } from '../models/CorrectiveWorkOrder';
import type { CorrectiveWorkOrderBasic } from '../models/CorrectiveWorkOrderBasic';
import type { CorrectiveWorkOrderCreate } from '../models/CorrectiveWorkOrderCreate';
import type { CorrectiveWorkOrderSimple } from '../models/CorrectiveWorkOrderSimple';
import type { GenericWorkOrderJsonPatch } from '../models/GenericWorkOrderJsonPatch';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { StatusUpdate } from '../models/StatusUpdate';
import type { WorkOrderOperationCreate } from '../models/WorkOrderOperationCreate';
import type { WorkOrderOperationJsonPatchDeprecated } from '../models/WorkOrderOperationJsonPatchDeprecated';
import type { WorkOrderOperationTimeTicketAdd } from '../models/WorkOrderOperationTimeTicketAdd';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CorrectiveWorkOrdersService {

    /**
     * Corrective Work order - Lookup
     * ### Overview
     * Lookup single Corrective Work order with related information
     *
     * ### Technical feedback
     * Technical feedback ensures a common and best practice maintenance based on the type of tag/equipment. It's mostly used by preventive work orders, but can in some cases be used in corrective work orders.
     * As part of work order execution, the technical feedback will need to be completed.
     *
     * The endpoint `/work-orders/technical-feedback-master-data` describes the business rules for when it's necessary to create a maintenance record based on the status (`feedbackStatusId`) and reason  (`feedbackReasonId`) found for the technical feedback.
     *
     * The `include-technical-feedback` query parameter for preventive and corrective work order lookup endpoints will return the technical feedback for each operation of the provided work order.
     *
     * If a technical feedback has `isDetailedFeedback: true`, it requires a very specific feedback type currently not supported by the Maintenance API.
     *
     * When executing a technical feedback item, the end-user will complete the steps described in `maintenanceActivityText` and end up with a result in the form of a status (`feedbackStatusId`) and a reason (`feedbackReasonId`). Compare the result with the business rules defined by `/work-orders/technical-feedback-master-data` and base the next step based on the value of `hasRequiredMaintenanceRecord`:
     *
     * * `hasRequiredMaintenanceRecord: true`: Create a new maintenance record for technical feedback using the `POST /maintenance-records/failure-reports` or `POST /maintenance-records/activity-reports` endpoints with the relatedWorkOrder properties in the request to specify the work order and technical feedback
     *
     * * `hasRequiredMaintenanceRecord: false` As no maintenance record is required, the technical feedback is completed using the endpoint `PATCH /work-order-operations/{operation-id}/technical-feedback/{feedback-id}`
     *
     * If you want to include the maintenance records of a technical feedback, one needs to apply both `include-technical-feedback=True`, and `include-maintenance-records=True`.
     *
     * ### Important information
     * Properties areaId and area are deprecated as of 01.2021 in order to align with naming across Equinor system. Use locationId and location instead.
     *
     * ### Update release v1.0.0
     * Work order operation actualPercentageComplete now represents progress reported through technical feedback.
     * If the Work order operation is completed, the value of actualPercentageComplete will always be 100.
     *
     * ### Update release v1.1.0
     * If work-order-id exist, but is not a `correctiveWorkOrder`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
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
     * ### Update release 1.12.0
     * Added new query parameter `include-technical-feedback`. It returns related technical feedback required to be completed as part of work order execution. Technical feedback is mostly used for preventive work orders, but can also be used for corrective work orders.
     *
     * Introduced property `detectionMethodGroupId` and `detectionMethodId` for technical feedback.
     *
     * @param workOrderId
     * @param includeOperations Include Work order operations
     * @param includeTechnicalFeedback Include technical feedback required to be completed as part of work order execution.
     * @param includeMaterials Include materials for Work order operations
     * @param includeMaintenanceRecords Include related maintenance records (from object list)
     * @param includeAttachments Include Work order attachments (on header and for operation)
     * @param includeStatusDetails Include detailed information for statuses (both active and non-active)
     * @param includeTagDetails Include detailed for the main tag of the Work order
     * @param includeRelatedTags Include related tags (from object list)
     * @returns CorrectiveWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupCorrectiveWorkOrder(
        workOrderId: string,
        includeOperations: boolean = true,
        includeTechnicalFeedback: boolean = false,
        includeMaterials: boolean = true,
        includeMaintenanceRecords: boolean = false,
        includeAttachments: boolean = false,
        includeStatusDetails: boolean = false,
        includeTagDetails: boolean = false,
        includeRelatedTags: boolean = false,
    ): CancelablePromise<CorrectiveWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/corrective-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            query: {
                'include-operations': includeOperations,
                'include-technical-feedback': includeTechnicalFeedback,
                'include-materials': includeMaterials,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-attachments': includeAttachments,
                'include-status-details': includeStatusDetails,
                'include-tag-details': includeTagDetails,
                'include-related-tags': includeRelatedTags,
            },
            errors: {
                301: `If work-order-id exist, but is not a \`correctiveWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Corrective Work order - Update
     * ### Overview
     * Update corrective work order.
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
     * @param workOrderId
     * @param requestBody The information to be updated
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateCorrectiveWorkOrder(
        workOrderId: string,
        requestBody: GenericWorkOrderJsonPatch,
    ): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-orders/corrective-work-orders/{work-order-id}',
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
     * Corrective Work order - Add operation(s)
     * Add operations
     * ### Update release v1.8.0
     * Added support for calculation key, which determines the relationship between plannedWorkDuration plannedWorkHours, and capacityCount.
     *
     * @param workOrderId
     * @param requestBody Operations to add to existing Work order
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static addCorrectiveWorkOrderOperations(
        workOrderId: string,
        requestBody: Array<WorkOrderOperationCreate>,
    ): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-orders/corrective-work-orders/{work-order-id}/operations',
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

    /**
     * @deprecated
     * Corrective Work order - Update operation
     * ### Important information ###
     * Endpoint is deprecated as of 06.2021.
     * It is replaced by a generic endpoint for all work order types `/work-order-operations/{operation-id}`.
     *
     * ## Overview
     * Update the work order operation.
     * Currently, we support completing the operation but additional functionality will be added in future releases.
     *
     * ### Update release v0.11.0
     * Deprecated endpoint
     *
     * @param workOrderId
     * @param operation
     * @param requestBody Work order operation to update
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateCorrectiveWorkOrderOperation(
        workOrderId: string,
        operation: string,
        requestBody: WorkOrderOperationJsonPatchDeprecated,
    ): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-orders/corrective-work-orders/{work-order-id}/operations/{operation}',
            path: {
                'work-order-id': workOrderId,
                'operation': operation,
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
     * Corrective Work order - Add time ticket
     * ### Overview
     * Add time ticket for work performed
     *
     * ### Update release v0.8.0
     * Text multi-line property now is persisted as expected in ERP system.
     *
     * @param workOrderId
     * @param operation
     * @param requestBody Time ticket to add to operation
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static addCorrectiveWoOperationsTimeTicket(
        workOrderId: string,
        operation: string,
        requestBody: WorkOrderOperationTimeTicketAdd,
    ): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-orders/corrective-work-orders/{work-order-id}/operations/{operation}/time-tickets',
            path: {
                'work-order-id': workOrderId,
                'operation': operation,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to add operations to work order`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * Corrective Work order - Attachment download
     * Download single attachment for corrective Work order
     * @param workOrderId
     * @param attachmentId
     * @returns binary Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static downloadCorrectiveWorkOrderAttachment(
        workOrderId: string,
        attachmentId: string,
    ): CancelablePromise<Blob | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/corrective-work-orders/{work-order-id}/attachments/{attachment-id}',
            path: {
                'work-order-id': workOrderId,
                'attachment-id': attachmentId,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Corrective Work order - Update status
     * ## Overview
     * Activate or deactivate status for Work order.
     *
     * Overview of how status are used can be found in Equinor's governing document [GL1561 - Work orders and notifications types](https://docmap.equinor.com/Docmap/page/doc/dmDocAll.html?DOCVIEW=FALSE?DOCKEYID=525791)
     *
     * To identify which status the work order currently has perform a request to: `work-orders/corrective-work-orders/{{work-order-id}}?include-status-details=true`
     *
     * ## Supported statuses
     * The endpoint supports most status activiation such as:
     *
     * - RDEX - Ready for execution
     * - STRT - Job started
     * - RDOP - Ready for operation
     * - TECO - Technical complete
     * - CLSD - Business close
     *
     * Deactivation is supported in most cases where there is no interdependency between statuses. For status with a statusOrder value, deactivation is not necessary (nor supported) as the business logic will handle the switch.
     *
     * The following statuses are not supported at the moment and will return a HTTP 405 response:
     *
     * - EXTR - Date extension required
     * - PERM - Work permit provided
     * - SJA - Safe job analysis required
     * - WP - Work Permit exist
     * - SJAR - Safe Job Analysis required
     * - SJAE - Safe Job Analysis exist
     * - PMSG - Purchasing Message
     * - MLTI - Multi discipline
     *
     * ### Update version 0.9.0
     * Support for releasing a work order by setting the REL status.
     *
     * Support for complete-outstanding-maintenance-records query parameter for TECO and CLSD statuses.
     *
     * ### Update version 1.1.0
     * Support for deactivating TECO status
     *
     * ### Update version 1.6.0
     * Support for ActivatedDateTime for TECO status. It is an optional parameter which allows to overwrite the default reference date for TECO. If no value is provided, the value will be set to current timestamp.
     *
     * Parameter complete-outstanding-maintenance-records set to true will close maintenance records which have a relationship to the work order via the `ObjectList`.
     *
     * @param workOrderId
     * @param statusId
     * @param requestBody Work order status to update
     * @param completeOutstandingMaintenanceRecords Additional parameter to activation of TECO and CLSD statuses. Determines if related maintenance records should be closed as well.
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateCorrectiveWorkOrderStatus(
        workOrderId: string,
        statusId: string,
        requestBody: StatusUpdate,
        completeOutstandingMaintenanceRecords: boolean = true,
    ): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-orders/corrective-work-orders/{work-order-id}/statuses/{status-id}',
            path: {
                'work-order-id': workOrderId,
                'status-id': statusId,
            },
            query: {
                'complete-outstanding-maintenance-records': completeOutstandingMaintenanceRecords,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User does not have sufficient rights to update Work order`,
                404: `The specified resource was not found`,
                405: `Method not allowed. Not possible to update this status`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * Corrective Work order - Search
     * ### Overview
     * Search for corrective Work orders through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response does not include all details for each corrective work order.
     * This can be found by subsequent call to lookup corrective-work-order
     *
     * ### Important information
     * Properties areaId and area are deprecated as of 01.2021 in order to align with naming across Equinor system. Use locationId and location instead.
     *
     * ### Filter: recent-status-activations
     * Corrective work orders based on recent status activations for the work orders.
     * Parameters:
     * - status-id
     * - plant-id
     * - max-days-since-activation
     *
     * ### Filter: before-required-end-date
     * Find open Corrective work orders before the required-end-date
     * Parameters:
     * - plant-id
     * - required-end-date
     * - location-id (optional)
     * - area-id (optional) Deprecated - Use locationId instead
     * - system-id (optional)
     *
     * ### Filter: by-maintenance-type-id
     * Find preventive work orders by maintenance type. Response will only include open work orders.
     * Parameters:
     * - plant-id
     * - maintenance-type-id
     *
     * ### Update release v0.9.0
     * Added filter by-maintenance-type-id.
     *
     * ### Update release v0.11.0
     * Added system-id as optional parameter til filter before-required-end-date.
     *
     * ### Update release v1.5.0
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * @param filter Filter to limit the Corrective work order by
     * @param statusId Status
     * @param plantId Plant
     * @param maxDaysSinceActivation Define how many days from the current day to include results for. 0 if only include for today
     * @param maxWorkOrders Maximal numbers of results returned (optional for filter)
     * @param areaId Deprecated. Use location-id instead
     * @param locationId Structured location within the plant. Use /plants/{plant-id}/locations for possible values
     * @param requiredEndDate placeholder
     * @param systemId system-id of the corrective work order
     * @param maintenanceTypeId Type of maintenance for the work order
     * @returns CorrectiveWorkOrderSimple Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchCorrectiveWorkOrder(
        filter: 'recent-status-activations' | 'same-maintenance-plan' | 'before-required-end-date' | 'by-maintenance-type-id',
        statusId?: string,
        plantId?: string,
        maxDaysSinceActivation?: number,
        maxWorkOrders?: number,
        areaId?: string,
        locationId?: string,
        requiredEndDate?: string,
        systemId?: string,
        maintenanceTypeId?: string,
    ): CancelablePromise<Array<CorrectiveWorkOrderSimple> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/corrective-work-orders',
            query: {
                'filter': filter,
                'status-id': statusId,
                'plant-id': plantId,
                'max-days-since-activation': maxDaysSinceActivation,
                'max-work-orders': maxWorkOrders,
                'area-id': areaId,
                'location-id': locationId,
                'required-end-date': requiredEndDate,
                'system-id': systemId,
                'maintenance-type-id': maintenanceTypeId,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Corrective Work order - Create
     * ### Overview
     * Create new Corrective Work order based on a supplied failure report.
     *
     * It's possible to supply operations in the create operation. If no operations are passed, a default operation will be created automatically.
     *
     * To lookup the created corrective work order use endpoint `/work-orders/corrective-work-orders/{work-order-id}`
     *
     * ### Update release v1.1.0
     * Added externalPartnerWorkOrderId property to be used as reference to work order in external partner system.
     *
     * ### Update release v1.5.0
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release v1.6.0
     * Added sortField and revisionId to create request. Use `/plants/{plant-id}?include-revisions=true&api-version=v1` to get a list of possible values for `revisionId`.
     * ### Update release v1.8.0
     * Added support for calculation key on operation level. It determines the relationship between plannedWorkDuration, plannedWorkHours, and capacityCount.
     *
     * @param requestBody Corrective Work order to create
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns CorrectiveWorkOrderBasic Created
     * @throws ApiError
     */
    public static createCorrectiveWorkOrder(
        requestBody: CorrectiveWorkOrderCreate,
    ): CancelablePromise<ProblemDetails | CorrectiveWorkOrderBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-orders/corrective-work-orders',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to create a Project Work order`,
                404: `The specified resource was not found`,
            },
        });
    }

}
