import { ApiError } from '../ApiError';

export class InvalidRefreshTokenError extends ApiError {
    public constructor() {
        super('Invalid refresh token.');
        Object.setPrototypeOf(this, InvalidRefreshTokenError.prototype);
    }
}
