import type { ModificationProposalSimple } from './ModificationProposalSimple';
export type ModificationProposalSimpleSelf = (ModificationProposalSimple & {
    maintenanceRecordTypeId: 'modificationProposal';
    _links: {
        self?: string;
    };
});
