export class ApiError extends Error {
    public constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, ApiError);
    }
}
