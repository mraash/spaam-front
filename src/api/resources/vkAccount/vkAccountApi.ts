import axios, { AxiosError } from 'axios';
import { getHeader } from '~/api/helpers/auth';
import { getDefaultApiError } from '~/api/helpers/errors';
import { getPayload } from '~/api/helpers/responses';
import { url } from '~/api/helpers/url';
import { VkAccountApi } from '~/types/api-entities/VkAccountApi';
import { CreationLink } from './vkAccountResponses';

export const getAll = async (): Promise<VkAccountApi[]> => {
    try {
        const response = await axios.get(url('/vk-accounts'), {
            headers: {
                Authorization: getHeader(),
            },
        });

        return getPayload(response) as VkAccountApi[];
    }
    catch (err) {
        if (!(err instanceof AxiosError)) throw err;

        throw getDefaultApiError(err);
    }
};

export const getCreationLink = async (): Promise<CreationLink> => {
    try {
        const response = await axios.get(url('/vk-accounts/link'), {
            headers: {
                Authorization: getHeader(),
            },
        });

        return getPayload(response) as CreationLink;
    }
    catch (err) {
        if (!(err instanceof AxiosError)) throw err;

        throw getDefaultApiError(err);
    }
};

export const remove = async (id: number) => {
    try {
        const response = await axios.delete(url(`/vk-accounts/${id}`), {
            headers: {
                Authorization: getHeader(),
            },
        });

        return getPayload(response) as VkAccountApi[];
    }
    catch (err) {
        if (!(err instanceof AxiosError)) throw err;

        throw getDefaultApiError(err);
    }
};
