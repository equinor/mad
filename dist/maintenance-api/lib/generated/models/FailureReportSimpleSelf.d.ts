import type { FailureReportSimple } from './FailureReportSimple';
export type FailureReportSimpleSelf = (FailureReportSimple & {
    maintenanceRecordTypeId: 'failureReport';
    _links: {
        self?: string;
    };
});
