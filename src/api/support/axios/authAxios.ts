import axios, { AxiosError, AxiosInstance } from 'axios';
import { apiConfig, apiConsts } from '~/api/config';
import { apiStatus } from '~/api/status';
import { resolveApiError } from '../resolvers';
import { authStorage } from '~/packages/auth';

export const authAxios = (() => {
    let tokenHeader: string|null;
    let axiosInstance: AxiosInstance;

    return (): AxiosInstance => {
        const currentTokenHeader = authStorage.getAuthHeader();

        // First instance
        if (!axiosInstance) {
            axiosInstance = createAuthAxios();
            tokenHeader = currentTokenHeader;
        }

        // Token was refeshed
        if (tokenHeader !== currentTokenHeader) {
            axiosInstance = createAuthAxios();
            tokenHeader = currentTokenHeader;
        }

        return axiosInstance;
    };
})();

const createAuthAxios = () => {
    const authHeader = authStorage.getAuthHeader();

    if (!authHeader) {
        throw new Error('Trying to use authAxios before authentication.');
    }

    const instance = axios.create({
        baseURL: `${apiConsts.domain}/${apiConfig.version}`,
        headers: {
            Authorization: authHeader,
        },
    });

    instance.interceptors.request.use(async (config) => {
        if (apiStatus.initialRefreshing) {
            await apiStatus.initialRefreshing;
        }

        return config;
    });

    instance.interceptors.response.use(null, (error: AxiosError) => {
        throw resolveApiError(error);
    });

    return instance;
};
