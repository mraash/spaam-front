import { ApiError } from '../base/ApiError';

export class InvalidRefreshToken extends ApiError {
    public constructor() {
        super('Invalid refresh token.');
        Object.setPrototypeOf(this, InvalidRefreshToken.prototype);
    }
}
