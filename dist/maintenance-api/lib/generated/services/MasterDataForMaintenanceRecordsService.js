import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MasterDataForMaintenanceRecordsService {
    /**
     * Maintenance records - Get activity codes
     * ### Overview
     * Get a list of all activity codes which are in use for maintenance records.
     *
     * To be used when adding new activities to an existing failure report
     *
     * ### Examples
     * `/maintenance-records/activity-codes?maintenance-record-id=45939208&api-version=v1` - Use when maintenance record already exist
     *
     * `/maintenance-records/activity-codes?catalog-profile-id=PM-600&maintenance-record-type=failure-report&api-version=v1` - Use when maintenance record does not already exist. Get catalog-profile-id from tag or equipment to be used when the maintenance record is created
     *
     * ### Update release v0.9.0
     * Endpoint now requires a query parameter maintenance-record-id. The values returned are dependent on the maintenance record type and possibly tag or equipment for the maintenance record.
     *
     * activityCodeHelpText added as property.
     *
     * ### Update release v0.10.0
     * Endpoint requires either query parameter maintenance-record-id or both catalog-profile-id and maintenance-record-type.
     *
     * @returns ActivityCodeGroup Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static getMaintenanceRecordsActivityCodes({ maintenanceRecordId, catalogProfileId, maintenanceRecordType, }) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/activity-codes',
            query: {
                'maintenance-record-id': maintenanceRecordId,
                'catalog-profile-id': catalogProfileId,
                'maintenance-record-type': maintenanceRecordType,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }
    /**
     * Maintenance records - Get task codes
     * ### Overview
     * Get a list of all task codes which are in use for maintenance records.
     *
     * To be used when adding new tasks to an existing failure report
     *
     * There are two ways to filter for task codes.
     * - by maintenance-record-id
     * - by maintenance-record-type and catalog-profile-id
     *
     * ### Examples
     * `/maintenance-records/task-codes?maintenance-record-id=45939208&api-version=v1` - Use when maintenance record already exist
     *
     * `/maintenance-records/task-codes?catalog-profile-id=PM-600&maintenance-record-type=failure-report&api-version=v1` - Use when maintenance record does not already exist. Get catalog-profile-id from tag or equipment to be used when the maintenance record is created
     *
     * ### Important information
     * taskCodeHelpText is defined for relatively few codes.
     *
     * Required to provide parameter `maintenance-record-id` or `catalog-profile-id` and `maintenance-record-type`
     * ### Update release v1.11.0
     * Added support for technical information update request
     *
     * @returns TaskCodeGroup Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static getMaintenanceRecordsTaskCodes({ maintenanceRecordId, catalogProfileId, maintenanceRecordType, }) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/task-codes',
            query: {
                'maintenance-record-id': maintenanceRecordId,
                'catalog-profile-id': catalogProfileId,
                'maintenance-record-type': maintenanceRecordType,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }
    /**
     * Maintenance records - Get reason codes
     * ### Overview
     * Get a list of all reason codes used in modification proposal maintenance records.
     *
     * ### Examples
     * `/maintenance-records/reason-codes?maintenance-record-type=modification-proposal&api-version=v1`
     *
     * @returns ModificationProposalReasonGroup Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static getMaintenanceRecordsReasonCodes({ maintenanceRecordType, }) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/reason-codes',
            query: {
                'maintenance-record-type': maintenanceRecordType,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }
}
