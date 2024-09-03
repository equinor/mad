/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenericWorkOrderJsonPatch } from '../models/GenericWorkOrderJsonPatch';
import type { ModificationWorkOrder } from '../models/ModificationWorkOrder';
import type { ModificationWorkOrderBasic } from '../models/ModificationWorkOrderBasic';
import type { ModificationWorkOrderCreate } from '../models/ModificationWorkOrderCreate';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { StatusUpdate } from '../models/StatusUpdate';
import type { WorkOrderOperationTimeTicketAdd } from '../models/WorkOrderOperationTimeTicketAdd';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModificationWorkOrdersService {

    /**
     * Modification Work order - Create
     * ### Overview
     * Create new Modification Work order based on a supplied failure report.
     *
     * It's possible to supply operations in the create operation. If no operations are passed, a default operation will be created automatically.
     *
     * To lookup the created corrective work order use endpoint `/work-orders/modification-work-orders/{work-order-id}`.
     *
     * ### Important information
     * The primary cost wbs of a modification work order is typically resolved automatically from the provided tag. However, in order to later set the modification work order to status `REL - Release`, you need to provide an additional cost wbs (property `additionalCostWBSId`) on creation.
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
     * @returns ModificationWorkOrderBasic Created
     * @throws ApiError
     */
    public static createModificationWorkOrder({
        requestBody,
    }: {
        /**
         * Modification Work order to create
         */
        requestBody: ModificationWorkOrderCreate,
    }): CancelablePromise<ProblemDetails | ModificationWorkOrderBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-orders/modification-work-orders',
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
     * Modification Work order - Add time ticket
     * ### Overview
     * Add time ticket for work performed.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static addModificationWoOperationsTimeTicket({
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
            url: '/work-orders/modification-work-orders/{work-order-id}/operations/{operation}/time-tickets',
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
     * Modification Work order - Lookup
     * ### Overview
     * Lookup single Modification Work order with related information.
     *
     * ### Update release 1.1.0
     * If work-order-id exist, but is not a `modificationWorkOrder`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
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
     * ### Update release 1.11.0
     * Added properties `additionalCostWBSId` and `additionalCostWBS`.
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
     * @returns ModificationWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupModificationWorkOrder({
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
    }): CancelablePromise<ModificationWorkOrder | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/modification-work-orders/{work-order-id}',
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
                301: `If work-order-id exist, but is not a \`modificationWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Modification Work order - Update
     * ### Overview
     * Update modification work order.
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
    public static updateModificationWorkOrder({
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
            url: '/work-orders/modification-work-orders/{work-order-id}',
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
     * Modification Work order - Update status
     * ## Overview
     * Activate or deactivate status for Work order.
     *
     * Overview of how status are used can be found in Equinor's governing document [GL1561 - Work orders and notifications types](https://docmap.equinor.com/Docmap/page/doc/dmDocAll.html?DOCVIEW=FALSE?DOCKEYID=525791)
     *
     * To identify which status the work order currently has perform a request to: `work-orders/modification-work-orders/{{work-order-id}}?include-status-details=true`
     *
     * ## Supported statuses
     * The endpoint supports most status activation such as:
     *
     * - PREP - Job preparation
     * - PRCO - Prep compl. waiting goods/service
     * - RDEX - Ready for execution
     * - STRT - Job started
     * - RDOP - Ready for operation
     * - REL  - Released
     * - TECO - Technical complete
     * - CLSD - Business close
     * - WRNT - Warranty case
     * - PLAN - Planning/Scheduling
     * - FREZ - Freeze of work scope
     *
     * Deactivation is supported in most cases where there is no interdependency between statuses. For status with a statusOrder value, deactivation is not necessary (nor supported) as the business logic will handle the switch.
     *
     * Support for ActivatedDateTime for TECO status. It is an optional parameter which allows to overwrite the default reference date for TECO. If no value is provided, the value will be set to current timestamp.
     *
     * Parameter complete-outstanding-maintenance-records set to true will close maintenance records which have a relationship to the work order via the `ObjectList`.
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
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateModificationWorkOrderStatus({
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
            url: '/work-orders/modification-work-orders/{work-order-id}/statuses/{status-id}',
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

}
