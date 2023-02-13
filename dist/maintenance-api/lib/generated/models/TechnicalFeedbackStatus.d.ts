import type { TechnicalFeedbackReason } from './TechnicalFeedbackReason';
export type TechnicalFeedbackStatus = {
    feedbackStatusId: string;
    feedbackStatus: string;
    reasons: Array<TechnicalFeedbackReason> | null;
};
