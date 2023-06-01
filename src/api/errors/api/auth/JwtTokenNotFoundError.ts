import { ApiError } from '../ApiError';

export class JwtTokenNotFoundError extends ApiError {
    public constructor() {
        super('Jwt token not found.');
    }
}
