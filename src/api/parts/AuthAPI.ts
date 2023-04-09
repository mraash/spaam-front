import { appAxios } from '../support/axios';
import { getPayload } from '../support/resolvers';
import { AuthData } from '../responses/authTypes';

export const login = async (email: string, password: string): Promise<AuthData> => {
    const response = await appAxios.post('/auth/login', { email, password });

    return getPayload(response);
};

export const register = async (email: string, password: string, passwordRepeat: string): Promise<AuthData> => {
    const response = await appAxios.post('/auth/register', { email, password, passwordRepeat });

    return getPayload(response);
};

export const refresh = async (refreshToken: string): Promise<AuthData> => {
    const response = await appAxios.post('/auth/refresh', { refreshToken });

    return getPayload(response);
};
