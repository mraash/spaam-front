import { configureStore } from '@reduxjs/toolkit';
import { panelReducer } from './slices/panelSlice';
import { vkAccountReducer } from './slices/vkAccountSlice';

export const store = configureStore({
    reducer: {
        panels: panelReducer,
        vkAccounts: vkAccountReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
