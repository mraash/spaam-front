import { ApiError } from '../ApiError';

export class JwtTokenExpired extends ApiError {
    public constructor() {
        super('Jwt token expired.');
    }
}
