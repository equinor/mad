/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CharacteristicAdd } from "./CharacteristicAdd";

export type EquipmentAddClass = {
  /**
   * The class which contains the characteristics
   */
  classId: string;
  /**
   * Specific characteristics in the class to define a value for
   */
  characteristics?: Array<CharacteristicAdd>;
};
