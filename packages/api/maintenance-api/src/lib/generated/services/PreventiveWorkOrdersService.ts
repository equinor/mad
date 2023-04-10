/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenericWorkOrderJsonPatch } from "../models/GenericWorkOrderJsonPatch";
import type { PreventiveWorkOrder } from "../models/PreventiveWorkOrder";
import type { PreventiveWorkOrderSimple } from "../models/PreventiveWorkOrderSimple";
import type { ProblemDetails } from "../models/ProblemDetails";
import type { StatusUpdate } from "../models/StatusUpdate";
import type { WorkOrderOperationCreate } from "../models/WorkOrderOperationCreate";
import type { WorkOrderOperationJsonPatchDeprecated } from "../models/WorkOrderOperationJsonPatchDeprecated";
import type { WorkOrderOperationTimeTicketAdd } from "../models/WorkOrderOperationTimeTicketAdd";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class PreventiveWorkOrdersService {
    /**
     * Preventive Work order - Lookup
     * ### Overview
     * Lookup single Preventive Work order with related information.
     *
     * ### Technical feedback
     * Technical feedback ensures a common and best practice maintenance based on the type of tag/equipment. It's mostly used by preventive work orders, but can in some cases be used in corrective work orders.
     * As part of work order execution, the technical feedback items will need to be completed.
     *
     * The endpoint `/work-orders/technical-feedback-master-data` describes the business rules for when it's necessary to create a maintenance record based on the status(`feedbackStatusId`) and reason(`feedbackReasonId`) found for the technical feedback.
     *
     * The `include-technical-feedback` query parameter for preventive and corrective work order lookup endpoints will return the technical feedback for each operation of the provided work order.
     *
     * If a technical feedback has `isDetailedFeedback: true`, it requires a very specific feedback type currently not supported by the Maintenance API.
     *
     * When executing a technical feedback item, the end-user will complete the steps described in `maintenanceActivityText` and end up with a result in the form of a status(`feedbackStatusId`) and a reason(`feedbackReasonId`). Compare the result with the business rules defined by `/work-orders/technical-feedback-master-data`:
     *
     * * `hasRequiredMaintenanceRecord: true`: Create a new maintenance record for technical feedback using the `POST /maintenance-records/failure-reports` or `POST /maintenance-records/activity-reports` endpoints with the relatedWorkOrder properties in the request to specify the work order and technical feedback
     *
     * * `hasRequiredMaintenanceRecord: true` As no maintenance record is required, the technical feedback is completed using the endpoint `PATCH /work-order-operations/{operation-id}/technical-feedback/{feedback-id}`
     *
     * If you want to include the maintenance records of a technical feedback, one needs to apply both `include-technical-feedback=True`, and `include-maintenance-records=True`.
     *
     * ### Production Resources/Tool (PRT)
     * Production resources/tools (PRT) are used for materials, tools and equipment that are needed to carry out the task and are to be returned after use.
     *
     * In Equinor, this is normally added as part of maintenance program.
     * Maintenance API supports the following PRT resources:
     * - Attachments (through query parameter `include-attachments=true`)
     * - Measuring points (through query parameter `include-measuring-points=true`)
     * - URL references (through query parameter `include-url-references=true`)
     *
     * For more information see governing document [GL1624 Guidelines for the establishment of a preventive maintenance programme in SAP](https://docmap.equinor.com/Docmap/page/doc/dmDocIndex.html?DOCKEYID=533758).
     *
     * ### Important information
     * Properties areaId and area are deprecated as of 01.2021 in order to align with naming across Equinor system. Use locationId and location instead.
     *
     * ### Update release v1.0.0
     * Work order operation actualPercentageComplete now represents progress reported through technical feedback.
     * If the Work order operation is completed, the value of actualPercentageComplete will always be 100.
     *
     * ### Update release v1.1.0
     * If work-order-id exist, but is not a `preventiveWorkOrder`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
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
     * Added sourceId to related maintenance records.
     *
     * Added isActive property for maintenance plan details.
     *
     * ### Update release v1.8.0
     * Introduced property activeStatusIds for operations.
     *
     * ### Update release 1.11.0
     * Added the following properties:
     *
     * * personResponsibleId and personResponsibleEmail
     * * isProductionCritical and isHSECritical
     * * workCenter
     * * plannerGroup
     *
     * ### Update release 1.12.0
     * Added new query parameter `include-technical-feedback`. It returns related technical feedback required to be completed as part of work order execution.
     *
     * Introduced property `detectionMethodGroupId` and `detectionMethodId` for technical feedback.
     *
     * ### Update release v1.15.0
     * Added new query parameter `include-measurements`
     *
     * ### Update release v1.16.0
     * Added new query parameters `include-measuring-points`, `include-last-measurement` and `include-url-references`. `include-attachments` extended to also return PRT attachments of an operation.  `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * @returns PreventiveWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupPreventiveWorkOrder({
        workOrderId,
        includeOperations = true,
        includeTechnicalFeedback = false,
        includeMaterials = false,
        includeMaintenanceRecords = false,
        includeMaintenancePlanDetails = false,
        includeAttachments = false,
        includeStatusDetails = false,
        includeTagDetails = false,
        includeRelatedTags = false,
        includeUrlReferences = false,
        includeMeasuringPoints = false,
        includeLastMeasurement = false,
        includeMeasurements = false,
    }: {
        workOrderId: string;
        /**
         * Include Work order operations
         */
        includeOperations?: boolean;
        /**
         * Include technical feedback required to be completed as part of work order execution.
         */
        includeTechnicalFeedback?: boolean;
        /**
         * Include materials for Work order operations
         */
        includeMaterials?: boolean;
        /**
         * Include related maintenance records (from object list and technical feedback)
         */
        includeMaintenanceRecords?: boolean;
        /**
         * Include details for maintenance plan
         */
        includeMaintenancePlanDetails?: boolean;
        /**
         * Include Work order attachments (including PRT attachments)
         */
        includeAttachments?: boolean;
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean;
        /**
         * Include detailed for the main tag of the Work order
         */
        includeTagDetails?: boolean;
        /**
         * Include related tags (from object list)
         */
        includeRelatedTags?: boolean;
        /**
         * Include URL references from PRT
         */
        includeUrlReferences?: boolean;
        /**
         * Include related measuring points from PRT
         */
        includeMeasuringPoints?: boolean;
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true)
         */
        includeLastMeasurement?: boolean;
        /**
         * Include related measurements
         */
        includeMeasurements?: boolean;
    }): CancelablePromise<PreventiveWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/work-orders/preventive-work-orders/{work-order-id}",
            path: {
                "work-order-id": workOrderId,
            },
            query: {
                "include-operations": includeOperations,
                "include-technical-feedback": includeTechnicalFeedback,
                "include-materials": includeMaterials,
                "include-maintenance-records": includeMaintenanceRecords,
                "include-maintenance-plan-details":
                    includeMaintenancePlanDetails,
                "include-attachments": includeAttachments,
                "include-status-details": includeStatusDetails,
                "include-tag-details": includeTagDetails,
                "include-related-tags": includeRelatedTags,
                "include-url-references": includeUrlReferences,
                "include-measuring-points": includeMeasuringPoints,
                "include-last-measurement": includeLastMeasurement,
                "include-measurements": includeMeasurements,
            },
            errors: {
                301: `If work-order-id exist, but is not a \`preventiveWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Preventive Work order - Update
     * ### Overview
     * Update preventive work order.
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
    public static updatePreventiveWorkOrder({
        workOrderId,
        requestBody,
    }: {
        workOrderId: string;
        /**
         * The information to be updated
         */
        requestBody: GenericWorkOrderJsonPatch;
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/work-orders/preventive-work-orders/{work-order-id}",
            path: {
                "work-order-id": workOrderId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update work order operation`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * Preventive Work order - Add operation(s)
     * Add operations
     * ### Update release v1.8.0
     * Added support for calculation key, which determines the relationship between plannedWorkDuration, plannedWorkHours, and capacityCount.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static addPreventiveWorkOrderOperations({
        workOrderId,
        requestBody,
    }: {
        workOrderId: string;
        /**
         * Operations to add to existing Work order
         */
        requestBody: Array<WorkOrderOperationCreate>;
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/work-orders/preventive-work-orders/{work-order-id}/operations",
            path: {
                "work-order-id": workOrderId,
            },
            body: requestBody,
            mediaType: "application/json",
            responseHeader: "Location",
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
     * Preventive Work order - Update operation
     * ### Important information ###
     * Endpoint is deprecated as of 06.2021.
     * It is replaced by a generic endpoint for all work order types `/work-order-operations/{operation-id}`.
     *
     * ### Overview
     * Update the work order operation.
     * Currently, we support completing the operation but additional functionality will be added in future releases.
     *
     * ### Update release v0.11.0
     * Deprecated endpoint.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updatePreventiveWorkOrderOperation({
        workOrderId,
        operation,
        requestBody,
    }: {
        workOrderId: string;
        operation: string;
        /**
         * Work order operation to update
         */
        requestBody: WorkOrderOperationJsonPatchDeprecated;
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/work-orders/preventive-work-orders/{work-order-id}/operations/{operation}",
            path: {
                "work-order-id": workOrderId,
                operation: operation,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update work order operation`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * Preventive Work order - Add time ticket
     * ### Overview
     * Add time ticket for work performed
     *
     * ### Update release v0.8.0
     * Text multi-line property now is persisted as expected in ERP system.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static addPreventiveWoOperationsTimeTicket({
        workOrderId,
        operation,
        requestBody,
    }: {
        workOrderId: string;
        operation: string;
        /**
         * Time ticket to add to operation
         */
        requestBody: WorkOrderOperationTimeTicketAdd;
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/work-orders/preventive-work-orders/{work-order-id}/operations/{operation}/time-tickets",
            path: {
                "work-order-id": workOrderId,
                operation: operation,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to add operations to work order`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * Preventive Work order - Attachment download
     * Download single attachment for preventive Work order
     * @returns binary Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static downloadPreventiveWorkOrderAttachment({
        recordId,
        attachmentId,
    }: {
        recordId: string;
        attachmentId: string;
    }): CancelablePromise<Blob | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/work-orders/preventive-work-orders/{record-id}/attachments/{attachment-id}",
            path: {
                "record-id": recordId,
                "attachment-id": attachmentId,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Preventive Work order - Update status
     * ## Overview
     * Activate or deactivate status for Work order.
     *
     * Overview of how status are used can be found in Equinor's governing document [GL1561 - Work orders and notifications types](https://docmap.equinor.com/Docmap/page/doc/dmDocAll.html?DOCVIEW=FALSE?DOCKEYID=525791)
     *
     * To identify which status the work order currently has perform a request to: `work-orders/preventive-work-orders/{{work-order-id}}?include-status-details=true`
     *
     * ## Supported statuses
     * The endpoint supports most status activiation such as:
     *
     * - RDEX - Ready for execution
     * - STRT - Job started
     * - RDOP - Ready for operation
     * - TECO - Technical complete - Note: This will also close the related failure-report
     * - CLSD - Business close - Note: This will not close the related failure-report
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
     * ### Update version 1.1.0
     * Support for deactivating TECO status
     *
     * ### Update version 1.6.0
     * Support for ActivatedDateTime for TECO status. It is an optional parameter which allows to overwrite the default reference date for TECO. If no value is provided, the value will be set to current timestamp.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updatePreventiveWorkOrderStatus({
        workOrderId,
        statusId,
        requestBody,
    }: {
        workOrderId: string;
        statusId: string;
        /**
         * Work order status to update
         */
        requestBody: StatusUpdate;
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/work-orders/preventive-work-orders/{work-order-id}/statuses/{status-id}",
            path: {
                "work-order-id": workOrderId,
                "status-id": statusId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                403: `User does not have sufficient rights to update Work order`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * Preventive Work order - Search
     * ### Overview
     * Search for preventive Work orders through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response does not include all details for each preventive work order.
     * This can be found by subsequent call to lookup preventive-work-order
     *
     * ### Important information
     * Properties areaId and area are deprecated as of 01.2021 in order to align with naming across Equinor system. Use locationId and location instead.
     *
     * ### Filter: maintenance-plan-history
     * Based on the maintenance plan of the Preventive Work order provided, find other instances sorted by start date
     * Parameters:
     * - work-order-id
     * - earliest-date (optional)
     * - max-work-orders (optional)
     *
     * ### Filter: recent-status-activations
     * Preventive work orders based on recent status activations for the work order.
     * Parameters:
     * - status-id
     * - plant-id
     * - max-days-since-activation
     *
     * ### Filter: before-planned-date
     * Find open Preventive work orders before the before-planned-date
     * Parameters:
     * - plant-id
     * - planned-date
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
     * Added system-id as optional parameter til filter before-planned-date.
     *
     * ### Update release v1.5.0
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * @returns PreventiveWorkOrderSimple Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchPreventiveWorkOrders({
        filter,
        statusId,
        plantId,
        maxDaysSinceActivation,
        workOrderId,
        earliestDate,
        maxWorkOrders,
        locationId,
        areaId,
        plannedDate,
        systemId,
        maintenanceTypeId,
    }: {
        /**
         * Filter to limit the failure reports by
         */
        filter:
            | "recent-status-activations"
            | "before-planned-date"
            | "by-maintenance-type-id"
            | "maintenance-plan-history";
        /**
         * Status
         */
        statusId?: string;
        /**
         * Plant
         */
        plantId?: string;
        /**
         * Define how many days from the current day to include results for. 0 if only include for today
         */
        maxDaysSinceActivation?: number;
        /**
         * Preventive Work order id
         */
        workOrderId?: string;
        /**
         * Earliest date to find maintenance plan history for (optional for filter)
         */
        earliestDate?: string;
        /**
         * Maximal numbers of results returned (optional for filter)
         */
        maxWorkOrders?: number;
        /**
         * Structured location within the plant. Use /plants/{plant-id}/locations for possible values
         */
        locationId?: string;
        /**
         * Deprecated. Use locationId instead
         * @deprecated
         */
        areaId?: string;
        /**
         * Earliest date to find maintenance plan history for (optional for filter)
         */
        plannedDate?: string;
        /**
         * system-id of the preventive work order
         * @deprecated
         */
        systemId?: string;
        /**
         * Type of maintenance for the work order
         */
        maintenanceTypeId?: string;
    }): CancelablePromise<Array<PreventiveWorkOrderSimple> | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/work-orders/preventive-work-orders",
            query: {
                filter: filter,
                "status-id": statusId,
                "plant-id": plantId,
                "max-days-since-activation": maxDaysSinceActivation,
                "work-order-id": workOrderId,
                "earliest-date": earliestDate,
                "max-work-orders": maxWorkOrders,
                "location-id": locationId,
                "area-id": areaId,
                "planned-date": plannedDate,
                "system-id": systemId,
                "maintenance-type-id": maintenanceTypeId,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }
}
