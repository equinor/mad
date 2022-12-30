/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Area } from '../models/Area';
import type { CatalogProfile } from '../models/CatalogProfile';
import type { Location } from '../models/Location';
import type { PlannerGroup } from '../models/PlannerGroup';
import type { Plant } from '../models/Plant';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { SurfaceDegradationFactor } from '../models/SurfaceDegradationFactor';
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
    plantId: string;
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
    plantId: string;
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
   * Areas - Get
   * ### Overview
   * Get areas
   *
   * ### Important information
   * Endpoint is deprecated as of 01.2021 in order to align with naming across Equinor system.
   * Use `/plants/{plant-id}?include-locations=true` instead .
   *
   * @returns Area Success
   * @returns ProblemDetails Response for other HTTP status codes
   * @throws ApiError
   */
  public static getAreas({
    plantId,
  }: {
    plantId: string;
  }): CancelablePromise<Array<Area> | ProblemDetails> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/plants/{plant-id}/areas',
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
    plantId: string;
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
    plantId: string;
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
   * Updated PlanningPlantRevision-model.
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
  }: {
    plantId: string;
    /**
     * Include location for plant
     */
    includeLocations?: boolean;
    /**
     * Include work centers for plant
     */
    includeWorkCenters?: boolean;
    /**
     * Include planner groups for plant
     */
    includePlannerGroups?: boolean;
    /**
     * Include tag catalog profiles in use for plant
     */
    includeTagCatalogProfiles?: boolean;
    /**
     * Include equipment catalog profiles in use for plant
     */
    includeEquipmentCatalogProfiles?: boolean;
    /**
     * Use this in combination with `include-tag-catalog-profiles=true` and/or `include-equipment-catalog-profiles=true` to improve performance.
     *
     */
    includeOnlyDefaultCatalogProfiles?: boolean;
    /**
     * Include surface degradations for plant
     */
    includeSurfaceDegradationFactors?: boolean;
    /**
     * Include revisions for plant
     */
    includeRevisions?: boolean;
    /**
     * Include systems for plant
     */
    includeSystems?: boolean;
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
  }: {
    /**
     * Filter to limit plants by
     */
    filter: 'by-plant' | 'by-planning-plant';
    /**
     * Plant identifier
     */
    plantId?: string;
    /**
     * Plant used to plan the maintenance work. Usually same as `plantId`, but there are some cases were one `planningPlantId` is used across multiple `plantId`.
     */
    planningPlantId?: string;
    /**
     * Include location for plant
     */
    includeLocations?: boolean;
    /**
     * Include work centers for plant
     */
    includeWorkCenters?: boolean;
    /**
     * Include planner groups for plant
     */
    includePlannerGroups?: boolean;
    /**
     * Include tag catalog profiles in use for plant
     */
    includeTagCatalogProfiles?: boolean;
    /**
     * Include equipment catalog profiles in use for plant
     */
    includeEquipmentCatalogProfiles?: boolean;
    /**
     * Include surface degradations for plant
     */
    includeSurfaceDegradationFactors?: boolean;
  }): CancelablePromise<Array<Plant> | ProblemDetails> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/plants',
      query: {
        filter: filter,
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
    plantId: string;
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
   *
   * @returns User Success
   * @returns ProblemDetails Response for other HTTP status codes
   * @throws ApiError
   */
  public static getUser({
    includeAuthorizations = true,
  }: {
    /**
     * Include information on authorization user has for API
     */
    includeAuthorizations?: boolean;
  }): CancelablePromise<User | ProblemDetails> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/user',
      query: {
        'include-authorizations': includeAuthorizations,
      },
    });
  }
}
