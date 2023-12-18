export type ServiceMessage = {
    status: boolean;
    serviceName: string;
    alertName: string;
    message: string;
    urlString: string | null;
    fromDate: string | null;
    toDate: string | null;
};
