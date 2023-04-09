import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { VkAccountEntity } from '~/types/entities/VkAccountEntity';
import { vkAccountThunks } from '../thunks/vkAccountThunks';

type VkAccountState = {
    list: VkAccountEntity[],
    creationLink?: string,
};

const vkAccountSlice = createSlice<VkAccountState, SliceCaseReducers<VkAccountState>>({
    name: 'vkAccounts',
    initialState: {
        list: [],
    },
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(vkAccountThunks.getAll.fulfilled, (state, { payload }) => {
            state.list = payload;
        });

        builder.addCase(vkAccountThunks.getCreationLink.fulfilled, (state, { payload }) => {
            state.creationLink = payload;
        });

        builder.addCase(vkAccountThunks.remove.fulfilled, (state, { payload }) => {
            const index = state.list.findIndex((item) => item.id === payload);
            state.list.splice(index, 1);
        });
    },
});

export const vkAccountReducer = vkAccountSlice.reducer;
