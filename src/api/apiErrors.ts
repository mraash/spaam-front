import { AxiosError } from 'axios';

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
        super();
        Object.setPrototypeOf(this, UnknownApiError.prototype);

        this.axiosError = axiosError;
    }
}

// auth
export class EmailIsTakenError extends ApiError {
    public constructor() {
        super();
        Object.setPrototypeOf(this, EmailIsTakenError.prototype);
    }
}

export class InvalidCredentialsError extends ApiError {
    public constructor() {
        super();
        Object.setPrototypeOf(this, InvalidCredentialsError.prototype);
    }
}

export class InvalidRefreshTokenError extends ApiError {
    public constructor() {
        super();
        Object.setPrototypeOf(this, InvalidRefreshTokenError.prototype);
    }
}
