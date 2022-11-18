/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { ActivityReportsService } from './services/ActivityReportsService';
import { CertificationReportsService } from './services/CertificationReportsService';
import { CorrectiveWorkOrdersService } from './services/CorrectiveWorkOrdersService';
import { FailureReportsService } from './services/FailureReportsService';
import { MaintenanceConceptsService } from './services/MaintenanceConceptsService';
import { MaintenancePlansService } from './services/MaintenancePlansService';
import { MaintenanceRecordRelationshipsService } from './services/MaintenanceRecordRelationshipsService';
import { MaintenanceRecordsService } from './services/MaintenanceRecordsService';
import { MaintenanceStrategiesService } from './services/MaintenanceStrategiesService';
import { MasterDataForMaintenanceRecordsService } from './services/MasterDataForMaintenanceRecordsService';
import { MasterDataForPlantsService } from './services/MasterDataForPlantsService';
import { MasterDataForWorkOrdersService } from './services/MasterDataForWorkOrdersService';
import { MeasuringPointsService } from './services/MeasuringPointsService';
import { ModificationProposalsService } from './services/ModificationProposalsService';
import { ModificationWorkOrdersService } from './services/ModificationWorkOrdersService';
import { ModifiedEndpointsService } from './services/ModifiedEndpointsService';
import { NewEndpointsService } from './services/NewEndpointsService';
import { PreventiveWorkOrdersService } from './services/PreventiveWorkOrdersService';
import { ProjectWorkOrdersService } from './services/ProjectWorkOrdersService';
import { SasChangeWorkOrdersService } from './services/SasChangeWorkOrdersService';
import { SubseaWorkOrdersService } from './services/SubseaWorkOrdersService';
import { TagEquipmentService } from './services/TagEquipmentService';
import { TechnicalClarificationsService } from './services/TechnicalClarificationsService';
import { TechnicalInformationUpdateRequestsService } from './services/TechnicalInformationUpdateRequestsService';
import { WorkOrderOperationsService } from './services/WorkOrderOperationsService';
import { WorkOrderRelationshipsService } from './services/WorkOrderRelationshipsService';
import { WorkOrdersService } from './services/WorkOrdersService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ApiClient {

    public readonly activityReports: ActivityReportsService;
    public readonly certificationReports: CertificationReportsService;
    public readonly correctiveWorkOrders: CorrectiveWorkOrdersService;
    public readonly failureReports: FailureReportsService;
    public readonly maintenanceConcepts: MaintenanceConceptsService;
    public readonly maintenancePlans: MaintenancePlansService;
    public readonly maintenanceRecordRelationships: MaintenanceRecordRelationshipsService;
    public readonly maintenanceRecords: MaintenanceRecordsService;
    public readonly maintenanceStrategies: MaintenanceStrategiesService;
    public readonly masterDataForMaintenanceRecords: MasterDataForMaintenanceRecordsService;
    public readonly masterDataForPlants: MasterDataForPlantsService;
    public readonly masterDataForWorkOrders: MasterDataForWorkOrdersService;
    public readonly measuringPoints: MeasuringPointsService;
    public readonly modificationProposals: ModificationProposalsService;
    public readonly modificationWorkOrders: ModificationWorkOrdersService;
    public readonly modifiedEndpoints: ModifiedEndpointsService;
    public readonly newEndpoints: NewEndpointsService;
    public readonly preventiveWorkOrders: PreventiveWorkOrdersService;
    public readonly projectWorkOrders: ProjectWorkOrdersService;
    public readonly sasChangeWorkOrders: SasChangeWorkOrdersService;
    public readonly subseaWorkOrders: SubseaWorkOrdersService;
    public readonly tagEquipment: TagEquipmentService;
    public readonly technicalClarifications: TechnicalClarificationsService;
    public readonly technicalInformationUpdateRequests: TechnicalInformationUpdateRequestsService;
    public readonly workOrderOperations: WorkOrderOperationsService;
    public readonly workOrderRelationships: WorkOrderRelationshipsService;
    public readonly workOrders: WorkOrdersService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://api-test.gateway.equinor.com/maintenance-api',
            VERSION: config?.VERSION ?? '1.13.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.activityReports = new ActivityReportsService(this.request);
        this.certificationReports = new CertificationReportsService(this.request);
        this.correctiveWorkOrders = new CorrectiveWorkOrdersService(this.request);
        this.failureReports = new FailureReportsService(this.request);
        this.maintenanceConcepts = new MaintenanceConceptsService(this.request);
        this.maintenancePlans = new MaintenancePlansService(this.request);
        this.maintenanceRecordRelationships = new MaintenanceRecordRelationshipsService(this.request);
        this.maintenanceRecords = new MaintenanceRecordsService(this.request);
        this.maintenanceStrategies = new MaintenanceStrategiesService(this.request);
        this.masterDataForMaintenanceRecords = new MasterDataForMaintenanceRecordsService(this.request);
        this.masterDataForPlants = new MasterDataForPlantsService(this.request);
        this.masterDataForWorkOrders = new MasterDataForWorkOrdersService(this.request);
        this.measuringPoints = new MeasuringPointsService(this.request);
        this.modificationProposals = new ModificationProposalsService(this.request);
        this.modificationWorkOrders = new ModificationWorkOrdersService(this.request);
        this.modifiedEndpoints = new ModifiedEndpointsService(this.request);
        this.newEndpoints = new NewEndpointsService(this.request);
        this.preventiveWorkOrders = new PreventiveWorkOrdersService(this.request);
        this.projectWorkOrders = new ProjectWorkOrdersService(this.request);
        this.sasChangeWorkOrders = new SasChangeWorkOrdersService(this.request);
        this.subseaWorkOrders = new SubseaWorkOrdersService(this.request);
        this.tagEquipment = new TagEquipmentService(this.request);
        this.technicalClarifications = new TechnicalClarificationsService(this.request);
        this.technicalInformationUpdateRequests = new TechnicalInformationUpdateRequestsService(this.request);
        this.workOrderOperations = new WorkOrderOperationsService(this.request);
        this.workOrderRelationships = new WorkOrderRelationshipsService(this.request);
        this.workOrders = new WorkOrdersService(this.request);
    }
}

