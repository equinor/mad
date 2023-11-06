import React from "react";
import { ErrorBoundary as MadErrorBoundary, ErrorBoundaryProps } from "@equinor/mad-components";
import { trackCustom } from "@equinor/mad-insights";

export const ErrorBoundary = (props: ErrorBoundaryProps) => (
    <MadErrorBoundary
        {...props}
        onError={(error, info) => {
            trackCustom(`${error.name} - ${error.message}`, { error, info });
            props.onError?.(error, info);
        }}
    />
);
