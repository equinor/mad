export type MaintenancePlanEquipment = {
    objectId: string;
    tagId: string | null;
    tagPlantId: string;
    tag: string;
    equipmentId: string;
    equipment: string;
    /**
     * Field used to assist in grouping/sorting
     */
    sortField: string;
};
