import axios, { AxiosError } from 'axios';
import { apiConfig, apiConsts } from '~/api/config';
import { resolveApiError } from '../resolvers';

export const appAxios = axios.create({
    baseURL: `${apiConsts.domain}/${apiConfig.version}`,
});

appAxios.interceptors.response.use(null, (error: AxiosError) => {
    throw resolveApiError(error);
});
