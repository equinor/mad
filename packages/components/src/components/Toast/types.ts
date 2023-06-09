export type Toast = {
    type: ToastType,
    message: string
}

export type ToastType = "WARNING" | "ERROR" | "SUCCESS" | "INFO"

export type Listener = () => void;