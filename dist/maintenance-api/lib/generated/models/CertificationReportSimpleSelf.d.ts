import type { CertificationReportSimple } from './CertificationReportSimple';
export type CertificationReportSimpleSelf = (CertificationReportSimple & {
    maintenanceRecordTypeId: 'certificationReport';
    _links: {
        self?: string;
    };
});
