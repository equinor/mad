export type MaintenanceRecordMinimal = {
    recordId: string;
    recordResource: 'maintenance-records/modification-proposals' | 'maintenance-records/failure-reports' | 'maintenance-records/activity-reports' | 'maintenance-records/technical-information-update-requests' | 'maintenance-records/technical-clarifications' | 'maintenance-records/certification-reports' | 'maintenance-records/unsupported-resource';
    tagId: string | null;
    tagPlantId: string;
    equipmentId?: string;
    title: string;
    source: 'ObjectList' | 'TechnicalFeedback';
    /**
     * Reference to the specific element the relationship will be defined for. The specific format for this value will depend on the `source` type and the value should be found using lookup of the work order.
     */
    sourceId: string;
    _links: {
        self?: string;
    };
};
