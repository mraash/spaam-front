import { AnyAction, createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { authThunks } from '../thunks/authThunks';
import { BaseApiError } from '~/api/errors';

type AuthState = {
    user?: {
        id: number,
        email: string,
    },
};

export const authSlice = createSlice<AuthState, SliceCaseReducers<AuthState>>({
    name: 'auth',
    initialState: {},
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(authThunks.getUser.fulfilled, (state, { payload: user }) => {
            state.user = user;
        });

        builder.addCase(authThunks.removeUser.fulfilled, (state) => {
            delete state.user;
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

export const authReducer = authSlice.reducer;
