import { __awaiter } from "tslib";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import axios from 'axios';
import FormData from 'form-data';
import { ApiError } from './ApiError';
import { CancelablePromise } from './CancelablePromise';
const isDefined = (value) => {
    return value !== undefined && value !== null;
};
const isString = (value) => {
    return typeof value === 'string';
};
const isStringWithValue = (value) => {
    return isString(value) && value !== '';
};
const isBlob = (value) => {
    return (typeof value === 'object' &&
        typeof value.type === 'string' &&
        typeof value.stream === 'function' &&
        typeof value.arrayBuffer === 'function' &&
        typeof value.constructor === 'function' &&
        typeof value.constructor.name === 'string' &&
        /^(Blob|File)$/.test(value.constructor.name) &&
        /^(Blob|File)$/.test(value[Symbol.toStringTag]));
};
const isFormData = (value) => {
    return value instanceof FormData;
};
const isSuccess = (status) => {
    return status >= 200 && status < 300;
};
const base64 = (str) => {
    try {
        return btoa(str);
    }
    catch (err) {
        // @ts-ignore
        return Buffer.from(str).toString('base64');
    }
};
const getQueryString = (params) => {
    const qs = [];
    const append = (key, value) => {
        qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    };
    const process = (key, value) => {
        if (isDefined(value)) {
            if (Array.isArray(value)) {
                value.forEach((v) => {
                    process(key, v);
                });
            }
            else if (typeof value === 'object') {
                Object.entries(value).forEach(([k, v]) => {
                    process(`${key}[${k}]`, v);
                });
            }
            else {
                append(key, value);
            }
        }
    };
    Object.entries(params).forEach(([key, value]) => {
        process(key, value);
    });
    if (qs.length > 0) {
        return `?${qs.join('&')}`;
    }
    return '';
};
const getUrl = (config, options) => {
    const encoder = config.ENCODE_PATH || encodeURI;
    const path = options.url
        .replace('{api-version}', config.VERSION)
        .replace(/{(.*?)}/g, (substring, group) => {
        var _a;
        if ((_a = options.path) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(group)) {
            return encoder(String(options.path[group]));
        }
        return substring;
    });
    const url = `${config.BASE}${path}`;
    if (options.query) {
        return `${url}${getQueryString(options.query)}`;
    }
    return url;
};
const getFormData = (options) => {
    if (options.formData) {
        const formData = new FormData();
        const process = (key, value) => {
            if (isString(value) || isBlob(value)) {
                formData.append(key, value);
            }
            else {
                formData.append(key, JSON.stringify(value));
            }
        };
        Object.entries(options.formData)
            .filter(([_, value]) => isDefined(value))
            .forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach((v) => process(key, v));
            }
            else {
                process(key, value);
            }
        });
        return formData;
    }
    return undefined;
};
const resolve = (options, resolver) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof resolver === 'function') {
        return resolver(options);
    }
    return resolver;
});
const getHeaders = (config, options, formData) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield resolve(options, config.TOKEN);
    const username = yield resolve(options, config.USERNAME);
    const password = yield resolve(options, config.PASSWORD);
    const additionalHeaders = yield resolve(options, config.HEADERS);
    const formHeaders = (typeof (formData === null || formData === void 0 ? void 0 : formData.getHeaders) === 'function' && (formData === null || formData === void 0 ? void 0 : formData.getHeaders())) || {};
    const headers = Object.entries(Object.assign(Object.assign(Object.assign({ Accept: 'application/json' }, additionalHeaders), options.headers), formHeaders))
        .filter(([_, value]) => isDefined(value))
        .reduce((headers, [key, value]) => (Object.assign(Object.assign({}, headers), { [key]: String(value) })), {});
    if (isStringWithValue(token)) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    if (isStringWithValue(username) && isStringWithValue(password)) {
        const credentials = base64(`${username}:${password}`);
        headers['Authorization'] = `Basic ${credentials}`;
    }
    if (options.body) {
        if (options.mediaType) {
            headers['Content-Type'] = options.mediaType;
        }
        else if (isBlob(options.body)) {
            headers['Content-Type'] = options.body.type || 'application/octet-stream';
        }
        else if (isString(options.body)) {
            headers['Content-Type'] = 'text/plain';
        }
        else if (!isFormData(options.body)) {
            headers['Content-Type'] = 'application/json';
        }
    }
    return headers;
});
const getRequestBody = (options) => {
    if (options.body) {
        return options.body;
    }
    return undefined;
};
const sendRequest = (config, options, url, body, formData, headers, onCancel) => __awaiter(void 0, void 0, void 0, function* () {
    const source = axios.CancelToken.source();
    const requestConfig = {
        url,
        headers,
        data: body !== null && body !== void 0 ? body : formData,
        method: options.method,
        withCredentials: config.WITH_CREDENTIALS,
        cancelToken: source.token,
    };
    onCancel(() => source.cancel('The user aborted a request.'));
    try {
        return yield axios.request(requestConfig);
    }
    catch (error) {
        const axiosError = error;
        if (axiosError.response) {
            return axiosError.response;
        }
        throw error;
    }
});
const getResponseHeader = (response, responseHeader) => {
    if (responseHeader) {
        const content = response.headers[responseHeader];
        if (isString(content)) {
            return content;
        }
    }
    return undefined;
};
const getResponseBody = (response) => {
    if (response.status !== 204) {
        return response.data;
    }
    return undefined;
};
const catchErrorCodes = (options, result) => {
    const errors = Object.assign({ 400: 'Bad Request', 401: 'Unauthorized', 403: 'Forbidden', 404: 'Not Found', 500: 'Internal Server Error', 502: 'Bad Gateway', 503: 'Service Unavailable' }, options.errors);
    const error = errors[result.status];
    if (error) {
        throw new ApiError(options, result, error);
    }
    if (!result.ok) {
        throw new ApiError(options, result, 'Generic Error');
    }
};
/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param options The request options from the service
 * @returns CancelablePromise<T>
 * @throws ApiError
 */
export const request = (config, options) => {
    return new CancelablePromise((resolve, reject, onCancel) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            options = Object.assign(Object.assign({}, options), { query: Object.assign(Object.assign({}, options.query), { 'api-version': 'v1' }) });
            const url = getUrl(config, options);
            const formData = getFormData(options);
            const body = getRequestBody(options);
            const headers = yield getHeaders(config, options, formData);
            if (!onCancel.isCancelled) {
                const response = yield sendRequest(config, options, url, body, formData, headers, onCancel);
                const responseBody = getResponseBody(response);
                const responseHeader = getResponseHeader(response, options.responseHeader);
                const result = {
                    url,
                    ok: isSuccess(response.status),
                    status: response.status,
                    statusText: response.statusText,
                    body: responseHeader !== null && responseHeader !== void 0 ? responseHeader : responseBody,
                };
                catchErrorCodes(options, result);
                resolve(result.body);
            }
        }
        catch (error) {
            reject(error);
        }
    }));
};
