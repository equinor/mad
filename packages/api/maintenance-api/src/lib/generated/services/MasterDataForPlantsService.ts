/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CatalogProfile } from '../models/CatalogProfile';
import type { Location } from '../models/Location';
import type { PlannerGroup } from '../models/PlannerGroup';
import type { PlanningPlantRevision } from '../models/PlanningPlantRevision';
import type { Plant } from '../models/Plant';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { RevisionWorkOrderOperation } from '../models/RevisionWorkOrderOperation';
import type { SurfaceDegradationFactor } from '../models/SurfaceDegradationFactor';
import type { TextTemplate } from '../models/TextTemplate';
import type { User } from '../models/User';
import type { WorkCenter } from '../models/WorkCenter';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MasterDataForPlantsService {

    /**
     * @deprecated
     * Tag catalog profiles - Get
     * ### Overview
     * Get all catalog profiles used in active tags at a plant.
     * The catalog profile provides valid values for detection method, failure mode and failure mechanism when creating and updating `maintenance-records` such as `failure-reports`.
     *
     * ### Important information
     * Some tags will not have an assigned catalog profile. For these tags use the catalog profile defined as `isDefaultProfileForActivityReports` or `isDefaultProfileForFailureReports` when creating and updating `maintenance-records`.
     *
     * ### Important information
     * Endpoint is deprecated as of 11.2022 in order to simplify API design.
     * Use `/plants/{plant-id}?include-tag-catalog-profiles=true` instead.
     *
     * @returns CatalogProfile Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getTagCatalogProfile({
        plantId,
    }: {
        plantId: string,
    }): CancelablePromise<Array<CatalogProfile> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/tag-catalog-profiles',
            path: {
                'plant-id': plantId,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * @deprecated
     * Locations - Get
     * ### Overview
     * Get structured locations within the plant.
     * `locationId` is commonly used as metadata for tags and when creating `project-work-orders`.
     *
     * ### Important information
     * Endpoint is deprecated as of 11.2022 in order to simplify API design.
     * Use `/plants/{plant-id}?include-locations=true` instead.
     *
     * @returns Location Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getLocations({
        plantId,
    }: {
        plantId: string,
    }): CancelablePromise<Array<Location> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/locations',
            path: {
                'plant-id': plantId,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * @deprecated
     * Planner groups - Get
     * Get planner groups
     *
     * ### Important information
     * Endpoint is deprecated as of 11.2022 in order to simplify API design.
     * Use `/plants/{plant-id}?include-planner-groups=true` instead.
     *
     * @returns PlannerGroup Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getPlannerGroups({
        plantId,
    }: {
        plantId: string,
    }): CancelablePromise<Array<PlannerGroup> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/planner-groups',
            path: {
                'plant-id': plantId,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * @deprecated
     * Work centers - Get
     * ### Overview
     * Get Work centers for plant.
     *
     * ### Important information
     * Endpoint is deprecated as of 11.2022 in order to simplify API design.
     * Use `/plants/{plant-id}?include-work-centers=true` instead.
     *
     * @returns WorkCenter Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getWorkCenters({
        plantId,
    }: {
        plantId: string,
    }): CancelablePromise<Array<WorkCenter> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/work-centers',
            path: {
                'plant-id': plantId,
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
     * ### Update version 1.14.0
     * Added `include-only-default-tag-catalog-profiles` query parameter to limit the response from `include-tag-catalog-profiles` and/or `include-equipment-catalog-profiles`
     *
     * ### Update version 1.17.0
     * Added the  `allowSimplifiedTimeAndProgress` flag to represent is the plant is valid for Non-CATS time recording.
     *
     * Updated PlanningPlantRevision-model.
     *
     * ### Update version 1.20.0
     * Added query parameter `include-baseline-plans` related to `OM104.01.06 - Prepare Work order plan` and `work-order-plan/`.
     *
     * @returns Plant Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupPlant({
        plantId,
        includeLocations = false,
        includeWorkCenters = false,
        includePlannerGroups = false,
        includeTagCatalogProfiles = false,
        includeEquipmentCatalogProfiles = false,
        includeOnlyDefaultCatalogProfiles = false,
        includeSurfaceDegradationFactors = false,
        includeRevisions = false,
        includeSystems = false,
        includeBaselinePlans = false,
    }: {
        plantId: string,
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
         * Use this in combination with `include-tag-catalog-profiles=true` and/or `include-equipment-catalog-profiles=true` to improve performance.
         *
         */
        includeOnlyDefaultCatalogProfiles?: boolean,
        /**
         * Include surface degradations for plant
         */
        includeSurfaceDegradationFactors?: boolean,
        /**
         * Include revisions for plant
         */
        includeRevisions?: boolean,
        /**
         * Include systems for plant
         */
        includeSystems?: boolean,
        /**
         * Include open baseline plans for the planning plant of this plant
         */
        includeBaselinePlans?: boolean,
    }): CancelablePromise<Plant | ProblemDetails> {
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
                'include-only-default-catalog-profiles': includeOnlyDefaultCatalogProfiles,
                'include-surface-degradation-factors': includeSurfaceDegradationFactors,
                'include-revisions': includeRevisions,
                'include-systems': includeSystems,
                'include-baseline-plans': includeBaselinePlans,
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
     * ### Filter: by-revision-id
     * Search by revision ids for a single plant
     *
     * Parameters:
     * - revision-id-any-of
     * - include-work-order-operations (default: false)
     * - include-work-order-operation-text (default: false)
     * - include-only-work-order-operations-with-materials (default: false)
     *
     * ### Examples
     * `/plants/1310/revisions?filter=by-revision-id&revision-id-any-of=OFP,OFP%202022,&include-work-order-operations=true&include-only-work-order-operations-with-materials=true&include-work-order-operation-text=true&api-version=v1`
     *
     * ### Update release 1.19.0
     * Added parameter `include-text-item-materials`.
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
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
    }: {
        plantId: string,
        /**
         * Filter to limit revisions
         */
        filter: 'by-revision-id',
        /**
         * Comma-separated list of revision-id
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
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Revisions Work Order Operations - Search
     * ### Overview
     * Search revision work order operations on a plant.
     *
     * Parameters:
     * - include-work-order-operation-text (default: false)
     * - include-only-work-order-operations-with-materials (default: false)
     *
     * ### Examples
     * `/plants/1310/revisions/PS01-23?include-only-work-order-operations-with-materials=true&include-work-order-operation-text=true&page=1&per-page=10&api-version=v1`
     *
     * ### Update version 1.28.0
     * Added `changedDateTime`,`changedById`, `changedBy`, `changedByEmail`.
     *
     * ### Update release 1.29.0
     * Added `progressChangedDateTime`, `progressChangedBy`, `progressChangedById` and `progressChangedByEmail` to response.  These values represent the last update datetime for technical feedback.
     * Altered `changedDateTime`, `changedBy`, `changedById` and `changedByEmail` to only represent last update to the operation.
     *
     * ### Update release 1.30.1
     * Added fields `confirmationDateTime`, `confirmationBy`, `confirmationByEmail` and `confirmationById`.
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * Split parts of `location` on `materials` into `finalLocation` and `temporaryLocation` in the response.
     *
     * @returns RevisionWorkOrderOperation Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchRevisionWorkOrderOperations({
        plantId,
        revisionId,
        includeOnlyWorkOrderOperationsWithMaterials = false,
        includeTextItemMaterials = false,
        perPage,
        page,
    }: {
        plantId: string,
        revisionId: string,
        /**
         * Limit the work order operations to only those which have material
         */
        includeOnlyWorkOrderOperationsWithMaterials?: boolean,
        /**
         * Include text item materials
         */
        includeTextItemMaterials?: boolean,
        /**
         * Results to return pr page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<RevisionWorkOrderOperation> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/revisions/{revision-id}/work-order-operations',
            path: {
                'plant-id': plantId,
                'revision-id': revisionId,
            },
            query: {
                'include-only-work-order-operations-with-materials': includeOnlyWorkOrderOperationsWithMaterials,
                'include-text-item-materials': includeTextItemMaterials,
                'per-page': perPage,
                'page': page,
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
     * ### Update version 1.17.0
     * Added the  `allowSimplifiedTimeAndProgress` flag to represent is the plant is valid for Non-CATS time recording.
     *
     * ### Update version 1.20.0
     * Added query parameter `include-baseline-plans` related to `OM104.01.06 - Prepare Work order plan` and `work-order-plan/`.
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
    }: {
        /**
         * Filter to limit plants by
         */
        filter: 'by-plant' | 'by-planning-plant',
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
            },
            errors: {
                400: `Request is missing required parameters`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Surface degradation factors - Get
     * Get the surface degradation factors defined for a plant.
     * This information can be used to understand how paint degrades over time.
     *
     * @returns SurfaceDegradationFactor Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getSurfaceDegradationFactors({
        plantId,
    }: {
        plantId: string,
    }): CancelablePromise<Array<SurfaceDegradationFactor> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}/surface-degradation-factors',
            path: {
                'plant-id': plantId,
            },
        });
    }

    /**
     * Logged in user - Lookup
     * ### Overview
     * Get information for the currently logged in user.
     *
     * If query parameter `include-authorization` is true, the request will check if the user has the necessary basic accesses required for the API. Consumer applications could use the response to display general instructions for applying to access if `authorization.hasAccessToAPI` is false.
     *
     * ### Update  release 1.26.0
     * Add query parameter `include-is-discipline-responsible` with default value false. Add parameter `isDisciplineResponsible` to response.
     *
     * @returns User Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getUser({
        includeAuthorizations = true,
        includeIsDisciplineResponsible = false,
    }: {
        /**
         * Include information on authorization user has for API
         */
        includeAuthorizations?: boolean,
        /**
         * Include information if user is discipline responsible
         */
        includeIsDisciplineResponsible?: boolean,
    }): CancelablePromise<User | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user',
            query: {
                'include-authorizations': includeAuthorizations,
                'include-is-discipline-responsible': includeIsDisciplineResponsible,
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
     * @returns TextTemplate Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchTextTemplates({
        templateNameAnyOf,
    }: {
        /**
         * Comma-separated list of text templates to return
         */
        templateNameAnyOf?: string,
    }): CancelablePromise<Array<TextTemplate> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/text-templates',
            query: {
                'template-name-any-of': templateNameAnyOf,
            },
        });
    }

}
