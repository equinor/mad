import { DateTime } from "luxon";

// Date => 'Weekday Month DD, YYYY, HH:MM'
export function getDateString(date: DateTime | null, includeTime: boolean) {
    if (!date) return "";
    return date.toFormat(`cccc LLLL dd, yyyy${includeTime ? ", HH:mm" : ""}`);
}

export function getDateFromIsoString(dateString: string) {
    const date = DateTime.fromISO(dateString);
    if (date.isValid) return date;
    return null;
}

export function getShortDate(date: DateTime) {
    if (date.isValid) return date.toFormat("MMM dd, yyyy");
    console.error("Error: Date invalid");
    return null;
}
