import { ApiError } from '../ApiError';

export class JwtTokenNotFound extends ApiError {
    public constructor() {
        super('Jwt token not found.');
    }
}
