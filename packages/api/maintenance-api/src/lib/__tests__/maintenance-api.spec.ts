import { ProblemDetails } from "../generated";
import * as mApi from "../maintenance-api";

describe("Maintenance Program", () => {
    it("should have Maintenance Concepts endpoints", () => {
        expect(mApi.MaintenanceProgram["MaintenanceConcepts"]).toBeTruthy();
    });
    it("should have Maintenance Plans endpoints", () => {
        expect(mApi.MaintenanceProgram["MaintenancePlans"]).toBeTruthy();
    });
    it("should have Maintenance Strategies endpoints", () => {
        expect(mApi.MaintenanceProgram["MaintenanceStrategies"]).toBeTruthy();
    });
});

describe("Maintenance Records", () => {
    it("should have Activity Reports endpoints", () => {
        expect(mApi.MaintenanceRecords["ActivityReports"]).toBeTruthy();
    });
    it("should have Certification Reports endpoints", () => {
        expect(mApi.MaintenanceRecords["CertificationReports"]).toBeTruthy();
    });
    it("should have Failure Reports endpoints", () => {
        expect(mApi.MaintenanceRecords["FailureReports"]).toBeTruthy();
    });
    it("should have Maitnenance Record Relationships endpoints", () => {
        expect(mApi.MaintenanceRecords["MaintenanceRecordRelationships"]).toBeTruthy();
    });
    it("should have Maintenance Records endpoints", () => {
        expect(mApi.MaintenanceRecords["MaintenanceRecords"]).toBeTruthy();
    });
    it("should have Master Data For Maintenance Records endpoints", () => {
        expect(mApi.MaintenanceRecords["MasterDataForMaintenanceRecords"]).toBeTruthy();
    });
    it("should have Master Data For Work Orders endpoints", () => {
        expect(mApi.MaintenanceRecords["MasterDataForWorkOrders"]).toBeTruthy();
    });
    it("should have Modification Proposals endpoints", () => {
        expect(mApi.MaintenanceRecords["ModificationProposals"]).toBeTruthy();
    });
    it("should have Technical Clarifications endpoints", () => {
        expect(mApi.MaintenanceRecords["TechnicalClarifications"]).toBeTruthy();
    });
    it("should have Technical Information endpoints", () => {
        expect(mApi.MaintenanceRecords["TechnicalInformation"]).toBeTruthy();
    });
});

describe("Measuring Points", () => {
    it("should have endpoints", () => {
        expect(mApi.MeasuringPoints).toBeTruthy();
    });
});

describe("Plants", () => {
    it("should have Tag endpoints", () => {
        expect(mApi.Plants["Tag"]).toBeTruthy();
    });
    it("should have Equipment endpoints", () => {
        expect(mApi.Plants["Equipment"]).toBeTruthy();
    });
    it("should have Documents endpoints", () => {
        expect(mApi.Plants["Documents"]).toBeTruthy();
    });
    it("should have Master Data endpoints", () => {
        expect(mApi.Plants["MasterData"]).toBeTruthy();
    });
});

describe("Work Orders", () => {
    it("should have Corrective Work Orders endpoints", () => {
        expect(mApi.WorkOrders["CorrectiveWorkOrders"]).toBeTruthy();
    });
    it("should have Modification Work Orders endpoints", () => {
        expect(mApi.WorkOrders["ModificationWorkOrders"]).toBeTruthy();
    });
    it("should have Preventive Work Orders endpoints", () => {
        expect(mApi.WorkOrders["PreventiveWorkOrders"]).toBeTruthy();
    });
    it("should have SAS Change Work Orders endpoints", () => {
        expect(mApi.WorkOrders["SASChangeWorkOrders"]).toBeTruthy();
    });
    it("should have Subsea Work Orders endpoints", () => {
        expect(mApi.WorkOrders["SubseaWorkOrders"]).toBeTruthy();
    });
    it("should have Work Order Operations endpoints", () => {
        expect(mApi.WorkOrders["WorkOrderOperations"]).toBeTruthy();
    });
    it("should have Work Order Relationships endpoints", () => {
        expect(mApi.WorkOrders["WorkOrderRelationships"]).toBeTruthy();
    });
    it("should have Work Orders endpoints", () => {
        expect(mApi.WorkOrders["WorkOrders"]).toBeTruthy();
    });
});

describe("Master Data", () => {
    it("should have Master Data For Catalogs endpoints", () => {
        expect(mApi.GeneralMasterData["Catalogs"]).toBeTruthy();
    });
    it("should have Master Data For Characteristics endpoints", () => {
        expect(mApi.GeneralMasterData["Characteristics"]).toBeTruthy();
    });
    it("should have Master Data For Maintenance Records endpoints", () => {
        expect(mApi.GeneralMasterData["MaintenanceRecords"]).toBeTruthy();
    });
    it("should have Master Data For Work Orders endpoints", () => {
        expect(mApi.GeneralMasterData["WorkOrders"]).toBeTruthy();
    });
    it("should have Master Data For Plants endpoints", () => {
        expect(mApi.GeneralMasterData["Plants"]).toBeTruthy();
    });
});

describe("Maintenance api problem filter", () => {
    it("should throw on problem details result", () => {
        const apiResponse: ProblemDetails = {
            type: "Some error",
            title: "Error title",
            status: 404,
            errors: {
                first: ["Things went south", "All hell broke loose"],
                second: ["Shit happens"],
            },
        };
        expect(() => mApi.filterMaintenanceApiProblem(apiResponse)).toThrow();
    });
    it("should not throw on void results", () => {
        const apiResponse = undefined;
        expect(() => mApi.filterMaintenanceApiProblem(apiResponse)).not.toThrow();
    });
});
