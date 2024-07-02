/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CorrectiveWorkOrder } from '../models/CorrectiveWorkOrder';
import type { CorrectiveWorkOrderBasic } from '../models/CorrectiveWorkOrderBasic';
import type { CorrectiveWorkOrderCreate } from '../models/CorrectiveWorkOrderCreate';
import type { CorrectiveWorkOrderJsonPatch } from '../models/CorrectiveWorkOrderJsonPatch';
import type { CorrectiveWorkOrderSimple } from '../models/CorrectiveWorkOrderSimple';
import type { EstimatedCostsJsonPatch } from '../models/EstimatedCostsJsonPatch';
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
     * ### Update release 1.0.0
     * Work order operation actualPercentageComplete now represents progress reported through technical feedback.
     * If the Work order operation is completed, the value of actualPercentageComplete will always be 100.
     *
     * ### Update release 1.1.0
     * If work-order-id exist, but is not a `correctiveWorkOrder`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
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
     * ### Update release 1.12.0
     * Added new query parameter `include-technical-feedback`. It returns related technical feedback required to be completed as part of work order execution. Technical feedback is mostly used for preventive work orders, but can also be used for corrective work orders.
     *
     * Introduced property `detectionMethodGroupId` and `detectionMethodId` for technical feedback.
     *
     * ### Update release 1.15.0
     * Added new query parameter `include-measurements`.
     *
     * ### Update release 1.16.0
     * Added new query parameters `include-measuring-points`, `include-last-measurement` and `include-url-references`. `include-attachments` extended to also return PRT attachments of an operation.  `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * ### Update release 1.19.0
     * Added properties `systemCondition` and `isExcludedFromWorkOrderPlan` for operations.
     *
     * ### Update release 1.21.0
     * Added properties `costs` and `costsCurrency`.
     * Added property `area` to tag details.
     *
     * Added ability to read text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.22.0
     * Added new query parameter `include-service-operations`. Operations of type Service - PM03 previously available in the `operations` have been moved to `serviceOperations`.
     *
     * Added activeStatusIds to related maintenance records.
     *
     * ### Update release 1.24.0
     * `attachments` now include the property `documentCreatedDate`
     *
     * Removed 'urlReferences' field from response object, and removed 'include-url-references' query parameter. URLReferences are only supported for Notifications.
     *
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release 1.26.0
     * Added property `isEquipmentRental` to services in serviceOperations.
     * Added `materials` to serviceOperations.
     *
     * 'tagDetails' object now includes the new field 'maintenanceConceptId'
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.28.0
     * Added new query parameter `include-safety-measure`.
     *
     * Added new query parameter `include-estimated-costs`.
     *
     * Added `tag` and `title` to `maintenanceRecords` expand.
     *
     * ### Update release 1.29.0
     * Added new properties for `additionalCostWBSId` and `costWBSId`.
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * Split parts of `location` on `operations.materials` into `finalLocation` and `temporaryLocation` in the response.
     *
     * Added `agreement` & `agreementItem` on `serviceOperations` and `grossPrice`, `netValue` & `currency` on `services`.
     *
     * @returns CorrectiveWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupCorrectiveWorkOrder({
        workOrderId,
        includeOperations = true,
        includeServiceOperations = true,
        includeTechnicalFeedback = false,
        includeMaterials = true,
        includeMaintenanceRecords = false,
        includeAttachments = false,
        includeStatusDetails = false,
        includeTagDetails = false,
        includeRelatedTags = false,
        includeMeasuringPoints = false,
        includeLastMeasurement = false,
        includeMeasurements = false,
        includeSafetyMeasures = false,
        includeEstimatedCosts = false,
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
         * Include technical feedback required to be completed as part of work order execution.
         */
        includeTechnicalFeedback?: boolean,
        /**
         * Include materials for Work order operations
         */
        includeMaterials?: boolean,
        /**
         * Include related maintenance records (from object list)
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include Work order attachments (including PRT attachments)
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
         * Include related measuring points from PRT
         */
        includeMeasuringPoints?: boolean,
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true or if looking up measuring point)
         */
        includeLastMeasurement?: boolean,
        /**
         * Include related measurements
         */
        includeMeasurements?: boolean,
        /**
         * Include safety-measures in work order operations
         */
        includeSafetyMeasures?: boolean,
        /**
         * Include estimated costs
         */
        includeEstimatedCosts?: boolean,
    }): CancelablePromise<CorrectiveWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/corrective-work-orders/{work-order-id}',
            path: {
                'work-order-id': workOrderId,
            },
            query: {
                'include-operations': includeOperations,
                'include-service-operations': includeServiceOperations,
                'include-technical-feedback': includeTechnicalFeedback,
                'include-materials': includeMaterials,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-attachments': includeAttachments,
                'include-status-details': includeStatusDetails,
                'include-tag-details': includeTagDetails,
                'include-related-tags': includeRelatedTags,
                'include-measuring-points': includeMeasuringPoints,
                'include-last-measurement': includeLastMeasurement,
                'include-measurements': includeMeasurements,
                'include-safety-measures': includeSafetyMeasures,
                'include-estimated-costs': includeEstimatedCosts,
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
     * Update a Corrective Work Order.
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
     * - Update costs
     * - Update costWBSId and additionalCostWBSId
     * - Update priorityId
     *
     *
     * ### Important information - costWBSId and additionalCostWBSId
     * It's generally recommended that the values of `costWBSId` and `additionalCostWBSId` match.
     * When the work order is released (by setting status `REL`), there is Equinor business logic check to see if they match.
     * If the work order is released through Maintenance API, different values for costWBSId and additionalCostWBSId will result in an error.
     * If the work order is released directly in the ERP system, the user will receive a warning and can choose to continue.
     *
     * In release 1.29.0, there is a limitation related to update of `costWBSId` and `additionalCostWBSId` on a released work order.
     * When the work order was released, there were created settlement rules using the wbses. These are currently not updated.
     * This limitation is planned to be removed in release 1.30.0.
     *
     * ### Important information - Text
     * Append to text follows requirement `I-103209 - Notation in long text field - Upstream offshore`.
     *
     * Newest information in text is added above existing information and is automatically signed with date and full name of logged on user.
     *
     * ***When Advanced ERP text is enabled, information is not automatically signed and has to be sent with the input when using append***
     *
     * ### Important information - priorityId
     * `priorityId` can only be updated if the Corrective Work Order has a different priority than the FailureReport connected to this workorder.
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
     * Added possibility for update of `costs`.
     *
     * Added ability to update text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.29.0
     * Added possibility for update of `costWBSId` and `additionalCostWBSId`.
     *
     * ### Update release 1.31.0
     * Added possibility for update of `priorityId`.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateCorrectiveWorkOrder({
        workOrderId,
        requestBody,
    }: {
        workOrderId: string,
        /**
         * The information to be updated
         */
        requestBody: CorrectiveWorkOrderJsonPatch,
    }): CancelablePromise<ProblemDetails> {
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
     * ### Update release 1.8.0
     * Added support for calculation key, which determines the relationship between plannedWorkDuration plannedWorkHours, and capacityCount.
     *
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
    public static addCorrectiveWorkOrderOperations({
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
     * ### Update release 0.11.0
     * Deprecated endpoint
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateCorrectiveWorkOrderOperation({
        workOrderId,
        operation,
        requestBody,
    }: {
        workOrderId: string,
        operation: string,
        /**
         * Work order operation to update
         */
        requestBody: WorkOrderOperationJsonPatchDeprecated,
    }): CancelablePromise<ProblemDetails> {
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
     * Corrective Work order - Update estimated costs
     * ### Overview
     * Update estimated costs for corrective work order. Cost needs to be provided in the currency of the work order.
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
    public static addCorrectiveWoEstimatedCosts({
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
            url: '/work-orders/corrective-work-orders/{work-order-id}/estimated-costs/{cost-category-id}',
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
     * Corrective Work order - Add time ticket
     * ### Overview
     * Add time ticket for work performed
     *
     * ### Update release 0.8.0
     * Text multi-line property now is persisted as expected in ERP system.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static addCorrectiveWoOperationsTimeTicket({
        workOrderId,
        operation,
        requestBody,
    }: {
        workOrderId: string,
        operation: string,
        /**
         * Time ticket to add to operation
         */
        requestBody: WorkOrderOperationTimeTicketAdd,
    }): CancelablePromise<ProblemDetails> {
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
                403: `User does not have sufficient rights to add time tickets to work order operations`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * Corrective Work order - Attachment upload
     * Upload attachments for Corrective Work Order
     *
     * Limitations of Attachment upload endpoints:
     * - No support for parallel calls (uploading multiple attachments at once).
     * - Maximum file size is 60 MB. Files between 60.0MB - 99.9MB will give a 400 error. Files larger than 100MB will result in a `413 Request Entity Too Large' Error in HTML. This is due to constraints in the underlying system and is outside of our control.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static uploadCorrectiveWorkOrderAttachment({
        workOrderId,
        formData,
    }: {
        workOrderId: string,
        formData?: {
            files?: Array<Blob>;
        },
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-orders/corrective-work-orders/{work-order-id}/attachments',
            path: {
                'work-order-id': workOrderId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                403: `User does not have sufficient rights to upload attachment`,
                404: `The specified resource was not found`,
                413: `Request Entity Too Large.
                This error occurs when the size of an attachment exceeds 100MB.
                `,
            },
        });
    }

    /**
     * Corrective Work order - Attachment download
     * Download single attachment for corrective Work order
     * @returns binary Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static downloadCorrectiveWorkOrderAttachment({
        workOrderId,
        attachmentId,
    }: {
        workOrderId: string,
        attachmentId: string,
    }): CancelablePromise<Blob | ProblemDetails> {
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
     * The endpoint supports most status activation such as:
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
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateCorrectiveWorkOrderStatus({
        workOrderId,
        statusId,
        requestBody,
        completeOutstandingMaintenanceRecords = true,
    }: {
        workOrderId: string,
        statusId: string,
        /**
         * Work order status to update
         */
        requestBody: StatusUpdate,
        /**
         * Additional parameter to activation of TECO and CLSD statuses. Determines if related maintenance records should be closed as well.
         */
        completeOutstandingMaintenanceRecords?: boolean,
    }): CancelablePromise<ProblemDetails> {
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
     * - system-id (optional)
     *
     * ### Filter: by-maintenance-type-id
     * Find preventive work orders by maintenance type. Response will only include open work orders.
     * Parameters:
     * - plant-id
     * - maintenance-type-id
     *
     * ### Update release 0.9.0
     * Added filter by-maintenance-type-id.
     *
     * ### Update release 0.11.0
     * Added system-id as optional parameter til filter before-required-end-date.
     *
     * ### Update release 1.5.0
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.21.0
     * Added properties `costs` and `costsCurrency`.
     *
     * Added ability to read text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.24.0
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * @returns CorrectiveWorkOrderSimple Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchCorrectiveWorkOrder({
        filter,
        statusId,
        plantId,
        maxDaysSinceActivation,
        maxWorkOrders,
        locationId,
        requiredEndDate,
        systemId,
        maintenanceTypeId,
    }: {
        /**
         * Filter to limit the Corrective work order by
         */
        filter: 'recent-status-activations' | 'same-maintenance-plan' | 'before-required-end-date' | 'by-maintenance-type-id',
        /**
         * Status
         */
        statusId?: string,
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Define how many days from the current day to include results for. 0 if only include for today
         */
        maxDaysSinceActivation?: number,
        /**
         * Maximal numbers of results returned (optional for filter)
         */
        maxWorkOrders?: number,
        /**
         * Structured location within the plant. Use /plants/{plant-id}/locations for possible values
         */
        locationId?: string,
        /**
         * placeholder
         */
        requiredEndDate?: string,
        /**
         * system-id of the corrective work order
         * @deprecated
         */
        systemId?: string,
        /**
         * Type of maintenance for the work order
         */
        maintenanceTypeId?: string,
    }): CancelablePromise<Array<CorrectiveWorkOrderSimple> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/corrective-work-orders',
            query: {
                'filter': filter,
                'status-id': statusId,
                'plant-id': plantId,
                'max-days-since-activation': maxDaysSinceActivation,
                'max-work-orders': maxWorkOrders,
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
     * ### Update release 1.1.0
     * Added externalPartnerWorkOrderId property to be used as reference to work order in external partner system.
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
     * ### Update release 1.21.0
     * Add property `IsExcludedFromWorkOrderPlan` to operations model.
     *
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.24.0
     * Added property `cmrIndicator` in the response.
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns CorrectiveWorkOrderBasic Created
     * @throws ApiError
     */
    public static createCorrectiveWorkOrder({
        requestBody,
    }: {
        /**
         * Corrective Work order to create
         */
        requestBody: CorrectiveWorkOrderCreate,
    }): CancelablePromise<ProblemDetails | CorrectiveWorkOrderBasic> {
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
