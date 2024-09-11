import { StatusConfig } from "./types";

export const getStatusIconConfig = (status: string): StatusConfig | undefined => {
    switch (status) {
        case "STRT":
            return {
                icon: "circle-half-full",
                label: "Started",
                textColor: "textTertiary",
                iconColor: "textPrimary",
            };
        case "RDOP":
            return {
                icon: "circle",
                label: "Ready for operation",
                textColor: "textTertiary",
                iconColor: "textPrimary",
            };
    }
    return undefined;
};

export const getStatusIconsAndLabels = (
    activeStatusIds: string | undefined,
    requiredEndDate: string | null,
    currentDate: Date,
    hseCritical?: boolean,
    productionCritical?: boolean,
): StatusConfig[] => {
    const requiredEnd = requiredEndDate ? new Date(requiredEndDate) : null;
    const activeStatuses = activeStatusIds?.split(" ");

    const iconsAndLabels: StatusConfig[] = [];

    if (requiredEnd && currentDate > requiredEnd) {
        iconsAndLabels.push({
            icon: "alarm",
            label: "Required end overdue",
            textColor: "textTertiary",
            iconColor: "danger",
        });
    }

    if (hseCritical) {
        iconsAndLabels.push({
            icon: "alert-outline",
            label: "HSE critical",
            textColor: "textTertiary",
            iconColor: "danger",
        });
    }

    if (productionCritical) {
        iconsAndLabels.push({
            icon: "water-outline",
            label: "Production critical",
            textColor: "textTertiary",
            iconColor: "danger",
        });
    }

    if (!activeStatuses?.includes("STRT")) {
        iconsAndLabels.push({
            icon: "circle-outline",
            label: "Not started",
            textColor: "textTertiary",
            iconColor: "textPrimary",
        });
    }

    activeStatuses?.forEach(status => {
        const statusConfig = getStatusIconConfig(status);
        if (statusConfig) {
            iconsAndLabels.push(statusConfig);
        }
    });

    return iconsAndLabels;
};

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    // DD.MM.YYYY
    return date.toLocaleDateString("en-GB").replace(/\//g, ".");
};
