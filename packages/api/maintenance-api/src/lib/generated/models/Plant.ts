/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CatalogProfile } from "./CatalogProfile";
import type { FunctionalSystem } from "./FunctionalSystem";
import type { Location } from "./Location";
import type { PlannerGroup } from "./PlannerGroup";
import type { PlanningPlantRevision } from "./PlanningPlantRevision";
import type { PlantBasic } from "./PlantBasic";
import type { SurfaceDegradationFactor } from "./SurfaceDegradationFactor";
import type { WorkCenter } from "./WorkCenter";

export type Plant = PlantBasic & {
  /**
   * Locations for plant
   */
  locations?: Array<Location>;
  /**
   * Systems for plant
   */
  systems?: Array<FunctionalSystem>;
  /**
   * Work centers for plant
   */
  workCenters?: Array<WorkCenter>;
  /**
   * Planner groups for plant
   */
  plannerGroups?: Array<PlannerGroup>;
  /**
   * Tag catalog profiles in use for plant
   */
  tagCatalogProfiles?: Array<CatalogProfile>;
  /**
   * Equipment catalog profiles in use for plant
   */
  equipmentCatalogProfiles?: Array<CatalogProfile>;
  /**
   * Surface degradations factors for plant
   */
  surfaceDegradationFactors?: Array<SurfaceDegradationFactor>;
  /**
   * An identifier to the revision (shutdown or campaign work)
   */
  revisions?: Array<PlanningPlantRevision>;
};
