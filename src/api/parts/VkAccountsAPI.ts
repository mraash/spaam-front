import { getPayload } from '../support/resolvers';
import { authAxios } from '../support/axios';
import { VkAccountInfo } from '../infos/VkAccountInfo';
import { CreationLink } from '../responses/vkAccountTypes';
import { ResourceDeleted } from '../responses/generalTypes';

export const getAll = async (): Promise<VkAccountInfo[]> => {
    const response = await authAxios().get('/vk-accounts');

    return getPayload(response);
};

export const getCreationLink = async (): Promise<CreationLink> => {
    const response = await authAxios().get('/vk-accounts/link');

    return getPayload(response);
};

export const remove = async (id: number): Promise<ResourceDeleted> => {
    const response = await authAxios().delete(`/vk-accounts/${id}`);

    return getPayload(response);
};
