import axios, { AxiosError, AxiosInstance } from 'axios';
import { apiConfig, apiConsts } from '~/api/config';
import { apiStatus } from '~/api/status';
import { getHeader } from '~/support/auth/cookies';
import { resolveApiError } from '../resolvers';

let axiosInstance: AxiosInstance;

export const authAxios = (): AxiosInstance => {
    if (!axiosInstance) {
        axiosInstance = createAuthAxios();
    }

    return axiosInstance;
};

const createAuthAxios = () => {
    const authHeader = getHeader();

    if (!authHeader) {
        throw new Error('Trying to use authAxios before authentication.');
    }

    const instance = axios.create({
        baseURL: `${apiConsts.domain}/${apiConfig.version}`,
        headers: {
            Authorization: getHeader(),
        },
    });

    instance.interceptors.request.use(async (config) => {
        if (apiStatus.initialRefreshing) {
            console.log('axios: waiting refresh');

            await apiStatus.initialRefreshing;
        }

        console.log('axios: request');

        return config;
    });

    instance.interceptors.response.use(null, (error: AxiosError) => {
        throw resolveApiError(error);
    });

    return instance;
};
