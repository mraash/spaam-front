import axios from 'axios';
import { apiConfig, apiConsts } from '~/api/config';

export const appAxios = axios.create({
    baseURL: `${apiConsts.domain}/${apiConfig.version}`,
});
