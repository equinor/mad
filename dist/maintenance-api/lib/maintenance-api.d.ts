import { ActivityReportsService, FailureReportsService, MasterDataForPlantsService, ModificationProposalsService, TagEquipmentService, CertificationReportsService, CorrectiveWorkOrdersService, MaintenanceConceptsService, MaintenancePlansService, MaintenanceRecordRelationshipsService, MaintenanceRecordsService, MaintenanceStrategiesService, MasterDataForMaintenanceRecordsService, MasterDataForWorkOrdersService, MeasuringPointsService, ModificationWorkOrdersService, PreventiveWorkOrdersService, ProjectWorkOrdersService, SasChangeWorkOrdersService, SubseaWorkOrdersService, TechnicalClarificationsService, TechnicalInformationUpdateRequestsService, WorkOrderOperationsService, WorkOrderRelationshipsService, WorkOrdersService } from './generated';
export declare class Plants {
    static TagAndEquipment: typeof TagEquipmentService;
    static MasterData: typeof MasterDataForPlantsService;
}
export declare class MaintenanceRecords {
    static ActivityReports: typeof ActivityReportsService;
    static FailureReports: typeof FailureReportsService;
    static ModificationProposals: typeof ModificationProposalsService;
    static CertificationReports: typeof CertificationReportsService;
    static TechnicalInformation: typeof TechnicalInformationUpdateRequestsService;
    static TechnicalClarifications: typeof TechnicalClarificationsService;
    static MaintenanceRecords: typeof MaintenanceRecordsService;
    static MaintenanceRecordRelationships: typeof MaintenanceRecordRelationshipsService;
    static MasterDataForMaintenanceRecords: typeof MasterDataForMaintenanceRecordsService;
    static MasterDataForWorkOrders: typeof MasterDataForWorkOrdersService;
}
export declare class WorkOrders {
    static WorkOrders: typeof WorkOrdersService;
    static WorkOrderOperations: typeof WorkOrderOperationsService;
    static WorkOrderRelationships: typeof WorkOrderRelationshipsService;
    static CorrectiveWorkOrders: typeof CorrectiveWorkOrdersService;
    static PreventiveWorkOrders: typeof PreventiveWorkOrdersService;
    static SASChangeWorkOrders: typeof SasChangeWorkOrdersService;
    static ProjectWorkOrders: typeof ProjectWorkOrdersService;
    static ModificationWorkOrders: typeof ModificationWorkOrdersService;
    static SubseaWorkOrders: typeof SubseaWorkOrdersService;
}
export declare const MeasuringPoints: typeof MeasuringPointsService;
export declare class MaintenanceProgram {
    static MaintenancePlans: typeof MaintenancePlansService;
    static MaintenanceConcepts: typeof MaintenanceConceptsService;
    static MaintenanceStrategies: typeof MaintenanceStrategiesService;
}
