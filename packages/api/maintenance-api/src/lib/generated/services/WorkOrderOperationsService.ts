/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddSafetyMeasure } from '../models/AddSafetyMeasure';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { SafetyMeasure } from '../models/SafetyMeasure';
import type { SubseaWorkOrderMaterialForAddMaterialResponse } from '../models/SubseaWorkOrderMaterialForAddMaterialResponse';
import type { TechnicalFeedbackJsonPatch } from '../models/TechnicalFeedbackJsonPatch';
import type { WorkOrderMaterialAdd } from '../models/WorkOrderMaterialAdd';
import type { WorkOrderMaterialForAddMaterialResponse } from '../models/WorkOrderMaterialForAddMaterialResponse';
import type { WorkOrderMaterialJsonPatch } from '../models/WorkOrderMaterialJsonPatch';
import type { WorkOrderOperationForSearchFull } from '../models/WorkOrderOperationForSearchFull';
import type { WorkOrderOperationJsonPatch } from '../models/WorkOrderOperationJsonPatch';
import type { WorkOrderServiceOperationJsonPatch } from '../models/WorkOrderServiceOperationJsonPatch';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WorkOrderOperationsService {

    /**
     * Work order operations - Search
     * ### Overview
     * Search for work order operations from any work order type.
     *
     * ### Query parameter filters
     *
     * The following query parameters are supported for filtering the work order operations.
     * All the query parameters are optional, but at least one must be provided to get a response.
     *
     * Parameters:
     * - `work-center-id-any-of`
     * - `plant-id`
     * - `changed-since-datetime`
     * - `changed-before-datetime`
     * - `status-changed-since-datetime`
     * - `operation-id-any-of`
     * - `work-order-ids-any-of`
     *
     * @returns WorkOrderOperationForSearchFull Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchWorkOrderOperations({
        plantId,
        changedSinceDatetime,
        changedBeforeDatetime,
        statusChangedSinceDatetime,
        workCenterIdAnyOf,
        workOrderIdsAnyOf,
        operationIdAnyOf,
        includeMaterials = false,
        includeAttachments = false,
        includeSafetyMeasures = false,
        perPage = 100,
        page = 1,
    }: {
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Earliest `changedOnDate` to return work order operations for
         */
        changedSinceDatetime?: string,
        /**
         * Limit the response to only work order operations changed after `changed-since-datetime` but before this datetime
         */
        changedBeforeDatetime?: string,
        /**
         * Return work order operations that have had their status changed (e.g. `REL` added or removed) since the given datetime, at the earliest.
         * The filter is based on the Operation's `Status Changelog` and operates on the property `statusChangedDateTime` (available in response).
         *
         */
        statusChangedSinceDatetime?: string,
        /**
         * Comma-separated list of `work-center-id`. Wildcard endings are supported
         */
        workCenterIdAnyOf?: string,
        /**
         * Comma-separated list of `work-order-id`.
         */
        workOrderIdsAnyOf?: string,
        /**
         * Comma-separated list of `operation-id`.
         */
        operationIdAnyOf?: string,
        /**
         * Include materials for Work order operations
         */
        includeMaterials?: boolean,
        /**
         * Include attachments for Work order operations
         */
        includeAttachments?: boolean,
        /**
         * Include safety measures for Work order operations
         */
        includeSafetyMeasures?: boolean,
        /**
         * Results to return per page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<WorkOrderOperationForSearchFull> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-order-operations',
            query: {
                'plant-id': plantId,
                'changed-since-datetime': changedSinceDatetime,
                'changed-before-datetime': changedBeforeDatetime,
                'status-changed-since-datetime': statusChangedSinceDatetime,
                'work-center-id-any-of': workCenterIdAnyOf,
                'work-order-ids-any-of': workOrderIdsAnyOf,
                'operation-id-any-of': operationIdAnyOf,
                'include-materials': includeMaterials,
                'include-attachments': includeAttachments,
                'include-safety-measures': includeSafetyMeasures,
                'per-page': perPage,
                'page': page,
            },
            errors: {
                400: `Request is missing required parameters`,
            },
        });
    }

    /**
     * Work order - Update operation
     * ### Overview
     * Update the work order operation for all work order types.
     * The `operation-id` parameter to use in the url can be found using the various lookup and search endpoints for work orders. `operation-id` consists of two internal ids from the ERP system called routing number and counter separated by the `-` character.
     *
     * The following fields are possible to update:
     * - actualPercentageComplete
     * - isCompleted
     * - schedulingStartConstraintId - Value one of: `MSO` - Must start on, `SNET` - Start no earlier than or `SNLT` - Start no later than
     * - schedulingStartConstraintDateTime
     * - schedulingFinishConstraintId - Value one of: `MFO ` - Must finish on, `FNET` - Finish no earlier than or `FNLT` - Finish no later than
     * - schedulingFinishConstraintDateTime
     * - systemCondition
     * - operationId
     * - title
     * - text
     * - workCenterId
     * - workCenterPlantId
     * - standardTextTemplate
     * - plannedWorkHours
     * - plannedWorkDuration
     * - capacityCount
     * - calculationKey
     *
     * Individual operations can be updated with relevant codes for `systemCondition` to describe required process conditions for each operation. Possible values for the `systemCondition`:
     * - 0 - Unit shutdown
     * - 1 – In operation
     * - 2 – System shutdown
     * - 3 – Partial production shutdown
     * - 4 – Full production shutdown
     * - 5 - Reset condition value
     *
     * ### Update release 1.19.0
     * Added support for `operationId`, `title`, `text`, `workCenterId`, `workCenterPlantId`, `standardTextTemplate`, `plannedWorkHours`, `plannedWorkDuration`, `capacityCount`, `calculationKey`, `systemCondition,` and `isExcludedFromWorkOrderPlan`.
     *
     * ### Update release 1.21.0
     * Added ability to update text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.22.0
     * Added support to reset `systemCondition` by passing in the value `5`.
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * ### Update release 1.35.0
     * Added support for updating the person responsible for the operation by using the path `personResponsibleEmail`. The value used for this path should be the equinor email of an employee with a SAP user.
     *
     * ### Update release 1.36.0
     * Added support for updating property `isExcludedFromWorkOrderPlan`.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateWorkOrderOperation({
        operationId,
        requestBody,
    }: {
        operationId: string,
        /**
         * Update of Work order details
         */
        requestBody: Array<WorkOrderOperationJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
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
     * Work order operation - Remove operation
     * ### Overview
     * Remove an operation from a work order (of any work order type).
     * The `operation-id` parameter to use in the url can be found using the various lookup and search endpoints for work orders. `operation-id` consists of two internal ids from the ERP system called routing number and counter separated by the `-` character.
     *
     * It is not allowed to delete an already confirmed or partly confirmed operation, as well as the last open operation within a work order. Once a work order is completed, it is not possible to remove operations.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static deleteWorkOrderOperation({
        operationId,
    }: {
        operationId: string,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/work-order-operations/{operation-id}',
            path: {
                'operation-id': operationId,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to remove operation`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * @deprecated
     * Work order - Update service operation
     * ### Overview
     * Convert an operation to a service operation.
     * This will change the type of operation to `PM03 - service` and subsequently remove it from the operations list.
     * Required fields must be supplied:  `materialGroup`, `purchasingGroup`, `purchasingOrganization`.
     * One service has to be created with the following data:
     * `lineId`, `quantity`, `unit`, `materialGroup`, `costElement`, and either a `title` (for a text item service) or `serviceId`.
     *
     * Note: There is a known bug on the SAP side that prevents updating `standardTextTemplate` for service operations.
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * ### Update release 1.36.0
     * Added support for updating property `isExcludedFromWorkOrderPlan`.
     *
     * ### Update release 1.37.0
     * Added new properties `plannedWorkHours`, `actualWorkHours`, `capacityCount`, `plannedDuration`, `calculationKey`, `earliestStartDateTime`, `earliestFinishDateTime` and `safetyMeasures` to `serviceOperations`.
     *
     * ### Update release 1.39.0
     * Added sunset header. Endpoint will be deprecated as of the August 2025 release. See [Deprecation](#section/Deprecation/Deprecation-policy) for more information.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateWorkOrderServiceOperation({
        operationId,
        requestBody,
    }: {
        operationId: string,
        /**
         * Update of Work order service operation details
         */
        requestBody: Array<WorkOrderServiceOperationJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-order-service-operations/{operation-id}',
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
     * When executing a technical feedback , the end-user will complete the steps described in `maintenanceActivityText` and end up with a result in the form of a status (`feedbackStatusId`) and a reason (`feedbackReasonId`).
     * Compare the result with the business rules defined by `/work-orders/technical-feedback-master-data`:
     *
     * * `hasRequiredMaintenanceRecord: false` Use this endpoint
     *
     * * `hasRequiredMaintenanceRecord: true`: Create a new maintenance record for technical feedback using the `POST /maintenance-records/failure-reports`
     * or `POST /maintenance-records/activity-reports` endpoints with the relatedWorkOrder properties in the request to specify the work order and technical feedback
     *
     * ### Related endpoints
     *
     * - `GET`  [/work-orders/technical-feedback-master-data](#operation/GetTechnicalFeedbackMasterData)
     * - `POST` [/maintenance-records/failure-reports](#operation/CreateFailureReport)
     * - `POST` [/maintenance-records/activity-reports](#operation/CreateActivityReport)
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateTechnicalFeedback({
        operationId,
        technicalFeedbackId,
        requestBody,
    }: {
        operationId: string,
        /**
         * The id of the technical feedback as found in the work order lookup endpoint
         */
        technicalFeedbackId: string,
        /**
         * Update technical feedback
         */
        requestBody: Array<TechnicalFeedbackJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
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
     * The ´operation-id´ parameter to use in the url can be found using the various lookup and search endpoints for work orders. ´operation-id´ consists of two internal ids from the ERP system called routing number and counter separated by the `-` character.
     *
     * There are three types of materials which can be added to work orders:
     * 1. Material identified by `materialId`
     * 2. Material identified by `equipmentId` (only for Subsea work orders)
     * 3. Material identified only by the `material` field (also known as text items).
     *
     * Each item in the request must include one of `materialId`, `equipmentId` or `material`.
     *
     * ### Update release 1.22.0
     * Added possibility of adding materials without a materialId (also known as text items).
     * In this case, the purchasing fields mentioned below need to be provided as input:
     * - `material`
     * - `price`
     * - `priceUnitId`
     * - `purchasingGroup`
     * - `goodsRecipient`
     * - `unloadingPoint`
     * - `materialGroup`
     *
     * ### Update release 1.31.0
     * Split parts of `location` into `finalLocation` and `temporaryLocation` in the response.
     *
     * ### Update release 1.33.0
     * Added support for new properties `supplierId`, `vendorsMaterialNumber`, `deliveryTimeInDays`, `requisitionerId`, `holdDeliveryOnshore`, `text`.
     *
     * ### Update release 1.35.0
     * Added new property `requisitionerId` to the response.
     *
     * ### Update release 1.37.0
     * Added property `unloadingPoint` to the response.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns any Created
     * @throws ApiError
     */
    public static addMaterialToWorkOrderOperation({
        operationId,
        requestBody,
    }: {
        operationId: string,
        /**
         * Add material details
         */
        requestBody: Array<WorkOrderMaterialAdd>,
    }): CancelablePromise<ProblemDetails | Array<(WorkOrderMaterialForAddMaterialResponse | SubseaWorkOrderMaterialForAddMaterialResponse)>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-order-operations/{operation-id}/materials',
            path: {
                'operation-id': operationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request, for example if both \`materialId\` and \`material\` is supplied for the same item`,
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
     * The ´operation-id´ parameter to use in the url can be found using the various lookup and search endpoints for work orders. ´operation-id´ consists of two internal ids from the ERP system called routing number and counter separated by the `-` character.
     * The ´reservation-id´ parameter to use in the url can be found using the include-materials query parameter to work order lookup.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static removeMaterialFromWorkOrderOperation({
        operationId,
        reservationId,
    }: {
        operationId: string,
        /**
         * Reservation id for the material found through work order lookup with include-materials
         */
        reservationId: string,
    }): CancelablePromise<ProblemDetails> {
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

    /**
     * Work order operation - Update material
     * ### Overview
     * Update a material in a work order operation (of any work order type).
     *
     * The ´operation-id´ parameter to use in the url can be found using the various lookup and search endpoints for work orders. ´operation-id´ consists of two internal ids from the ERP system called routing number and counter separated by the `-` character.
     *
     * The ´reservation-id´ parameter to use in the url can be found using the include-materials query parameter to work order lookup.
     *
     * ### Update release 1.33.0
     * Added support for the same properties which can be used for material creation.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateMaterialInWorkOrderOperation({
        operationId,
        reservationId,
        requestBody,
    }: {
        operationId: string,
        /**
         * Reservation id for the material found through work order lookup with include-materials
         */
        reservationId: string,
        /**
         * Update material details
         */
        requestBody: Array<WorkOrderMaterialJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-order-operations/{operation-id}/materials/{reservation-id}',
            path: {
                'operation-id': operationId,
                'reservation-id': reservationId,
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
     * Work order operation - Add safety measure
     * Add safety measure to work order operation. Safety measures are needed when a work order operation requires special safety practices or risk management.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns SafetyMeasure Created
     * @throws ApiError
     */
    public static addSafetyMeasure({
        operationId,
        requestBody,
    }: {
        operationId: string,
        /**
         * Safety measure to add
         */
        requestBody: AddSafetyMeasure,
    }): CancelablePromise<ProblemDetails | SafetyMeasure> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-order-operations/{operation-id}/safety-measures',
            path: {
                'operation-id': operationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User does not have sufficient rights to edit the work order`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Work order operation - Remove safety measure
     * Remove a safety measure from a work order operation.
     *
     * The `operation-id` and `document-id` parameters to use in the request URL can be found using the various Lookup and Search endpoints for Work orders, typically by using the `include-operations` query parameter.
     *
     * - `operation-id` consists of two internal ids from the ERP system called routing number and counter separated by the `-` character.
     * - `document-id` consists of four parts separated by the `-` character: A `document number` of up to 25 characters (e.g. `WORK AT HEIGHT`), the `document type` (e.g. `B30`, `A01`), a 3-digit `document part` (e.g. `000`), and a 2-digit `document version` part (e.g. `01`).
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static removeSafetyMeasure({
        operationId,
        documentId,
    }: {
        /**
         * The `operation-id` of the Work order operation that has the safety measure document to remove.
         */
        operationId: string,
        /**
         * Unique id for the safety measure document to remove.
         */
        documentId: string,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/work-order-operations/{operation-id}/safety-measures/{document-id}',
            path: {
                'operation-id': operationId,
                'document-id': documentId,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update work order operation`,
                404: `The specified resource was not found`,
                409: `Work order operation is locked by other user or it is not possible to remove the safety measure`,
            },
        });
    }

}
