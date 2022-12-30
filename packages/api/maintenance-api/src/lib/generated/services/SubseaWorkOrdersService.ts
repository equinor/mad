/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProblemDetails } from '../models/ProblemDetails';
import type { SubseaWorkOrder } from '../models/SubseaWorkOrder';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubseaWorkOrdersService {
  /**
   * Subsea Work order - Lookup
   * ### Overview
   * Lookup single Subsea Work order with related information.
   *
   * ### Important information
   * By default `include-person-responsible` is false and then the fields `personResponsibleId` and `personResponsibleEmail` will always have null value.
   *
   * ### Update release v1.4.0
   * Introduced property calculationKey for operations.
   *
   * ### Update release v1.5.0
   * Added createdDateTime for attachments.
   *
   * Added revisionId and revision to work order response (represents shutdown or campaign work).
   *
   * ### Update release v1.7.0
   * Added tagsRelated to the response.
   *
   * Adding sourceId to related maintenance records.
   *
   * ### Update release v1.8.0
   * Introduced property activeStatusIds for operations.
   *
   * @returns SubseaWorkOrder Success
   * @returns ProblemDetails Response for other HTTP status codes
   * @throws ApiError
   */
  public static lookupSubseaWorkOrder({
    workOrderId,
    includeOperations = true,
    includeMaterials = true,
    includeAttachments = false,
    includePersonResponsible = false,
    includeStatusDetails = false,
    includeRelatedTags = false,
  }: {
    workOrderId: string;
    /**
     * Include Work order operations
     */
    includeOperations?: boolean;
    /**
     * Include materials for Work order operations
     */
    includeMaterials?: boolean;
    /**
     * Include Work order attachments (on header and for operation)
     */
    includeAttachments?: boolean;
    /**
     * Include person responsible information in response. If user does not have sufficient rights, this will return a `403` response
     */
    includePersonResponsible?: boolean;
    /**
     * Include detailed information for statuses (both active and non-active)
     */
    includeStatusDetails?: boolean;
    /**
     * Include related tags (from object list)
     */
    includeRelatedTags?: boolean;
  }): CancelablePromise<SubseaWorkOrder | ProblemDetails> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/work-orders/subsea-work-orders/{work-order-id}',
      path: {
        'work-order-id': workOrderId,
      },
      query: {
        'include-operations': includeOperations,
        'include-materials': includeMaterials,
        'include-attachments': includeAttachments,
        'include-person-responsible': includePersonResponsible,
        'include-status-details': includeStatusDetails,
        'include-related-tags': includeRelatedTags,
      },
      errors: {
        301: `If work-order-id exist, but is not a \`subseaWorkOrder\`, the response is a HTTP 301 Moved Permanently with the url to the resource in the HTTP header Location.
                `,
        404: `The specified resource was not found`,
      },
    });
  }

  /**
   * Subsea Work order - Attachment download
   * Download single attachment for subsea work order
   * @returns binary Success
   * @returns ProblemDetails Response for other HTTP status codes
   * @throws ApiError
   */
  public static downloadSubseaWorkOrderAttachment({
    recordId,
    attachmentId,
  }: {
    recordId: string;
    attachmentId: string;
  }): CancelablePromise<Blob | ProblemDetails> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/work-orders/subsea-work-orders/{record-id}/attachments/{attachment-id}',
      path: {
        'record-id': recordId,
        'attachment-id': attachmentId,
      },
      errors: {
        404: `The specified resource was not found`,
      },
    });
  }
}
