import { configureStore } from '@reduxjs/toolkit';
import { panelsReducer } from './slices/panels-slice';
import { vkAccountsReducer } from './slices/vk-accounts-slice';

export const store = configureStore({
    reducer: {
        panels: panelsReducer,
        vkAccounts: vkAccountsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
