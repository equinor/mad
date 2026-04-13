/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MaintenanceRecordChangeLogs } from '../models/MaintenanceRecordChangeLogs';
import type { MaintenanceRecordList } from '../models/MaintenanceRecordList';
import type { MaintenanceRecordTypes } from '../models/MaintenanceRecordTypes';
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MaintenanceRecordsService {

    /**
     * Maintenance records - Search
     * ### Overview
     * Search for Maintenance records regardless of type through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response does not include all details for each Maintenance record.
     * This can be found by subsequent call to lookup for the respective maintenance record resource type.
     *
     * ### Parameters
     * The following parameters are available for all filters:
     *
     * Parameters:
     * - `plant-id` - Return Maintenance records for a specific plant
     * - `changed-since-datetime` - Return maintenance records that were changed after `changed-since-datetime`
     * - `before-datetime` - Return maintenance records that were changed before `before-datetime`
     * - `created-after-datetime` - Return only maintenance records created after this datetime
     * - `external-partner-record-id` - Return Maintenance records that have the given record id in an external partner system
     * - `include-maintenance-record-types` - The maintenance record types to include in the response. If not specified, all types are included.
     *
     * ### Filter: my-recent-maintenance-records
     * Find maintenance record created by the logged in user. All parameters are optional and freely combinable when using this filter.
     * See list of parameters above.
     *
     * Note: `include-maintenance-record-types` is automatically set to only include `failure-report` and `activity-report` for this filter.
     *
     * ### Other filters
     * All parameters (see list of parameters above) are optionally combinable with each other for filters `recently-changed` and `by-external-partner-record-id`.
     * **It is required to provide at least one of the parameters.**
     *
     * As of release 1.41.0, **filters `by-external-partner-record-id` and `recently-changed` are interchangeable** in practice -
     * they both allow the use of the same query parameters to filter the response.
     * **It is still required to include a filter in the request** to ensure backwards compatibility.
     *
     * ### Update release 1.2.0
     * Added filter `my-recent-maintenance-records`.
     *
     * ### Update release 1.5.0
     * Added filter `recently-changed` and maintenance record types `modification-proposal`, `certification-report`,`technical-information-update-request` and `technical-clarification`.
     *
     * ### Update release 1.8.0
     * Added properties hasUnsafeFailureMode and unsafeFailureModeStatus for failure reports.
     *
     * ### Update release 1.9.0
     * Renamed property plannerGroupPlantId to planningPlantId.
     *
     * ### Update release 1.12.0
     * Added property `maintenanceRecordTypeId`.
     *
     * ### Update release 1.16.0
     * Added property `workCenterId` to `maintenanceRecords.failureReports`
     *
     * ### Update release 1.35.0
     * Added `workOrderTypeId` and `workOrderId` to the response for failure reports. `workOrderId`
     * includes the id of work orders, not constrained to only showing corrective work orders.
     *
     * ### Update release 1.40.0
     * Added properties `plannerGroup` and `plannerGroupId` to `failureReports`.
     *
     * ### Update release 1.41.0
     * As of this release, the filters `recently-changed` and `by-external-partner-record-id` are interchangeable in practice -
     * they both allow the use of the same query parameters to filter the response by. You can now combine the query parameters
     * for these filters as you see fit. It is required to use at least one query parameter for these filters.
     *
     * Filter `my-recent-maintenance-records` is still available and allows you to filter by the logged in user. You may now
     * use and combine any of the available query parameters for this filter, but as before, using this filter
     * will only return maintenance records made by the logged in user.
     *
     * This removes the artificial restrictions that were previously in place for the search/filter capabilities on this endpoint.
     * See updated endpoint description above for more details.
     *
     * ### Update release 1.42.0
     * Added optional pagination support.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns MaintenanceRecordList Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchMaintenanceRecords({
        filter,
        externalPartnerRecordId,
        createdAfterDatetime,
        plantId,
        changedSinceDatetime,
        beforeDatetime,
        includeMaintenanceRecordTypes,
        page,
        perPage,
    }: {
        /**
         * Filter to limit the failure reports by
         */
        filter: 'by-external-partner-record-id' | 'my-recent-maintenance-records' | 'recently-changed',
        /**
         * If failure report was initially created in an external system, this represent the unique id of it
         */
        externalPartnerRecordId?: string,
        /**
         * Optional parameter to limit the response to only maintenance records created after this datetime
         */
        createdAfterDatetime?: string,
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Return maintenance records that were changed after `changed-since-datetime`
         */
        changedSinceDatetime?: string,
        /**
         * Return maintenance records that were changed before `before-datetime`
         */
        beforeDatetime?: string,
        /**
         * Include which types of maintenance records
         */
        includeMaintenanceRecordTypes?: Array<'failure-report' | 'activity-report' | 'certification-report' | 'technical-information-update-request' | 'technical-clarification' | 'modification-proposal'>,
        /**
         * Page to fetch. If this optional parameter is used together with perPage, paging will be applied for the endpoint.
         */
        page?: number | null,
        /**
         * Results to return per page. If this optional parameter is used, paging will be applied for the endpoint.
         */
        perPage?: number | null,
    }): CancelablePromise<MaintenanceRecordList | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records',
            query: {
                'filter': filter,
                'external-partner-record-id': externalPartnerRecordId,
                'created-after-datetime': createdAfterDatetime,
                'plant-id': plantId,
                'changed-since-datetime': changedSinceDatetime,
                'before-datetime': beforeDatetime,
                'include-maintenance-record-types': includeMaintenanceRecordTypes,
                'page': page,
                'per-page': perPage,
            },
            errors: {
                400: `Bad request, for example if \`before-datetime\` is before \`changed-since-datetime\``,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Maintenance record - Types
     * ### Overview
     * Get type of a maintenance record based on the maintenance record id.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns MaintenanceRecordTypes Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getMaintenanceRecordType({
        maintenanceRecordIdsAnyOf,
    }: {
        /**
         * The maintenance record ids as a comma separated list. If a value contains a comma, escape it with a backslash (`\,`).
         */
        maintenanceRecordIdsAnyOf: string,
    }): CancelablePromise<Array<MaintenanceRecordTypes> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-record-types',
            query: {
                'maintenance-record-ids-any-of': maintenanceRecordIdsAnyOf,
            },
        });
    }

    /**
     * Maintenance records change log - Search
     * ### Overview
     * Search for records in the Maintenance record Change log where there have been recent changes to specific tracked properties like `statuses` or `task/statuses`.
     *
     * ### Important information
     * The response contains a list of changes to maintenance records, not a list of maintenance records changed. Therefore, an individual maintenance record may be represented multiple times. Consumers can use `changeDateTime` to identify the last change.
     *
     * Avoid using this endpoint to retrieve a large amount of changes for a longer time period. `changed-since-duration` should typically not be more than 1 day from today's date (`P1D`).
     * Response will be `400 Bad request` if `changed-since-duration` is more than 7 days (`P7D`).
     *
     * ### Parameters
     * Available parameters:
     * - `property-name-any-of` (required) - Values supported `statuses` and `task/statuses`
     * - `changed-since-duration` (required) - A duration (in ISO 8601 format) to get changes for up to a week in the past. For example `PT10M` for changes the last ten minutes
     * - `plant-id-any-of` - Comma-separated list of plant-ids to filter your result to one or more plants. Wildcards are not supported.
     * - `include-maintenance-record-types` - Optional parameter to define which maintenance record types to include in the response.
     *
     * ### Response
     * The response contains only minimum information about the change made to the maintenance records
     * For more information about each individual maintenance record, use the lookup end-point referenced in `_links.related`.
     *
     * ### Update release 1.41.0
     * Deprecated 'filter' query parameter. The endpoint will accept the parameter but ignore it. Providing `property-name-any-of` and `changed-since-duration` is required as before.
     *
     * ### Update release 1.42.0
     * Added optional pagination support.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns MaintenanceRecordChangeLogs Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchMaintenanceRecordChangeLog({
        changedSinceDuration,
        propertyNameAnyOf,
        filter,
        plantIdAnyOf,
        includeMaintenanceRecordTypes,
        page,
        perPage,
    }: {
        /**
         * Duration from the current datetime to fetch changes for. Maximum value is 7 days (`P7D`).
         */
        changedSinceDuration: string,
        /**
         * Comma-separated string of the properties which were recently changed
         */
        propertyNameAnyOf: 'statuses' | 'task/statuses',
        /**
         * Deprecated parameter that is ignored but accepted. Has no effect.
         * @deprecated
         */
        filter?: 'recently-changed-property',
        /**
         * Comma-separated string array of plant-ids to filter your result to one or more plants. Wildcards are not supported.
         */
        plantIdAnyOf?: string,
        /**
         * Include which types of maintenance records
         */
        includeMaintenanceRecordTypes?: Array<'failure-report' | 'activity-report' | 'certification-report' | 'technical-information-update-request' | 'technical-clarification' | 'modification-proposal'>,
        /**
         * Page to fetch. If this optional parameter is used together with perPage, paging will be applied for the endpoint.
         */
        page?: number | null,
        /**
         * Results to return per page. If this optional parameter is used, paging will be applied for the endpoint.
         */
        perPage?: number | null,
    }): CancelablePromise<MaintenanceRecordChangeLogs | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records-change-log',
            query: {
                'filter': filter,
                'plant-id-any-of': plantIdAnyOf,
                'changed-since-duration': changedSinceDuration,
                'property-name-any-of': propertyNameAnyOf,
                'include-maintenance-record-types': includeMaintenanceRecordTypes,
                'page': page,
                'per-page': perPage,
            },
            errors: {
                400: `Request is missing required parameters or changed-since-duration is more than 7 days`,
            },
        });
    }

}
