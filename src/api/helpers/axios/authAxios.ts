import axios, { AxiosInstance } from 'axios';
import { apiConfig, apiConsts } from '~/api/config';
import { apiStatus } from '~/api/status';
import { getHeader } from '~/support/auth/cookies';

let axiosInstance: AxiosInstance;

export const authAxios = (): AxiosInstance => {
    if (!axiosInstance) {
        axiosInstance = createAuthAxios();
    }

    return axiosInstance;
};

function createAuthAxios() {
    const authHeader = getHeader();

    if (!authHeader) {
        throw new Error('Trying to use authAxios before authentication.');
    }

    return axios.create({
        baseURL: `${apiConsts.domain}/${apiConfig.version}`,
        headers: {
            Authorization: getHeader(),
        },
        transformRequest: async (data) => {
            if (apiStatus.initialRefreshing) {
                console.log('axios: waiting refresh');

                await apiStatus.initialRefreshing;
            }

            console.log('axios request');

            return data;
        },
    });
}
