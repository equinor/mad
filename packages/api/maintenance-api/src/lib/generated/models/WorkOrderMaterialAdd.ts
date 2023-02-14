/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkOrderMaterialAdd = {
  materialId?: string;
  equipmentId?: string;
  quantity: number;
  /**
   * Commonly used values:
   * PC - Pieces
   * L - Liters
   * KG - Kilograms
   * M - Meters
   *
   */
  quantityUnitId: string;
  /**
   * Specifies the date and time for when the material is needed at its destination
   */
  requiredDatetime?: string | null;
};
