import { AxiosError } from 'axios';
import { getError } from './helpers/responses';

// base
export class ApiError extends Error {
    public constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, ApiError.prototype);
    }
}

export class UnknownApiError extends ApiError {
    public readonly axiosError: AxiosError;

    public constructor(axiosError: AxiosError) {
        const errorData = getError(axiosError);
        super(errorData.message);
        Object.setPrototypeOf(this, UnknownApiError.prototype);

        this.axiosError = axiosError;
    }
}

// auth
export class EmailIsTakenError extends ApiError {
    public constructor() {
        super('Email is taken.');
        Object.setPrototypeOf(this, EmailIsTakenError.prototype);
    }
}

export class InvalidCredentialsError extends ApiError {
    public constructor() {
        super('Invalid credentials.');
        Object.setPrototypeOf(this, InvalidCredentialsError.prototype);
    }
}

export class JwtTokenNotFoundError extends ApiError {
    public constructor() {
        super('Jwt token not found.');
        Object.setPrototypeOf(this, JwtTokenNotFoundError.prototype);
    }
}

export class InvalidRefreshTokenError extends ApiError {
    public constructor() {
        super('Invalid refresh token.');
        Object.setPrototypeOf(this, InvalidRefreshTokenError.prototype);
    }
}
