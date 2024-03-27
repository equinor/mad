/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BillOfMaterialItem = {
    /**
     * Internal Id for bill of material item
     */
    bomItemId?: string;
    /**
     * Bill of material type. The bill of material can be linked to the tag (type `T`), the installed equipment (type `E`) or to a material (type `M`)
     */
    bomTypeId?: 'T' | 'M' | 'E';
    /**
     * The material id or number
     */
    materialId?: string;
    /**
     * Material name
     */
    material?: string;
    quantity?: number;
    /**
     * The unit for quantity, typically `PC` representing pieces
     */
    quantityUnitId?: string;
    /**
     * If the `bomTypeId` is `T` and this is the top-level node, the `parentTagId` will be populated. If it's not the top-level node, `parentBOMItemId` will be populated.
     */
    parentTagId?: string | null;
    /**
     * If the `bomTypeId` is `E` and this is the top-level node, the `parentEquipmentId` will be populated. If it's not the top-level node, `parentBOMItemId` will be populated.
     */
    parentEquipmentId?: string;
    /**
     * If the `bomTypeId` is `E` or `M` and this is the top-level node, the `parentMaterialId` can be populated. If it's not the top-level node, `parentBOMItemId` will be populated.
     */
    parentMaterialId?: string;
    /**
     * If the `bomTypeId` is `M`, the `parentBOMItemId` will be populated
     */
    parentBOMItemId?: string;
};

