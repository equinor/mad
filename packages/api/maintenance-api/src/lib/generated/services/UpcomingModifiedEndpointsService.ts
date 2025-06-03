/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FailureReport } from '../models/FailureReport';
import type { MeasuringPoint } from '../models/MeasuringPoint';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { TechnicalInformationUpdateRequestBasic } from '../models/TechnicalInformationUpdateRequestBasic';
import type { TechnicalInformationUpdateRequestCreate } from '../models/TechnicalInformationUpdateRequestCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UpcomingModifiedEndpointsService {

    /**
     * Measuring points - Search
     * ### Overview
     * Search measuring points.
     *
     * ### Filter: by-plant
     * Search measuring points based on plant and one other property of the measuring point.
     * Parameters:
     * - plant-id
     *
     * At least one of the following parameters is required:
     *
     * - `tag-prefix`
     * - `measuring-position`
     * - `quantitative-characteristic`
     * - `qualitative-code-group`
     * - `measuring-point-name`
     * - `characteristic-value-any-of`
     *
     * ### Examples
     * `/measuring-points?filter=by-plant&plant-id=1180&tag-prefix=18HV10&api-version=v1`
     * `/measuring-points?filter=by-plant&plant-id=1102&quantitative-characteristic=SURFACE_MAINTEANC&api-version=v1`
     *
     * `/measuring-points?filter=by-plant&plant-id=1180&tag-prefix=18HV10&position=VALVE%20STATUS&include-last-measurement=true&api-version=v1`
     *
     *
     * When using the `characteristic-value-any-of` it is important to URI Encode the input data especially when there are special characters as part of the input:
     *
     * `/measuring-points?characteristic-value-any-of=%3D17445%2F9818,%3D17433/6333&class-id=L_PART&characteristic-id=L_E3DREF&plant-id=1201&api-version=v1`
     *
     * ### Update release 1.10.0
     * Added property `maintenanceRecordId` to measurements.
     *
     * Added `include-characteristics` and `include-characteristics-without-value` query parameter.
     *
     * ### Update release 1.15.0
     * Added `workOrderId` to response.
     *
     * ### Update release 1.20.0
     * Edited the response structure to support pagination. Use the parameters `page` and `per-page` in the parameters to edit wanted response.
     *
     * ### Update release 1.21.0
     * Measuring points for equipment are now included in searches based on `plant-id`.
     * Measuring points for equipment now include the `tagId` and `tagPlantId` of the tag the equipment is installed on.
     *
     * ### Update release 1.22.0
     * To limit the response data for filter `by-plant`, at least one of the additional parameters must be provided.
     *
     * ### Update release 1.30.0
     * Added `characteristic-value-any-of`, `class-id` and `characteristic-id` query parameters.
     * Can be used to search for measuring points based on values of a characteristic.
     *
     * ### Update future release
     * Added `include-measurement-text` query parameter to include measurement text in the response.
     *
     * @returns MeasuringPoint Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchMeasuringPoints({
        filter,
        plantId,
        tagPrefix,
        measuringPosition,
        quantitativeCharacteristic,
        qualitativeCodeGroup,
        measuringPointName,
        includeLastMeasurement = false,
        includeMeasurements = false,
        includeQualitativeCodeGroup = false,
        includeCharacteristics = false,
        includeCharacteristicsWithoutValue = false,
        perPage = 50,
        page = 1,
        characteristicId,
        classId,
        characteristicValueAnyOf,
        includeMeasurementText = false,
    }: {
        /**
         * Filter to limit the measuring points by
         */
        filter: 'by-plant',
        /**
         * Plant the tag-prefix belongs to
         */
        plantId?: string,
        /**
         * The first few characters of the tag
         */
        tagPrefix?: string,
        /**
         * Limit result based on a specific measuring position value
         */
        measuringPosition?: string,
        /**
         * Limit result based on a specific quantitative characteristic value
         */
        quantitativeCharacteristic?: string,
        /**
         * Limit result based on a specific qualitative code group value
         */
        qualitativeCodeGroup?: string,
        /**
         * Limit result based on a specific measuring point name value
         */
        measuringPointName?: string,
        /**
         * Include the last measurement of the measuring points
         */
        includeLastMeasurement?: boolean,
        /**
         * Include measurements of the measuring points
         */
        includeMeasurements?: boolean,
        /**
         * Include possible codes for qualitative measurements if qualitativeCodeGroupId is set
         */
        includeQualitativeCodeGroup?: boolean,
        /**
         * Include characteristics with defined value for the measuring points. Use `include-characteristics-without-value` to retrieve all characteristics available for the measuring points.
         */
        includeCharacteristics?: boolean,
        /**
         * Include all characteristics available for the measuring points regardless if they have a defined value or not. Use `include-characteristics` to only include characteristics with defined value for the measuring points.
         */
        includeCharacteristicsWithoutValue?: boolean,
        /**
         * Results to return pr page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
        /**
         * Required field if `characteristic-value-any-of` is supplied. Endpoint [/characteristics/{class-id}](#operation/LookupClass) can be used to find characteristic ids.
         */
        characteristicId?: string | null,
        /**
         * Required field if `characteristic-value-any-of` is supplied.
         */
        classId?: string | null,
        /**
         * Search based on characteristic values. Must be used in combination with `class-id` and `characteristic-id`. Wildcards are not supported. Make sure to encode the parameters if they contain special characters.
         */
        characteristicValueAnyOf?: string,
        /**
         * Include measurement text in the response
         */
        includeMeasurementText?: boolean,
    }): CancelablePromise<Array<MeasuringPoint> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/measuring-points',
            query: {
                'filter': filter,
                'plant-id': plantId,
                'tag-prefix': tagPrefix,
                'measuring-position': measuringPosition,
                'quantitative-characteristic': quantitativeCharacteristic,
                'qualitative-code-group': qualitativeCodeGroup,
                'measuring-point-name': measuringPointName,
                'include-last-measurement': includeLastMeasurement,
                'include-measurements': includeMeasurements,
                'include-qualitative-code-group': includeQualitativeCodeGroup,
                'include-characteristics': includeCharacteristics,
                'include-characteristics-without-value': includeCharacteristicsWithoutValue,
                'per-page': perPage,
                'page': page,
                'characteristic-id': characteristicId,
                'class-id': classId,
                'characteristic-value-any-of': characteristicValueAnyOf,
                'include-measurement-text': includeMeasurementText,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Failure report - Lookup
     * ### Overview
     * Lookup a single failure report
     *
     * ### Update release 0.9.0
     * Added failureMechanismId,failureMechanismGroupId to additionalMetadata.
     *
     * ### Update release 1.0.0
     * Added tasks for failure reports through query option include-tasks.
     * Added properties plannerGroupId, plannerGroup and planningPlantId.
     *
     * ### Update release 1.1.0
     * Added isOpen and completedDateTime.
     *
     * Added hasUnsafeFailureMode and unsafeFailureModeStatus properties according to business process requirement `R-12137 - Give immediate warning of unsafe failure modes`.
     * ### Update release 1.3.0
     * Added `priorityId` to response.
     *
     * ### Update release 1.4.0
     * Added `workCenter` and `equipment` to response. Fields include descriptions of workCenterId and equipmentId
     *
     * ### Update release 1.5.0
     * Added `createdDateTime` for attachments.
     *
     * ### Update release 1.6.0
     * Added `301` response.
     *
     * ### Update release 1.10.0
     * Added query parameter `include-url-references`.
     *
     * ### Update release 1.11.0
     * Added `quantity` for tasks.
     *
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * ### Update release 1.15.0
     * Added property `documentTitle` to `urlReferences`.
     *
     * ### Update release 1.16.0
     * `urlReferences` and `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * ### Update release 1.17.0
     * Added query parameter `include-measurements`.
     *
     * ### Update release 1.19.0
     * Added query parameter `include-additional-data-characteristics`.
     *
     * ### Update release 1.21.0
     * Added property `area` to tag details.
     *
     * ### Update release 1.24.0
     * `urlReferences` and `attachments` now include the property `documentCreatedDate`
     *
     * ### Update release 1.26.0
     * `tagDetails` object now includes the new field `maintenanceConceptId`
     *
     * ### Update release 1.27.0
     * Added `maintenanceRecordTypeId` to the response.
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * Added properties `codingGroupId` and `codingId`.
     *
     * ### Update release 1.31.0
     * Added `isReadonlyText` property to `activities` in the response.
     *
     * ### Update release 1.32.0
     * Added `changedDateTime` for attachments.
     *
     * Added a query parameter `include-task-list` and `taskList` in the response. When a work order is created based on this notification, operations from the `taskList` will be automatically copied into the work order.
     *
     * ### Update release 1.33.0
     * Added `taskResponsible` and `taskResponsibleEmail` for `tasks` in response when the new query parameter `include-task-responsible-details` is set to true.
     *
     * ### Update release 1.35.0
     * Added `workOrderTypeId` and `workOrderId` to the response. `workOrderId` includes the id of work orders, not constrained to only showing corrective work orders.
     * `correctiveWorkOrderId` has been corrected to only show the work order id if it is a corrective work order.
     *
     * ### Update release 1.37.0
     * Added support for new work order type `overheadMaintenanceWorkOrders` to `workOrderTypeId` enum of allowed types.
     *
     * @returns FailureReport Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupFailureReport({
        recordId,
        includeStatusDetails = false,
        includeTagDetails = false,
        includeActivities = false,
        includeTasks = false,
        includeAttachments = false,
        includeAdditionalMetadata = false,
        includeAdditionalDataCharacteristics = false,
        includeCreatedByDetails = false,
        includeUrlReferences = false,
        includeMeasurements = false,
        includeTaskList = false,
        includeTaskResponsibleDetails = false,
    }: {
        /**
         * The recordId of the failure report.
         */
        recordId: string,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include details about tag for failure report
         */
        includeTagDetails?: boolean,
        /**
         * Include detailed information for activities
         */
        includeActivities?: boolean,
        /**
         * Include detailed information for tasks
         */
        includeTasks?: boolean,
        /**
         * Include attachments
         */
        includeAttachments?: boolean,
        /**
         * Include extra metadata related to additional failure modes and detection modes. This is only used in rare cases
         */
        includeAdditionalMetadata?: boolean,
        /**
         * Include characteristics for additional metadata
         */
        includeAdditionalDataCharacteristics?: boolean,
        /**
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean,
        /**
         * Include URL references for failure report. See `POST /maintenance-record-relationships/{record-id}/url-references`
         */
        includeUrlReferences?: boolean,
        /**
         * Include related measurements
         */
        includeMeasurements?: boolean,
        /**
         * Include task list with task list operations
         */
        includeTaskList?: boolean,
        /**
         * Include task responsible details. Can have a slight performance impact.
         */
        includeTaskResponsibleDetails?: boolean,
    }): CancelablePromise<FailureReport | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/failure-reports/{record-id}',
            path: {
                'record-id': recordId,
            },
            query: {
                'include-status-details': includeStatusDetails,
                'include-tag-details': includeTagDetails,
                'include-activities': includeActivities,
                'include-tasks': includeTasks,
                'include-attachments': includeAttachments,
                'include-additional-metadata': includeAdditionalMetadata,
                'include-additional-data-characteristics': includeAdditionalDataCharacteristics,
                'include-created-by-details': includeCreatedByDetails,
                'include-url-references': includeUrlReferences,
                'include-measurements': includeMeasurements,
                'include-task-list': includeTaskList,
                'include-task-responsible-details': includeTaskResponsibleDetails,
            },
            errors: {
                301: `The specified resource exists in another location
                This can occur when requesting a resource which type does not match the route you are using.

                Example: \`/maintenance-api/resource-a/{resource-b-id}/\` gives \`301\` response.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Technical information update request - Create
     * Create new technical information update requests
     *
     * ### Important information
     * It is possible to create technical information update request for either tagId or equipmentId.
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.XX.0
     * Added `relatedWorkOrder`. This will allow a relationship to be established on creation to either technical feedback or object list of a work order.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns TechnicalInformationUpdateRequestBasic Created
     * @throws ApiError
     */
    public static createTechnicalInformationUpdateRequest({
        requestBody,
    }: {
        /**
         * Technical information update request to create
         */
        requestBody: TechnicalInformationUpdateRequestCreate,
    }): CancelablePromise<ProblemDetails | TechnicalInformationUpdateRequestBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/technical-information-update-requests',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User does not have sufficient rights to create a failure report`,
            },
        });
    }

}
