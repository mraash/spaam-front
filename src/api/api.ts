import { authApi } from './resources/auth';
import { vkAccountApi } from './resources/vkAccount';

export const api = {
    auth: authApi,
    vkAccounts: vkAccountApi,
};
