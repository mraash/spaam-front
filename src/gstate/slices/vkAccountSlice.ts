import { AnyAction, createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { VkAccountEntity } from '~/types/entities/VkAccountEntity';
import { vkAccountThunks } from '../thunks/vkAccountThunks';
import { BaseApiError } from '~/api/errors';

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
        builder.addCase(vkAccountThunks.fetchAll.fulfilled, (state, { payload: vkAccountList }) => {
            state.list = vkAccountList;
        });

        builder.addCase(vkAccountThunks.getCreationLink.fulfilled, (state, { payload: link }) => {
            state.creationLink = link;
        });

        builder.addCase(vkAccountThunks.remove.fulfilled, (state, { payload: id }) => {
            const index = state.list.findIndex((item) => item.id === id);
            state.list.splice(index, 1);
        });

        builder.addMatcher(isRejected, (state, { payload: err }: PayloadAction<BaseApiError>) => {
            // todo: show some error
            console.log('---', err);
        });
    },
});

function isRejected(action: AnyAction): boolean {
    return action.type.endsWith('rejected');
}

export const vkAccountReducer = vkAccountSlice.reducer;
