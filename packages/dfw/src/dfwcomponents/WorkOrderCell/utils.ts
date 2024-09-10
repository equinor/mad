import moment from "moment";
import { StatusConfig } from "./types";

export const getStatusIconConfig = (status: string): StatusConfig | undefined => {
    switch (status) {
        case "RDEX":
            return {
                icon: "circle-outline",
                label: "Ready for execution",
                textColor: "textTertiary",
                iconColor: "textPrimary",
            };
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
    currentDate: moment.Moment,
    hseCritical?: boolean,
    productionCritical?: boolean,
): StatusConfig[] => {
    const requiredEnd = requiredEndDate ? moment(requiredEndDate) : null;
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

    activeStatuses?.forEach(status => {
        const statusConfig = getStatusIconConfig(status);
        if (statusConfig) {
            iconsAndLabels.push(statusConfig);
        }
    });

    return iconsAndLabels;
};
