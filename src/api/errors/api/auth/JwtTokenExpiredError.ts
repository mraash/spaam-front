import { ApiError } from '../ApiError';

export class JwtTokenExpiredError extends ApiError {
    public constructor() {
        super('Jwt token expired.');
    }
}
