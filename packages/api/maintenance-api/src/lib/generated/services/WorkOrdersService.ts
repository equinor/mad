/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProblemDetails } from '../models/ProblemDetails';
import type { WorkOrderChangeLogs } from '../models/WorkOrderChangeLogs';
import type { WorkOrderInPlan } from '../models/WorkOrderInPlan';
import type { WorkOrderOptimizedForQuery } from '../models/WorkOrderOptimizedForQuery';
import type { WorkOrderTypes } from '../models/WorkOrderTypes';
import type { WorkOrderWithOperationList } from '../models/WorkOrderWithOperationList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WorkOrdersService {

    /**
     * Work order plan - Get
     * ### Overview
     * Get work order activities planned to be performed for a single planning plant.
     * The response is normally based on the planned scheduling of work order operations through the properties `earliestStartDateTime` and `earliestFinishDateTime`. It does not use assignment to baseline plan as a source as this does not cover all work.
     *
     * It is possible to use the defined periods from the baseline plans as basis for the query parameters `planPeriodStartDate` and `planPeriodDuration`. Use `/plants/{plant-id}?include-baseline-plan=true&api-version=v1` for this purpose.
     *
     * `personResponsibleId` will normally not be populated as planning is performed on the work center as a whole.
     *
     * This endpoint returns only Work Order with status 'PLAN'. The field `requiredEndDate` is dependent on workOrderType.
     *
     * ### Using `plan-period-start` and `plan-period-duration`
     * Provide the plan for a specific planning plant based on a defined plan period. This is the main usage of this endpoint.
     *
     * Example of usage:
     * - `/work-order-plan/{planning-plant-id}?plan-period-start=2023-03-02&plan-period-duration=P21D&location-id-any-of=CD00&include-completed-work-order-operations=false&work-order-types-any-of=preventiveWorkOrders,correctiveWorkOrders&api-version=v1`
     * - `/work-order-plan/{planning-plant-id}?plan-period-start=2023-03-02&plan-period-duration=P21D&work-center-id-any-of=C31*&include-completed-work-order-operations=false&api-version=v1`
     *
     * ### Using `person-responsible-*`
     * Get the work order plan for a specific planning plant, but only for work orders assigned to a specific user.
     * Normally, work orders will not be assigned directly to a user, but in some work processes (such as inspection), this occurs.
     *
     * Example of usage:
     * - `/work-order-plan/{planning-plant-id}?person-responsible-email=shortname@equinor.com&include-completed-work-order-operations=false&work-order-types-any-of=preventiveWorkOrders,correctiveWorkOrders&api-version=v1`
     *
     * ### Combining all parameters
     * It is possible to get all work order plans for a period which are assigned to user by combining all parameters.
     *
     * Example of usage:
     *
     * - `/work-order-plan/{planning-plant-id}?person-responsible-email=shortname@equinor.com&plan-period-start=2023-03-02&plan-period-duration=P21D&include-completed-work-order-operations=false&work-order-types-any-of=preventiveWorkOrders,correctiveWorkOrders&api-version=v1`
     *
     *
     * ### Update release 1.26.0
     * Added query parameter `work-center-id-any-of`.
     *
     * ### Update release 1.29.0
     * Added properties `cmrIndicator` and `maintenanceRecordId`.
     *
     * ### Update release 1.34.0
     * Added following filter options:
     * - `main-work-center-id-any-of`
     * - `status-any-of`
     * - `status-not`
     * - `operation-notes-any-of`
     *
     * Added following fields to the response:
     * - `personResponsible`
     * - `mainWorkCenterId`
     *
     * ### Update release 1.36.0
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator`. See STRY0261073 in ServiceNow for more details.
     * Added `overheadMaintenanceWorkOrders` to `work-order-types-any-of` query parameter.
     *
     * ### Update release 1.38.0
     * Deprecated the `filter` parameter. The endpoint will accept the parameter but ignore it. It is now possible to combine almost all
     * query parameters. `person-responsible-email` and `person-responsible-id` will still be mutually exclusive.
     * It is required to supply either `plan-period-start` or `person-responsible-*` in order to not cause issues in the underlying system.
     *
     * ### Update release 1.39.0
     * Added new property `superiorOperationId` to `operations`.
     * Added ability to use `revision-id-any-of` without filter.
     *
     * @returns WorkOrderInPlan Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getWorkOrderPlan({
        planningPlantId,
        filter,
        planPeriodStart,
        planPeriodDuration,
        personResponsibleEmail,
        personResponsibleId,
        includeCompletedWorkOrderOperations = false,
        includePersonResponsible = false,
        workOrderTypesAnyOf,
        workCenterIdAnyOf,
        mainWorkCenterIdAnyOf,
        revisionIdAnyOf,
        locationIdAnyOf,
        statusAnyOf,
        statusNot,
        operationNotesAnyOf,
    }: {
        /**
         * Planning plant to retrieve work order plan for
         */
        planningPlantId: string,
        /**
         * Deprecated parameter that is ignored but accepted. Has no effect.
         * @deprecated
         */
        filter?: 'by-plan-period' | 'by-person-responsible',
        /**
         * Start of plan period (`/plants/{plant-id}?include-baseline-plans=true` can be used as a reference). Required for `filter=by-plan-period`.
         */
        planPeriodStart?: string,
        /**
         * Duration of plan period
         */
        planPeriodDuration?: string,
        /**
         * Email address for responsible person. Should not be used in combination with `person-responsible-id`.
         */
        personResponsibleEmail?: string,
        /**
         * Id for responsible person. Should not be used in combination with `person-responsible-email`.
         */
        personResponsibleId?: string,
        /**
         * Include Work Order Plans with completed work order operations
         */
        includeCompletedWorkOrderOperations?: boolean,
        /**
         * Include person responsible information in response, for example the email or name of the person responsible. May have a slight performance impact.
         */
        includePersonResponsible?: boolean,
        /**
         * Limit to specific work order types (any-of). Default includes all types
         */
        workOrderTypesAnyOf?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders' | 'overheadMaintenanceWorkOrders'>,
        /**
         * Comma-separated list of work-center-id
         */
        workCenterIdAnyOf?: string,
        /**
         * Comma-separated list of main-work-center-id
         */
        mainWorkCenterIdAnyOf?: string,
        /**
         * Comma-separated list of revision-id
         */
        revisionIdAnyOf?: string,
        /**
         * Comma-separated list of location-id
         */
        locationIdAnyOf?: string,
        /**
         * Query based on statusIds (not all statuses are supported)
         */
        statusAnyOf?: Array<'STRT' | 'RDOP' | 'TECO' | 'REL' | 'CRTD'>,
        /**
         * Query based on statusIds (not all statuses are supported)
         */
        statusNot?: Array<'STRT' | 'RDOP' | 'TECO' | 'REL' | 'CRTD'>,
        /**
         * Query based on `planNotes` in operations
         */
        operationNotesAnyOf?: string,
    }): CancelablePromise<Array<WorkOrderInPlan> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-order-plan/{planning-plant-id}',
            path: {
                'planning-plant-id': planningPlantId,
            },
            query: {
                'filter': filter,
                'plan-period-start': planPeriodStart,
                'plan-period-duration': planPeriodDuration,
                'person-responsible-email': personResponsibleEmail,
                'person-responsible-id': personResponsibleId,
                'include-completed-work-order-operations': includeCompletedWorkOrderOperations,
                'include-person-responsible': includePersonResponsible,
                'work-order-types-any-of': workOrderTypesAnyOf,
                'work-center-id-any-of': workCenterIdAnyOf,
                'main-work-center-id-any-of': mainWorkCenterIdAnyOf,
                'revision-id-any-of': revisionIdAnyOf,
                'location-id-any-of': locationIdAnyOf,
                'status-any-of': statusAnyOf,
                'status-not': statusNot,
                'operation-notes-any-of': operationNotesAnyOf,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights`,
            },
        });
    }

    /**
     * Work orders - Search
     * ### Overview
     * Search for Work orders regardless of type through given search properties.
     * All properties are combinable with each other. It is recommended to limit results as much as possible by the use of these query parameters.
     *
     * ### Response
     * The response can include most of the details for each work order.
     * If additional data is needed, it can be retrieved by using the endpoint represented in the `_links.self` property.
     *
     * Pagination is supported for this endpoint by setting values for `page` and `per-page`. If these parameters are omitted, the result will be returned without pagination.
     *
     * ### Filter: recently-changed
     * Find Work orders which have been recently changed (created or updated) for a given plant. Normally, clients will provide the parameters `changed-since-datetime` and `plant-id` to return any changed Work order from `changed-since-datetime` to now. It is also possible to add `before-datetime` query parameter - the endpoint will then return any work order changed between `changed-since-datetime` and `before-datetime`.
     *
     * Parameters:
     * - `changed-since-datetime`
     * - `plant-id` (optional)
     * - `before-datetime` (optional)
     *
     * ### Filter: before-basic-end-date
     * Parameters:
     * - `changed-since-datetime`
     * - `plant-id` (optional)
     * - `before-datetime` (optional)
     *
     * ### Filter: before-basic-end-date
     * Find open Work orders before the `basic-end-date`. `basic-end-date` should be a date in the future so that already finished work orders will not be presented.
     *
     * Parameters:
     * - `plant-id`
     * - `basic-end-date`
     * - `location-id` (optional)
     *
     * ### Filter: by-external-partner-work-order-id
     * Find Work orders for a 'work-order-id' in an external partner system. Note: In theory, different external systems could have the same `external-partner-id` but this is very unlikely. Clients are recommended to filter the response based on the plants they are interested in to avoid any issues.
     * Parameters:
     * - `plant-id`
     * - `basic-end-date`
     * - `location-id` (optional)
     *
     * ### Filter: by-external-partner-work-order-id
     * Find Work orders for a 'work-order-id' in an external partner system. Note: In theory, different external systems could have the same `external-partner-id` but this is very unlikely. Clients are recommended to filter the response based on the plants they are interested in to avoid any issues.
     *
     * Parameters:
     * - `external-partner-work-order-id`
     *
     * ### Filter: by-cost-network
     * Parameters:
     * - `external-partner-work-order-id`
     *
     * ### Filter: by-cost-network
     * Find Work orders based on Cost Network Id.
     *
     * Parameters:
     * - `cost-network-id`
     * - `plant-id` (optional)
     *
     * ### Filter: by-cost-wbs
     * Parameters:
     * - `cost-network-id`
     * - `plant-id` (optional)
     *
     * ### Filter: by-cost-wbs
     * Find Work orders based on Cost WBS Id.
     *
     * Parameters:
     * - `cost-wbs-id`
     * - `plant-id` (optional)
     *
     * ### Filter: by-work-center-id
     * Parameters:
     * - `cost-wbs-id`
     * - `plant-id` (optional)
     *
     * ### Filter: by-work-center-id
     * Find Work orders based on their `workCenterId`.
     *
     * Parameters:
     * - `work-center-id-any-of`
     * - `plant-id` (optional)
     *
     * ### Filter: by-work-order-id
     * Find Work orders based on their `workOrderId`.
     *
     * Parameters:
     * - `work-order-ids-any-of`
     * - `plant-id` (optional)
     *
     * ### Update release 1.3.0
     * Bugfix related to plantId source.
     *
     * ### Update release 1.4.0
     * Introduced property calculationKey for operations.
     *
     * ### Update release 1.5.0
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.12.0
     * Improved performance of endpoint.
     *
     * ### Update release 1.19.0
     * Added properties `systemCondition` and `isExcludedFromWorkOrderPlan` for operations.
     *
     * ### Update release 1.21.0
     * Added ability to update text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.24.0
     * Added filter `by-cost-wbs`, with required parameter `cost-wbs-id`. Can be used in combination with the optional parameter `plant-id`
     * This filter only includes work orders where the WBS is represented on the work order level. It does not include work orders where WBS is only represented in the settlement rules.
     *
     * Added filter `by-cost-network`, with required parameter `cost-network-id`. Can be used in combination with the optional parameter `plant-id`
     *
     * Added property `cmrIndicator` to the top level objects in the response.
     *
     * ### Update release 1.27.0
     * Work orders now include the property `isOpen`
     *
     * ### Update release 1.30.0
     * Modified GET work order to fetch data from Maintenance plant from the sap field `swerk`.
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * ### Update release 1.35.0
     * Added filter `by-work-center-id` with the required parameter `work-center-id-any-of`. Can optionally be combined with the parameter `plant-id`
     *
     * Added filter `by-work-order-id` with the required parameter `work-order-ids-any-of`. Can optionally be combined with the parameter `plant-id`
     *
     * Added option to not include operations for the Work Orders by setting the optional parameter `include-operations` to `false` (default is `true`). This can improve performance for the endpoint.
     *
     * Added property `requiredEndDate` to the top level objects in the response (Not including preventive work orders).
     *
     * Added property `confirmationId`, `RemainingWork` and `RemainingWorkUnit` to `operations`
     *
     * ### Update release 1.36.0
     * Added properties `costs` and `costsCurrency` to preventive work orders.
     *
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator` from work orders. See STRY0261073 in ServiceNow for more details.
     * Added `overheadMaintenanceWorkOrders` to `include-work-order-types` filter in Parameters and to the response.
     *
     * ### Update release 1.38.0
     * Marked `plantId` as an optional parameter for filter `recently-changed`.
     * Add pagination to this endpoint, see [Pagination](#section/Pagination) for more information.
     *
     * ### Update release 1.39.0
     *
     * Added new property `superiorOperationId` to `operations`.
     *
     * Added new property `priorityId` to `preventiveWorkOrders`.
     *
     * ### Upcoming release
     * The `filter` property is deprecated. It is still accepted but will not affect the query.
     * Added new property `changeLogChangedDateTime` to work order objects in the response.
     *
     * @returns WorkOrderWithOperationList Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchWorkOrders({
        filter,
        plantId,
        changedSinceDatetime,
        beforeDatetime,
        includeWorkOrderText,
        includeWorkOrderOperationText,
        includeWorkOrderTypes,
        includeOperations = true,
        basicEndDate,
        locationId,
        externalPartnerWorkOrderId,
        costWbsId,
        costNetworkId,
        workCenterIdAnyOf,
        workOrderIdsAnyOf,
        perPage,
        page = 1,
    }: {
        /**
         * Filter to limit the work order by
         */
        filter: 'recently-changed' | 'before-basic-end-date' | 'by-external-partner-work-order-id' | 'by-cost-network' | 'by-cost-wbs' | 'by-work-center-id' | 'by-work-order-id',
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Earliest datetime to return changed work orders for
         */
        changedSinceDatetime?: string,
        /**
         * Optional parameter to limit the response to only work orders changed after changed-since-datetime but before this datetime
         *
         */
        beforeDatetime?: string,
        /**
         * The text of the Work order is time-consuming to retrieve. Set to false to avoid returning it
         */
        includeWorkOrderText?: boolean,
        /**
         * The text of the Work order operation is time-consuming to retrieve. Set to false to avoid returning it
         */
        includeWorkOrderOperationText?: boolean,
        /**
         * Include which types of work orders. Use comma-separated list of entries.
         */
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders' | 'overheadMaintenanceWorkOrders'>,
        /**
         * Include operations for the Work orders in the response.
         */
        includeOperations?: boolean,
        /**
         * Earliest date to find maintenance plan history for (optional for filter)
         */
        basicEndDate?: string,
        /**
         * Structured location within the plant. Use /plants/{plant-id}/locations for possible values
         */
        locationId?: string,
        /**
         * If work order was initially created in an external system, this represent the unique id of it
         */
        externalPartnerWorkOrderId?: string,
        /**
         * Required parameter if `filter=by-cost-wbs`
         */
        costWbsId?: string,
        /**
         * Required parameter if `filter=by-cost-network`
         */
        costNetworkId?: string,
        /**
         * Comma-separated list of `work-center-id`.
         */
        workCenterIdAnyOf?: string,
        /**
         * Comma-separated list of `work-order-id`.
         */
        workOrderIdsAnyOf?: string,
        /**
         * Results to return pr page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<WorkOrderWithOperationList | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders',
            query: {
                'filter': filter,
                'plant-id': plantId,
                'changed-since-datetime': changedSinceDatetime,
                'before-datetime': beforeDatetime,
                'include-work-order-text': includeWorkOrderText,
                'include-work-order-operation-text': includeWorkOrderOperationText,
                'include-work-order-types': includeWorkOrderTypes,
                'include-operations': includeOperations,
                'basic-end-date': basicEndDate,
                'location-id': locationId,
                'external-partner-work-order-id': externalPartnerWorkOrderId,
                'cost-wbs-id': costWbsId,
                'cost-network-id': costNetworkId,
                'work-center-id-any-of': workCenterIdAnyOf,
                'work-order-ids-any-of': workOrderIdsAnyOf,
                'per-page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Work orders - Types
     * ### Overview
     * Get type of a work order based on the work order id.
     *
     * ### Update release 1.37.0
     * Added support for new work order type `overheadMaintenanceWorkOrder`.
     *
     * @returns WorkOrderTypes Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getWorkOrderType({
        workOrderIdsAnyOf,
    }: {
        /**
         * The work orders as a comma separated list.
         */
        workOrderIdsAnyOf: string,
    }): CancelablePromise<Array<WorkOrderTypes> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-order-types',
            query: {
                'work-order-ids-any-of': workOrderIdsAnyOf,
            },
        });
    }

    /**
     * Work orders - Optimized for query
     * ### Overview
     * Query work orders for potentially complicated patterns where speed is of the essence.
     *
     * `planning-plants` is the only mandatory fields, but clients should normally provide at least one more query criteria.
     *
     * A normal use case would be to first provide an initial query criteria based on user input. Then allow the end-users based on the resulting data select unwanted results based on specific attributes. The unwanted results should then be added to the exclusion list (for example `keywords-not` or `work-centers-not)` and the API call repeated.
     *
     * `max-results` have a default value of 1000 and is necessary to provide a quick response.
     *
     * The multi-line `text` property is not included by default, but can included by setting `include-text=true` in the request. This will influence performance significantly.
     *
     * Pagination is supported for this endpoint by setting values for `page` and `per-page`. If these parameters are omitted, the result will be returned without pagination.
     *
     *
     * ### Response
     * The response schema has been optimized for speed, enabling the retrieval of work orders from the past three years by default. This is overridable by setting the `created-after-date` query parameter.
     *
     *
     * ### Examples
     * `/work-orders-optimized-for-query?api-version=v1&planning-plants=1100,1101,1102&tags-all-of=10B9` - Return work orders where tag is 10B9
     *
     * `/work-orders-optimized-for-query?api-version=v1&planning-plants=1100,1101,1102&tags-all-of=AA15*&tags-not=AA15002` - Return work orders where tag has pattern `AA15*` but is not AA15002
     *
     * `/work-orders-optimized-for-query?api-version=v1&planning-plants=1100,1101,1102&keywords-all-of=heli,male` - Return work orders where the title contains both `heli` and `male`
     *
     * `/work-orders-optimized-for-query?api-version=v1&planning-plants=1100,1101,1102&status-any-of=PREP,RDEX&created-after-date=2021-06-01` - Return work orders with status PREP or RDEX and created after a certain date
     *
     * ### Update release 1.5.0
     * Added revisionId to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.12.0
     * Added query parameter `include-maintenance-record`.
     *
     * ### Update release 1.16.0
     * Added property `workCenterId` to `maintenanceRecords.failureReports`
     *
     * ### Update release 1.29.0
     * Added properties `revision` and `changedDatetime`.
     *
     * Allow searching by `changedOnDay` when `is-open` is set. Search by using the new query parameters `changed-after-date` and `changed-before-date`.
     *
     * ### Update release 1.31.0
     * Added list of supported statuses for `status-all-of`, `status-any-of` and `status-not` query parameters. Status `REL` is now supported.
     *
     * Added property `hasStatusREL` to the response.
     *
     * ### Update release 1.35.0
     * Added support for optional pagination.
     *
     * ### Update release 1.37.0
     * Added query parameter `work-order-ids-any-of`
     * Deprecated query parameter `max-results` as the same functionality can be achieved with `per-page``.
     *
     * ### Update release 1.37.0
     * Added query parameter `work-order-ids-any-of` & add support for SWNG in `status-all-of`, `status-any-of` and `status-not` query parameters.
     *
     * Deprecated query parameter `max-results` as the same functionality can be achieved with `per-page`.
     *
     * Added properties `tag`, `requiredEndDate`, `hseCritical` & `productionCritical`.
     *
     * Added query parameter `include-status-details` and the object `statuses`
     *
     * ### Update release 1.38.0
     * Added `overheadMaintenanceWorkOrders` to `work-order-types` query parameter.
     *
     * @returns WorkOrderOptimizedForQuery Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static queryWorkOrdersOptimized({
        planningPlants,
        keywordsAllOf,
        keywordsAnyOf,
        keywordsNot,
        tagsAllOf,
        tagsAnyOf,
        tagsNot,
        workCentersAnyOf,
        workCentersNot,
        systemsAnyOf,
        systemsNot,
        locationsAnyOf,
        locationsNot,
        sortFieldAnyOf,
        sortFieldNot,
        revisionCodeAnyOf,
        revisionCodeNot,
        statusAllOf,
        statusAnyOf,
        statusNot,
        isOpen,
        createdAfterDate,
        createdBeforeDate,
        changedAfterDate,
        changedBeforeDate,
        workOrderTypes,
        workOrderIdsAnyOf,
        sortBy,
        includeText = false,
        includeMaintenanceRecord = false,
        includeStatusDetails = false,
        maxResults,
        perPage,
        page = 1,
    }: {
        /**
         * Query based on planningPlantIds (any-of)
         */
        planningPlants: Array<string>,
        /**
         * Query based on keywords in title (case insensitive)
         */
        keywordsAllOf?: Array<string>,
        /**
         * Query based on keywords in title (case insensitive)
         */
        keywordsAnyOf?: Array<string>,
        /**
         * Query based on keywords in title (case insensitive)
         */
        keywordsNot?: Array<string>,
        /**
         * Query based on tagIds. Expressions with wildcards can be used for example `1A*-6A`. Ensure the tagIds are url-encoded in order to handle special characters
         */
        tagsAllOf?: Array<string>,
        /**
         * Query based on tagIds. Expressions with wildcards can be used for example `1A*-6A`. Ensure the tagIds are url-encoded in order to handle special characters
         */
        tagsAnyOf?: Array<string>,
        /**
         * Query based on tagIds. Expressions with wildcards can be used for example `AE55*`. Ensure the tagIds are url-encoded in order to handle special characters
         */
        tagsNot?: Array<string>,
        /**
         * Query based on workCenterIds
         */
        workCentersAnyOf?: Array<string>,
        /**
         * Query based on workCenterIds
         */
        workCentersNot?: Array<string>,
        /**
         * Query based on systemIds
         */
        systemsAnyOf?: Array<string>,
        /**
         * Query based on systemIds
         */
        systemsNot?: Array<string>,
        /**
         * Query based on locationIds
         */
        locationsAnyOf?: Array<string>,
        /**
         * Query based on locationIds
         */
        locationsNot?: Array<string>,
        /**
         * Query based on sortField ()used for grouping work orders)
         */
        sortFieldAnyOf?: Array<string>,
        /**
         * Query based on sortField (used for grouping work orders)
         */
        sortFieldNot?: Array<string>,
        /**
         * Query based on revisionCode
         */
        revisionCodeAnyOf?: Array<string>,
        /**
         * Query based on sortField (often used for revision codes)
         */
        revisionCodeNot?: Array<string>,
        /**
         * Query based on statusIds (not all statuses are supported)
         */
        statusAllOf?: Array<'PREP' | 'PRCO' | 'RDEX' | 'STRT' | 'CANC' | 'RDOP' | 'CRTD' | 'TECO' | 'REL' | 'SWNG'>,
        /**
         * Query based on statusIds (not all statuses are supported)
         */
        statusAnyOf?: Array<'PREP' | 'PRCO' | 'RDEX' | 'STRT' | 'CANC' | 'RDOP' | 'CRTD' | 'TECO' | 'REL' | 'SWNG'>,
        /**
         * Query based on statusIds (not all statuses are supported)
         */
        statusNot?: Array<'PREP' | 'PRCO' | 'RDEX' | 'STRT' | 'CANC' | 'RDOP' | 'CRTD' | 'TECO' | 'REL' | 'SWNG'>,
        /**
         * Include only open work orders or only closed work orders. By default, all work orders are included.
         */
        isOpen?: boolean,
        /**
         * Earliest creation date to include. If omitted, this defaults to three years ago.
         */
        createdAfterDate?: string,
        /**
         * Latest creation date to include
         */
        createdBeforeDate?: string,
        /**
         * Earliest `changedOnDay` date to include. Query parameter `is-open` must be set to `true` or `false` to use this parameter.
         */
        changedAfterDate?: string,
        /**
         * Latest `changedOnDay` date to include. Query parameter `is-open` must be set to `true` or `false` to use this parameter.
         */
        changedBeforeDate?: string,
        /**
         * Limit to specific work order types (one-of)
         */
        workOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders' | 'overheadMaintenanceWorkOrders'>,
        /**
         * Comma-separated list of `work-order-id`.
         */
        workOrderIdsAnyOf?: string,
        /**
         * Property to sort the results by
         */
        sortBy?: Array<'createdDateTime desc' | 'createdDateTime asc' | 'workOrderId desc' | 'workOrderId asc' | 'systemId desc' | 'systemId asc' | 'locationId desc' | 'locationId asc' | 'sortField desc' | 'sortField asc' | 'title desc' | 'title asc'>,
        /**
         * Include the multi-line text of the work order (will cause the endpoint to go significantly slower)
         */
        includeText?: boolean,
        /**
         * Include the main maintenance record linked to the work order (if any)
         */
        includeMaintenanceRecord?: boolean,
        /**
         * Include status details for the work orders
         */
        includeStatusDetails?: boolean,
        /**
         * Maximum number of results to include. Default is 1000.
         * @deprecated
         */
        maxResults?: number,
        /**
         * Results to return pr page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<WorkOrderOptimizedForQuery> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders-optimized-for-query',
            query: {
                'planning-plants': planningPlants,
                'keywords-all-of': keywordsAllOf,
                'keywords-any-of': keywordsAnyOf,
                'keywords-not': keywordsNot,
                'tags-all-of': tagsAllOf,
                'tags-any-of': tagsAnyOf,
                'tags-not': tagsNot,
                'work-centers-any-of': workCentersAnyOf,
                'work-centers-not': workCentersNot,
                'systems-any-of': systemsAnyOf,
                'systems-not': systemsNot,
                'locations-any-of': locationsAnyOf,
                'locations-not': locationsNot,
                'sort-field-any-of': sortFieldAnyOf,
                'sort-field-not': sortFieldNot,
                'revision-code-any-of': revisionCodeAnyOf,
                'revision-code-not': revisionCodeNot,
                'status-all-of': statusAllOf,
                'status-any-of': statusAnyOf,
                'status-not': statusNot,
                'is-open': isOpen,
                'created-after-date': createdAfterDate,
                'created-before-date': createdBeforeDate,
                'changed-after-date': changedAfterDate,
                'changed-before-date': changedBeforeDate,
                'work-order-types': workOrderTypes,
                'work-order-ids-any-of': workOrderIdsAnyOf,
                'sort-by': sortBy,
                'include-text': includeText,
                'include-maintenance-record': includeMaintenanceRecord,
                'include-status-details': includeStatusDetails,
                'max-results': maxResults,
                'per-page': perPage,
                'page': page,
            },
        });
    }

    /**
     * Work orders change log - Search
     * ### Overview
     * Search for Work orders changes done recently.
     *
     * ### Response
     * The response contains only minimum information about the change made to the work orders.
     * For more information about each individual work order, use the lookup end-point referenced in `_links.related`.
     *
     * ### Important information
     * This endpoint relies on change log being activated for the plant in question.
     *
     * ### Filter: recently-changed-property
     * Find Work orders which have recently had a change in a specific property.
     * Parameters:
     * - plant-id
     * - property-name - Values supported `basicStartDateTime` and `basicEndDateTime`
     * - changed-since-datetime
     *
     * include-work-order-types is an optional parameter to define which work orders to return changes for.
     *
     * ### Important information
     * The response contains list of changes to work orders (not list of work orders changed). Therefore, an individual work order may be represented multiple times. Consumers can use changeDateTime to identify the last change.
     *
     * ### Update release 1.37.0
     * Added `overheadMaintenanceWorkOrders` to include-work-order-types filter in Parameters and `overheadMaintenanceWorkOrdersChanged` to response.
     *
     * @returns WorkOrderChangeLogs Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchWorkOrderChangeLog({
        filter,
        plantId,
        changedSinceDatetime,
        propertyName,
        includeWorkOrderTypes,
    }: {
        /**
         * Filter to limit the work order by
         */
        filter: 'recently-changed-property',
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Earliest datetime to return changed work orders for
         */
        changedSinceDatetime?: string,
        /**
         * The property which was recently changed
         */
        propertyName?: 'basicStartDateTime' | 'basicEndDateTime',
        /**
         * Include which types of work orders. Use comma-separated list of entries.
         */
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders' | 'overheadMaintenanceWorkOrders'>,
    }): CancelablePromise<WorkOrderChangeLogs | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders-change-log',
            query: {
                'filter': filter,
                'plant-id': plantId,
                'changed-since-datetime': changedSinceDatetime,
                'property-name': propertyName,
                'include-work-order-types': includeWorkOrderTypes,
            },
        });
    }

}
