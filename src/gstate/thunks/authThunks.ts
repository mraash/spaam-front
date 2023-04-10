import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI } from '~/api';
import { UserEntity } from '~/types/entities/UserEntity';

const getUser = createAsyncThunk(
    'auth/async/getUser',
    async (): Promise<UserEntity> => {
        const me = await UserAPI.me();

        return me;
    },
);

const removeUser = createAsyncThunk(
    'auth/async/removeUser',
    async () => {
        // TODO: Delete refresh token
    },
);

export const authThunks = {
    getUser,
    removeUser,
};
