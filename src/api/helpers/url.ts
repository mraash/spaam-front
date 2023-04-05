import { apiConfig, apiConsts } from '../config';

export const url = (path: string): string => {
    return `${apiConsts.domain}/${apiConfig.version}${path}`;
};
