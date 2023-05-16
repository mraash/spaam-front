export class BaseApiError extends Error {
    public constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, BaseApiError);
    }
}
