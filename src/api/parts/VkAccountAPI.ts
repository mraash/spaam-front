import { AxiosError } from 'axios';
import { resolveApiError, getPayload } from '~/api/support/resolvers';
import { authAxios } from '~/api/support/axios';
import { VkAccountApi } from '~/types/api-entities/VkAccountApi';
import { CreationLink } from '../responses/VkAccountResponses';

export const getAll = async (): Promise<VkAccountApi[]> => {
    try {
        const response = await authAxios().get('/vk-accounts');

        return getPayload(response) as VkAccountApi[];
    }
    catch (err) {
        if (!(err instanceof AxiosError)) throw err;

        throw resolveApiError(err);
    }
};

export const getCreationLink = async (): Promise<CreationLink> => {
    try {
        const response = await authAxios().get('/vk-accounts/link');

        return getPayload(response) as CreationLink;
    }
    catch (err) {
        if (!(err instanceof AxiosError)) throw err;

        throw resolveApiError(err);
    }
};

export const remove = async (id: number) => {
    try {
        const response = await authAxios().delete(`/vk-accounts/${id}`);

        return getPayload(response) as VkAccountApi[];
    }
    catch (err) {
        if (!(err instanceof AxiosError)) throw err;

        throw resolveApiError(err);
    }
};
