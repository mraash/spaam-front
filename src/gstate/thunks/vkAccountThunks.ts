import { createAsyncThunk } from '@reduxjs/toolkit';
import { VkAccountsAPI } from '~/api';
import { VkAccountEntity } from '~/types/entities/VkAccountEntity';

const getAll = createAsyncThunk<VkAccountEntity[]>(
    'vkAccounts/async/getAll',
    async () => {
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

const getCreationLink = createAsyncThunk<string>(
    'vkAccounts/async/getCreationLink',
    async () => {
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

const remove = createAsyncThunk<number, number>(
    'vkAccounts/async/remove',
    async (id) => {
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
    getAll,
    getCreationLink,
    remove,
};
