import { configureStore } from '@reduxjs/toolkit';
import { panelsReducer } from './slices/panelsSlice';

export const store = configureStore({
    reducer: {
        panels: panelsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
