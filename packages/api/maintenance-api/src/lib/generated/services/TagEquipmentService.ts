/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Equipment } from '../models/Equipment';
import type { EquipmentAddClass } from '../models/EquipmentAddClass';
import type { EquipmentBasicV2 } from '../models/EquipmentBasicV2';
import type { EquipmentChangeLogs } from '../models/EquipmentChangeLogs';
import type { EquipmentCreate } from '../models/EquipmentCreate';
import type { EquipmentJsonPatch } from '../models/EquipmentJsonPatch';
import type { EquipmentListItem } from '../models/EquipmentListItem';
import type { EquipmentSearchItem } from '../models/EquipmentSearchItem';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { Tag } from '../models/Tag';
import type { TagBasic } from '../models/TagBasic';
import type { TagHierachyItem } from '../models/TagHierachyItem';
import type { TagHierachyItemDeprecated } from '../models/TagHierachyItemDeprecated';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TagEquipmentService {

    /**
     * Tag - Lookup
     * ### Overview
     * Lookup a single tag with related information
     *
     * ### Important information
     * Properties areaId and area are deprecated as of 01.2021 in order to align with naming across Equinor system. Use locationId and location instead.
     *
     * ### Update release v0.9.0
     * Added `include-measuring-points` and `include-last-measurement` query parameters.
     *
     * ### Update release v1.1.0
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
     * ### Update release v1.3.0
     * Added `workCenterId`, `workCenterPlantId`, `workCenter`, `planningPlantId`,`plannerGroupId` and `plannerGroup` properties.
     *
     * Added `include-bill-of-materials` query parameter.
     *
     * ### Update release v1.5.0
     * Added `revisionId` and `revision` to related work orders (represents shutdown or campaign work).
     *
     * ### Update release v1.8.0
     * Added properties `hasUnsafeFailureMode` and `unsafeFailureModeStatus` for failure reports.
     *
     * ### Update release v1.10.0
     * Added property `maintenanceRecordId` to measurements of measuring points.
     *
     * ### Update release v1.11.0
     * Added property `costWBSId`.
     *
     * @param plantId
     * @param tagId
     * @param includeMaintenanceRecords Include maintenance records. If include-maintenance-record-types is not supplied, all support types are returned
     * @param includeMaintenanceRecordTypes Include which types of maintenance records
     * @param includeWorkOrders Include work orders. If include-work-order-types is not supplied, all support types are returned
     * @param includeWorkOrderTypes Include which types of work orders. Use comma-separated list of entries.
     * @param includeInstalledEquipment Include installed equipment
     * @param includeCatalogProfileDetails Include possible detection methods, failure modes and failure mechanisms
     * @param includeCharacteristics Include tag characteristics such as 'Function Fail Consequence' and 'Safety Critical Element (SCE)'
     * @param includeMaintenancePlanItems Include Maintenance Plan items this functional location is part of
     * @param includeMeasuringPoints Include measuring points for this tag
     * @param includeLastMeasurement Include last measurement for the measuring points (only relevant if include-measuring-points is true)
     * @param includeBillOfMaterials Include bill of materials (also known as structure list) for tag and installed equipment
     * @returns Tag Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupTag(
        plantId: string,
        tagId: string,
        includeMaintenanceRecords: boolean = true,
        includeMaintenanceRecordTypes?: Array<'failure-report' | 'activity-report' | 'certification-report' | 'technical-information-update-request' | 'technical-clarification'>,
        includeWorkOrders: boolean = true,
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders'>,
        includeInstalledEquipment: boolean = false,
        includeCatalogProfileDetails: boolean = false,
        includeCharacteristics: boolean = false,
        includeMaintenancePlanItems: boolean = false,
        includeMeasuringPoints: boolean = false,
        includeLastMeasurement: boolean = false,
        includeBillOfMaterials: boolean = false,
    ): CancelablePromise<Tag | ProblemDetails> {
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
                'include-characteristics': includeCharacteristics,
                'include-maintenance-plan-items': includeMaintenancePlanItems,
                'include-measuring-points': includeMeasuringPoints,
                'include-last-measurement': includeLastMeasurement,
                'include-bill-of-materials': includeBillOfMaterials,
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
     * ### Update release v0.9.0
     * Added filter-by-root-tags filter.
     *
     * ### Important information
     * Endpoint is deprecated as of 11.2022 in order to improve consistency in API.
     * Use `/plants/{plant-id}/tag-hierarchy` instead.
     *
     * @param plantId
     * @param filter Filter to limit the tag hierachy by
     * @param rootTags Comma-separated list of tags (without tagPlantId prefix)
     * @returns TagHierachyItemDeprecated Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getTagHierachy(
        plantId: string,
        filter?: 'filter-by-root-tags',
        rootTags?: string,
    ): CancelablePromise<Array<TagHierachyItemDeprecated> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/tag-hierachy',
            path: {
                'plant-id': plantId,
            },
            query: {
                'filter': filter,
                'root-tags': rootTags,
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
     * ### Filter: by-root-tags
     * Limits the response to the sub-trees defined by the provided root tags.
     * Parameters:
     * - root-tag-id-any-of
     *
     * ### Important information
     * This returns a significant amount of data as it returns all tags for a plant (which may be up to 250 000).
     *
     * The data will be cached in the API and renewed on a daily basis.
     *
     * @param plantId
     * @param filter Filter to limit the tag hierachy by
     * @param rootTagIdAnyOf Comma-separated list of tags (without tagPlantId prefix)
     * @returns TagHierachyItem Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getTagHierarchy(
        plantId: string,
        filter?: 'by-root-tags',
        rootTagIdAnyOf?: string,
    ): CancelablePromise<Array<TagHierachyItem> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/tag-hierarchy',
            path: {
                'plant-id': plantId,
            },
            query: {
                'filter': filter,
                'root-tag-id-any-of': rootTagIdAnyOf,
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
     * @param plantId
     * @param filter Filter to limit the equipment list by
     * @param equipmentCategoryIdAnyOf Comma-separated list of equipment categories. `G` = Tank Customer equipment, `M` = Machines/Equipment, `P` = Production resources/tools, `Q` = Test/measurement equipment, `R` = Process Equipment, `S` = Customer equipment, `T` = IT Equipment, `U` = Subsea Equipment, `W` = Wind Operation Certified Equip, `Y` = Tool Crib
     * @returns EquipmentListItem Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getEquipmentList(
        plantId: string,
        filter?: 'filter-by-equipment-category',
        equipmentCategoryIdAnyOf?: string,
    ): CancelablePromise<Array<EquipmentListItem> | ProblemDetails> {
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
     * `/equipment/11948620?include-maintenance-records=true&include-maintenance-record-types=failure-report&include-only-open-maintenance-records=true&include-work-orders=true&include-work-order-types=preventiveWorkOrders,subseaWorkOrders&include-only-open-work-orders=true&include-characteritics=true&include-status-details=true&api-version=v1` - Lookup equipment with status details and characteristics. Include open failure reports where the equipment is used as main reference. Include open subsea work orders and open preventive work orders where the equipment is either a material component or the main reference (`equipmentId` at work order header level).
     *
     * ### Update release v1.4.0
     * `include-work-orders` now include work orders where the `equipmentId` is the main reference (`equipmentId` at work order header level).
     *
     * ### Update release v1.5.0
     * Fixed known limitation for `include-work-orders` and `include-only-open-work-orders=false`.
     *
     * Bugfix for include-work-orders related to deleted equipment reservations.
     *
     * Added revisionId and revision to related work orders (represents shutdown or campaign work).
     *
     * ### Update release v1.6.0
     * For `include-work-orders`, add information on the relationship between the equipment and the work order (for example the id of the reservation)
     *
     * ### Update release v1.7.0
     * Added property parentEquipmentId.
     *
     * ### Update release v1.8.0
     * Added properties hasUnsafeFailureMode and unsafeFailureModeStatus for failure reports.
     *
     * ### Update release v1.10.0
     * Added property `maintenanceRecordId` to measurements of measuring points.
     *
     * ### Update release v1.12.0
     * Added properties `equipmentCategoryId` and `quantityUnitId`.
     *
     * @param equipmentId The unique equipmentId in Equinor's system
     * @param includeMaintenanceRecords Include maintenance records. If include-maintenance-record-types is not supplied, all support types are returned
     * @param includeMaintenanceRecordTypes Include which types of maintenance records
     * @param includeOnlyOpenMaintenanceRecords Limit include-maintenance-records to only open maintenance records
     * @param includeWorkOrders Include work orders. If include-work-order-types is not supplied, all support types are returned
     * @param includeWorkOrderTypes Include which types of work orders. Use comma-separated list of entries.
     * @param includeOnlyOpenWorkOrders Limit include-work-orders to only open work order
     * @param includeCatalogProfileDetails Include possible detection methods, failure modes and failure mechanisms
     * @param includeCharacteristics Include equipment characteristics such as 'Kontrollkort gyldig til' and 'Equipment group'
     * @param includeMeasuringPoints Include measuring points for this equipment
     * @param includeLastMeasurement Include last measurement for the measuring points (only relevant if include-measuring-points is true)
     * @param includeStatusDetails Include detailed information for statuses (both active and non-active)
     * @returns Equipment Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupEquipment(
        equipmentId: string,
        includeMaintenanceRecords: boolean = true,
        includeMaintenanceRecordTypes?: Array<'modification-proposal' | 'failure-report' | 'activity-report' | 'certification-report' | 'technical-information-update-request' | 'technical-clarification'>,
        includeOnlyOpenMaintenanceRecords: boolean = false,
        includeWorkOrders: boolean = true,
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders'>,
        includeOnlyOpenWorkOrders: boolean = false,
        includeCatalogProfileDetails: boolean = false,
        includeCharacteristics: boolean = false,
        includeMeasuringPoints: boolean = false,
        includeLastMeasurement: boolean = false,
        includeStatusDetails: boolean = false,
    ): CancelablePromise<Equipment | ProblemDetails> {
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
                'include-measuring-points': includeMeasuringPoints,
                'include-last-measurement': includeLastMeasurement,
                'include-status-details': includeStatusDetails,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Equipment - Update
     * ### Overview
     * Update a single equipment
     *
     * Supports:
     * - Update `warrantyStartDate` and `warrantyEndDate`
     *
     * @param equipmentId
     * @param requestBody The information to be updated
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateEquipment(
        equipmentId: string,
        requestBody: Array<EquipmentJsonPatch>,
    ): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/equipment/{equipment-id}',
            path: {
                'equipment-id': equipmentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update equipment`,
                404: `The specified resource was not found`,
                409: `Equipment is locked by other user`,
            },
        });
    }

    /**
     * Equipment - Add characteristics
     * Add characteristics to equipment.
     *
     * Characteristics are grouped into a class such as `R_PIPE_DETAILS`.
     * Classes can be assigned to an equipment and specific characteristics such as `R_DIAMETER_MM` will then be available for that specific equipment.
     *
     * With this endpoint, the consumer can assign classes to an equipment and define initial values for some of the characteristics in the classes.
     *
     * There is currently no endpoint for looking up existing classes and their characteristics, but this may be added in the future.
     *
     * ### Important information
     * Use `/equipment/{equipment-id}?include-characteristics=true&api-version=v1` to view characteristics with value after using this endpoint.
     *
     * @param equipmentId The unique equipmentId in Equinor's system
     * @param requestBody Characteristics to add to equipment.
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static addCharacteristicsToEquipment(
        equipmentId: string,
        requestBody: Array<EquipmentAddClass>,
    ): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/equipment/{equipment-id}/characteristics',
            path: {
                'equipment-id': equipmentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
            errors: {
                400: `Request is missing required parameters or characteristicId is not part of class`,
                403: `User does not have sufficient rights to add characteristics to equipment`,
            },
        });
    }

    /**
     * Equipment - Create
     * ### Overview
     * Create equipment and possibly install at tag.
     *
     * ### Important information
     * In the current version of the endpoint, it's only possible to create equipment with equipmentCategoryId `R` = Process Equipment.
     *
     * If the request includes `installedAtTag`, the equipment will inherit properties such as `planningPlantId`, `plannerGroupId`, `workCenterId`, `ABCId`, `systemId` and `locationId`from the tag.
     *
     * Access to the role `YO059 - Static Process Equipment Data Establisher (SAPP03)` is required.
     *
     * @param requestBody Equipment to create
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns EquipmentBasicV2 Created
     * @throws ApiError
     */
    public static createEquipment(
        requestBody: EquipmentCreate,
    ): CancelablePromise<ProblemDetails | EquipmentBasicV2> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/equipment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request, for example if missing required properties, \`equipmentCategoryId\` is not \`R\` or if \`installedAtTag\` is invalid or is not in service.`,
                403: `User does not have sufficient rights to create an equipment.`,
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
     *
     * These parameters allow a comma-separated list of entries.
     *
     * If more than one of these parameters are supplied in the same request, the equipment in the response will need to fulfill all parameters (ie. operator AND is used between the parameter).
     *
     * Query parameters `include-only-open-maintenance-records` and `include-only-open-work-orders` have a recommended value of `true` in order to improve performance (default value `false`).
     *
     * ### Important information
     * For warehouse and logistics data of an equipment, use SCM Logistics API.
     *
     * ### Example usage
     * `/equipment?serial-number-any-of=4500695422-20-003,4500695422-20-004&include-maintenance-records=true&include-maintenance-record-types=failure-report&include-only-open-maintenance-records=true&include-work-orders=true&include-work-order-types=preventiveWorkOrders,subseaWorkOrders&include-only-open-work-orders=true&include-characteristics=true&api-version=v1` - Search equipment based on serialNumber with characteritics. Include open failure reports where the equipment is used as main reference. Include open subsea work orders and open preventive work orders where the equipment is either a material component or the main reference (`equipmentId` at work order header level).
     *
     * ### Update release v1.4.0
     * `include-work-orders` now include work orders where the `equipmentId` is the main reference (`equipmentId` at work order header level).
     *
     * ### Update release v1.5.0
     * Fixed known limitation for `include-work-orders` and `include-only-open-work-orders=false`.
     *
     * Bugfix for include-work-orders related to deleted equipment reservations.
     *
     * Added revisionId and revision to related work orders (represents shutdown or campaign work).
     *
     * ### Update release v1.6.0
     * For `include-work-orders`, add information on the relationship between the equipment and the work order (for example the id of the reservation)
     *
     * ### Update release v1.7.0
     * Added property parentEquipmentId.
     *
     * ### Update release v1.8.0
     * Added properties hasUnsafeFailureMode and unsafeFailureModeStatus for failure reports.
     *
     * ### Update release v1.12.0
     * Added property `quantityUnitId`
     *
     * @param equipmentIdAnyOf Search based on equipmentIds. Wildcards are supported
     * @param serialNumberAnyOf Search based on serialNumber. Wildcards are supported
     * @param vendorPartNumberAnyOf Search based on partNumber. Wildcards are supported
     * @param materialIdAnyOf Search based on materialId. Wildcards are supported
     * @param includeMaintenanceRecords Include maintenance records. If include-maintenance-record-types is not supplied, all support types are returned
     * @param includeMaintenanceRecordTypes Include which types of maintenance records
     * @param includeOnlyOpenMaintenanceRecords Limit include-maintenance-records to only open maintenance records. Recommend using `true` in order to improve performance.
     * @param includeWorkOrders Include work orders. If include-work-order-types is not supplied, all support types are returned
     * @param includeWorkOrderTypes Include which types of work orders. Use comma-separated list of entries.
     * @param includeOnlyOpenWorkOrders Limit include-work-orders to only open work order. Recommend using `true` in order to improve performance.
     * @param includeCharacteristics Include tag characteristics such as 'Kontrollkort gyldig til' and 'Equipment group'
     * @param perPage Results to return pr page
     * @param page Page to fetch
     * @returns EquipmentSearchItem Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchEquipment(
        equipmentIdAnyOf?: Array<string>,
        serialNumberAnyOf?: Array<string>,
        vendorPartNumberAnyOf?: Array<string>,
        materialIdAnyOf?: Array<string>,
        includeMaintenanceRecords: boolean = true,
        includeMaintenanceRecordTypes?: Array<'modification-proposal' | 'failure-report' | 'activity-report' | 'certification-report' | 'technical-information-update-request' | 'technical-clarification'>,
        includeOnlyOpenMaintenanceRecords: boolean = false,
        includeWorkOrders: boolean = true,
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders'>,
        includeOnlyOpenWorkOrders: boolean = false,
        includeCharacteristics: boolean = false,
        perPage: number = 20,
        page: number = 1,
    ): CancelablePromise<Array<EquipmentSearchItem> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/equipment',
            query: {
                'equipment-id-any-of': equipmentIdAnyOf,
                'serial-number-any-of': serialNumberAnyOf,
                'vendor-part-number-any-of': vendorPartNumberAnyOf,
                'material-id-any-of': materialIdAnyOf,
                'include-maintenance-records': includeMaintenanceRecords,
                'include-maintenance-record-types': includeMaintenanceRecordTypes,
                'include-only-open-maintenance-records': includeOnlyOpenMaintenanceRecords,
                'include-work-orders': includeWorkOrders,
                'include-work-order-types': includeWorkOrderTypes,
                'include-only-open-work-orders': includeOnlyOpenWorkOrders,
                'include-characteristics': includeCharacteristics,
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
     * @param filter Filter to limit the work order by
     * @param subseaWorkOrderId The subsea work order to check if any reserved equipment has been changed recently
     * @param equipmentIds Comma-separated list of equipment to check
     * @param changedSinceDate Earliest datetime to returned changed equipment for
     * @returns EquipmentChangeLogs Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchEquipmentChangeLog(
        filter: 'recently-changed-reserved-equipment' | 'recently-changed-equipment',
        subseaWorkOrderId?: string,
        equipmentIds?: Array<string>,
        changedSinceDate?: string,
    ): CancelablePromise<EquipmentChangeLogs | ProblemDetails> {
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
     * Tag - Search
     * Search tags for a plant based on the first few characters of the tag.
     *
     * The results include key information for a tag.
     * Additional information for each tag can be retrieved by using the endpoint `/plants/{plant-id}/tags/{tag-id}`.
     *
     * If there are no tags found for the search, the response will be HTTP 200 with an empty array as content.
     *
     * ### Important information
     * Properties areaId and area are deprecated as of 01.2021 in order to align with naming across Equinor system. Use locationId and location instead.
     *
     * The value of the tag-prefix parameter should be url-encoded in order to support special characters
     *
     * ### Examples
     * `/plants/1219/tags?tag-prefix=44&api-version=v1`
     *
     * `/plants/1100/tags?tag-prefix=02%22-EC-%202525-M&api-version=v1`
     *
     * @param plantId
     * @param tagPrefix The first few characters of the tag
     * @returns TagBasic Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchTags(
        plantId: string,
        tagPrefix: string,
    ): CancelablePromise<Array<TagBasic> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/tags',
            path: {
                'plant-id': plantId,
            },
            query: {
                'tag-prefix': tagPrefix,
            },
        });
    }

}
