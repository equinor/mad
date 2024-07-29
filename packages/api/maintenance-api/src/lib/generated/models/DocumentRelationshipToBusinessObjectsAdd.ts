/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DocumentRelationshipToBusinessObjectsAdd = {
    /**
     * Reference to the specific element the relationship will be
     * defined for. The specific format for this value will depend on the `relationshipType` type.
     *
     * - For tags, combine `tagPlantId`, `-`, and `tagId`. Ex. `1100-AE5566`.
     * - For equipment, use `equipmentId`. Ex. `11948620`.
     * - For measuring points, use `measuringPointId`. Ex. `14626974`.
     * - For maintenance records, use `maintenanceRecordId`. Ex. `45939208`.
     * - For materials, use `materialId`. Ex. `741466`
     *
     */
    sourceId: string;
    /**
     * The type of business object for the specified `sourceId`.
     */
    relationshipType: 'tags' | 'equipment' | 'measuring-points' | 'maintenance-records' | 'materials';
};

