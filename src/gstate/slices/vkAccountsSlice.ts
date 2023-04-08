import { createAsyncThunk, createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { api } from '~/api';
import { VkAccountApi } from '~/types/api-entities/VkAccountApi';

type VkAccountsState = {
    list: VkAccountApi[],
    creationLink?: string,
};

export const vkAccountsThunk = {
    getAll: createAsyncThunk<VkAccountApi[]>(
        'vkAccounts/async/getAll',
        async () => {
            try {
                const vkAccountList = await api.vkAccounts.getAll();

                return vkAccountList;
            }
            catch (err) {
                console.error(err);
                throw err;
            }
        },
    ),
    getCreationLink: createAsyncThunk<string>(
        'vkAccounts/async/getCreationLink',
        async () => {
            try {
                const link = await api.vkAccounts.getCreationLink();

                return link.link;
            }
            catch (err) {
                console.error(err);
                throw err;
            }
        },
    ),
    remove: createAsyncThunk<number, number>(
        'vkAccounts/async/remove',
        async (id) => {
            try {
                await api.vkAccounts.remove(id);

                return id;
            }
            catch (err) {
                console.error(err);
                throw err;
            }
        },
    ),
};

const vkAccountsSlice = createSlice<VkAccountsState, SliceCaseReducers<VkAccountsState>>({
    name: 'vkAccounts',
    initialState: {
        list: [],
    },
    reducers: {
        remove(state, { payload }: PayloadAction<number>) {
            const index = state.list.findIndex((vkAccount) => vkAccount.id === payload);
            state.list.splice(index, 1);
        },
    },
    extraReducers(builder) {
        builder.addCase(vkAccountsThunk.getAll.fulfilled, (state, { payload }) => {
            state.list = payload;
        });
        builder.addCase(vkAccountsThunk.getCreationLink.fulfilled, (state, { payload }) => {
            state.creationLink = payload;
        });
        builder.addCase(vkAccountsThunk.remove.fulfilled, (state, { payload }) => {
            const index = state.list.findIndex((item) => item.id === payload);
            state.list.splice(index, 1);
        });
    },
});

export const vkAccountsReducer = vkAccountsSlice.reducer;
export const vkAccountsActions = vkAccountsSlice.actions;