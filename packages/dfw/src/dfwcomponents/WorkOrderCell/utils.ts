import { StatusConfig } from "./types";

const getStatusIconConfig = (status: string, isBookmarked?: boolean): StatusConfig | undefined => {
    const statusMap: Record<string, StatusConfig> = {
        bookmarked: {
            icon: isBookmarked ? "bookmark" : "bookmark-outline",
            label: "Bookmarked",
            textColor: "textTertiary",
            iconColor: "primary",
        },
        notStarted: {
            icon: "circle-outline",
            label: "Not started",
            textColor: "textTertiary",
            iconColor: "textPrimary",
        },
        started: {
            icon: "circle-half-full",
            label: "Started",
            textColor: "textTertiary",
            iconColor: "textPrimary",
        },
        finished: {
            icon: "check-circle",
            label: "Finished",
            textColor: "textTertiary",
            iconColor: "textPrimary",
        },
        requiredEndOverdue: {
            icon: "alarm",
            label: "Required end overdue",
            textColor: "textTertiary",
            iconColor: "danger",
        },
        hseCritical: {
            icon: "alert-outline",
            label: "HSE critical",
            textColor: "textTertiary",
            iconColor: "danger",
        },
        productionCritical: {
            icon: "water-outline",
            label: "Production critical",
            textColor: "textTertiary",
            iconColor: "danger",
        },
    };

    return statusMap[status];
};

export const getStatusIconsAndLabels = (
    activeStatusIds?: string,
    requiredEndDate?: string,
    hseCritical?: boolean,
    productionCritical?: boolean,
    isBookmarked?: boolean,
): StatusConfig[] => {
    const today = new Date();
    const iconsAndLabels: StatusConfig[] = [];
    const activeStatuses = activeStatusIds?.split(" ") ?? [];

    if (requiredEndDate && today > new Date(requiredEndDate)) {
        iconsAndLabels.push(getStatusIconConfig("requiredEndOverdue")!);
    }

    if (hseCritical) {
        iconsAndLabels.push(getStatusIconConfig("hseCritical")!);
    }
    if (productionCritical) {
        iconsAndLabels.push(getStatusIconConfig("productionCritical")!);
    }

    if (activeStatuses.includes("RDOP") || activeStatuses.includes("TECO")) {
        iconsAndLabels.push(getStatusIconConfig("finished")!);
    } else if (activeStatuses.includes("STRT")) {
        iconsAndLabels.push(getStatusIconConfig("started")!);
    } else {
        iconsAndLabels.push(getStatusIconConfig("notStarted")!);
    }

    if (isBookmarked !== undefined) {
        iconsAndLabels.push(getStatusIconConfig("bookmarked", isBookmarked)!);
    }
    return iconsAndLabels;
};

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    // DD.MM.YYYY
    return date.toLocaleDateString("en-GB").replace(/\//g, ".");
};
