/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Equipment } from "../models/Equipment";
import type { EquipmentAddClass } from "../models/EquipmentAddClass";
import type { EquipmentBasicV2 } from "../models/EquipmentBasicV2";
import type { EquipmentChangeLogs } from "../models/EquipmentChangeLogs";
import type { EquipmentCreate } from "../models/EquipmentCreate";
import type { EquipmentJsonPatch } from "../models/EquipmentJsonPatch";
import type { EquipmentListItem } from "../models/EquipmentListItem";
import type { EquipmentSearchItem } from "../models/EquipmentSearchItem";
import type { ProblemDetails } from "../models/ProblemDetails";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class EquipmentService {
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
     * ### Update release v1.15.0
     * Added `workOrderId` to the lastMeasurement.
     *
     * Added query parameter `include-url-references`.
     *
     * `modification-proposal` in `include-maintenance-record-types` now includes modification proposals in the response.
     *
     * ### Update release v1.16.0
     * Added property `classId` to characteristics.
     *
     * Added properties `manufacturer` and `modelNumber`.
     *
     * `urlReferences` and `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * Added property `workCenterId` to `maintenanceRecords.failureReports`
     *
     * @returns Equipment Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupEquipment({
        equipmentId,
        includeMaintenanceRecords = true,
        includeMaintenanceRecordTypes,
        includeOnlyOpenMaintenanceRecords = false,
        includeWorkOrders = true,
        includeWorkOrderTypes,
        includeOnlyOpenWorkOrders = false,
        includeCatalogProfileDetails = false,
        includeCharacteristics = false,
        includeAttachments = false,
        includeUrlReferences = false,
        includeMeasuringPoints = false,
        includeLastMeasurement = false,
        includeStatusDetails = false,
    }: {
        /**
         * The unique equipmentId in Equinor's system
         */
        equipmentId: string;
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all support types are returned
         */
        includeMaintenanceRecords?: boolean;
        /**
         * Include which types of maintenance records
         */
        includeMaintenanceRecordTypes?: Array<
            | "failure-report"
            | "activity-report"
            | "certification-report"
            | "technical-information-update-request"
            | "technical-clarification"
            | "modification-proposal"
        >;
        /**
         * Limit include-maintenance-records to only open maintenance records
         */
        includeOnlyOpenMaintenanceRecords?: boolean;
        /**
         * Include work orders. If include-work-order-types is not supplied, all support types are returned
         */
        includeWorkOrders?: boolean;
        /**
         * Include which types of work orders. Use comma-separated list of entries.
         */
        includeWorkOrderTypes?: Array<
            | "correctiveWorkOrders"
            | "preventiveWorkOrders"
            | "modificationWorkOrders"
            | "sasChangeWorkOrders"
            | "projectWorkOrders"
            | "subseaWorkOrders"
        >;
        /**
         * Limit include-work-orders to only open work order
         */
        includeOnlyOpenWorkOrders?: boolean;
        /**
         * Include possible detection methods, failure modes and failure mechanisms
         */
        includeCatalogProfileDetails?: boolean;
        /**
         * Include equipment characteristics such as 'Kontrollkort gyldig til' and 'Equipment group'
         */
        includeCharacteristics?: boolean;
        /**
         * Include equipment or tag attachments
         */
        includeAttachments?: boolean;
        /**
         * Include URL references for equipment or tag
         */
        includeUrlReferences?: boolean;
        /**
         * Include measuring points for this tag
         */
        includeMeasuringPoints?: boolean;
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true)
         */
        includeLastMeasurement?: boolean;
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean;
    }): CancelablePromise<Equipment | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/equipment/{equipment-id}",
            path: {
                "equipment-id": equipmentId,
            },
            query: {
                "include-maintenance-records": includeMaintenanceRecords,
                "include-maintenance-record-types":
                    includeMaintenanceRecordTypes,
                "include-only-open-maintenance-records":
                    includeOnlyOpenMaintenanceRecords,
                "include-work-orders": includeWorkOrders,
                "include-work-order-types": includeWorkOrderTypes,
                "include-only-open-work-orders": includeOnlyOpenWorkOrders,
                "include-catalog-profile-details": includeCatalogProfileDetails,
                "include-characteristics": includeCharacteristics,
                "include-attachments": includeAttachments,
                "include-url-references": includeUrlReferences,
                "include-measuring-points": includeMeasuringPoints,
                "include-last-measurement": includeLastMeasurement,
                "include-status-details": includeStatusDetails,
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
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateEquipment({
        equipmentId,
        requestBody,
    }: {
        equipmentId: string;
        /**
         * The information to be updated
         */
        requestBody: Array<EquipmentJsonPatch>;
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/equipment/{equipment-id}",
            path: {
                "equipment-id": equipmentId,
            },
            body: requestBody,
            mediaType: "application/json",
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
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static addCharacteristicsToEquipment({
        equipmentId,
        requestBody,
    }: {
        /**
         * The unique equipmentId in Equinor's system
         */
        equipmentId: string;
        /**
         * Characteristics to add to equipment.
         */
        requestBody: Array<EquipmentAddClass>;
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/equipment/{equipment-id}/characteristics",
            path: {
                "equipment-id": equipmentId,
            },
            body: requestBody,
            mediaType: "application/json",
            responseHeader: "Location",
            errors: {
                400: `Request is missing required parameters or characteristicId is not part of class`,
                403: `User does not have sufficient rights to add characteristics to equipment`,
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
     * @returns EquipmentListItem Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getEquipmentList({
        plantId,
        filter,
        equipmentCategoryIdAnyOf,
    }: {
        plantId: string;
        /**
         * Filter to limit the equipment list by
         */
        filter?: "filter-by-equipment-category";
        /**
         * Comma-separated list of equipment categories. `G` = Tank Customer equipment, `M` = Machines/Equipment, `P` = Production resources/tools, `Q` = Test/measurement equipment, `R` = Process Equipment, `S` = Customer equipment, `T` = IT Equipment, `U` = Subsea Equipment, `W` = Wind Operation Certified Equip, `Y` = Tool Crib
         */
        equipmentCategoryIdAnyOf?: string;
    }): CancelablePromise<Array<EquipmentListItem> | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/plants/{plant-id}/equipment-list",
            path: {
                "plant-id": plantId,
            },
            query: {
                filter: filter,
                "equipment-category-id-any-of": equipmentCategoryIdAnyOf,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Equipment - Attachment download
     * ### Overview
     * Download single attachment for equipment.
     *
     * The applicable document types are: `B10`, `B30`, `A01`, `A02`.
     *
     * @returns binary Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static downloadEquipmentAttachment({
        equipmentId,
        attachmentId,
    }: {
        equipmentId: string;
        attachmentId: string;
    }): CancelablePromise<Blob | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/equipment/{equipment-id}/attachments/{attachment-id}",
            path: {
                "equipment-id": equipmentId,
                "attachment-id": attachmentId,
            },
            errors: {
                404: `The specified resource was not found`,
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
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns EquipmentBasicV2 Created
     * @throws ApiError
     */
    public static createEquipment({
        requestBody,
    }: {
        /**
         * Equipment to create
         */
        requestBody: EquipmentCreate;
    }): CancelablePromise<ProblemDetails | EquipmentBasicV2> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/equipment",
            body: requestBody,
            mediaType: "application/json",
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
     * ### Update release v1.15.0
     * `modification-proposal` in `include-maintenance-record-types` now includes modification proposals in the response.
     *
     * ### Update release v1.16.0
     * Added property `classId` to characteristics.
     *
     * Added properties `manufacturer` and `modelNumber`.
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
        includeMaintenanceRecords = true,
        includeMaintenanceRecordTypes,
        includeOnlyOpenMaintenanceRecords = false,
        includeWorkOrders = true,
        includeWorkOrderTypes,
        includeOnlyOpenWorkOrders = false,
        includeCharacteristics = false,
        perPage = 20,
        page = 1,
    }: {
        /**
         * Search based on equipmentIds. Wildcards are supported
         */
        equipmentIdAnyOf?: Array<string>;
        /**
         * Search based on serialNumber. Wildcards are supported
         */
        serialNumberAnyOf?: Array<string>;
        /**
         * Search based on partNumber. Wildcards are supported
         */
        vendorPartNumberAnyOf?: Array<string>;
        /**
         * Search based on materialId. Wildcards are supported
         */
        materialIdAnyOf?: Array<string>;
        /**
         * Include maintenance records. If include-maintenance-record-types is not supplied, all support types are returned
         */
        includeMaintenanceRecords?: boolean;
        /**
         * Include which types of maintenance records
         */
        includeMaintenanceRecordTypes?: Array<
            | "failure-report"
            | "activity-report"
            | "certification-report"
            | "technical-information-update-request"
            | "technical-clarification"
            | "modification-proposal"
        >;
        /**
         * Limit include-maintenance-records to only open maintenance records. Recommend using `true` in order to improve performance.
         */
        includeOnlyOpenMaintenanceRecords?: boolean;
        /**
         * Include work orders. If include-work-order-types is not supplied, all support types are returned
         */
        includeWorkOrders?: boolean;
        /**
         * Include which types of work orders. Use comma-separated list of entries.
         */
        includeWorkOrderTypes?: Array<
            | "correctiveWorkOrders"
            | "preventiveWorkOrders"
            | "modificationWorkOrders"
            | "sasChangeWorkOrders"
            | "projectWorkOrders"
            | "subseaWorkOrders"
        >;
        /**
         * Limit include-work-orders to only open work order. Recommend using `true` in order to improve performance.
         */
        includeOnlyOpenWorkOrders?: boolean;
        /**
         * Include tag characteristics such as 'Kontrollkort gyldig til' and 'Equipment group'
         */
        includeCharacteristics?: boolean;
        /**
         * Results to return pr page
         */
        perPage?: number;
        /**
         * Page to fetch
         */
        page?: number;
    }): CancelablePromise<Array<EquipmentSearchItem> | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/equipment",
            query: {
                "equipment-id-any-of": equipmentIdAnyOf,
                "serial-number-any-of": serialNumberAnyOf,
                "vendor-part-number-any-of": vendorPartNumberAnyOf,
                "material-id-any-of": materialIdAnyOf,
                "include-maintenance-records": includeMaintenanceRecords,
                "include-maintenance-record-types":
                    includeMaintenanceRecordTypes,
                "include-only-open-maintenance-records":
                    includeOnlyOpenMaintenanceRecords,
                "include-work-orders": includeWorkOrders,
                "include-work-order-types": includeWorkOrderTypes,
                "include-only-open-work-orders": includeOnlyOpenWorkOrders,
                "include-characteristics": includeCharacteristics,
                "per-page": perPage,
                page: page,
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
        filter:
            | "recently-changed-reserved-equipment"
            | "recently-changed-equipment";
        /**
         * The subsea work order to check if any reserved equipment has been changed recently
         */
        subseaWorkOrderId?: string;
        /**
         * Comma-separated list of equipment to check
         */
        equipmentIds?: Array<string>;
        /**
         * Earliest datetime to returned changed equipment for
         */
        changedSinceDate?: string;
    }): CancelablePromise<EquipmentChangeLogs | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/equipment-change-log",
            query: {
                filter: filter,
                "subsea-work-order-id": subseaWorkOrderId,
                "equipment-ids": equipmentIds,
                "changed-since-date": changedSinceDate,
            },
            errors: {
                400: `Request is missing required parameters`,
                404: `The specified resource was not found`,
            },
        });
    }
}
