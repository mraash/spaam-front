import { configureStore } from '@reduxjs/toolkit';
import { panelsReducer } from './slices/panelsSlice';
import { vkAccountsReducer } from './slices/vkAccountsSlice';

export const store = configureStore({
    reducer: {
        panels: panelsReducer,
        vkAccounts: vkAccountsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
