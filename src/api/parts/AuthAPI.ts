import { appAxios } from '~/api/support/axios';
import { AuthResposne } from '../responses/AuthResponses';
import { getPayload } from '~/api/support/resolvers';

export const login = async (email: string, password: string): Promise<AuthResposne> => {
    const response = await appAxios.post('/auth/login', { email, password });

    return getPayload(response);
};

export const register = async (email: string, password: string, passwordRepeat: string): Promise<AuthResposne> => {
    const response = await appAxios.post('/auth/register', { email, password, passwordRepeat });

    return getPayload(response);
};

export const refresh = async (refreshToken: string): Promise<AuthResposne> => {
    const response = await appAxios.post('/auth/refresh', { refreshToken });

    return getPayload(response);
};
