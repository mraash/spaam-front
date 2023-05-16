import { configureStore } from '@reduxjs/toolkit';
import { panelReducer } from './slices/panelSlice';
import { vkAccountReducer } from './slices/vkAccountSlice';
import { authReducer } from './slices/authSlice';
import { errorReducer } from './slices/errorsSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        panels: panelReducer,
        vkAccounts: vkAccountReducer,
        errors: errorReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        // todo: remove ignores here.
        serializableCheck: {
            ignoredActionPaths: ['payload'],
            ignoredPaths: ['panels.list', 'panels.serverList'],
        },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
