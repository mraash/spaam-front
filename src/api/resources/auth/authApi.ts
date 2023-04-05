import axios, { AxiosError } from 'axios';
import { AuthResposne } from './authResponses';
import { getError, getPayload } from '~/api/helpers/responses';
import { url } from '~/api/helpers/url';
import { getDefaultApiError } from '~/api/helpers/errors';
import { EmailIsTakenError, InvalidCredentialsError, InvalidRefreshTokenError } from '~/api';

export const login = async (email: string, password: string): Promise<AuthResposne> => {
    try {
        const response = await axios.post(url('/auth/login'), { email, password });

        return { ...getPayload(response) };
    }
    catch (err) {
        if (!(err instanceof AxiosError)) throw err;

        const error = getError(err);

        if (error.message === 'Invalid credentials.') {
            throw new InvalidCredentialsError();
        }
        else {
            throw getDefaultApiError(err);
        }
    }
};

export const register = async (email: string, password: string, passwordRepeat: string): Promise<AuthResposne> => {
    try {
        const response = await axios.post(url('/auth/register'), { email, password, passwordRepeat });

        return { ...getPayload(response) };
    }
    catch (err) {
        if (!(err instanceof AxiosError)) throw err;

        const error = getError(err);

        if (error.message === 'User already exists.') {
            throw new EmailIsTakenError();
        }
        else {
            throw getDefaultApiError(err);
        }
    }
};

export const refresh = async (refreshToken: string): Promise<AuthResposne> => {
    try {
        const response = await axios.post(url('/auth/refresh'), { refreshToken });

        return { ...getPayload(response) };
    }
    catch (err) {
        if (!(err instanceof AxiosError)) throw err;

        const error = getError(err);

        if (error.message === 'Invalid refresh token.') {
            throw new InvalidRefreshTokenError();
        }
        else {
            throw getDefaultApiError(err);
        }
    }
};
