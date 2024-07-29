/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CharacteristicsUpdate } from '../models/CharacteristicsUpdate';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { Tag } from '../models/Tag';
import type { TagAddClass } from '../models/TagAddClass';
import type { TagBasic } from '../models/TagBasic';
import type { TagCreate } from '../models/TagCreate';
import type { TagHierachyItem } from '../models/TagHierachyItem';
import type { TagHierachyItemDeprecated } from '../models/TagHierachyItemDeprecated';
import type { TagJsonPatch } from '../models/TagJsonPatch';
import type { TagSearch } from '../models/TagSearch';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TagService {

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
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders'>,
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
     * Tag - Update
     * ### Overview
     * Update a single tag
     *
     * ### Important information
     * There is a plant-specific configuration called "data origin" which determines which properties should be inherited from the parent tag. Please be aware that updating of the field `parentTagId` might lead to overwriting of those properties to the default values of the new tag.
     *
     * If a tag is a parent tag, changing of an already existing property will be cascaded to all its children. This is valid if according to the "data origin" this property should be inherited.
     *
     * The endpoint supports most status activation such as:
     *
     * - INAC - Object deactivated
     * - INSV - In service
     * - ENGN - Engineering
     *
     * Deactivation is supported where there is no interdependency between statuses. For status with a statusOrder value, deactivation is not necessary (nor supported) as the business logic will handle the switch once another status is activated.
     *
     * ### Update release 1.19.0
     * Added support for activation and deactivation of tag statuses. The property `activeStatusIds` should provide all the the old and new statuses a tag should have, and any statuses not provided will be deactivated.
     *
     * ### Update release 1.21.0
     *
     * Added support for property `area`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateTag({
        plantId,
        tagId,
        requestBody,
    }: {
        plantId: string,
        tagId: string,
        /**
         * The information to be updated
         */
        requestBody: Array<TagJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/plants/{plant-id}/tags/{tag-id}',
            path: {
                'plant-id': plantId,
                'tag-id': tagId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update tag`,
                404: `The specified resource was not found`,
                409: `Tag is locked by other user`,
            },
        });
    }

    /**
     * Tag - Add characteristics
     * Add new characteristics to an existing tag.
     *
     * Characteristics are grouped into a class such as `FL_MAINT_STRATEGY`. Classes can be assigned to a tag and specific characteristics such as `CRIT_PRODUCTION` will then be available for that specific tag.
     *
     * With this endpoint, the consumer can assign classes to a tag and define initial values for some of the characteristics in the classes.
     *
     * Note that if a given characteristic has already been added to this tag, repeated adding will result in overwriting of the characteristic value.
     * If you want to update a characteristic the `PATCH` endpoint can be used.
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
        plantId: string,
        tagId: string,
        /**
         * Characteristics to add to tag.
         */
        requestBody: Array<TagAddClass>,
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/plants/{plant-id}/tags/{tag-id}/characteristics',
            path: {
                'plant-id': plantId,
                'tag-id': tagId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
            errors: {
                400: `Request is missing required parameters or characteristicId is not part of class`,
                403: `User does not have sufficient rights to add characteristics to measuring point`,
            },
        });
    }

    /**
     * Tag - Update characteristic
     * Update existing values of characteristics on a tag. If the characteristics does not exist, a `404 - Not Found` is returned.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateTagCharacteristics({
        plantId,
        tagId,
        requestBody,
    }: {
        plantId: string,
        tagId: string,
        /**
         * Characteristics to be updated, based on JsonPatch standard
         */
        requestBody: Array<CharacteristicsUpdate>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/plants/{plant-id}/tags/{tag-id}/characteristics',
            path: {
                'plant-id': plantId,
                'tag-id': tagId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to characteristics`,
                404: `The specified resource was not found`,
                409: `Characteristics is locked by other user`,
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
     * @returns TagHierachyItemDeprecated Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getTagHierachy({
        plantId,
        filter,
        rootTags,
    }: {
        plantId: string,
        /**
         * Filter to limit the tag hierachy by
         */
        filter?: 'filter-by-root-tags',
        /**
         * Comma-separated list of tags (without tagPlantId prefix)
         */
        rootTags?: string,
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
     * ### Update release 1.30.0
     * Added property `tag` to the response.
     *
     * Added query parameter `sub-hierarchy-limit` which controls how many levels below the root the response will contain.
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
         * Filter to limit the tag hierachy by
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
     * Tag - Create
     * ### Overview
     * Create tag with option to create linear data. Linear data can be created only for the tagCategoryId `U` (Pipeline).
     *
     * Locations and systems available for this plant can be found by querying `/plants/{plant-id}?include-systems=true&include-locations=true&api-version=v1`
     *
     * To find a valid parentTagId, use the tag search endpoint `/plants/{plant-id}/tag-hierarchy`
     * ### Important information
     * There is a plant-specific configuration called "data origin" which determines which properties should be inherited from the parent tag, and which should be maintained by user directly, e.g. via the API. Properties provided in the request will overwrite the inherited default values. Nevertheless, the inheritance rules of the "data origin" configuration remain the same even if default values were overwritten during the creation.
     *
     * Please note that to execute this request, elevated roles are required in Equinor's ERP system.
     *
     * ### Update release 1.21.0
     *
     * Added support for property `area`.
     *
     * ### Update release 1.26.0
     * Added property `maintenanceConceptId` to response.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns any Created
     * @throws ApiError
     */
    public static createTag({
        plantId,
        requestBody,
    }: {
        plantId: string,
        /**
         * Tag to create
         */
        requestBody: TagCreate,
    }): CancelablePromise<ProblemDetails | (TagBasic & {
        /**
         * The maintenance concept for the tag. More details planned to be available through endpoint /maintenance-concepts/{concept-id}
         */
        maintenanceConceptId?: string;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/plants/{plant-id}/tags',
            path: {
                'plant-id': plantId,
            },
            body: requestBody,
            mediaType: 'application/json',
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
        plantId: string,
        filter?: 'by-tag-ids' | 'by-tag-prefix' | 'by-external-system-reference' | null,
        /**
         * The first few characters of the tag, required if filter is empty or `by-tag-prefix`
         */
        tagPrefix?: string | null,
        /**
         * The tagIds as a comma separated list, required if filter is `by-tag-ids`
         */
        tagIdsAnyOf?: Array<string>,
        /**
         * Required if filter is `by-external-system-reference`
         */
        externalSystemReference?: string | null,
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
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders'>,
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
         * Results to return pr page
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

}
