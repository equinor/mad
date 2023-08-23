import {
	ActivityReportsService,
	FailureReportsService,
	MasterDataForPlantsService,
	ModificationProposalsService,
	TagService,
	EquipmentService,
	CertificationReportsService,
	CorrectiveWorkOrdersService,
	MaintenanceConceptsService,
	MaintenancePlansService,
	MaintenanceRecordRelationshipsService,
	MaintenanceRecordsService,
	MaintenanceStrategiesService,
	MasterDataForMaintenanceRecordsService,
	MasterDataForWorkOrdersService,
	MeasuringPointsService,
	ModificationWorkOrdersService,
	PreventiveWorkOrdersService,
	ProjectWorkOrdersService,
	SasChangeWorkOrdersService,
	SubseaWorkOrdersService,
	TechnicalClarificationsService,
	TechnicalInformationUpdateRequestsService,
	WorkOrderOperationsService,
	WorkOrderRelationshipsService,
	WorkOrdersService,
	ProblemDetails,
} from "./generated";

export class Plants {
	public static Tag = TagService;
	public static Equipment = EquipmentService;
	public static MasterData = MasterDataForPlantsService;
}

export class MaintenanceRecords {
	public static ActivityReports = ActivityReportsService;
	public static FailureReports = FailureReportsService;
	public static ModificationProposals = ModificationProposalsService;
	public static CertificationReports = CertificationReportsService;
	public static TechnicalInformation = TechnicalInformationUpdateRequestsService;
	public static TechnicalClarifications = TechnicalClarificationsService;
	public static MaintenanceRecords = MaintenanceRecordsService;
	public static MaintenanceRecordRelationships = MaintenanceRecordRelationshipsService;
	public static MasterDataForMaintenanceRecords = MasterDataForMaintenanceRecordsService;
	public static MasterDataForWorkOrders = MasterDataForWorkOrdersService;
}

export class WorkOrders {
	public static WorkOrders = WorkOrdersService;
	public static WorkOrderOperations = WorkOrderOperationsService;
	public static WorkOrderRelationships = WorkOrderRelationshipsService;
	public static CorrectiveWorkOrders = CorrectiveWorkOrdersService;
	public static PreventiveWorkOrders = PreventiveWorkOrdersService;
	public static SASChangeWorkOrders = SasChangeWorkOrdersService;
	public static ProjectWorkOrders = ProjectWorkOrdersService;
	public static ModificationWorkOrders = ModificationWorkOrdersService;
	public static SubseaWorkOrders = SubseaWorkOrdersService;
}

export const MeasuringPoints = MeasuringPointsService;

export class MaintenanceProgram {
	public static MaintenancePlans = MaintenancePlansService;
	public static MaintenanceConcepts = MaintenanceConceptsService;
	public static MaintenanceStrategies = MaintenanceStrategiesService;
}

export const filterMaintenanceApiProblem = <T>(result: T | ProblemDetails): T => {
	const isProblemDetailsObject = (obj: any): obj is ProblemDetails => !!obj?.errors;
	if (isProblemDetailsObject(result)) throw result;
	return result as T;
};
