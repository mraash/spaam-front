import { ApiError } from '../ApiError';

export class InvalidCredentials extends ApiError {
    public constructor() {
        super('Invalid credentials.');
        Object.setPrototypeOf(this, InvalidCredentials.prototype);
    }
}
