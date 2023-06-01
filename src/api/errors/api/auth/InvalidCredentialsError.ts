import { ApiError } from '../ApiError';

export class InvalidCredentialsError extends ApiError {
    public constructor() {
        super('Invalid credentials.');
        Object.setPrototypeOf(this, InvalidCredentialsError.prototype);
    }
}
