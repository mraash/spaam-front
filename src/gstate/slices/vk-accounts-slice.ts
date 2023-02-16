import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VkAccountApi } from '~/types/api-entity/VkAccountApi';

type VkAccountsState = {
    list: VkAccountApi[],
};

const initialState: VkAccountsState = {
    list: [
        {
            id: Math.random(),
            vid: Math.random(),
            slug: 'hihihi9',
            name: 'Hello',
        },
        {
            id: Math.random(),
            vid: Math.random(),
            slug: 'my-name',
            name: 'My name',
        },
    ],
};

const vkAccountsSlice = createSlice({
    name: 'vkAccounts',
    initialState,
    reducers: {
        remove(state, { payload }: PayloadAction<number>) {
            const index = state.list.findIndex((vkAccount) => vkAccount.id === payload);
            state.list.splice(index, 1);
        },
    },
});

export const vkAccountsReducer = vkAccountsSlice.reducer;
export const vkAccountsActions = vkAccountsSlice.actions;
