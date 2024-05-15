export const ToastTypes = {
    ERROR: "ERROR",
    SUCCESS: "SUCCESS",
    WARNING: "WARNING",
    INFO: "INFO",
} as const;

export type ToastType = (typeof ToastTypes)[keyof typeof ToastTypes];

export type AddToastOptions = { type: ToastType; text: string, duration?: number, onPress?: () => void };