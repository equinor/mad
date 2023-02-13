import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WorkOrdersService {
    /**
     * Work orders - Search
     * ### Overview
     * Search for Work orders regardless of type through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response can include most of the details for each work order.
     * If additional data is needed, it can be retrieved by using the endpoint represented in the `_links.self` property.
     *
     * ### Important information
     * Properties areaId and area are deprecated as of 01.2021 in order to align with naming across Equinor system. Use locationId and location instead.
     *
     * ### Filter: recently-changed
     * Find Work orders which have been recently changed (created or updated) for a given plant. Normally, clients will provide parameters changed-since-datetime and plant-id and in this case the endpoint will return any changed work order from changed-since-datetime and to now. It is also possible to add before-datetime query parameter and the endpoint will then return any changed work order between changed-since-datetime and before-datetime.
     * Parameters:
     * - plant-id
     * - changed-since-datetime
     * - before-datetime (optional)
     *
     * ### Filter: before-basic-end-date
     * Find open work orders before the basic-end-date. basic-end-date should be a date in the future so that already finished work orders will not be presented.
     *
     * Parameters:
     * - plant-id
     * - basic-end-date
     * - location-id (optional)
     * - area-id (optional) Deprecated - Use locationId instead
     *
     * ### Filter: by-external-partner-work-order-id
     * Find work orders for an id in an external partner system. Note: In theory different external system could have the same `external-partner-id` but it's very unlikely. Clients are recommended to filter the response based on the plants they are intersted in to avoid any issues.
     *
     * Parameters:
     * - external-partner-work-order-id
     *
     * ### Update release v0.11.0
     * Work order operation actualPercentageComplete now represents progress reported through technical feedback.
     * If the Work order operation is completed, the value of actualPercentageComplete will always be 100.
     *
     * Filter by-external-partner-work-order-id added.
     * ### Update release v1.3.0
     * Bugfix related to plantId source.
     *
     * ### Update release v1.4.0
     * Introduced property calculationKey for operations.
     *
     * ### Update release v1.5.0
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release v1.12.0
     * Improved performance of endpoint.
     *
     * @returns WorkOrderWithOperationList Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static searchWorkOrders({ filter, plantId, changedSinceDatetime, beforeDatetime, includeWorkOrderText, includeWorkOrderOperationText, includeWorkOrderTypes, basicEndDate, areaId, locationId, externalPartnerWorkOrderId, }) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders',
            query: {
                filter: filter,
                'plant-id': plantId,
                'changed-since-datetime': changedSinceDatetime,
                'before-datetime': beforeDatetime,
                'include-work-order-text': includeWorkOrderText,
                'include-work-order-operation-text': includeWorkOrderOperationText,
                'include-work-order-types': includeWorkOrderTypes,
                'basic-end-date': basicEndDate,
                'area-id': areaId,
                'location-id': locationId,
                'external-partner-work-order-id': externalPartnerWorkOrderId,
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
     * ### Response
     * The response schema differs slightly from the other work order endpoints as a result of the optimization for speed.
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
     * ### Update release v1.5.0
     * Added revisionId to work order response (represents shutdown or campaign work).
     *
     * ### Update release v1.12.0
     * Added query parameter `include-maintenance-record`.
     *
     * @returns WorkOrderOptimizedForQuery Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static queryWorkOrdersOptimized({ planningPlants, keywordsAllOf, keywordsAnyOf, keywordsNot, tagsAllOf, tagsAnyOf, tagsNot, workCentersAnyOf, workCentersNot, systemsAnyOf, systemsNot, locationsAnyOf, locationsNot, sortFieldAnyOf, sortFieldNot, revisionCodeAnyOf, revisionCodeNot, statusAllOf, statusAnyOf, statusNot, isOpen, createdAfterDate, createdBeforeDate, workOrderTypes, sortBy, includeText = false, includeMaintenanceRecord = false, maxResults, }) {
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
                'work-order-types': workOrderTypes,
                'sort-by': sortBy,
                'include-text': includeText,
                'include-maintenance-record': includeMaintenanceRecord,
                'max-results': maxResults,
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
     * @returns WorkOrderChangeLogs Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static searchWorkOrderChangeLog({ filter, plantId, changedSinceDatetime, propertyName, includeWorkOrderTypes, }) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders-change-log',
            query: {
                filter: filter,
                'plant-id': plantId,
                'changed-since-datetime': changedSinceDatetime,
                'property-name': propertyName,
                'include-work-order-types': includeWorkOrderTypes,
            },
        });
    }
}
