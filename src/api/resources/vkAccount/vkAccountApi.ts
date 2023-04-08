import { AxiosError } from 'axios';
import { getDefaultApiError } from '~/api/helpers/errors';
import { getPayload } from '~/api/helpers/responses';
import { authAxios } from '~/api/helpers/axios';
import { VkAccountApi } from '~/types/api-entities/VkAccountApi';
import { CreationLink } from './vkAccountResponses';

export const getAll = async (): Promise<VkAccountApi[]> => {
    try {
        const response = await authAxios().get('/vk-accounts');

        return getPayload(response) as VkAccountApi[];
    }
    catch (err) {
        if (!(err instanceof AxiosError)) throw err;

        throw getDefaultApiError(err);
    }
};

export const getCreationLink = async (): Promise<CreationLink> => {
    try {
        const response = await authAxios().get('/vk-accounts/link');

        return getPayload(response) as CreationLink;
    }
    catch (err) {
        if (!(err instanceof AxiosError)) throw err;

        throw getDefaultApiError(err);
    }
};

export const remove = async (id: number) => {
    try {
        const response = await authAxios().delete(`/vk-accounts/${id}`);

        return getPayload(response) as VkAccountApi[];
    }
    catch (err) {
        if (!(err instanceof AxiosError)) throw err;

        throw getDefaultApiError(err);
    }
};
