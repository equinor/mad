export type MadConfig = {
    appVersion: string;
    servicePortalName: ServicePortalName;
    authentication: {
        clientId: string;
        redirectUri: string;
    };
};

export type ServicePortalName =
    | "Asset Facts"
    | "CodeOfConduct"
    | "CountryInformation"
    | "DFU"
    | "EXPENSE & PAY"
    | "Ergonomics"
    | "Flyt"
    | "HearingTest"
    | "MS Assessment"
    | "Notifications"
    | "OMFunctionalLocationsOCR"
    | "OmInspection"
    | "OpsPlan"
    | "PleaseFix"
    | "PleaseInspect"
    | "PleaseMove"
    | "WorkOrders"
    | "WorkPermits";
