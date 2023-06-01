import { ApiError } from '../ApiError';

export class EmailIsTakenError extends ApiError {
    public constructor() {
        super('Email is taken.');
        Object.setPrototypeOf(this, EmailIsTakenError.prototype);
    }
}
