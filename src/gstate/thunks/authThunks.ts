import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI } from '~/api';
import { BaseApiError } from '~/api/errors';
import { UserEntity } from '~/types/entities/UserEntity';

const getUser = createAsyncThunk<UserEntity, undefined, { rejectValue: BaseApiError }>(
    'auth/async/getUser',
    async (_, { rejectWithValue }) => {
        try {
            const me = await UserAPI.me();

            return me;
        }
        catch (err) {
            return rejectWithValue(err as BaseApiError);
        }
    },
);

const removeUser = createAsyncThunk(
    'auth/async/removeUser',
    async () => {
        // todo: delete refresh token
    },
);

export const authThunks = {
    getUser,
    removeUser,
};
