import { createAsyncThunk } from '@reduxjs/toolkit';
import { VkAccountsAPI } from '~/api';
import { BaseApiError } from '~/api/errors';
import { VkAccountEntity } from '~/types/entities/VkAccountEntity';

const fetchAll = createAsyncThunk<VkAccountEntity[], undefined, { rejectValue: BaseApiError }>(
    'vkAccounts/async/getAll',
    async (_, { rejectWithValue }) => {
        try {
            const vkAccountList = await VkAccountsAPI.getAll();

            return vkAccountList;
        }
        catch (err) {
            return rejectWithValue(err as BaseApiError);
        }
    },
);

const getCreationLink = createAsyncThunk<string, undefined, { rejectValue: BaseApiError }>(
    'vkAccounts/async/getCreationLink',
    async (_, { rejectWithValue }) => {
        try {
            const link = await VkAccountsAPI.getCreationLink();

            return link.link;
        }
        catch (err) {
            return rejectWithValue(err as BaseApiError);
        }
    },
);

const remove = createAsyncThunk<number, number, { rejectValue: BaseApiError }>(
    'vkAccounts/async/remove',
    async (id, { rejectWithValue }) => {
        try {
            await VkAccountsAPI.remove(id);

            return id;
        }
        catch (err) {
            return rejectWithValue(err as BaseApiError);
        }
    },
);

export const vkAccountThunks = {
    fetchAll,
    getCreationLink,
    remove,
};
