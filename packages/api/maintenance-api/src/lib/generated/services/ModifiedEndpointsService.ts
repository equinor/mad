/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MaintenancePlanItem } from '../models/MaintenancePlanItem';
import type { Plant } from '../models/Plant';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { TagHierachyItemDeprecated } from '../models/TagHierachyItemDeprecated';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModifiedEndpointsService {

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
     * Plants - Lookup
     * ### Overview
     * Lookup a single plant with related information.
     *
     * ### Update version 1.6.0
     * Added `include-revisions` for reading master data on revisions for the `planningPlantId` of the provided `plantId`.
     *
     * ### Update version 1.7.0
     * Added `include-systems` query parameter.
     *
     * ### Update version 1.13.0
     * Added `include-equipment-catalog-profiles` query parameter.
     *
     * @param plantId
     * @param includeLocations Include location for plant
     * @param includeWorkCenters Include work centers for plant
     * @param includePlannerGroups Include planner groups for plant
     * @param includeTagCatalogProfiles Include tag catalog profiles in use for plant
     * @param includeEquipmentCatalogProfiles Include equipment catalog profiles in use for plant
     * @param includeSurfaceDegradationFactors Include surface degradations for plant
     * @param includeRevisions Include revisions for plant
     * @param includeSystems Include systems for plant
     * @returns Plant Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupPlant(
        plantId: string,
        includeLocations: boolean = false,
        includeWorkCenters: boolean = false,
        includePlannerGroups: boolean = false,
        includeTagCatalogProfiles: boolean = false,
        includeEquipmentCatalogProfiles: boolean = false,
        includeSurfaceDegradationFactors: boolean = false,
        includeRevisions: boolean = false,
        includeSystems: boolean = false,
    ): CancelablePromise<Plant | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}',
            path: {
                'plant-id': plantId,
            },
            query: {
                'include-locations': includeLocations,
                'include-work-centers': includeWorkCenters,
                'include-planner-groups': includePlannerGroups,
                'include-tag-catalog-profiles': includeTagCatalogProfiles,
                'include-equipment-catalog-profiles': includeEquipmentCatalogProfiles,
                'include-surface-degradation-factors': includeSurfaceDegradationFactors,
                'include-revisions': includeRevisions,
                'include-systems': includeSystems,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Plants - Search
     * ### Overview
     * Search for plants through predefined filters.
     *
     * ### Filter: by-plant
     * Search plant based on one or more `plant-id`
     *
     * Parameters:
     * - plant-id (supports comma-separated list)
     *
     * ### Filter: by-planning-plant
     * Search plant based on one or more `planning-plant-id`
     *
     * Parameters:
     * - planning-plant-id (supports comma-separated list)
     *
     * ### Update version 1.13.0
     * Added `include-equipment-catalog-profiles` query parameter.
     *
     * @param filter Filter to limit plants by
     * @param plantId Plant identifier
     * @param planningPlantId Plant used to plan the maintenance work. Usually same as `plantId`, but there are some cases were one `planningPlantId` is used across multiple `plantId`.
     * @param includeLocations Include location for plant
     * @param includeWorkCenters Include work centers for plant
     * @param includePlannerGroups Include planner groups for plant
     * @param includeTagCatalogProfiles Include tag catalog profiles in use for plant
     * @param includeEquipmentCatalogProfiles Include equipment catalog profiles in use for plant
     * @param includeSurfaceDegradationFactors Include surface degradations for plant
     * @returns Plant Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchPlant(
        filter: 'by-plant' | 'by-planning-plant',
        plantId?: string,
        planningPlantId?: string,
        includeLocations: boolean = false,
        includeWorkCenters: boolean = false,
        includePlannerGroups: boolean = false,
        includeTagCatalogProfiles: boolean = false,
        includeEquipmentCatalogProfiles: boolean = false,
        includeSurfaceDegradationFactors: boolean = false,
    ): CancelablePromise<Array<Plant> | ProblemDetails> {
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
            },
            errors: {
                400: `Request is missing required parameters`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Maintenance Plan Item- Lookup
     * ### Overview
     * Lookup single maintenance plan item
     *
     * Maintenance Item contains the object list, task list and previous calls for preventive work orders.
     *
     * The object list describes the tag/equipment covered in the maintenance plan item.
     *
     *
     * The task list describes the maintenance activities with the necessary support activities to be performed in the maintenance programme. These are divided into operations that are listed in an order that is natural for the practical implementation of the maintenance. The task List also sets the interval of operations through maintenance packages.
     *
     * ### Update release v1.2.0
     * Added `calculationKey` for operations in the task list.
     *
     * ### Update release v1.5.0
     * Bugfix related to text for operation.
     *
     * ### Update release v1.8.0
     * New properties were added to the calls expand: duePackages, schedulingType, callDate, completionDate
     *
     * ### Update release v1.9.0
     * Added property objectId for objectList.
     *
     * ### Update release v1.13.0
     * Added parameter include-item-object-list-linkage with default value true. Added uniqueKey in TaskListOperations.
     *
     * @param planId The id of the maintenance plan
     * @param itemId The id of the maintenance plan item
     * @param includeItemCalls Include calls to maintenance plan item
     * @param includeItemObjectList Include list of objects for the maintenance plan item
     * @param includeObjectListLinkage Include object list linkage for maintenance plan item
     * @param includeItemTaskList Include task list, operations (w/related objects and material needs) for the maintenance plan item
     * @returns MaintenancePlanItem Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupMaintenancePlanItem(
        planId: string,
        itemId: string,
        includeItemCalls: boolean = true,
        includeItemObjectList: boolean = false,
        includeObjectListLinkage: boolean = true,
        includeItemTaskList: boolean = false,
    ): CancelablePromise<MaintenancePlanItem | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-plans/{plan-id}/items/{item-id}',
            path: {
                'plan-id': planId,
                'item-id': itemId,
            },
            query: {
                'include-item-calls': includeItemCalls,
                'include-item-object-list': includeItemObjectList,
                'include-object-list-linkage': includeObjectListLinkage,
                'include-item-task-list': includeItemTaskList,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

}
