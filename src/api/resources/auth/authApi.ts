import { AxiosError } from 'axios';
import { appAxios } from '~/api/helpers/axios';
import { AuthResposne } from './authResponses';
import { getError, getPayload } from '~/api/helpers/responses';
import { getDefaultApiError } from '~/api/helpers/errors';
import { ApiErrors } from '~/api';

export const login = async (email: string, password: string): Promise<AuthResposne> => {
    try {
        const response = await appAxios.post('/auth/login', { email, password });

        return getPayload(response) as AuthResposne;
    }
    catch (err) {
        if (!(err instanceof AxiosError)) throw err;

        const error = getError(err);

        if (error.message === 'Invalid credentials.') {
            throw new ApiErrors.InvalidCredentialsError();
        }
        else {
            throw getDefaultApiError(err);
        }
    }
};

export const register = async (email: string, password: string, passwordRepeat: string): Promise<AuthResposne> => {
    try {
        const response = await appAxios.post('/auth/register', { email, password, passwordRepeat });

        return getPayload(response) as AuthResposne;
    }
    catch (err) {
        if (!(err instanceof AxiosError)) throw err;

        const error = getError(err);

        if (error.message === 'User already exists.') {
            throw new ApiErrors.EmailIsTakenError();
        }
        else {
            throw getDefaultApiError(err);
        }
    }
};

export const refresh = async (refreshToken: string): Promise<AuthResposne> => {
    try {
        const response = await appAxios.post('/auth/refresh', { refreshToken });

        return getPayload(response) as AuthResposne;
    }
    catch (err) {
        if (!(err instanceof AxiosError)) throw err;

        const error = getError(err);

        if (error.message === 'Invalid refresh token.') {
            throw new ApiErrors.InvalidRefreshTokenError();
        }
        else {
            throw getDefaultApiError(err);
        }
    }
};
