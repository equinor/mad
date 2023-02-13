import type { GenericWorkOrderJsonPatch } from '../models/GenericWorkOrderJsonPatch';
import type { ModificationWorkOrder } from '../models/ModificationWorkOrder';
import type { ModificationWorkOrderBasic } from '../models/ModificationWorkOrderBasic';
import type { ModificationWorkOrderCreate } from '../models/ModificationWorkOrderCreate';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { StatusUpdate } from '../models/StatusUpdate';
import type { WorkOrderOperationTimeTicketAdd } from '../models/WorkOrderOperationTimeTicketAdd';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ModificationWorkOrdersService {
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
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns ModificationWorkOrderBasic Created
     * @throws ApiError
     */
    static createModificationWorkOrder({ requestBody, }: {
        /**
         * Modification Work order to create
         */
        requestBody: ModificationWorkOrderCreate;
    }): CancelablePromise<ProblemDetails | ModificationWorkOrderBasic>;
    /**
     * Modification Work order - Add time ticket
     * ### Overview
     * Add time ticket for work performed.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static addModificationWoOperationsTimeTicket({ workOrderId, operation, requestBody, }: {
        workOrderId: string;
        operation: string;
        /**
         * Time ticket to add to operation
         */
        requestBody: WorkOrderOperationTimeTicketAdd;
    }): CancelablePromise<ProblemDetails>;
    /**
     * Modification Work order - Lookup
     * ### Overview
     * Lookup single Modification Work order with related information.
     *
     * ### Update release v1.1.0
     * If work-order-id exist, but is not a `modificationWorkOrder`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
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
     * ### Update release v1.11.0
     * Added properties `additionalCostWBSId` and `additionalCostWBS`.
     *
     * @returns ModificationWorkOrder Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static lookupModificationWorkOrder({ workOrderId, includeOperations, includeMaterials, includeMaintenanceRecords, includeAttachments, includeStatusDetails, includeTagDetails, includeRelatedTags, }: {
        workOrderId: string;
        /**
         * Include Work order operations
         */
        includeOperations?: boolean;
        /**
         * Include materials for Work order operations
         */
        includeMaterials?: boolean;
        /**
         * Include related maintenance records (from object list)
         */
        includeMaintenanceRecords?: boolean;
        /**
         * Include Work order attachments (on header and for operation)
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
    }): CancelablePromise<ModificationWorkOrder | ProblemDetails>;
    /**
     * Modification Work order - Update
     * ### Overview
     * Update modification work order.
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
    static updateModificationWorkOrder({ workOrderId, requestBody, }: {
        workOrderId: string;
        /**
         * The information to be updated
         */
        requestBody: GenericWorkOrderJsonPatch;
    }): CancelablePromise<ProblemDetails>;
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
     * The endpoint supports most status activiation such as:
     *
     * - PREP - Job preperation
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
    static updateModificationWorkOrderStatus({ workOrderId, statusId, requestBody, completeOutstandingMaintenanceRecords, }: {
        workOrderId: string;
        statusId: string;
        /**
         * Work order status to update
         */
        requestBody: StatusUpdate;
        /**
         * Additional parameter to activation of TECO and CLSD statuses. Determines if related maintenance records should be closed as well.
         */
        completeOutstandingMaintenanceRecords?: boolean;
    }): CancelablePromise<ProblemDetails>;
}
