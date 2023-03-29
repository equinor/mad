/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MaintenanceRecordList } from '../models/MaintenanceRecordList';
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
     * This can be found by subsequent call to lookup for the respective maintenance record resource type
     *
     * ### Filter: by-external-partner-record-id
     * Find open Maintenance records for an id in an external partner system. Note: In theory different external system could have the same `external-partner-record-id` but it's very unlikely. Clients are recommended to filter the response based on the plants they are intersted in to avoid any issues.
     *
     * Parameters:
     * - external-partner-record-id
     *
     * ### Filter: my-recent-maintenance-records
     * Find maintenance record created by the logged in user.
     *
     * Parameters:
     * - created-after-datetime (optional)
     *
     * ### Filter: recently-changed
     * Find maintenance records which have been recently changed (created or updated) for a given plant. Normally, clients will provide parameters changed-since-datetime and plant-id and in this case the endpoint will return any changed maintenance record from changed-since-datetime and to now. It is also possible to add before-datetime query parameter and the endpoint will then return any changed maintenance between changed-since-datetime and before-datetime.
     *
     * Parameters:
     * - plant-id
     * - changed-since-datetime
     * - before-datetime (optional)
     *
     * ### Update release v1.2.0
     * Added filter `my-recent-maintenance-records`.
     *
     * ### Update release v1.5.0
     * Added filter `recently-changed` and maintenance record types `modification-proposal`, `certification-report`,`technical-information-update-request` and `technical-clarification`.
     *
     * ### Update release v1.8.0
     * Added properties hasUnsafeFailureMode and unsafeFailureModeStatus for failure reports.
     *
     * ### Update release v1.9.0
     * Renamed property plannerGroupPlantId to planningPlantId.
     *
     * ### Update release v1.12.0
     * Added property `maintenanceRecordTypeId`.
     *
     * ### Update release v1.16.0
     * Added property `workCenterId` to `maintenanceRecords.failureReports`
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
         * Optional parameter to limit the response to only maintenance records changed after changed-since-datetime but before this datetime
         */
        createdAfterDatetime?: string,
        /**
         * Plant
         */
        plantId?: string,
        /**
         * Earliest datetime to returned changed work orders for
         */
        changedSinceDatetime?: string,
        /**
         * Optional parameter to limit the response to only work orders changed after changed-since-datetime but before this datetime
         */
        beforeDatetime?: string,
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all support types are returned
         */
        includeMaintenanceRecordTypes?: Array<'modification-proposal' | 'failure-report' | 'activity-report' | 'certification-report' | 'technical-information-update-request' | 'technical-clarification'>,
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
            },
            errors: {
                400: `Bad request, for example if \`before-datetime\` is before \`changed-since-datetime\``,
                404: `The specified resource was not found`,
            },
        });
    }

}
