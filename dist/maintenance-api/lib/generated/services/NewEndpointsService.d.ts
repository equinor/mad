import type { ProblemDetails } from '../models/ProblemDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class NewEndpointsService {
    /**
     * Equipment - Attachment download
     * ### Overview
     * Download single attachment for equipment.
     *
     * The applicable document types are: `B10`, `B30`, `A01`, `A02`.
     *
     * @returns binary Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static downloadEquipmentAttachment({ equipmentId, attachmentId, }: {
        equipmentId: string;
        attachmentId: string;
    }): CancelablePromise<Blob | ProblemDetails>;
}
