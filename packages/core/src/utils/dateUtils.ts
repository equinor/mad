export function getShortDate(date: Date) {
    const day = date.toLocaleString(undefined, { day: "2-digit" });
    const month = date.toLocaleString(undefined, { month: "short" });
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
}
