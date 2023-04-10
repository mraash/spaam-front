import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { authThunks } from '../thunks/authThunks';

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
    },
});

export const authReducer = authSlice.reducer;
