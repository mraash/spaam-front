import { BaseApiError } from '../BaseApiError';

export class ApiError extends BaseApiError {
    public constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, ApiError);
    }
}
