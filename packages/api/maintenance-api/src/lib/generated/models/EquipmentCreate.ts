/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EquipmentCreate = {
    equipment: string;
    /**
     * The category the equipment belongs to. Only `R` is supported for create. `G` = Tank Customer equipment, `M` = Machines/Equipment, `P` = Production resources/tools, `Q` = Test/measurement equipment, `R` = Process Equipment, `S` = Customer equipment, `T` = IT Equipment, `U` = Subsea Equipment, `W` = Wind Operation Certified Equip, `Y` = Tool Crib
     */
    equipmentCategoryId: string;
    /**
     * The maintenance concept for the tag. More details available through endpoint `/maintenance-concepts/{concept-id}`
     */
    maintenanceConceptId?: string;
    installedAtTag?: {
        tagId?: string | null;
        tagPlantId?: string;
    };
};

