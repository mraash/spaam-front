import { UserInfo } from '../infos/UserInfo';
import { authAxios } from '../support/axios';
import { getPayload } from '../support/resolvers';

export const me = async (): Promise<UserInfo> => {
    const response = await authAxios().get('/users/me');

    return getPayload(response);
};
