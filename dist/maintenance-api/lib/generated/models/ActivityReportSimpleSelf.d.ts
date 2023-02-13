import type { ActivityReportSimple } from './ActivityReportSimple';
export type ActivityReportSimpleSelf = (ActivityReportSimple & {
    maintenanceRecordTypeId: 'activityReport';
    _links: {
        self?: string;
    };
});
