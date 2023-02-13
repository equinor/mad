import type { ProblemDetails } from '../models/ProblemDetails';
import type { RelationshipToMaintenanceRecordAdd } from '../models/RelationshipToMaintenanceRecordAdd';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class WorkOrderRelationshipsService {
    /**
     * Work order relationships - Add related maintenance record
     * ### Overview
     * Add new relationship between a work order and a maintenance record.
     *
     * For `source` type `ObjectList`, the relationship will be stored in the object list of the work order.
     * This will add a relationship that is accessible by lookup requests to the work order.
     *
     * For `source` type `TechnicalFeedback`, the relationship will be stored as part of the technical feedback for the work order. Depending on `technicalFeedbackParameters.statusId` and `technicalFeedbackParameters.reasonId`, different types of maintenance records are required (either `failureReport` or `activityReport`). If these requirements are not fulfilled, the response status code will be 409 - Conflict.
     *
     * This endpoint returns no response data. Perform a lookup request for the specific work order type to get updated information. This is currently not possible for technical feedback, but is expected to be added in the future.
     *
     * ### Important information
     * The maintenance record must not be closed.
     *
     * ### Update release v1.5.0
     * Added relationship of type `TechnicalFeedback`.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static addRelationshipFromWorkOrderToMaintenanceRecord({ workOrderId, requestBody, }: {
        /**
         * Id of the work order (can be any type)
         */
        workOrderId: string;
        /**
         * Define maintenance record to add relationship to
         */
        requestBody: RelationshipToMaintenanceRecordAdd;
    }): CancelablePromise<ProblemDetails>;
    /**
     * Work order relationships - Remove related maintenance record
     * ### Overview
     * Remove an existing relationship between a work order and a maintenance record.
     *
     * Internally in the ERP system, this relationship will be removed from the object list of the work order.
     *
     * This endpoint returns no response data. Perform a lookup request for the specific work order type to get updated information.
     *
     * ### Important information
     * In some case, it will not be possible to remove a maintenance record relationship to a work order. For example, when a corrective work order is created from a failure report, it is not possible to remove this initial relationship (internally this is refered to as the header notification of the work order).
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static removeRelationshipFromWorkOrderToMaintenanceRecord({ workOrderId, recordId, }: {
        /**
         * Id of the work order (can be any type)
         */
        workOrderId: string;
        /**
         * Id of the maintenance record (can be any type)
         */
        recordId: string;
    }): CancelablePromise<ProblemDetails>;
}
