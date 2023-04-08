import { ApiError } from '../base/ApiError';

export class JwtTokenNotFound extends ApiError {
    public constructor() {
        super('Jwt token not found.');
    }
}
