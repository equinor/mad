import type { ProblemDetails } from '../models/ProblemDetails';
import type { SubseaWorkOrderMaterial } from '../models/SubseaWorkOrderMaterial';
import type { TechnicalFeedbackJsonPatch } from '../models/TechnicalFeedbackJsonPatch';
import type { WorkOrderMaterial } from '../models/WorkOrderMaterial';
import type { WorkOrderMaterialAdd } from '../models/WorkOrderMaterialAdd';
import type { WorkOrderOperationJsonPatch } from '../models/WorkOrderOperationJsonPatch';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class WorkOrderOperationsService {
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
    static updateWorkOrderOperation({ operationId, requestBody, }: {
        operationId: string;
        /**
         * Update of Work order details
         */
        requestBody: Array<WorkOrderOperationJsonPatch>;
    }): CancelablePromise<ProblemDetails>;
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
    static updateTechnicalFeedback({ operationId, technicalFeedbackId, requestBody, }: {
        operationId: string;
        /**
         * The id of the technical feedback as found in the work order lookup endpoint
         */
        technicalFeedbackId: string;
        /**
         * Update technical feedback
         */
        requestBody: Array<TechnicalFeedbackJsonPatch>;
    }): CancelablePromise<ProblemDetails>;
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
    static addMaterialToWorkOrderOperation({ operationId, requestBody, }: {
        operationId: string;
        /**
         * Add material details
         */
        requestBody: Array<WorkOrderMaterialAdd>;
    }): CancelablePromise<ProblemDetails | Array<WorkOrderMaterial | SubseaWorkOrderMaterial>>;
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
    static removeMaterialFromWorkOrderOperation({ operationId, reservationId, }: {
        operationId: string;
        /**
         * Reservation id for the material found through work order lookup with include-materials
         */
        reservationId: string;
    }): CancelablePromise<ProblemDetails>;
}
