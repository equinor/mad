import React from "react";
import {
    FallbackProps,
    ErrorBoundary as ReactErrorBoundary,
    ErrorBoundaryProps as ReactErrorBoundaryProps,
} from "react-error-boundary";
import { ErrorBoundaryScreen } from "./ErrorBoundaryScreen";

export type ErrorBoundaryProps = Pick<ReactErrorBoundaryProps, "onError" | "children">;
export function ErrorBoundary({ children, onError }: ErrorBoundaryProps) {
    const fallbackRender = ({ error, resetErrorBoundary }: FallbackProps) => (
        <ErrorBoundaryScreen error={error} resetErrorBoundary={resetErrorBoundary} />
    );
    return (
        <ReactErrorBoundary onError={onError} fallbackRender={fallbackRender}>
            {children}
        </ReactErrorBoundary>
    );
}
