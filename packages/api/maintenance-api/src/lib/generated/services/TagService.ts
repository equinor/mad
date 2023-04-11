/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProblemDetails } from "../models/ProblemDetails";
import type { Tag } from "../models/Tag";
import type { TagAddClass } from "../models/TagAddClass";
import type { TagBasic } from "../models/TagBasic";
import type { TagCreate } from "../models/TagCreate";
import type { TagHierachyItem } from "../models/TagHierachyItem";
import type { TagHierachyItemDeprecated } from "../models/TagHierachyItemDeprecated";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class TagService {
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
     * ### Update release v1.15.0
     * Added `workOrderId` to response.
     *
     * Added `include-linear-data` and `include-status-details` query parameters.
     *
     * Added properties `tagCategoryId`, `activeStatusIds`, `startUpDate` and `endOfUseDate`.
     *
     * Added `modification-proposal` as a maintenance record type to include with `include-maintenance-record-types` parameter.
     *
     * ### Update release v1.16.0
     * Added property `classId` to characteristics.
     *
     * Added query parameters `include-attachments` and `include-url-references`.
     *
     * Added property `workCenterId`
     *
     * @returns Tag Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupTag({
        plantId,
        tagId,
        includeMaintenanceRecords = true,
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
        plantId: string;
        tagId: string;
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
         * Include installed equipment
         */
        includeInstalledEquipment?: boolean;
        /**
         * Include possible detection methods, failure modes and failure mechanisms
         */
        includeCatalogProfileDetails?: boolean;
        /**
         * Include Maintenance Plan items this functional location is part of
         */
        includeMaintenancePlanItems?: boolean;
        /**
         * Include measuring points for this tag
         */
        includeMeasuringPoints?: boolean;
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true)
         */
        includeLastMeasurement?: boolean;
        /**
         * Include tag characteristics such as 'Function Fail Consequence' and 'Safety Critical Element (SCE)'
         */
        includeCharacteristics?: boolean;
        /**
         * Include bill of materials (also known as structure list) for tag and installed equipment
         */
        includeBillOfMaterials?: boolean;
        /**
         * Include equipment or tag attachments
         */
        includeAttachments?: boolean;
        /**
         * Include URL references for equipment or tag
         */
        includeUrlReferences?: boolean;
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean;
        /**
         * Include linear data
         */
        includeLinearData?: boolean;
    }): CancelablePromise<Tag | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/plants/{plant-id}/tags/{tag-id}",
            path: {
                "plant-id": plantId,
                "tag-id": tagId,
            },
            query: {
                "include-maintenance-records": includeMaintenanceRecords,
                "include-maintenance-record-types":
                    includeMaintenanceRecordTypes,
                "include-work-orders": includeWorkOrders,
                "include-work-order-types": includeWorkOrderTypes,
                "include-installed-equipment": includeInstalledEquipment,
                "include-catalog-profile-details": includeCatalogProfileDetails,
                "include-maintenance-plan-items": includeMaintenancePlanItems,
                "include-measuring-points": includeMeasuringPoints,
                "include-last-measurement": includeLastMeasurement,
                "include-characteristics": includeCharacteristics,
                "include-bill-of-materials": includeBillOfMaterials,
                "include-attachments": includeAttachments,
                "include-url-references": includeUrlReferences,
                "include-status-details": includeStatusDetails,
                "include-linear-data": includeLinearData,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Tag - Add characteristics
     * Add new characteristics to an existing tag.
     *
     * Characteristics are grouped into a class such as `FL_MAINT_STRATEGY`. Classes can be assigned to a tag and specific characteristics such as `CRIT_PRODUCTION` will then be available for that specific equipment.
     *
     * With this endpoint, the consumer can assign classes to a tag and define initial values for some of the characteristics in the classes.
     *
     * There is currently no endpoint for looking up existing classes and their characteristics, but this may be added in the future.
     *
     * Note that if a given characteristic has already been added to this tag, repeated adding will result into overwriting of the characteristic value.
     *
     * ### Important information
     * Use `/plants/{plant-id}/tags/{tag-id}?include-characteristics=true&api-version=v1` to view characteristics with value after using this endpoint.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static addCharacteristicsToTag({
        plantId,
        tagId,
        requestBody,
    }: {
        plantId: string;
        tagId: string;
        /**
         * Characteristics to add to tag.
         */
        requestBody: Array<TagAddClass>;
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/plants/{plant-id}/tags/{tag-id}/characteristics",
            path: {
                "plant-id": plantId,
                "tag-id": tagId,
            },
            body: requestBody,
            mediaType: "application/json",
            responseHeader: "Location",
            errors: {
                400: `Request is missing required parameters or characteristicId is not part of class`,
                403: `User does not have sufficient rights to add characteristics to measuring point`,
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
     * @returns TagHierachyItemDeprecated Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getTagHierachy({
        plantId,
        filter,
        rootTags,
    }: {
        plantId: string;
        /**
         * Filter to limit the tag hierachy by
         */
        filter?: "filter-by-root-tags";
        /**
         * Comma-separated list of tags (without tagPlantId prefix)
         */
        rootTags?: string;
    }): CancelablePromise<Array<TagHierachyItemDeprecated> | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/plants/{plant-id}/tag-hierachy",
            path: {
                "plant-id": plantId,
            },
            query: {
                filter: filter,
                "root-tags": rootTags,
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
     * @returns TagHierachyItem Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getTagHierarchy({
        plantId,
        filter,
        rootTagIdAnyOf,
    }: {
        plantId: string;
        /**
         * Filter to limit the tag hierachy by
         */
        filter?: "by-root-tags";
        /**
         * Comma-separated list of tags (without tagPlantId prefix)
         */
        rootTagIdAnyOf?: string;
    }): CancelablePromise<Array<TagHierachyItem> | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/plants/{plant-id}/tag-hierarchy",
            path: {
                "plant-id": plantId,
            },
            query: {
                filter: filter,
                "root-tag-id-any-of": rootTagIdAnyOf,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Tag - Create
     * ### Overview
     * Create tag with option to create linear data. Linear data can be creted only for the tagCategoryId `U` (Pipeline).
     *
     * Locations and systems available for this plant can be found by querying `/plants/{plant-id}?include-systems=true&nclude-locations=true&api-version=v1`
     *
     * To find a valid parentTagId, use the tag search endpoint `/plants/{plant-id}/tag-hierarchy`
     * ### Important information
     * There is a plant-specific configuration called "data origin" which determines which properties should be inherited from the parent tag, and which should be maintained by user directly, e.g. via the API. Properties provided in the request will overwrite the inherited default values. Nevertheless, the inheritance rules of the "data origin" configuration remain the same even if default values were overwritten during the creation.
     *
     * Please note that to execute this request, elevated roles are required in Equinor's ERP system.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns TagBasic Created
     * @throws ApiError
     */
    public static createTag({
        plantId,
        requestBody,
    }: {
        plantId: string;
        /**
         * Tag to create
         */
        requestBody: TagCreate;
    }): CancelablePromise<ProblemDetails | TagBasic> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/plants/{plant-id}/tags",
            path: {
                "plant-id": plantId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Bad request, for example if missing required properties`,
                403: `User does not have sufficient rights to create tag.`,
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
     * ### Update release v1.15.0
     * Added `include-linear-data` and `include-status-details` query parameters.
     *
     * Added properties `tagCategoryId`, `activeStatusIds`, `startUpDate` and `endOfUseDate`.
     *
     * ### Update release v1.16.0
     * Added property `classId` to characteristics
     *
     * @returns Tag Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchTags({
        plantId,
        filter = "by-tag-prefix",
        tagPrefix,
        tagIdsAnyOf,
        includeMaintenanceRecords = false,
        includeMaintenanceRecordTypes,
        includeWorkOrders = false,
        includeWorkOrderTypes,
        includeInstalledEquipment = false,
        includeCatalogProfileDetails = false,
        includeMaintenancePlanItems = false,
        includeMeasuringPoints = false,
        includeLastMeasurement = false,
        includeCharacteristics = false,
        includeBillOfMaterials = false,
        includeStatusDetails = false,
        includeLinearData = false,
        perPage = 100,
        page = 1,
    }: {
        plantId: string;
        filter?: "by-tag-ids" | "by-tag-prefix" | null;
        /**
         * The first few characters of the tag, required if filter is empty or `by-tag-prefix`
         */
        tagPrefix?: string | null;
        /**
         * The tagIds as a comma separated list, required if filter is `by-tag-ids`
         */
        tagIdsAnyOf?: Array<string>;
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
         * Include installed equipment
         */
        includeInstalledEquipment?: boolean;
        /**
         * Include possible detection methods, failure modes and failure mechanisms
         */
        includeCatalogProfileDetails?: boolean;
        /**
         * Include Maintenance Plan items this functional location is part of
         */
        includeMaintenancePlanItems?: boolean;
        /**
         * Include measuring points for this tag
         */
        includeMeasuringPoints?: boolean;
        /**
         * Include last measurement for the measuring points (only relevant if include-measuring-points is true)
         */
        includeLastMeasurement?: boolean;
        /**
         * Include tag characteristics such as 'Function Fail Consequence' and 'Safety Critical Element (SCE)'
         */
        includeCharacteristics?: boolean;
        /**
         * Include bill of materials (also known as structure list) for tag and installed equipment
         */
        includeBillOfMaterials?: boolean;
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean;
        /**
         * Include linear data
         */
        includeLinearData?: boolean;
        /**
         * Results to return pr page
         */
        perPage?: number;
        /**
         * Page to fetch
         */
        page?: number;
    }): CancelablePromise<Array<Tag> | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/plants/{plant-id}/tags",
            path: {
                "plant-id": plantId,
            },
            query: {
                filter: filter,
                "tag-prefix": tagPrefix,
                "tag-ids-any-of": tagIdsAnyOf,
                "include-maintenance-records": includeMaintenanceRecords,
                "include-maintenance-record-types":
                    includeMaintenanceRecordTypes,
                "include-work-orders": includeWorkOrders,
                "include-work-order-types": includeWorkOrderTypes,
                "include-installed-equipment": includeInstalledEquipment,
                "include-catalog-profile-details": includeCatalogProfileDetails,
                "include-maintenance-plan-items": includeMaintenancePlanItems,
                "include-measuring-points": includeMeasuringPoints,
                "include-last-measurement": includeLastMeasurement,
                "include-characteristics": includeCharacteristics,
                "include-bill-of-materials": includeBillOfMaterials,
                "include-status-details": includeStatusDetails,
                "include-linear-data": includeLinearData,
                "per-page": perPage,
                page: page,
            },
            errors: {
                400: `Request is missing required parameters`,
            },
        });
    }
}
