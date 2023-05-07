import { createAsyncThunk } from '@reduxjs/toolkit';
import { VkAccountsAPI } from '~/api';
import { VkAccountEntity } from '~/types/entities/VkAccountEntity';

const fetchAll = createAsyncThunk(
    'vkAccounts/async/getAll',
    async (): Promise<VkAccountEntity[]> => {
        try {
            const vkAccountList = await VkAccountsAPI.getAll();

            return vkAccountList;
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    },
);

const getCreationLink = createAsyncThunk(
    'vkAccounts/async/getCreationLink',
    async (): Promise<string> => {
        try {
            const link = await VkAccountsAPI.getCreationLink();

            return link.link;
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    },
);

const remove = createAsyncThunk(
    'vkAccounts/async/remove',
    async (id: number): Promise<number> => {
        try {
            await VkAccountsAPI.remove(id);

            return id;
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    },
);

export const vkAccountThunks = {
    fetchAll,
    getCreationLink,
    remove,
};
