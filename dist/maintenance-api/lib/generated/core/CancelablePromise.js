/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export class CancelError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CancelError';
    }
    get isCancelled() {
        return true;
    }
}
export class CancelablePromise {
    constructor(executor) {
        this._isResolved = false;
        this._isRejected = false;
        this._isCancelled = false;
        this._cancelHandlers = [];
        this._promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
            const onResolve = (value) => {
                var _a;
                if (this._isResolved || this._isRejected || this._isCancelled) {
                    return;
                }
                this._isResolved = true;
                (_a = this._resolve) === null || _a === void 0 ? void 0 : _a.call(this, value);
            };
            const onReject = (reason) => {
                var _a;
                if (this._isResolved || this._isRejected || this._isCancelled) {
                    return;
                }
                this._isRejected = true;
                (_a = this._reject) === null || _a === void 0 ? void 0 : _a.call(this, reason);
            };
            const onCancel = (cancelHandler) => {
                if (this._isResolved || this._isRejected || this._isCancelled) {
                    return;
                }
                this._cancelHandlers.push(cancelHandler);
            };
            Object.defineProperty(onCancel, 'isResolved', {
                get: () => this._isResolved,
            });
            Object.defineProperty(onCancel, 'isRejected', {
                get: () => this._isRejected,
            });
            Object.defineProperty(onCancel, 'isCancelled', {
                get: () => this._isCancelled,
            });
            return executor(onResolve, onReject, onCancel);
        });
    }
    then(onFulfilled, onRejected) {
        return this._promise.then(onFulfilled, onRejected);
    }
    catch(onRejected) {
        return this._promise.catch(onRejected);
    }
    finally(onFinally) {
        return this._promise.finally(onFinally);
    }
    cancel() {
        var _a;
        if (this._isResolved || this._isRejected || this._isCancelled) {
            return;
        }
        this._isCancelled = true;
        if (this._cancelHandlers.length) {
            try {
                for (const cancelHandler of this._cancelHandlers) {
                    cancelHandler();
                }
            }
            catch (error) {
                console.warn('Cancellation threw an error', error);
                return;
            }
        }
        this._cancelHandlers.length = 0;
        (_a = this._reject) === null || _a === void 0 ? void 0 : _a.call(this, new CancelError('Request aborted'));
    }
    get isCancelled() {
        return this._isCancelled;
    }
}
Symbol.toStringTag;
