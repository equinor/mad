import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WorkOrderOperationsService {
    /**
     * Work order - Update operation
     * ### Overview
     * Update the work order operation for all work order types.
     * The ´operation-id´ parameter to use in the url can be found using the various lookup and search endpoints for work orders. ´operation-id´ consist of two internal ids from the ERP system called routing number and counter separated by the `-` character.
     *
     * The following fields are possible to update:
     * - actualPercentageComplete
     * - isCompleted
     * - schedulingStartConstraintId - Value one of: `MSO` - Must start on, `SNET` - Start no earlier than or `SNLT` - Start no later than
     * - schedulingStartConstraintDateTime
     * - schedulingFinishConstraintId - Value one of:  `MFO ` - Must finish on, `FNET` - Finish no earlier than or `FNLT` - Finish no later than
     * - schedulingFinishConstraintDateTime
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static updateWorkOrderOperation({ operationId, requestBody, }) {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-order-operations/{operation-id}',
            path: {
                'operation-id': operationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update operation`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }
    /**
     * Technical Feedback - Update
     * ### Overview
     * Update the results of technical feedback.
     *
     * When executing a technical feedback , the end-user will complete the steps described in `maintenanceActivityText` and end up with a result in the form of a status (`feedbackStatusId`) and a reason (`feedbackReasonId`). Compare the result with the business rules defined by `/work-orders/technical-feedback-master-data`:
     *
     * * `hasRequiredMaintenanceRecord: false` Use this endpoint
     *
     * * `hasRequiredMaintenanceRecord: true`: Create a new maintenance record for technical feedback using the `POST /maintenance-records/failure-reports` or `POST /maintenance-records/activity-reports` endpoints with the relatedWorkOrder properties in the request to specify the work order and technical feedback
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static updateTechnicalFeedback({ operationId, technicalFeedbackId, requestBody, }) {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-order-operations/{operation-id}/technical-feedback/{technical-feedback-id}',
            path: {
                'operation-id': operationId,
                'technical-feedback-id': technicalFeedbackId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update operation`,
                404: `The specified resource was not found`,
                409: `Technical feedback result requires a maintenance record to be created`,
            },
        });
    }
    /**
     * Work order - Add materials
     * ### Overview
     * Add materials to a work order operation (of any work order type).
     * The ´operation-id´ parameter to use in the url can be found using the various lookup and search endpoints for work orders. ´operation-id´ consist of two internal ids from the ERP system called routing number and counter separated by the `-` character.
     *
     * There are two types of materials which can be added to work orders:
     * 1. Material identified by materialId
     * 2. Material identified by equipmentId (only for Subsea work orders)
     *
     * Requests need to supply either materialId or equipmentId (not both)
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns any Created
     * @throws ApiError
     */
    static addMaterialToWorkOrderOperation({ operationId, requestBody, }) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-order-operations/{operation-id}/materials',
            path: {
                'operation-id': operationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters or is otherwise inconsistent`,
                403: `User does not have sufficient rights to update operation`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
                501: `(__Production environment only__) Not implemented yet`,
            },
        });
    }
    /**
     * Work order operation - Remove material
     * ### Overview
     * Remove a material from a work order operation (of any work order type).
     * The ´operation-id´ parameter to use in the url can be found using the various lookup and search endpoints for work orders. ´operation-id´ consist of two internal ids from the ERP system called routing number and counter separated by the `-` character.
     * The ´reservation-id´ parameter to use in the url can be found using the include-materials query parameter to work order lookup.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static removeMaterialFromWorkOrderOperation({ operationId, reservationId, }) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/work-order-operations/{operation-id}/materials/{reservation-id}',
            path: {
                'operation-id': operationId,
                'reservation-id': reservationId,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update operation`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }
}
