/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CatalogProfile } from '../models/CatalogProfile';
import type { CatalogProfileWithText } from '../models/CatalogProfileWithText';
import type { CharacteristicForSearch } from '../models/CharacteristicForSearch';
import type { Document } from '../models/Document';
import type { EqHubAndSemiUsage } from '../models/EqHubAndSemiUsage';
import type { Equipment } from '../models/Equipment';
import type { EquipmentChangeLogs } from '../models/EquipmentChangeLogs';
import type { EquipmentListItem } from '../models/EquipmentListItem';
import type { EquipmentSearchItem } from '../models/EquipmentSearchItem';
import type { FailureReportSimpleForSearch } from '../models/FailureReportSimpleForSearch';
import type { MaintenanceRecordChangeLogs } from '../models/MaintenanceRecordChangeLogs';
import type { MaintenanceRecordList } from '../models/MaintenanceRecordList';
import type { MaintenanceRecordTypes } from '../models/MaintenanceRecordTypes';
import type { MeasuringPoint } from '../models/MeasuringPoint';
import type { PlanningPlantRevision } from '../models/PlanningPlantRevision';
import type { Plant } from '../models/Plant';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { Tag } from '../models/Tag';
import type { TagHierachyItem } from '../models/TagHierachyItem';
import type { TagHierachyItemDeprecated } from '../models/TagHierachyItemDeprecated';
import type { TagSearch } from '../models/TagSearch';
import type { TextTemplate } from '../models/TextTemplate';
import type { WorkOrderChangeLogs } from '../models/WorkOrderChangeLogs';
import type { WorkOrderInPlan } from '../models/WorkOrderInPlan';
import type { WorkOrderOperationForSearchFull } from '../models/WorkOrderOperationForSearchFull';
import type { WorkOrderOptimizedForQuery } from '../models/WorkOrderOptimizedForQuery';
import type { WorkOrderTypes } from '../models/WorkOrderTypes';
import type { WorkOrderWithOperationList } from '../models/WorkOrderWithOperationList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModifiedEndpointsService {

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

    /**
     * Tag - Lookup
     * ### Overview
     * Lookup a single tag with related information
     *
     * ### Update release 0.9.0
     * Added `include-measuring-points` and `include-last-measurement` query parameters.
     *
     * ### Update release 1.1.0
     * Added additional characteristics with ids CRIT_MAIN_FUNCTION and CRIT_SUB_FUNCTION.
     *
     * Added certification-report, technical-information-update-requests and technical-clarifications for `include-maintenance-records` query parameter.
     *
     * Added `include-work-orders` to return work orders where the requested tag is the main reference. `include-work-order-types` can be used to limit to certain work order types.
     *
     * Added isOpen and completedDateTime properties for maintenance records if `include-maintenance-records` is true.
     *
     * Fixed bug for `include-installed-equipment`.
     *
     * ### Update release 1.3.0
     * Added `workCenterId`, `workCenterPlantId`, `workCenter`, `planningPlantId`,`plannerGroupId` and `plannerGroup` properties.
     *
     * Added `include-bill-of-materials` query parameter.
     *
     * ### Update release 1.5.0
     * Added `revisionId` and `revision` to related work orders (represents shutdown or campaign work).
     *
     * ### Update release 1.8.0
     * Added properties `hasUnsafeFailureMode` and `unsafeFailureModeStatus` for failure reports.
     *
     * ### Update release 1.10.0
     * Added property `maintenanceRecordId` to measurements of measuring points.
     *
     * ### Update release 1.11.0
     * Added property `costWBSId`.
     *
     * ### Update release 1.15.0
     * Added `workOrderId` to response.
     *
     * Added `include-linear-data` and `include-status-details` query parameters.
     *
     * Added properties `tagCategoryId`, `activeStatusIds`, `startUpDate` and `endOfUseDate`.
     *
     * Added `modification-proposal` as a maintenance record type to include with `include-maintenance-record-types` parameter.
     *
     * ### Update release 1.16.0
     * Added property `classId` to characteristics.
     *
     * Added query parameters `include-attachments` and `include-url-references`.
     *
     * Added property `workCenterId`
     *
     * ### Update release 1.21.0
     * Added property `area`.
     *
     * ### Update release 1.24.0
     * `urlReferences` and `attachments` now include the property `documentCreatedDate`
     *
     * Added property `cmrIndicator` for WorkOrders
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.28.0
     * `billOfMaterials` now include the property `parentMaterialId`
     *
     * Added `materialId` and `material` to the response
     *
     * ### Update release 1.32.0
     * Added `changedDateTime` for attachments.
     *
     * ### Update release 1.35.0
     * Added new fields `maintenancePlantId`, `createdOnDate` and `changedOnDate`.
     *
     * ### Update release 1.36.0
     * Added properties `costs` and `costsCurrency` to preventive work orders.
     *
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator` from work orders. See STRY0261073 in ServiceNow for more details.
     *
     * ### Update release 1.39.0
     * Added new property `priorityId` to `preventiveWorkOrders`.
     *
     * ### Update release 1.40.0
     * Added properties `plannerGroup` and `plannerGroupId` to `failureReports`.
     *
     * ### Update release 1.41.0
     * Added property `priorityId` to `maintenancePlanItems`
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns Tag Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupTag({
        plantId,
        tagId,
        includeMaintenanceRecords = false,
        includeMaintenanceRecordTypes,
        includeWorkOrders = true,
        includeWorkOrderTypes,
        includeInstalledEquipment = false,
        includeCatalogProfileDetails = false,
        includeMaintenancePlanItems = false,
        includeMeasuringPoints = false,
        includeLastMeasurement = false,
        includeCharacteristics = false,
        includeBillOfMaterials = false,
        includeAttachments = false,
        includeUrlReferences = false,
        includeStatusDetails = false,
        includeLinearData = false,
    }: {
        /**
         * Plants or maintenance plants to include tags from.
         */
        plantId: string,
        tagId: string,
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all supported types are returned
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include which types of maintenance records
         */
        includeMaintenanceRecordTypes?: Array<'failure-report' | 'activity-report' | 'certification-report' | 'technical-information-update-request' | 'technical-clarification' | 'modification-proposal'>,
        /**
         * Include work orders. If include-work-order-types is not supplied, all supported types are returned.
         */
        includeWorkOrders?: boolean,
        /**
         * Include which types of work orders. Use comma-separated list of entries.
         */
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders' | 'overheadMaintenanceWorkOrders'>,
        /**
         * Include installed equipment
         */
        includeInstalledEquipment?: boolean,
        /**
         * Include possible detection methods, failure modes and failure mechanisms
         */
        includeCatalogProfileDetails?: boolean,
        /**
         * Include Maintenance Plan items this functional location is part of
         */
        includeMaintenancePlanItems?: boolean,
        /**
         * Include measuring points for this tag
         */
        includeMeasuringPoints?: boolean,
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true or if looking up measuring point)
         */
        includeLastMeasurement?: boolean,
        /**
         * Include tag characteristics such as 'Function Fail Consequence' and 'Safety Critical Element (SCE)'
         */
        includeCharacteristics?: boolean,
        /**
         * Include bill of materials (also known as structure list) for tag and installed equipment
         */
        includeBillOfMaterials?: boolean,
        /**
         * Include equipment or tag attachments
         */
        includeAttachments?: boolean,
        /**
         * Include URL references for object
         */
        includeUrlReferences?: boolean,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include linear data
         */
        includeLinearData?: boolean,
    }): CancelablePromise<Tag | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/tags/{tag-id}',
            path: {
                'plant-id': plantId,
                'tag-id': tagId,
            },
            query: {
                'include-maintenance-records': includeMaintenanceRecords,
                'include-maintenance-record-types': includeMaintenanceRecordTypes,
                'include-work-orders': includeWorkOrders,
                'include-work-order-types': includeWorkOrderTypes,
                'include-installed-equipment': includeInstalledEquipment,
                'include-catalog-profile-details': includeCatalogProfileDetails,
                'include-maintenance-plan-items': includeMaintenancePlanItems,
                'include-measuring-points': includeMeasuringPoints,
                'include-last-measurement': includeLastMeasurement,
                'include-characteristics': includeCharacteristics,
                'include-bill-of-materials': includeBillOfMaterials,
                'include-attachments': includeAttachments,
                'include-url-references': includeUrlReferences,
                'include-status-details': includeStatusDetails,
                'include-linear-data': includeLinearData,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * @deprecated
     * Tag hierachy - Get
     * Get the entire tag hierachy for a plant.
     * For each tag you will be provided with catalog profile and the parent tag.
     *
     * ### Filter: filter-by-root-tags
     * Limits the response to the sub trees defined by the provided root tags.
     * Parameters:
     * - root-tags
     *
     * ### Important information
     * This returns a significant amount of data as it returns all tags for a plant (which may be up to 250 000).
     *
     * The data will be cached in the API and renewed on a daily basis.
     *
     * ### Update release 0.9.0
     * Added filter-by-root-tags filter.
     *
     * ### Important information
     * Endpoint is deprecated as of 11.2022 in order to improve consistency in API.
     * Use `/plants/{plant-id}/tag-hierarchy` instead.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns TagHierachyItemDeprecated Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getTagHierachy({
        plantId,
        filter,
        rootTags,
        subHierarchyLimit = 4,
    }: {
        plantId: string,
        /**
         * Filter to limit the tag hierarchy by
         */
        filter?: 'filter-by-root-tags',
        /**
         * Comma-separated list of tags (without tagPlantId prefix)
         */
        rootTags?: string,
        /**
         * Limit the response to a certain number of levels below the root tag
         * If this parameter is omitted, a maximum of 4 sub levels will be included.
         *
         */
        subHierarchyLimit?: number,
    }): CancelablePromise<Array<TagHierachyItemDeprecated> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/tag-hierachy',
            path: {
                'plant-id': plantId,
            },
            query: {
                'filter': filter,
                'root-tags': rootTags,
                'sub-hierarchy-limit': subHierarchyLimit,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Tag hierarchy - Get
     * Get the entire tag hierarchy for a plant.
     * For each tag you will be provided with catalog profile and the parent tag.
     *
     * Parameters:
     * - `root-tag-id-any-of` - Limits the response to the tag sub-trees defined by the provided comma-seperated list of root tag id's.
     * - `sub-hierarchy-limit` - Limit the response to a certain number of levels below the root tag. If this parameter is omitted, a maximum of 4 sub levels will be included.
     *
     * ### Important information
     * This returns a significant amount of data as it returns all tags for a plant (which may be up to 250 000).
     * Improve the performance by using available query parameters to limit the response.
     *
     * The data will be cached in the API and renewed on a daily basis.
     *
     * ### Update release 1.30.0
     * Added property `tag` to the response.
     *
     * Added query parameter `sub-hierarchy-limit` which controls how many levels below the root the response will contain.
     *
     * ### Update release 1.41.0
     * Deprecated 'filter' query parameter. The endpoint will accept the parameter but ignore it. Providing `plant-id` is required as before.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns TagHierachyItem Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getTagHierarchy({
        plantId,
        filter,
        rootTagIdAnyOf,
        subHierarchyLimit = 4,
    }: {
        plantId: string,
        /**
         * Deprecated parameter that is ignored but accepted. Has no effect.
         * @deprecated
         */
        filter?: 'by-root-tags',
        /**
         * Comma-separated list of tags (without tagPlantId prefix)
         */
        rootTagIdAnyOf?: string,
        /**
         * Limit the response to a certain number of levels below the root tag
         * If this parameter is omitted, a maximum of 4 sub levels will be included.
         *
         */
        subHierarchyLimit?: number,
    }): CancelablePromise<Array<TagHierachyItem> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/tag-hierarchy',
            path: {
                'plant-id': plantId,
            },
            query: {
                'filter': filter,
                'root-tag-id-any-of': rootTagIdAnyOf,
                'sub-hierarchy-limit': subHierarchyLimit,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Equipment - Lookup
     * ### Overview
     * Lookup a single equipment with related maintenance information.
     *
     * The endpoint has several include query parameters which allows a client to retrieve only the information which is relevant for their use case.
     *
     * ### Important information
     * For warehouse and logistics data of an equipment, use SCM Logistics API.
     *
     * ### Example usage
     * `/equipment/11948620?include-maintenance-records=true&include-maintenance-record-types=failure-report&include-only-open-maintenance-records=true&include-work-orders=true&include-work-order-types=preventiveWorkOrders,subseaWorkOrders&include-only-open-work-orders=true&include-characteristics=true&include-status-details=true&api-version=v1` - Lookup equipment with status details and characteristics. Include open failure reports where the equipment is used as main reference. Include open subsea work orders and open preventive work orders where the equipment is either a material component or the main reference (`equipmentId` at work order header level).
     *
     * ### Update release 1.4.0
     * `include-work-orders` now include work orders where the `equipmentId` is the main reference (`equipmentId` at work order header level).
     *
     * ### Update release 1.5.0
     * Fixed known limitation for `include-work-orders` and `include-only-open-work-orders=false`.
     *
     * Bugfix for include-work-orders related to deleted equipment reservations.
     *
     * Added revisionId and revision to related work orders (represents shutdown or campaign work).
     *
     * ### Update release 1.6.0
     * For `include-work-orders`, add information on the relationship between the equipment and the work order (for example the id of the reservation)
     *
     * ### Update release 1.7.0
     * Added property parentEquipmentId.
     *
     * ### Update release 1.8.0
     * Added properties hasUnsafeFailureMode and unsafeFailureModeStatus for failure reports.
     *
     * ### Update release 1.10.0
     * Added property `maintenanceRecordId` to measurements of measuring points.
     *
     * ### Update release 1.12.0
     * Added properties `equipmentCategoryId` and `quantityUnitId`.
     *
     * ### Update release 1.15.0
     * Added `workOrderId` to the lastMeasurement.
     *
     * Added query parameter `include-url-references`.
     *
     * `modification-proposal` in `include-maintenance-record-types` now includes modification proposals in the response.
     *
     * ### Update release 1.16.0
     * Added property `classId` to characteristics.
     *
     * Added properties `manufacturer` and `modelNumber`.
     *
     * `urlReferences` and `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * Added property `workCenterId` to `maintenanceRecords.failureReports`
     *
     * ### Update release 1.17.0
     * Add property `characteristics` to `urlReferences` in response
     *
     * Add query parameter `include-url-characteristics`
     *
     * ### Update release 1.21.0
     * Added query parameter `include-person-responsible`, that expands work order response with person responsible.
     *
     * ### Update release 1.24.0
     * `urlReferences` and `attachments` now include the property `documentCreatedDate`
     *
     * Added property `cmrIndicator` for WorkOrders
     *
     * ### Update release 1.25.0
     * Added query parameter `include-sub-equipment`
     *
     * ### Update release 1.26.0
     * Added properties `tagId` and `tagPlantId`
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.31.0
     * Added properties `manufacturerPartNumber`, `technicalIdentificationNumber`, `objectWeight` and `unitOfWeight`to response body.
     *
     * ### Update release 1.32.0
     * Added `changedDateTime` for attachments.
     *
     * ### Update release 1.34.0
     * Added property `linkedEquipment`, which can be included in the response by using the new query parameter `include-linked-equipment`.
     *
     * Added boolean property `hasLinkageToEquipment` that will be true if the equipment has any linked equipment.
     *
     * ### Update release 1.35.0
     * Added new fields `maintenancePlantId`, `createdOnDate` and `changedOnDate`.
     *
     * ### Update release 1.36.0
     * Added properties `costs` and `costsCurrency` to preventive work orders.
     *
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator` from work orders. See STRY0261073 in ServiceNow for more details.
     * Added new work order type `overHeadMaintenanceWorkOrders` to response.
     *
     * ### Update release 1.38.0
     * Added new property `tag` to the response.
     *
     * ### Update release 1.39.0
     * Added new property `priorityId` to `preventiveWorkOrders`.
     *
     * ### Update release 1.41.0
     * Added new property `materialSerialNumber` to top level Equipment object, to `subEquipment` and to `linkedEquipment`.
     * Added new expand `equipmentPartners` with the `partnerId` and `partnerName` of an Equipment partner. The expand can be included in response by setting the new query parameter `include-equipment-partners` to `true`.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns Equipment Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupEquipment({
        equipmentId,
        includeMaintenanceRecords = false,
        includeMaintenanceRecordTypes,
        includeOnlyOpenMaintenanceRecords = false,
        includeWorkOrders = true,
        includeWorkOrderTypes,
        includeOnlyOpenWorkOrders = false,
        includeCatalogProfileDetails = false,
        includeCharacteristics = false,
        includeAttachments = false,
        includeUrlReferences = false,
        includeUrlCharacteristics = false,
        includeMeasuringPoints = false,
        includeLastMeasurement = false,
        includePersonResponsible = false,
        includeSubEquipment = false,
        includeStatusDetails = false,
        includeLinkedEquipment = false,
        includeEquipmentPartners = false,
    }: {
        /**
         * The unique equipmentId in Equinor's system
         */
        equipmentId: string,
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all supported types are returned
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include which types of maintenance records
         */
        includeMaintenanceRecordTypes?: Array<'failure-report' | 'activity-report' | 'certification-report' | 'technical-information-update-request' | 'technical-clarification' | 'modification-proposal'>,
        /**
         * Limit include-maintenance-records to only open maintenance records
         */
        includeOnlyOpenMaintenanceRecords?: boolean,
        /**
         * Include work orders. If include-work-order-types is not supplied, all supported types are returned.
         */
        includeWorkOrders?: boolean,
        /**
         * Include which types of work orders. Use comma-separated list of entries.
         */
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders' | 'overheadMaintenanceWorkOrders'>,
        /**
         * Limit include-work-orders to only open work order
         */
        includeOnlyOpenWorkOrders?: boolean,
        /**
         * Include possible detection methods, failure modes and failure mechanisms
         */
        includeCatalogProfileDetails?: boolean,
        /**
         * Include equipment characteristics such as 'Kontrollkort gyldig til' and 'Equipment group'
         */
        includeCharacteristics?: boolean,
        /**
         * Include equipment or tag attachments
         */
        includeAttachments?: boolean,
        /**
         * Include URL references for object
         */
        includeUrlReferences?: boolean,
        /**
         * Include characteristics for URL References
         */
        includeUrlCharacteristics?: boolean,
        /**
         * Include measuring points for this tag
         */
        includeMeasuringPoints?: boolean,
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true or if looking up measuring point)
         */
        includeLastMeasurement?: boolean,
        /**
         * Include person responsible information in response, for example the email or name of the person responsible. May have a slight performance impact.
         */
        includePersonResponsible?: boolean,
        /**
         * Include child equipment for an equipment.
         * Limit to only the first level childs of the hierarchy.
         *
         */
        includeSubEquipment?: boolean,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include list of equipment that are physically linked to this equipment.
         */
        includeLinkedEquipment?: boolean,
        /**
         * Include partner overview for this equipment.
         */
        includeEquipmentPartners?: boolean,
    }): CancelablePromise<Equipment | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/equipment/{equipment-id}',
            path: {
                'equipment-id': equipmentId,
            },
            query: {
                'include-maintenance-records': includeMaintenanceRecords,
                'include-maintenance-record-types': includeMaintenanceRecordTypes,
                'include-only-open-maintenance-records': includeOnlyOpenMaintenanceRecords,
                'include-work-orders': includeWorkOrders,
                'include-work-order-types': includeWorkOrderTypes,
                'include-only-open-work-orders': includeOnlyOpenWorkOrders,
                'include-catalog-profile-details': includeCatalogProfileDetails,
                'include-characteristics': includeCharacteristics,
                'include-attachments': includeAttachments,
                'include-url-references': includeUrlReferences,
                'include-url-characteristics': includeUrlCharacteristics,
                'include-measuring-points': includeMeasuringPoints,
                'include-last-measurement': includeLastMeasurement,
                'include-person-responsible': includePersonResponsible,
                'include-sub-equipment': includeSubEquipment,
                'include-status-details': includeStatusDetails,
                'include-linked-equipment': includeLinkedEquipment,
                'include-equipment-partners': includeEquipmentPartners,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Equipment list - Get
     * Get list of all equipment for the specified plant.
     *
     * The response will include `equipmentCategoryId` and `catalogProfileId` for each equipment.
     *
     * ### Filter: filter-by-equipment-category (optional)
     * Limits the response to the provided `equipmentCategoryId`(s).
     * Parameters:
     * - equipment-category-id-any-of
     *
     * ### Important information
     * The endpoint returns a significant amount of data as it returns all equipment for the specified plant.  The data will be cached in the API and renewed on a daily basis.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns EquipmentListItem Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getEquipmentList({
        plantId,
        filter,
        equipmentCategoryIdAnyOf,
    }: {
        plantId: string,
        /**
         * Filter to limit the equipment list by
         */
        filter?: 'filter-by-equipment-category',
        /**
         * Comma-separated list of equipment categories. `G` = Tank Customer equipment, `L` = Pipe & Process Equipment Parts, `M` = Machines/Equipment, `P` = Production resources/tools, `Q` = Test/measurement equipment, `R` = Process Equipment, `S` = Customer equipment, `T` = IT Equipment, `U` = Subsea Equipment, `W` = Wind Operation Certified Equip, `Y` = Tool Crib
         */
        equipmentCategoryIdAnyOf?: string,
    }): CancelablePromise<Array<EquipmentListItem> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/equipment-list',
            path: {
                'plant-id': plantId,
            },
            query: {
                'filter': filter,
                'equipment-category-id-any-of': equipmentCategoryIdAnyOf,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Equipment - Search
     * ### Overview
     * Search for equipment and include related maintenance information.
     *
     * The endpoint has several include query parameters which allows a client to retrieve only the information which is relevant for their use case.
     *
     * The client must in the request provide at least one of the following search parameters:
     * * `equipment-id-any-of`
     * * `serial-number-any-of`
     * * `vendor-part-number-any-of`
     * * `material-id-any-of`
     * * `characteristic-value-any-of`
     * * `equipment-any-of`
     * * `technical-identification-number-any-of`
     * * `maintenance-concept-id-any-of`
     * * `equipment-category-id-any-of`
     *
     * These parameters allow a comma-separated list of entries. If a value itself contains a comma, escape it with a backslash (`\,`).
     *
     * If more than one of these parameters are supplied in the same request, the equipment in the response will need to fulfill all parameters (the 'AND' operator will be used between the parameters).
     *
     * Query parameters `include-only-open-maintenance-records` and `include-only-open-work-orders` have a recommended value of `true` in order to improve performance (default value `false`).
     *
     * ### Important information
     * For warehouse and logistics data of an equipment, use SCM Logistics API.
     *
     * ### Example usage
     * `/equipment?serial-number-any-of=4500695422-20-003,4500695422-20-004&include-maintenance-records=true&include-maintenance-record-types=failure-report&include-only-open-maintenance-records=true&include-work-orders=true&include-work-order-types=preventiveWorkOrders,subseaWorkOrders&include-only-open-work-orders=true&include-characteristics=true&api-version=v1` - Search equipment based on serialNumber with characteritics. Include open failure reports where the equipment is used as main reference. Include open subsea work orders and open preventive work orders where the equipment is either a material component or the main reference (`equipmentId` at work order header level).
     *
     * When using the `characteristic-value-any-of` it is important to URI Encode the input data especially when there are special characters as part of the input:
     *
     * `/equipment?characteristic-value-any-of=%3D17445%2F9818,%3D17433/6333&class-id=L_PART&characteristic-id=L_E3DREF&plant-id=1201&api-version=v1`
     *
     * ### Update release 1.4.0
     * `include-work-orders` now include work orders where the `equipmentId` is the main reference (`equipmentId` at work order header level).
     *
     * ### Update release 1.5.0
     * Fixed known limitation for `include-work-orders` and `include-only-open-work-orders=false`.
     *
     * Bugfix for include-work-orders related to deleted equipment reservations.
     *
     * Added revisionId and revision to related work orders (represents shutdown or campaign work).
     *
     * ### Update release 1.6.0
     * For `include-work-orders`, add information on the relationship between the equipment and the work order (for example the id of the reservation)
     *
     * ### Update release 1.7.0
     * Added property parentEquipmentId.
     *
     * ### Update release 1.8.0
     * Added properties hasUnsafeFailureMode and unsafeFailureModeStatus for failure reports.
     *
     * ### Update release 1.12.0
     * Added property `quantityUnitId`
     *
     * ### Update release 1.15.0
     * `modification-proposal` in `include-maintenance-record-types` now includes modification proposals in the response.
     *
     * ### Update release 1.16.0
     * Added property `classId` to characteristics.
     *
     * Added properties `manufacturer` and `modelNumber`.
     *
     * ### Update release 1.21.0
     * Added query parameter `include-person-responsible`, that expands work order response with person responsible.
     *
     * ### Update release 1.22.0
     * Added `include-measuring-points` and `include-last-measurement` query parameters.
     *
     * ### Update release 1.24.0
     * Added `characteristic-value-any-of`, `class-id`, `characteristic-id` and `plant-id-any-of` query parameters.
     * Can be used to search for equipment based on values of a characteristic.
     * In addition, an optional filter on a plant can be supplied.
     *
     * Added property `cmrIndicator` for WorkOrders.
     *
     * Added query parameter `equipment-any-of`, a wildcard search based on `equipment`
     *
     * ### Update release 1.25.0
     * Added query parameter `include-sub-equipment`
     *
     * ### Update release 1.26.0
     * Added query parameter `include-status-details`.
     * Added properties `tagId` and `tagPlantId`
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.31.0
     * Added properties `manufacturerPartNumber`, `technicalIdentificationNumber`, `objectWeight` and `unitOfWeight`to response body.
     *
     * Added query parameter `technical-identification-number-any-of` to allow searching based on `technicalIdentificationNumber`.
     *
     * ### Update release 1.34.0
     * Added property `linkedEquipment`, which can be included in each equipment in the response by using the new query parameter `include-linked-equipment`.
     *
     * Added boolean property `hasLinkageToEquipment` that will be true if the equipment has any linked equipment.
     *
     * ### Update release 1.35.0
     * Added support for including attachments on equipments in the response by setting the new query parameter `include-attachments` to true.
     *
     * Added new fields `maintenancePlantId`, `equipmentCategoryId`, `maintenanceConceptId`, `createdOnDate` and `changedOnDate` to response body.
     *
     * Added new filters based on the new fields - `maintenancePlantId`, `equipmentCategoryId`, `maintenanceConceptId`, `createdOnDate` and `changedOnDate`.
     *
     * ### Update release 1.36.0
     * Added new properies `costs` and `costsCurrency` to preventive work orders.
     *
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator` from work orders. See STRY0261073 in ServiceNow for more details.
     * Added new work order type `overHeadMaintenanceWorkOrders` to response.
     *
     * ### Update release 1.38.0
     * Added `tag` to the response.
     *
     * ### Update release 1.39.0
     * Added new property `priorityId` to `preventiveWorkOrders`.
     *
     * ### Update release 1.41.0
     * Added new property `materialSerialNumber` to top level Equipment object, to `subEquipment` and to `linkedEquipment`.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns EquipmentSearchItem Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchEquipment({
        equipmentIdAnyOf,
        serialNumberAnyOf,
        vendorPartNumberAnyOf,
        materialIdAnyOf,
        characteristicValueAnyOf,
        plantIdAnyOf,
        equipmentAnyOf,
        technicalIdentificationNumberAnyOf,
        characteristicId,
        classId,
        equipmentCategoryIdAnyOf,
        maintenanceConceptIdAnyOf,
        createdBeforeDate,
        createdAfterDate,
        changedBeforeDate,
        changedAfterDate,
        includeMaintenanceRecords = false,
        includeMaintenanceRecordTypes,
        includeOnlyOpenMaintenanceRecords = false,
        includeWorkOrders = true,
        includePersonResponsible = false,
        includeMeasuringPoints = false,
        includeLastMeasurement = false,
        includeSubEquipment = false,
        includeStatusDetails = false,
        includeWorkOrderTypes,
        includeOnlyOpenWorkOrders = false,
        includeCharacteristics = false,
        includeLinkedEquipment = false,
        includeAttachments = false,
        perPage = 20,
        page = 1,
    }: {
        /**
         * Search based on equipmentIds. Wildcards are supported
         */
        equipmentIdAnyOf?: Array<string>,
        /**
         * Search based on serialNumber. Wildcards are supported
         */
        serialNumberAnyOf?: Array<string>,
        /**
         * Search based on partNumber. Wildcards are supported
         */
        vendorPartNumberAnyOf?: Array<string>,
        /**
         * Search based on materialId. Wildcards are supported
         */
        materialIdAnyOf?: Array<string>,
        /**
         * Search based on characteristic values. Must be used in combination with `class-id` and `characteristic-id` Wildcards are not supported. Make sure to encode the parameters if they contain special characters.
         */
        characteristicValueAnyOf?: string,
        /**
         * Comma-separated string array of plant-ids to filter your result to one or more plants. Wildcards are not supported.
         */
        plantIdAnyOf?: string,
        /**
         * Optional comma separated string array of equipment descriptions/titles (`equipment` in response model). Wildcards are supported.
         */
        equipmentAnyOf?: string | null,
        /**
         * Optional comma separated string array of technical identification numbers (`technicalIdentificationNumber` in response model). Wildcards are not supported.
         */
        technicalIdentificationNumberAnyOf?: string,
        /**
         * Required field if `characteristic-value-any-of` is supplied. Endpoint [/characteristics/{class-id}](#operation/LookupClass) can be used to find characteristic ids
         */
        characteristicId?: string | null,
        /**
         * Required field if `characteristic-value-any-of` is supplied.
         */
        classId?: string | null,
        /**
         * Optional comma separated string array of equipment category Id (`equipmentCategoryId` in response model). Wildcards are not supported.
         */
        equipmentCategoryIdAnyOf?: Array<string>,
        /**
         * Optional comma separated string array of Maintenance Concept Ids (`maintenanceConceptId` in response model). Wildcards are not supported.
         */
        maintenanceConceptIdAnyOf?: Array<string>,
        /**
         * Latest `createdOnDate` date to include. Use together with `created-after-date` to get Equipment created in the given time period.
         */
        createdBeforeDate?: string | null,
        /**
         * Earliest `createdOnDate` date to include. Use together with `created-before-date` to get Equipment created in the given time period.
         */
        createdAfterDate?: string | null,
        /**
         * Latest `changedOnDate` date to include. Use together with `changed-after-date` to get Equipment changed in the given time period.
         */
        changedBeforeDate?: string | null,
        /**
         * Earliest `changedOnDate` date to include. Use together with `changed-before-date` to get Equipment changed in the given time period.
         */
        changedAfterDate?: string | null,
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all supported types are returned
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include which types of maintenance records
         */
        includeMaintenanceRecordTypes?: Array<'failure-report' | 'activity-report' | 'certification-report' | 'technical-information-update-request' | 'technical-clarification' | 'modification-proposal'>,
        /**
         * Limit include-maintenance-records to only open maintenance records. Recommend using `true` in order to improve performance.
         */
        includeOnlyOpenMaintenanceRecords?: boolean,
        /**
         * Include work orders. If include-work-order-types is not supplied, all supported types are returned.
         */
        includeWorkOrders?: boolean,
        /**
         * Include person responsible information in response, for example the email or name of the person responsible. May have a slight performance impact.
         */
        includePersonResponsible?: boolean,
        /**
         * Include measuring points for this tag
         */
        includeMeasuringPoints?: boolean,
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true or if looking up measuring point)
         */
        includeLastMeasurement?: boolean,
        /**
         * Include child equipment for an equipment.
         * Limit to only the first level childs of the hierarchy.
         *
         */
        includeSubEquipment?: boolean,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include which types of work orders. Use comma-separated list of entries.
         */
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders' | 'overheadMaintenanceWorkOrders'>,
        /**
         * Limit include-work-orders to only open work order
         */
        includeOnlyOpenWorkOrders?: boolean,
        /**
         * Include equipment characteristics such as 'Kontrollkort gyldig til' and 'Equipment group'
         */
        includeCharacteristics?: boolean,
        /**
         * Include list of equipment that are physically linked to this equipment.
         */
        includeLinkedEquipment?: boolean,
        /**
         * Include equipment or tag attachments
         */
        includeAttachments?: boolean,
        /**
         * Results to return pr page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<EquipmentSearchItem> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/equipment',
            query: {
                'equipment-id-any-of': equipmentIdAnyOf,
                'serial-number-any-of': serialNumberAnyOf,
                'vendor-part-number-any-of': vendorPartNumberAnyOf,
                'material-id-any-of': materialIdAnyOf,
                'characteristic-value-any-of': characteristicValueAnyOf,
                'plant-id-any-of': plantIdAnyOf,
                'equipment-any-of': equipmentAnyOf,
                'technical-identification-number-any-of': technicalIdentificationNumberAnyOf,
                'characteristic-id': characteristicId,
                'class-id': classId,
                'equipment-category-id-any-of': equipmentCategoryIdAnyOf,
                'maintenance-concept-id-any-of': maintenanceConceptIdAnyOf,
                'created-before-date': createdBeforeDate,
                'created-after-date': createdAfterDate,
                'changed-before-date': changedBeforeDate,
                'changed-after-date': changedAfterDate,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-maintenance-record-types': includeMaintenanceRecordTypes,
                'include-only-open-maintenance-records': includeOnlyOpenMaintenanceRecords,
                'include-work-orders': includeWorkOrders,
                'include-person-responsible': includePersonResponsible,
                'include-measuring-points': includeMeasuringPoints,
                'include-last-measurement': includeLastMeasurement,
                'include-sub-equipment': includeSubEquipment,
                'include-status-details': includeStatusDetails,
                'include-work-order-types': includeWorkOrderTypes,
                'include-only-open-work-orders': includeOnlyOpenWorkOrders,
                'include-characteristics': includeCharacteristics,
                'include-linked-equipment': includeLinkedEquipment,
                'include-attachments': includeAttachments,
                'per-page': perPage,
                'page': page,
            },
            errors: {
                400: `Request is missing required parameters`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Equipment change log - Search
     * ### Overview
     * Search for equipment changes done recently.
     *
     * ### Response
     * The response contains only minimum information about the change made to the equipment.
     * For more information about each equipment, perform a lookup request using `/equipment/{equipment-id}`.
     *
     * ### Important information
     * It's not possible to capture all possible recent changes to an equipment. For example, changes to characteristics values are not captured.
     *
     * ### Filter: recently-changed-reserved-equipment
     * With the basis of a subsea work order, check if any of the currently reserved equipment has been changed recently.
     * Only the currently reserved equipment which have been recently changed are returned in the response.
     * Parameters:
     * - subsea-work-order-id
     * - changed-since-date (includes the provided date in the check)
     *
     * ### Filter: recently-changed-equipment
     * Check if the equipment provided in the request has been changed recently.
     * Only the equipment which have been recently changed are returned in the response.
     * Parameters:
     * - equipment-ids  (supports comma-separated list)
     * - changed-since-date (includes the provided date in the check)
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns EquipmentChangeLogs Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchEquipmentChangeLog({
        filter,
        subseaWorkOrderId,
        equipmentIds,
        changedSinceDate,
    }: {
        /**
         * Filter to limit the work order by
         */
        filter: 'recently-changed-reserved-equipment' | 'recently-changed-equipment',
        /**
         * The subsea work order to check if any reserved equipment has been changed recently
         */
        subseaWorkOrderId?: string,
        /**
         * Comma-separated list of equipment to check
         */
        equipmentIds?: Array<string>,
        /**
         * Earliest datetime to return changed equipment for
         */
        changedSinceDate?: string,
    }): CancelablePromise<EquipmentChangeLogs | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/equipment-change-log',
            query: {
                'filter': filter,
                'subsea-work-order-id': subseaWorkOrderId,
                'equipment-ids': equipmentIds,
                'changed-since-date': changedSinceDate,
            },
            errors: {
                400: `Request is missing required parameters`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Document - Search
     * ### Overview
     * Search documents and include related information such as characteristics, materials, equipment and attachments.
     *
     *
     * The client must in the request provide at least one of the following search parameters:
     * * `document-type-any-of`
     * * `document-number-any-of`
     * * `characteristic-value-any-of`
     *
     * **N.B** The link in the attachment object is in the first iteration always routed via the equipment attachment endpoint.
     * In a future release we will implement a general endpoint `documents/attachment/{attachment-id}` for downloading attachments which will be displayed here.
     *
     * ### Update release 1.31.0
     * Added `include-inventory-count` query parameter to include `equipmentInventoryCount` and `materialInventoryCount` property in the response.
     *
     * Added support for including more business objects: `include-tags`, `include-measuring-points` and `include-maintenance-records`.
     *
     * ### Update release 1.32.0
     * Added `include-url-references` query parameter to include URL references in the response.
     *
     * Added properties `statusId` and `statusText` to the response.
     *
     * Added properties `partNumber` & `manufacturer` to `material` in the response.
     *
     * ### Update release 1.35.0
     * Added new fields `maintenancePlantId`, `equipmentCategoryId`, `maintenanceConceptId`, `createdOnDate` and `changedOnDate` for `equipment`.
     *
     * ### Update release 1.38.0
     * Added `tag` to the response of `equipment`.
     *
     * ### Update release 1.39.0
     * Added property `text` to the response.
     *
     * ### Update release 1.41.0
     * Added new property `materialSerialNumber` to `equipment` expand.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns Document Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchDocuments({
        documentTypeAnyOf,
        documentNumberAnyOf,
        characteristicValueAnyOf,
        characteristicId,
        classId,
        includeCharacteristics = false,
        includeMaterial = false,
        includeEquipment = false,
        includeTags = false,
        includeMaintenanceRecords = false,
        includeMeasuringPoints = false,
        includeAttachments = false,
        includeInventoryCount = false,
        includeUrlReferences = false,
        perPage = 50,
        page = 1,
    }: {
        /**
         * Search based on `documentType`.
         */
        documentTypeAnyOf?: Array<string>,
        /**
         * Search based on `documentNumber`.
         */
        documentNumberAnyOf?: Array<string>,
        /**
         * Search based on characteristic values. Must be used in combination with `class-id` and `characteristic-id` Wildcards are not supported. Make sure to encode the parameters if they contain special characters.
         */
        characteristicValueAnyOf?: string,
        /**
         * Required field if `characteristic-value-any-of` is supplied. Endpoint [/characteristics/{class-id}](#operation/LookupClass) can be used to find characteristic ids
         */
        characteristicId?: string | null,
        /**
         * Required field if `characteristic-value-any-of` is supplied.
         */
        classId?: string | null,
        /**
         * Include characteristics'
         */
        includeCharacteristics?: boolean,
        /**
         * Include material related to the object
         */
        includeMaterial?: boolean,
        /**
         * Include equipment related to the object
         */
        includeEquipment?: boolean,
        /**
         * Include tags.
         */
        includeTags?: boolean,
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all supported types are returned
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include measuring points for this tag
         */
        includeMeasuringPoints?: boolean,
        /**
         * Include equipment or tag attachments
         */
        includeAttachments?: boolean,
        includeInventoryCount?: boolean,
        /**
         * Include URL references for object
         */
        includeUrlReferences?: boolean,
        /**
         * Results to return pr page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<Document> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/documents',
            query: {
                'document-type-any-of': documentTypeAnyOf,
                'document-number-any-of': documentNumberAnyOf,
                'characteristic-value-any-of': characteristicValueAnyOf,
                'characteristic-id': characteristicId,
                'class-id': classId,
                'include-characteristics': includeCharacteristics,
                'include-material': includeMaterial,
                'include-equipment': includeEquipment,
                'include-tags': includeTags,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-measuring-points': includeMeasuringPoints,
                'include-attachments': includeAttachments,
                'include-inventory-count': includeInventoryCount,
                'include-url-references': includeUrlReferences,
                'per-page': perPage,
                'page': page,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to view document`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Measuring points - Search
     * ### Overview
     * Search measuring points based on plant and at least one other property of the measuring point.
     *
     * Parameters:
     * - `plant-id` (required)
     *
     * Must be combined with at least one of the following parameters:
     *
     * - `tag-prefix`
     * - `measuring-position`
     * - `quantitative-characteristic`
     * - `qualitative-code-group`
     * - `measuring-point-name`
     * - `characteristic-value-any-of` (also requires `class-id` and `characteristic-id`)
     *
     *
     * ### Examples
     * `/measuring-points?plant-id=1180&tag-prefix=18HV10&api-version=v1`
     *
     * `/measuring-points?plant-id=1102&quantitative-characteristic=SURFACE_MAINTEANC&api-version=v1`
     *
     * `/measuring-points?plant-id=1180&tag-prefix=18HV10&position=VALVE%20STATUS&include-last-measurement=true&api-version=v1`
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
     * ### Update release 1.40.0
     * Deprecated 'filter' query parameter. The endpoint will accept the parameter but ignore it. Providing `plant-id` is required.
     *
     * ### Update future release
     * Added `include-measurement-text` query parameter to include measurement text in the response.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns MeasuringPoint Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchMeasuringPoints({
        plantId,
        filter,
        tagPrefix,
        measuringPosition,
        quantitativeCharacteristic,
        qualitativeCodeGroup,
        measuringPointName,
        characteristicValueAnyOf,
        characteristicId,
        classId,
        includeLastMeasurement = false,
        includeMeasurements = false,
        includeQualitativeCodeGroup = false,
        includeCharacteristics = false,
        includeCharacteristicsWithoutValue = false,
        includeMeasurementText = false,
        perPage = 50,
        page = 1,
    }: {
        /**
         * Plant the tag-prefix belongs to
         */
        plantId: string,
        /**
         * Deprecated parameter that is ignored but accepted. Has no effect.
         * @deprecated
         */
        filter?: 'by-plant',
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
         * Search based on characteristic values. Must be used in combination with `class-id` and `characteristic-id`. Wildcards are not supported. Make sure to encode the parameters if they contain special characters.
         */
        characteristicValueAnyOf?: string,
        /**
         * Required field if `characteristic-value-any-of` is supplied. Endpoint [/characteristics/{class-id}](#operation/LookupClass) can be used to find characteristic ids.
         */
        characteristicId?: string | null,
        /**
         * Required field if `characteristic-value-any-of` is supplied.
         */
        classId?: string | null,
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
         * Include measurement text in the response
         */
        includeMeasurementText?: boolean,
        /**
         * Results to return pr page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
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
                'characteristic-value-any-of': characteristicValueAnyOf,
                'characteristic-id': characteristicId,
                'class-id': classId,
                'include-last-measurement': includeLastMeasurement,
                'include-measurements': includeMeasurements,
                'include-qualitative-code-group': includeQualitativeCodeGroup,
                'include-characteristics': includeCharacteristics,
                'include-characteristics-without-value': includeCharacteristicsWithoutValue,
                'include-measurement-text': includeMeasurementText,
                'per-page': perPage,
                'page': page,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Revisions - Search
     * ### Overview
     * Search revisions for a single plant with related information.
     *
     * Parameters:
     * - `plant-id` (required)
     * - `revision-id-any-of` (required): Comma-separated list of revision-ids to search for.
     * - include-work-order-operations (default: false)
     * - include-work-order-operation-text (default: false)
     * - include-only-work-order-operations-with-materials (default: false)
     *
     * ### Examples
     * `/plants/1310/revisions?revision-id-any-of=OFP,OFP%202022,&include-work-order-operations=true&include-only-work-order-operations-with-materials=true&include-work-order-operation-text=true&api-version=v1`
     *
     * ### Update release 1.19.0
     * Added parameter `include-text-item-materials`.
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * ### Update release 1.32.0
     * Added `include-cost-data-for-materials` query parameter.
     * When this parameter is set to `true`, the following properties will be included in `materials` expand: `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup`.
     *
     * ### Update release 1.33.0
     * Added new properties `goodsRecipientId`, `price`, `priceCurrency`, `unloadingPoint`, and `purchasingGroup` to `materials`.
     *
     * ### Update release 1.35.0
     * Added new properties `requisitionerId` and `deliveryComplete` to `materials` in `operations`.
     *
     * ### Update release 1.36.0
     * Added `superiorRoutingCounterId` to `operations`.
     *
     * ### Update release 1.38.0
     * Added property `text` to `materials` in `workOrderOperations`.
     *
     * ### Update release 1.39.0
     * Added new property `hasCommunication` to `materials` expand of `workOrderOperations`.
     *
     * ### Update release 1.40.0
     * Deprecated 'filter' query parameter. The endpoint will accept the parameter but ignore it.
     * Providing `plant-id` and `revision-id-any-of` is still required.
     *
     * ### Update release 1.42.0
     * Removed property `hasCommunication` from `materials` expand of `workOrderOperations`.
     *
     * ### Update release 1.43.0
     * Removed optional pagination parameters `page` and `per-page` as these were not implemented in the API.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns PlanningPlantRevision Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchRevisions({
        plantId,
        filter,
        revisionIdAnyOf,
        includeWorkOrderOperations = false,
        includeOnlyWorkOrderOperationsWithMaterials = false,
        includeTextItemMaterials = false,
        includeCostDataForMaterials = false,
    }: {
        plantId: string,
        /**
         * Deprecated parameter that is ignored but accepted. Has no effect.
         * @deprecated
         */
        filter?: 'by-revision-id',
        /**
         * Comma-separated string array of revision-ids to filter your result to one or more revisions. Wildcards are not supported.
         */
        revisionIdAnyOf?: string,
        /**
         * Include the work order operations
         */
        includeWorkOrderOperations?: boolean,
        /**
         * Limit the work order operations to only those which have material
         */
        includeOnlyWorkOrderOperationsWithMaterials?: boolean,
        /**
         * Include text item materials
         */
        includeTextItemMaterials?: boolean,
        /**
         * Include cost data for materials. Additional authorization will be required to retrieve these fields.
         */
        includeCostDataForMaterials?: boolean,
    }): CancelablePromise<Array<PlanningPlantRevision> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/revisions',
            path: {
                'plant-id': plantId,
            },
            query: {
                'filter': filter,
                'revision-id-any-of': revisionIdAnyOf,
                'include-work-order-operations': includeWorkOrderOperations,
                'include-only-work-order-operations-with-materials': includeOnlyWorkOrderOperationsWithMaterials,
                'include-text-item-materials': includeTextItemMaterials,
                'include-cost-data-for-materials': includeCostDataForMaterials,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Plants - Search
     * ### Overview
     * Search for plants, using one of the query parameters below to narrow down the results.
     * It is required to provide at least one of them in the request.
     *
     * Parameters:
     * - plant-id (supports comma-separated list)
     * - planning-plant-id (supports comma-separated list)
     *
     * ### Update release 1.13.0
     * Added `include-equipment-catalog-profiles` query parameter.
     *
     * ### Update release 1.17.0
     * Added the  `allowSimplifiedTimeAndProgress` flag to represent is the plant is valid for Non-CATS time recording.
     *
     * ### Update release 1.20.0
     * Added query parameter `include-baseline-plans` related to `OM104.01.06 - Prepare Work order plan` and `work-order-plan/`.
     *
     * ### Update release 1.34.0
     * Added `include-responsible-persons` to the response. Added `responsiblePersons` to the response.
     *
     * ### Update release 1.40.0
     * Deprecated 'filter' query parameter. The endpoint will accept the parameter but ignore it. Providing either `plant-id` or `planning-plant-id` is required.
     *
     * ### Update release 1.42.0
     * Added optional pagination support.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns Plant Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchPlant({
        filter,
        plantId,
        planningPlantId,
        includeLocations = false,
        includeWorkCenters = false,
        includePlannerGroups = false,
        includeTagCatalogProfiles = false,
        includeEquipmentCatalogProfiles = false,
        includeSurfaceDegradationFactors = false,
        includeBaselinePlans = false,
        includeResponsiblePersons = false,
        page,
        perPage,
    }: {
        /**
         * Deprecated parameter that is ignored but accepted. Has no effect.
         * @deprecated
         */
        filter?: 'by-plant' | 'by-planning-plant',
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Plant used to plan the maintenance work. Usually same as `plantId`, but there are some cases were one `planningPlantId` is used across multiple `plantId`.
         */
        planningPlantId?: string,
        /**
         * Include location for plant
         */
        includeLocations?: boolean,
        /**
         * Include work centers for plant
         */
        includeWorkCenters?: boolean,
        /**
         * Include planner groups for plant
         */
        includePlannerGroups?: boolean,
        /**
         * Include tag catalog profiles in use for plant
         */
        includeTagCatalogProfiles?: boolean,
        /**
         * Include equipment catalog profiles in use for plant
         */
        includeEquipmentCatalogProfiles?: boolean,
        /**
         * Include surface degradations for plant
         */
        includeSurfaceDegradationFactors?: boolean,
        /**
         * Include open baseline plans for the planning plant of this plant
         */
        includeBaselinePlans?: boolean,
        /**
         * Include persons that are already responsible for objects on this plant
         */
        includeResponsiblePersons?: boolean,
        /**
         * Page to fetch. If this optional parameter is used together with perPage, paging will be applied for the endpoint.
         */
        page?: number | null,
        /**
         * Results to return per page. If this optional parameter is used, paging will be applied for the endpoint.
         */
        perPage?: number | null,
    }): CancelablePromise<Array<Plant> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants',
            query: {
                'filter': filter,
                'plant-id': plantId,
                'planning-plant-id': planningPlantId,
                'include-locations': includeLocations,
                'include-work-centers': includeWorkCenters,
                'include-planner-groups': includePlannerGroups,
                'include-tag-catalog-profiles': includeTagCatalogProfiles,
                'include-equipment-catalog-profiles': includeEquipmentCatalogProfiles,
                'include-surface-degradation-factors': includeSurfaceDegradationFactors,
                'include-baseline-plans': includeBaselinePlans,
                'include-responsible-persons': includeResponsiblePersons,
                'page': page,
                'per-page': perPage,
            },
            errors: {
                400: `Request is missing required parameters`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Search characteristics
     * ### Overview
     * Search for characteristics by class type and class id.
     *
     * The class-type can be any of the following:
     * | class-type            |  Description                    |
     * |-----------------------|---------------------------------|
     * | 002                   |  Equipment                      |
     * | 003                   |  Tags                           |
     * | 015                   |  Notification Item              |
     * | 017                   |  Document                       |
     * | 037                   |  Measuring Point                |
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns CharacteristicForSearch Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchCharacteristics({
        filter,
        classType,
        characteristicIdsAnyOf,
        classTypeKeyPrefix,
        perPage = 100,
        page = 1,
    }: {
        filter: 'by-characteristic-ids-any-of',
        classType: '002' | '003' | '015' | '037',
        /**
         * Required if filter is `by-characteristic-id-any-of`
         *
         */
        characteristicIdsAnyOf?: string,
        /**
         * Pre-fix of the object key, if searching for class type "003" (Tags) this may be set to "1100" to fetch all
         * characteristics from Tags starting with 1100, which would mean all tags for this plant.
         *
         */
        classTypeKeyPrefix?: string,
        /**
         * Results to return per page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<CharacteristicForSearch> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/characteristics',
            query: {
                'filter': filter,
                'characteristic-ids-any-of': characteristicIdsAnyOf,
                'class-type-key-prefix': classTypeKeyPrefix,
                'class-type': classType,
                'per-page': perPage,
                'page': page,
            },
            errors: {
                400: `Request is missing required parameters`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Catalog Profiles - Search
     * ### Overview
     * Returns a list of Catalog Profiles for the given `catalog-profile-id`s. This endpoint allows for including the following multi-line `helpText` properties if `include-text=true` is set in the request:
     * - `failureModeHelpText` for `failureModes`
     * - `detectionMethodHelpText` for `detectionMethods`
     * - `failureMechanismHelpText` for `failureMechanisms`
     *
     * These are not included by default due to their detrimental effect on the performance of this endpoint.
     *
     * ### Update release 1.42.0
     * Added optional pagination support.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns any Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchCatalogProfiles({
        catalogProfileId,
        includeText = false,
        page,
        perPage,
    }: {
        /**
         * List of `catalog-profile-id`s to search for
         */
        catalogProfileId: string,
        /**
         * Include helpText properties for failureModes, detectionMethods and failureMechanisms in the response. Affects performance.
         */
        includeText?: boolean,
        /**
         * Page to fetch. If this optional parameter is used together with perPage, paging will be applied for the endpoint.
         */
        page?: number | null,
        /**
         * Results to return per page. If this optional parameter is used, paging will be applied for the endpoint.
         */
        perPage?: number | null,
    }): CancelablePromise<Array<(CatalogProfile | CatalogProfileWithText)> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/catalogs/profiles',
            query: {
                'catalog-profile-id': catalogProfileId,
                'include-text': includeText,
                'page': page,
                'per-page': perPage,
            },
            errors: {
                400: `The request was malformed or contained invalid parameters.`,
                404: `The specified resource was not found`,
            },
        });
    }

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
     * ### Update release 1.44.0
     * Added new query parameter `plant-id-any-of` to be able to filter on multiple plants.
     *
     * @returns WorkOrderInPlan Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getWorkOrderPlan({
        planningPlantId,
        plantIdAnyOf,
        workCenterIdAnyOf,
        mainWorkCenterIdAnyOf,
        revisionIdAnyOf,
        locationIdAnyOf,
        operationNotesAnyOf,
        filter,
        planPeriodStart,
        planPeriodDuration,
        personResponsibleEmail,
        personResponsibleId,
        includeCompletedWorkOrderOperations = false,
        includePersonResponsible = false,
        workOrderTypesAnyOf,
        statusAnyOf,
        statusNot,
    }: {
        /**
         * The planning plant id
         */
        planningPlantId: string,
        /**
         * Comma-separated string array of plant-ids to filter your result to one or more plants. Wildcards are not supported.
         */
        plantIdAnyOf?: string,
        /**
         * Comma-separated list of work-center-id
         */
        workCenterIdAnyOf?: string,
        /**
         * Comma-separated list of main work-center-id
         */
        mainWorkCenterIdAnyOf?: string,
        /**
         * Comma-separated string array of revision-ids to filter your result to one or more revisions. Wildcards are not supported.
         */
        revisionIdAnyOf?: string,
        /**
         * Comma-separated string array of location-ids to filter your result to one or more locations. Wildcards are not supported.
         */
        locationIdAnyOf?: string,
        /**
         * Query based on `planNotes` in operations
         */
        operationNotesAnyOf?: string,
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
         * Query based on statusIds (not all statuses are supported)
         */
        statusAnyOf?: Array<'STRT' | 'RDOP' | 'TECO' | 'REL' | 'CRTD'>,
        /**
         * Query based on statusIds (not all statuses are supported)
         */
        statusNot?: Array<'STRT' | 'RDOP' | 'TECO' | 'REL' | 'CRTD'>,
    }): CancelablePromise<Array<WorkOrderInPlan> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-order-plan/{planning-plant-id}',
            path: {
                'planning-plant-id': planningPlantId,
            },
            query: {
                'plant-id-any-of': plantIdAnyOf,
                'work-center-id-any-of': workCenterIdAnyOf,
                'main-work-center-id-any-of': mainWorkCenterIdAnyOf,
                'revision-id-any-of': revisionIdAnyOf,
                'location-id-any-of': locationIdAnyOf,
                'operation-notes-any-of': operationNotesAnyOf,
                'filter': filter,
                'plan-period-start': planPeriodStart,
                'plan-period-duration': planPeriodDuration,
                'person-responsible-email': personResponsibleEmail,
                'person-responsible-id': personResponsibleId,
                'include-completed-work-order-operations': includeCompletedWorkOrderOperations,
                'include-person-responsible': includePersonResponsible,
                'work-order-types-any-of': workOrderTypesAnyOf,
                'status-any-of': statusAnyOf,
                'status-not': statusNot,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights`,
            },
        });
    }

    /**
     * Tag - Search
     * Search tags for a plant based on the first few characters of the tag.
     *
     * The results include key information for a tag.
     * Additional information for each tag can be retrieved by using the endpoint `/plants/{plant-id}/tags/{tag-id}`.
     *
     * If there are no tags found for the search, the response will be HTTP 200 with an empty array as content.
     *
     * ### Important information
     *
     * The value of the tag-prefix parameter should be url-encoded in order to support special characters
     *
     * ### Examples
     * `/plants/1219/tags?tag-prefix=44&api-version=v1`
     *
     * `/plants/1100/tags?tag-prefix=02%22-EC-%202525-M&api-version=v1`
     *
     * ### Update 1.14.0
     * Added support for filter `by-tag-ids` with accompanying parameter `tag-ids-any-of`
     * Filter is not required and defaults to `by-tag-prefix` to keep backwards compatibility.
     *
     * Added options to include more data using the same data model as on `Tag - Lookup`, but all includes are defaulted
     * to false.
     *
     * `by-tag-prefix` filter now supports wildcards (`*`) in the tag prefix
     *
     * Edited the response structure to support pagination if filter `by-tag-prefix` is set. Use the parameters `page` and `per-page` in the parameters to edit wanted response.
     *
     * ### Update release 1.15.0
     * Added `include-linear-data` and `include-status-details` query parameters.
     *
     * Added properties `tagCategoryId`, `activeStatusIds`, `startUpDate` and `endOfUseDate`.
     *
     * ### Update release 1.16.0
     * Added property `classId` to characteristics
     *
     * ### Update release 1.18.0
     * Added new filter `by-external-system-reference`.
     * Added new property `semiModelId`.
     *
     * ### Update release 1.21.0
     * Added property `area`.
     *
     * ### Update release 1.24.0
     * Added query parameters `include-attachments` and `include-url-references`.
     * `urlReferences` and `attachments` now include the property `documentCreatedDate`
     *
     * Added property `cmrIndicator` for WorkOrders
     *
     * ### Update release 1.27.0
     * Work orders now include the property 'isOpen'
     *
     * ### Update release 1.28.0
     * `billOfMaterials` now include the property `parentMaterialId`
     *
     * Added `materialId` and `material` to the response
     *
     * ### Update release 1.32.0
     * Added `changedDateTime` for attachments.
     *
     * ### Update release 1.35.0
     * Added new fields `maintenancePlantId`, `createdOnDate` and `changedOnDate`.
     *
     * Added new filters for use in combination with the `by-tag-prefix` and `by-tag-ids` filters:
     * - `tag-category-id-any-of`
     * - `maintenance-concept-id-any-of`
     * - `created-before-date`
     * - `created-after-date`
     * - `changed-before-date`
     * - `changed-after-date`
     *
     * ### Update release 1.36.0
     * Added properties `costs` and `costsCurrency` to preventive work orders.
     *
     * Marked `cmrIndicator` as deprecated. See [Deprecation](#section/Deprecation) for more information.
     *
     * ### Update release 1.37.0
     * Removed deprecated property `cmrIndicator` from work orders. See STRY0261073 in ServiceNow for more details.
     *
     * ### Update release 1.39.0
     * Added new property `priorityId` to `preventiveWorkOrders`.
     *
     * ### Update release 1.40.0
     * Added properties `plannerGroup` and `plannerGroupId` to `failureReports`.
     *
     * ### Update release 1.41.0
     * Added property `priorityId` to `maintenancePlanItems`
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters such as `tag-ids-any-of`. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns TagSearch Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchTags({
        plantId,
        filter = 'by-tag-prefix',
        tagPrefix,
        tagIdsAnyOf,
        externalSystemReference,
        tagCategoryIdAnyOf,
        maintenanceConceptIdAnyOf,
        createdBeforeDate,
        createdAfterDate,
        changedBeforeDate,
        changedAfterDate,
        includeMaintenanceRecords = false,
        includeMaintenanceRecordTypes,
        includeWorkOrders = true,
        includeWorkOrderTypes,
        includeInstalledEquipment = false,
        includeCatalogProfileDetails = false,
        includeMaintenancePlanItems = false,
        includeMeasuringPoints = false,
        includeLastMeasurement = false,
        includeCharacteristics = false,
        includeBillOfMaterials = false,
        includeAttachments = false,
        includeUrlReferences = false,
        includeStatusDetails = false,
        includeLinearData = false,
        perPage = 100,
        page = 1,
    }: {
        /**
         * Plant to include tags from.
         */
        plantId: string,
        filter?: 'by-tag-ids' | 'by-tag-prefix' | 'by-external-system-reference' | null,
        /**
         * The first few characters of the tag, required if filter is empty or `by-tag-prefix`
         */
        tagPrefix?: string | null,
        /**
         * The tagIds as a comma separated list, required if filter is `by-tag-ids`. If a tagId contains a comma, escape it with a backslash (`\,`)
         */
        tagIdsAnyOf?: Array<string>,
        /**
         * Required if filter is `by-external-system-reference`
         */
        externalSystemReference?: string | null,
        /**
         * Optional comma separated string array of tag category ids to filter your result to one or more tag categories (`tagCategoryId`). Wildcards are not supported. May only be used in combination with the `by-tag-prefix` and `by-tag-ids` filters.
         */
        tagCategoryIdAnyOf?: Array<string> | null,
        /**
         * Optional comma separated string array of Maintenance Concept Ids (`maintenanceConceptId` in response model). Wildcards are not supported. May only be used in combination with the `by-tag-prefix` and `by-tag-ids` filters.
         */
        maintenanceConceptIdAnyOf?: Array<string>,
        /**
         * Latest `createdOnDate` date to include. Use together with `created-after-date` to get Tags created in the given time period.  May only be used in combination with the `by-tag-prefix` and `by-tag-ids` filters.
         */
        createdBeforeDate?: string | null,
        /**
         * Earliest `createdOnDate` date to include. Use together with `created-before-date` to get Tags created in the given time period.  May only be used in combination with the `by-tag-prefix` and `by-tag-ids` filters.
         */
        createdAfterDate?: string | null,
        /**
         * Latest `changedOnDate` date to include. Use together with `changed-after-date` to get Tags changed in the given time period.  May only be used in combination with the `by-tag-prefix` and `by-tag-ids` filters.
         */
        changedBeforeDate?: string | null,
        /**
         * Earliest `changedOnDate` date to include. Use together with `changed-before-date` to get Tags changed in the given time period.  May only be used in combination with the `by-tag-prefix` and `by-tag-ids` filters.
         */
        changedAfterDate?: string | null,
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all supported types are returned
         */
        includeMaintenanceRecords?: boolean,
        /**
         * Include which types of maintenance records
         */
        includeMaintenanceRecordTypes?: Array<'failure-report' | 'activity-report' | 'certification-report' | 'technical-information-update-request' | 'technical-clarification' | 'modification-proposal'>,
        /**
         * Include work orders. If include-work-order-types is not supplied, all supported types are returned.
         */
        includeWorkOrders?: boolean,
        /**
         * Include which types of work orders. Use comma-separated list of entries.
         */
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders' | 'overheadMaintenanceWorkOrders'>,
        /**
         * Include installed equipment
         */
        includeInstalledEquipment?: boolean,
        /**
         * Include possible detection methods, failure modes and failure mechanisms
         */
        includeCatalogProfileDetails?: boolean,
        /**
         * Include Maintenance Plan items this functional location is part of
         */
        includeMaintenancePlanItems?: boolean,
        /**
         * Include measuring points for this tag
         */
        includeMeasuringPoints?: boolean,
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true or if looking up measuring point)
         */
        includeLastMeasurement?: boolean,
        /**
         * Include tag characteristics such as 'Function Fail Consequence' and 'Safety Critical Element (SCE)'
         */
        includeCharacteristics?: boolean,
        /**
         * Include bill of materials (also known as structure list) for tag and installed equipment
         */
        includeBillOfMaterials?: boolean,
        /**
         * Include equipment or tag attachments
         */
        includeAttachments?: boolean,
        /**
         * Include URL references for object
         */
        includeUrlReferences?: boolean,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include linear data
         */
        includeLinearData?: boolean,
        /**
         * Results to return per page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<TagSearch> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/tags',
            path: {
                'plant-id': plantId,
            },
            query: {
                'filter': filter,
                'tag-prefix': tagPrefix,
                'tag-ids-any-of': tagIdsAnyOf,
                'external-system-reference': externalSystemReference,
                'tag-category-id-any-of': tagCategoryIdAnyOf,
                'maintenance-concept-id-any-of': maintenanceConceptIdAnyOf,
                'created-before-date': createdBeforeDate,
                'created-after-date': createdAfterDate,
                'changed-before-date': changedBeforeDate,
                'changed-after-date': changedAfterDate,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-maintenance-record-types': includeMaintenanceRecordTypes,
                'include-work-orders': includeWorkOrders,
                'include-work-order-types': includeWorkOrderTypes,
                'include-installed-equipment': includeInstalledEquipment,
                'include-catalog-profile-details': includeCatalogProfileDetails,
                'include-maintenance-plan-items': includeMaintenancePlanItems,
                'include-measuring-points': includeMeasuringPoints,
                'include-last-measurement': includeLastMeasurement,
                'include-characteristics': includeCharacteristics,
                'include-bill-of-materials': includeBillOfMaterials,
                'include-attachments': includeAttachments,
                'include-url-references': includeUrlReferences,
                'include-status-details': includeStatusDetails,
                'include-linear-data': includeLinearData,
                'per-page': perPage,
                'page': page,
            },
            errors: {
                400: `Request is missing required parameters`,
            },
        });
    }

    /**
     * Work orders - Search
     * ### Overview
     * Search for Work orders regardless of type through given search parameters.
     * All parameters are combinable with each other. It is recommended to limit results as much as possible by the use of these query parameters.
     * At least one search criteria or pagination parameter must be supplied.
     *
     * ### Response
     * The response can include most of the details for each work order.
     * If additional data is needed, it can be retrieved by using the endpoint represented in the `_links.self` property.
     *
     * ### Parameters
     *
     * - `change-log-changed-since-datetime`
     * Find Work orders based on the earliest datetime the Changelog of a workorder was changed.
     * This is more reliable than filtering on the value of the `changed-since-datetime` parameter of the work order, as this value is not always updated when the work order is changed.
     *
     * - `changed-since-datetime`
     * Find Work orders which have been recently changed (created or updated) for a given plant. Normally, clients will provide the parameters `changed-since-datetime` and `plant-id`
     * to return any changed Work order from `changed-since-datetime` to now.
     * It is also possible to add `before-datetime` query parameter - the endpoint will then return any work order changed between `changed-since-datetime` and `before-datetime`.
     *
     * - `basic-end-date`
     * Find open Work orders before the `basic-end-date`. `basic-end-date` should be a date in the future so that already finished work orders will not be presented.
     *
     * - `external-partner-id`
     * Find Work orders for a 'work-order-id' in an external partner system. Note: In theory, different external systems could have the same `external-partner-id` but this is very unlikely.
     * Clients are recommended to filter the response based on the plants they are interested in to avoid any issues.
     *
     * - `cost-network-id`
     * Find Work orders based on Cost Network Id.
     *
     * - `cost-wbs-id`
     * Find Work orders based on Cost WBS Id.
     *
     * - `work-center-id-any-of`
     * Find Work orders based on their `workCenterId`.
     *
     * - `work-order-ids-any-of`
     * Find Work orders based on their `workOrderId`.
     *
     * - `revision-id-any-of`
     * Find Work orders based on their `revisionId`.
     *
     * ### Update release 0.11.0
     * Work order operation actualPercentageComplete now represents progress reported through technical feedback.
     * If the Work order operation is completed, the value of actualPercentageComplete will always be 100.
     *
     * Filter by-external-partner-work-order-id added.
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
     * ### Update release 1.40.0
     * The `filter` property is deprecated. It is still accepted but will not affect the query.
     * Added new properties `changeLogChangedDateTime` and `companyCode` to work order objects in the response.
     *
     * Deprecated the pagination functionality.
     *
     * ### Update release 1.41.0
     * Added field `dueDate` to preventive work orders.
     *
     * ### Update release 1.42.0
     * Added `revision-id-any-of` query parameter to allow for filtering Work Orders by their `revisionId`. Can be used in combination with other query parameters.
     * Added `superiorOperation` to `operations` response.
     *
     * ### Update release 1.43.0
     * Added new property `isDeleted` to `operations`.
     * Added query parameter `include-deleted-operations` to include deleted operations in the response. Default is `false`.
     * Removed pagination information.
     *
     * ### Update release 1.44.0
     * Added new parameter `change-log-changed-before-datetime`.
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
        changeLogChangedSinceDatetime,
        changeLogChangedBeforeDatetime,
        includeWorkOrderText,
        includeWorkOrderOperationText,
        includeWorkOrderTypes,
        includeOperations = true,
        includeDeletedOperations = false,
        basicEndDate,
        locationId,
        externalPartnerWorkOrderId,
        costWbsId,
        costNetworkId,
        workCenterIdAnyOf,
        workOrderIdsAnyOf,
        revisionIdAnyOf,
        perPage,
        page = 1,
    }: {
        /**
         * Filter to limit the work order by
         * @deprecated
         */
        filter?: 'recently-changed' | 'before-basic-end-date' | 'by-external-partner-work-order-id' | 'by-cost-network' | 'by-cost-wbs' | 'by-work-center-id' | 'by-work-order-id',
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Earliest datetime to return changed work orders for
         */
        changedSinceDatetime?: string,
        /**
         * Optional parameter to limit the response to only work orders changed after `changed-since-datetime` but before this datetime
         *
         */
        beforeDatetime?: string,
        /**
         * Return Work Orders that have had their changelog changed since the given datetime, at the earliest.
         * This filter operates on the property `changeLogChangedDateTime`. Required for filter `by-change-log-changed-date`.
         *
         */
        changeLogChangedSinceDatetime?: string,
        /**
         * Return Work Orders that have had their changelog changed before the given datetime, at the latest.
         * This filter operates on the property `changeLogChangedDateTime`. The parameter `change-log-changed-since-datetime` is required if this parameter is used, to protect system performance.
         *
         */
        changeLogChangedBeforeDatetime?: string,
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
         * Include Work order operations
         */
        includeOperations?: boolean,
        /**
         * Include deleted `operations` or `service-operations`
         */
        includeDeletedOperations?: boolean,
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
         * Filter by Cost WBS Id
         */
        costWbsId?: string,
        /**
         * Filter by Cost network Id
         */
        costNetworkId?: string,
        /**
         * Comma-separated list of work-center-id
         */
        workCenterIdAnyOf?: string,
        /**
         * Comma-separated list of `work-order-id`.
         */
        workOrderIdsAnyOf?: string,
        /**
         * Comma-separated string array of revision-ids to filter your result to one or more revisions. Wildcards are not supported.
         */
        revisionIdAnyOf?: string,
        /**
         * Results to return pr page
         * @deprecated
         */
        perPage?: number,
        /**
         * Page to fetch
         * @deprecated
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
                'change-log-changed-since-datetime': changeLogChangedSinceDatetime,
                'change-log-changed-before-datetime': changeLogChangedBeforeDatetime,
                'include-work-order-text': includeWorkOrderText,
                'include-work-order-operation-text': includeWorkOrderOperationText,
                'include-work-order-types': includeWorkOrderTypes,
                'include-operations': includeOperations,
                'include-deleted-operations': includeDeletedOperations,
                'basic-end-date': basicEndDate,
                'location-id': locationId,
                'external-partner-work-order-id': externalPartnerWorkOrderId,
                'cost-wbs-id': costWbsId,
                'cost-network-id': costNetworkId,
                'work-center-id-any-of': workCenterIdAnyOf,
                'work-order-ids-any-of': workOrderIdsAnyOf,
                'revision-id-any-of': revisionIdAnyOf,
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
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
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
     * ### Update release 1.40.0
     * Added properties `plannerGroup` and `plannerGroupId` to `failureReports`.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters such as `tags-all-of`, `tags-any-of`, and `tags-not`. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
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
         * Query based on tagIds. Expressions with wildcards can be used for example `1A*-6A`. Ensure the tagIds are url-encoded in order to handle special characters. If a tagId contains a comma, escape it with a backslash (`\,`)
         */
        tagsAllOf?: Array<string>,
        /**
         * Query based on tagIds. Expressions with wildcards can be used for example `1A*-6A`. Ensure the tagIds are url-encoded in order to handle special characters. If a tagId contains a comma, escape it with a backslash (`\,`)
         */
        tagsAnyOf?: Array<string>,
        /**
         * Query based on tagIds. Expressions with wildcards can be used for example `AE55*`. Ensure the tagIds are url-encoded in order to handle special characters. If a tagId contains a comma, escape it with a backslash (`\,`)
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
     * - `page` and `per-page`
     *
     * ### Update release 1.40.0
     * Added new property `companyCode` to Work order objects in the response
     *
     * ### Update release 1.42.0
     * Added `superiorOperation` to response.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
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
         * Comma-separated list of work-center-id
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
     * Work orders change log - Search
     * ### Overview
     * Search for records in the Work order Changelog where there have been recent changes to specific tracked properties like `basicStartDateTime` or `basicEndDateTime`.
     *
     * **Important:**
     * This endpoint requires Change Log to be activated for the plant. The response contains a list of change events to work orders, not a list of work orders changed - the same work order may appear multiple times if it has had multiple changes to the property selected with query param `property-name`.
     * Consumers can use `changeDateTime` to identify the last change.
     *
     * ### Parameters
     * - `plant-id` (required) - The plant to search for changes in work orders
     * - `property-name` (required) - Supports using one of `basicStartDateTime` or `basicEndDateTime`
     * - `changed-since-datetime`(required) - Earliest datetime to return changed work orders for
     *
     * `include-work-order-types` is an optional parameter to define which work orders to return changes for.
     *
     * ### Response
     * The response contains only minimum information about the change made to the work orders.
     * For more information about each individual work order, use the lookup endpoint referenced in `_links.related`.
     *
     * ### Update release 1.37.0
     * Added `overheadMaintenanceWorkOrders` to include-work-order-types filter in Parameters and `overheadMaintenanceWorkOrdersChanged` to response.
     *
     * ### Update release 1.41.0
     * Deprecated 'filter' query parameter. The endpoint will accept the parameter but ignore it. Providing `plant-id`, `property-name` and `changed-since-datetime` is required as before.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns WorkOrderChangeLogs Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchWorkOrderChangeLog({
        plantId,
        changedSinceDatetime,
        propertyName,
        filter,
        includeWorkOrderTypes,
    }: {
        /**
         * Plant identifier
         */
        plantId: string,
        /**
         * Earliest datetime to return changed work orders for
         */
        changedSinceDatetime: string,
        /**
         * The property which was recently changed
         */
        propertyName: 'basicStartDateTime' | 'basicEndDateTime',
        /**
         * Deprecated parameter that is ignored but accepted. Has no effect.
         * @deprecated
         */
        filter?: 'recently-changed-property',
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

    /**
     * Failure report - Search
     * ### Overview
     * Search for Failure reports with a set of given search criteria.
     *
     * ### Response
     * The response does not include status details for each failure report.
     * This can be found by performing a subsequent request to Lookup failure-reports.
     *
     * ### Query parameters
     * Use as many parameters as possible to get the result that is needed. At least one query parameter must be used, or paging parameters.
     * See below for more descriptions on each query parameter.
     * When `status-id` is supplied, `plant-id` must also be supplied. `status-id` is not compatible with paging, but will instead be limited by the  `max-days-since-activation` parameter.
     *
     * - status-id (dependent on plant-id)
     * - plant-id
     * - planning-plant-id
     * - max-days-since-activation
     * - work-center-ids
     * - location-id
     * - system-id
     * - is-open
     * - page
     * - per-page
     *
     * ### Update release 1.1.0
     * Added open-by-plant filter and properties systemId and locationId.
     *
     * ### Update release 1.8.0
     * Added properties hasUnsafeFailureMode and unsafeFailureModeStatus.
     *
     * ### Update release 1.16.0
     * Added property `work-center-ids` to filters `recent-status-activations` and `open-by-plant`
     *
     * Added property `workCenterId`
     *
     * ### Update release 1.35.0
     * Added `workOrderTypeId` and `workOrderId` to the response. `workOrderId` includes the id of work orders, not constrained to only showing corrective work orders.
     * `correctiveWorkOrderId` has been corrected to only show the work order id if it is a corrective work order.
     *
     * ### Update release 1.37.0
     * Added support for new work order type `overheadMaintenanceWorkOrders` to `workOrderTypeId` enum of allowed types.
     *
     * ### Update release 1.40.0
     * Deprecated the `filter` parameter. It is still accepted but will not affect the query.
     *
     * Added the query parameter `planning-plant-id`.
     *
     * Added properties `planningPlantId`, `plannerGroup` and `plannerGroupId` to response.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns FailureReportSimpleForSearch Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchFailureReports({
        filter,
        statusId,
        plantId,
        planningPlantId,
        locationId,
        systemId,
        maxDaysSinceActivation,
        workCenterIds,
        includeOnlyOpen = true,
        page,
        perPage,
    }: {
        /**
         * Accepted query parameter but has no effect
         * @deprecated
         */
        filter?: 'recent-status-activations' | 'open-by-plant',
        /**
         * Filter by an active status id on the failure reports
         */
        statusId?: string,
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Search by which planning plant is set on the failure report
         */
        planningPlantId?: string,
        /**
         * Structured location within the plant. Use /plants/{plant-id}/locations for possible values
         */
        locationId?: string,
        /**
         * System id to filter by
         */
        systemId?: string,
        /**
         * Define how many days from the current day to include results for. 0 if only include for today
         */
        maxDaysSinceActivation?: number,
        /**
         * Comma separated list of work center ids to filter by
         */
        workCenterIds?: Array<string>,
        /**
         * Parameter to control if only to inlude only open failure reports. Defaults to true to not break backward compatibility with the deprecated filter, but does not affect the status-id parameter.
         */
        includeOnlyOpen?: boolean,
        /**
         * Page to fetch. If this optional parameter is used together with perPage, paging will be applied for the endpoint.
         */
        page?: number | null,
        /**
         * Results to return per page. If this optional parameter is used, paging will be applied for the endpoint.
         */
        perPage?: number | null,
    }): CancelablePromise<Array<FailureReportSimpleForSearch> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/failure-reports',
            query: {
                'filter': filter,
                'status-id': statusId,
                'plant-id': plantId,
                'planning-plant-id': planningPlantId,
                'location-id': locationId,
                'system-id': systemId,
                'max-days-since-activation': maxDaysSinceActivation,
                'work-center-ids': workCenterIds,
                'include-only-open': includeOnlyOpen,
                'page': page,
                'per-page': perPage,
            },
        });
    }

    /**
     * Text templates - Search
     * ### Overview
     * Get one or more text templates to be used in maintenance records, work orders or maintenance program.
     *
     * There is an allowlist for which templates are available through this endpoint and it includes:
     * - Failure report templates: Pattern `<plant>-M2-<X>` such as `1100-M2` and `1100-M2-X`
     * - Failure report task templates: `M2_TASK_EXTR`, `M2_TASK_TICO` and `M2_TASK_TICO_ENG`
     *
     * The text of the template follows the advanced formatting as described in [Resource text](#section/Modelling-of-resources/Resource-text).
     *
     * ### Update release 1.32.0
     *
     * Added support for the following templates:
     * - `M1_SIMPLIFIED_SAS`
     * - `M1_ENKEL_SAS`
     * - `M5N`
     * - `M1N`
     *
     * ### Update release 1.42.0
     * Added optional pagination support.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns TextTemplate Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchTextTemplates({
        templateNameAnyOf = 'M2_Task,-M2-X',
        page,
        perPage,
    }: {
        /**
         * Comma-separated list of text templates to return
         */
        templateNameAnyOf?: string,
        /**
         * Page to fetch. If this optional parameter is used together with perPage, paging will be applied for the endpoint.
         */
        page?: number | null,
        /**
         * Results to return per page. If this optional parameter is used, paging will be applied for the endpoint.
         */
        perPage?: number | null,
    }): CancelablePromise<Array<TextTemplate> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/text-templates',
            query: {
                'template-name-any-of': templateNameAnyOf,
                'page': page,
                'per-page': perPage,
            },
        });
    }

    /**
     * Report for EqHub and SEMI usage - Get
     * ### Overview
     *
     * Get the list of EqHub and SEMI usage. T-code in backend system `ZOMPM_SEMI_USAGE`.
     *
     * ### Update release 1.38.0
     * Added filter `changed-since-date` and `changed-before-date`.
     *
     * ### Update release 1.44.0
     * Added support for escaping commas in comma-separated query parameters. Use a backslash before the comma (`\,`) to include a literal comma in a value. See [Comma-separated query parameters](#section/Comma-separated-query-parameters) for more details.
     *
     * @returns EqHubAndSemiUsage Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getEqHubAndSemiUsage({
        eqhubIdAnyOf,
        semiIdAnyOf,
        filter,
        includeStatus = false,
        changedSinceDate,
        changedBeforeDate,
        perPage = 100,
        page = 1,
    }: {
        /**
         * Comma-separated List of eqhub id's
         */
        eqhubIdAnyOf?: string,
        /**
         * Comma-separated List of SEMI id's
         */
        semiIdAnyOf?: string,
        /**
         * Filter between eqhub or SEMI
         */
        filter?: 'eqhub' | 'SEMI',
        /**
         * Include status in response
         */
        includeStatus?: boolean,
        /**
         * Earliest date to return EqHub and SEMI usage for.
         */
        changedSinceDate?: string,
        /**
         * Latest date to return EqHub and SEMI usage for.
         */
        changedBeforeDate?: string,
        /**
         * Results to return per page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<EqHubAndSemiUsage> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/reports/eqhub-and-semi-usage',
            query: {
                'eqhub-id-any-of': eqhubIdAnyOf,
                'SEMI-id-any-of': semiIdAnyOf,
                'filter': filter,
                'include-status': includeStatus,
                'changed-since-date': changedSinceDate,
                'changed-before-date': changedBeforeDate,
                'per-page': perPage,
                'page': page,
            },
            errors: {
                403: `User does not have sufficient rights to use T-code ZOMPM_SEMI_USAGE`,
            },
        });
    }

}
