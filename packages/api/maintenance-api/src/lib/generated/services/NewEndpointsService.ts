/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NewEndpointsService {
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
  public static downloadEquipmentAttachment({
    equipmentId,
    attachmentId,
  }: {
    equipmentId: string;
    attachmentId: string;
  }): CancelablePromise<Blob | ProblemDetails> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/equipment/{equipment-id}/attachments/{attachment-id}',
      path: {
        'equipment-id': equipmentId,
        'attachment-id': attachmentId,
      },
      errors: {
        404: `The specified resource was not found`,
      },
    });
  }
}
