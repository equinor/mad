import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { authenticateSilently } from './auth';
import { metricKeys, metricStatus, track } from '@equinor/mad-insights';
import * as FileSystem from 'expo-file-system';
import * as Device from 'expo-device';

export type BaseResource = {
  scopes: string[];
  apiBaseUrl: string;
  subscriptionKey?: string;
};

export type BaseAPIOptions = AxiosRequestConfig & {
  authenticate?: boolean;
};


export type DownloadFileOptions = BaseAPIOptions & {
  filePath?: string;
};

const defaultOptions = {
  authenticate: true,
  headers: {}
};

const defaultFileDownloadOptions = {
  ...defaultOptions,
  filePath: FileSystem.cacheDirectory || undefined,
};

class BaseApiService {
  url: string;

  scopes: string[];

  subscriptionKey?: string;

  appSpecificDefaultHeaderFunction: (() => Record<string, string>);

  constructor(
    resource: BaseResource,

    /**
     * Function that should return a header to be used in all api calls.
     */
    appSpecificDefaultHeaderFunction?: () => Record<string, string>
  ) {
    this.url = resource.apiBaseUrl;
    this.scopes = resource.scopes;
    this.subscriptionKey = resource.subscriptionKey;
    this.appSpecificDefaultHeaderFunction =
      appSpecificDefaultHeaderFunction || (() => ({}));
  }

  async get(path: string, options: BaseAPIOptions = defaultOptions) {
    options = { ...defaultOptions, ...options };
    const tokenRes = options.authenticate
      ? await authenticateSilently(this.scopes)
      : undefined;
    const apiUrl = this.url + path;
    track(
      metricKeys.API_GET,
      metricStatus.STARTED,
      path,
      createDefaultLogObject(apiUrl)
    );
    return axios
      .get(apiUrl, {
        ...options,
        headers: {
          ...this.defaultHeader(tokenRes),
          ...this.appSpecificDefaultHeaderFunction(),
          ...options.headers,
        },
      })
      .then((res) => {
        track(
          metricKeys.API_GET,
          metricStatus.SUCCESS,
          path,
          createDefaultLogObject(apiUrl)
        );
        return res;
      })
      .catch((error: AxiosError | Error) => {
        track(
          metricKeys.API_GET,
          metricStatus.FAILED,
          path,
          createErrorObject(error, apiUrl)
        );
        throw error;
      });
  }

  async post(
    path: string,
    data: unknown,
    options: BaseAPIOptions = defaultOptions
  ) {
    options = { ...defaultOptions, ...options };
    const tokenRes = options.authenticate
      ? await authenticateSilently(this.scopes)
      : undefined;
    const apiUrl = this.url + path;
    track(
      metricKeys.API_POST,
      metricStatus.STARTED,
      path,
      createDefaultLogObject(apiUrl)
    );
    return axios
      .post(this.url + path, data, {
        ...options,
        headers: {
          ...this.defaultHeader(tokenRes),
          ...this.appSpecificDefaultHeaderFunction(),
          ...options.headers,
        },
      },)
      .then((res) => {
        track(
          metricKeys.API_POST,
          metricStatus.SUCCESS,
          path,
          createDefaultLogObject(apiUrl)
        );
        return res;
      })
      .catch((error: AxiosError | Error) => {
        track(
          metricKeys.API_POST,
          metricStatus.FAILED,
          path,
          createErrorObject(error, apiUrl)
        );
        throw error;
      });
  }

  async put(
    path: string,
    data: unknown,
    options: BaseAPIOptions = defaultOptions
  ) {
    options = { ...defaultOptions, ...options };
    const tokenRes = options.authenticate
      ? await authenticateSilently(this.scopes)
      : undefined;
    const apiUrl = this.url + path;
    track(
      metricKeys.API_PUT,
      metricStatus.STARTED,
      path,
      createDefaultLogObject(apiUrl)
    );
    return axios
      .put(this.url + path, data, {
        ...options,
        headers: {
          ...this.defaultHeader(tokenRes),
          ...this.appSpecificDefaultHeaderFunction(),
          ...options.headers,
        },
      })
      .then((res) => {
        track(
          metricKeys.API_PUT,
          metricStatus.SUCCESS,
          path,
          createDefaultLogObject(apiUrl)
        );
        return res;
      })
      .catch((error: AxiosError | Error) => {
        track(
          metricKeys.API_PUT,
          metricStatus.FAILED,
          path,
          createErrorObject(error, apiUrl)
        );
        throw error;
      });
  }

  async patch(
    path: string,
    data: unknown,
    options: BaseAPIOptions = defaultOptions
  ) {
    options = { ...defaultOptions, ...options };
    const tokenRes = options.authenticate
      ? await authenticateSilently(this.scopes)
      : undefined;
    const apiUrl = this.url + path;
    track(
      metricKeys.API_PATCH,
      metricStatus.STARTED,
      path,
      createDefaultLogObject(apiUrl)
    );
    return axios
      .patch(this.url + path, data, {
        ...options,
        headers: {
          ...this.defaultHeader(tokenRes),
          ...this.appSpecificDefaultHeaderFunction(),
          ...options.headers,
        },
      })
      .then((res) => {
        track(
          metricKeys.API_PATCH,
          metricStatus.SUCCESS,
          path,
          createDefaultLogObject(apiUrl)
        );
        return res;
      })
      .catch((error: AxiosError | Error) => {
        track(
          metricKeys.API_PATCH,
          metricStatus.FAILED,
          path,
          createErrorObject(error, apiUrl)
        );
        throw error;
      });
  }

  async delete(
    path: string,
    data?: unknown,
    options: BaseAPIOptions = defaultOptions
  ) {
    options = { ...defaultOptions, ...options };
    const tokenRes = options.authenticate
      ? await authenticateSilently(this.scopes)
      : undefined;
    const apiUrl = this.url + path;
    track(
      metricKeys.API_DELETE,
      metricStatus.STARTED,
      path,
      createDefaultLogObject(apiUrl)
    );
    return axios
      .delete(this.url + path, {
        ...options,
        headers: {
          ...this.defaultHeader(tokenRes),
          ...this.appSpecificDefaultHeaderFunction(),
          ...options.headers,
        },
        data: data ?? null,
      })
      .then((res) => {
        track(
          metricKeys.API_DELETE,
          metricStatus.SUCCESS,
          path,
          createDefaultLogObject(apiUrl)
        );
        return res;
      })
      .catch((error: AxiosError | Error) => {
        track(
          metricKeys.API_DELETE,
          metricStatus.FAILED,
          path,
          createErrorObject(error, apiUrl)
        );
        throw error;
      });
  }

  /**
   * Generic upload helper function. In most cases you would want to use _uploadFromFileSystem_ instead
   * @param path
   * @param formData
   * @param options
   * @returns
   */
  async uploadFile(
    path: string,
    formData: unknown,
    options: BaseAPIOptions = defaultOptions
  ) {
    options = { ...defaultOptions, ...options };
    const tokenRes = options.authenticate
      ? await authenticateSilently(this.scopes)
      : undefined;
    const apiUrl = this.url + path;
    track(
      metricKeys.API_UPLOAD,
      metricStatus.STARTED,
      path,
      createDefaultLogObject(apiUrl)
    );
    return axios
      .post(this.url + path, formData, {
        ...options,
        headers: {
          ...this.defaultHeader(tokenRes),
          ...this.appSpecificDefaultHeaderFunction(),
          ...options.headers,
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        track(
          metricKeys.API_UPLOAD,
          metricStatus.SUCCESS,
          path,
          createDefaultLogObject(apiUrl)
        );
        return res;
      })
      .catch((error: AxiosError | Error) => {
        track(
          metricKeys.API_UPLOAD,
          metricStatus.FAILED,
          path,
          createErrorObject(error, apiUrl)
        );
        throw error;
      });
  }

  /**
   * upload file from the file system
   * @param path api path
   * @param fileUri path to file in file system
   * @param contentType file type
   * @param options provide additional headers, or disable authentication
   * @returns FileSystemUploadResult
   */
  async uploadFromFileSystem(
    path: string,
    fileUri: string,
    contentType: string,
    options: BaseAPIOptions = defaultOptions
  ) {
    options = { ...defaultOptions, ...options };
    const tokenRes = options.authenticate
      ? await authenticateSilently(this.scopes)
      : undefined;
    const apiUrl = this.url + path;
    track(
      metricKeys.API_UPLOAD,
      metricStatus.STARTED,
      path,
      createDefaultLogObject(apiUrl)
    );
    return FileSystem.uploadAsync(`${this.url}${path}`, fileUri, {
      httpMethod: 'POST',
      headers: {
        ...this.defaultHeader(tokenRes),
        ...this.appSpecificDefaultHeaderFunction(),
        ...options.headers as Record<string, string>, //TODO dangerous ??
        'content-type': contentType,
      },
    })
      .then((res) => {
        track(
          metricKeys.API_UPLOAD,
          metricStatus.SUCCESS,
          path,
          createDefaultLogObject(apiUrl)
        );
        return res;
      })
      .catch((error: AxiosError | Error) => {
        track(
          metricKeys.API_UPLOAD,
          metricStatus.FAILED,
          path,
          createErrorObject(error, apiUrl)
        );
        throw error;
      });
  }

  async downloadToFileSystem(
    path: string,
    fileName: string,
    options: DownloadFileOptions = defaultFileDownloadOptions
  ) {
    options = { ...defaultFileDownloadOptions, ...options };
    const tokenRes = options.authenticate
      ? await authenticateSilently(this.scopes)
      : undefined;
    const apiUrl = this.url + path;
    const headers = {
      ...this.defaultHeader(tokenRes),
      ...this.appSpecificDefaultHeaderFunction(),
      ...options.headers as Record<string, string>, //TODO dangerous?
    };
    const fileUri = `${options.filePath}${fileName}`;
    if (Device.osName === 'iOS' || Device.osName === 'iPadOS') {
      track(
        metricKeys.API_DOWNLOAD,
        metricStatus.STARTED,
        path,
        createDefaultLogObject(apiUrl)
      );
      return await FileSystem.downloadAsync(apiUrl, fileUri, {
        headers,
      })
        .then((res) => {
          track(
            metricKeys.API_DOWNLOAD,
            metricStatus.SUCCESS,
            path,
            createDefaultLogObject(apiUrl)
          );
          return res;
        })
        .catch((error: AxiosError | Error) => {
          track(
            metricKeys.API_DOWNLOAD,
            metricStatus.FAILED,
            path,
            createErrorObject(error, apiUrl)
          );
          throw error;
        });
    }
    if (Device.osName === 'web') {
      track(metricKeys.API_DOWNLOAD, metricStatus.FAILED, 'Web not supported');
      throw 'Download not implemented for web';
    }

    return '';
  }

  defaultHeader = (tokenRes: { accessToken: string } | null | undefined) => ({
    'ContentType': 'application/json',
    'Ocp-Apim-Subscription-Key': this.subscriptionKey
      ? this.subscriptionKey
      : '',
    'Ocp-Apim-Trace': 'true',
    'Authorization': tokenRes ? `Bearer ${tokenRes.accessToken}` : '',
  });
}

function createDefaultLogObject(apiUrl: string) {
  return { apiUrl };
}

function createErrorObject(
  error: AxiosError | Error | unknown,
  apiUrl?: string
) {
  // In the future we probably want more details in the log, which is why
  // we separate axios errors and normal errors below, even though they
  // currently return the same parameter
  if (axios.isAxiosError(error)) {
    return { errorMessage: error.message, apiUrl };
  } else if ((error as Error)?.message) {
    return { errorMessage: (error as Error)?.message, apiUrl };
  }
  return { errorMessage: 'Unknown error', apiUrl };
}

export default BaseApiService;
