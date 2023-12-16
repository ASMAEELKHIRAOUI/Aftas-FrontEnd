export class ResponseModel<T> {
    statusCode?: number;
    timestamp?: string
    data?: T;
    message?: string;
}