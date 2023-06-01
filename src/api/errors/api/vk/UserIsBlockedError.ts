import { ApiError } from '../ApiError';

export class UserIsBlockedError extends ApiError {
    public constructor() {
        super('User is blocked.');
        Object.setPrototypeOf(this, UserIsBlockedError.prototype);
    }
}
